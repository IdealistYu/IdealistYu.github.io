// Fail the build when a post is missing title/date in front-matter, or when a post or
// page references a local image that doesn't exist. Runs before every generate, so a
// broken post never reaches the live site (CI exits non-zero and GitHub emails you).
const { existsSync } = require('fs');
const { join, dirname } = require('path');

const IMAGE_REFS = [/!\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g, /<img\b[^>]*\bsrc=["']([^"']+)["']/gi];

function frontMatter(raw) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
  return m ? m[1] : '';
}

function localImages(raw) {
  const body = raw.replace(/^---[\s\S]*?\n---/, '').replace(/```[\s\S]*?```/g, '');
  const refs = [];
  for (const re of IMAGE_REFS) {
    for (const [, url] of body.matchAll(re)) {
      if (!/^([a-z]+:|\/\/|#)/i.test(url) && !url.includes('{{')) refs.push(url.split(/[?#]/)[0]);
    }
  }
  return refs;
}

hexo.extend.filter.register('before_generate', () => {
  const { source_dir } = hexo;
  const errors = [];

  const check = (doc, isPost) => {
    const file = doc.source;
    if (isPost) {
      const fm = frontMatter(doc.raw);
      if (!/^title:\s*\S/m.test(fm)) errors.push(`${file}: front-matter 缺少 title`);
      if (!/^date:\s*\S/m.test(fm)) errors.push(`${file}: front-matter 缺少 date（如 date: 2026-10-06 20:00:00）`);
    }
    const linkAvatars = (Array.isArray(doc.links) ? doc.links : [])
      .map(l => l && l.avatar).filter(a => a && !/^([a-z]+:|\/\/)/i.test(a));
    for (const url of [...localImages(doc.raw), ...linkAvatars]) {
      const rel = decodeURIComponent(url);
      const assetDir = isPost ? file.replace(/\.[^/.]+$/, '') : dirname(file);
      const target = rel.startsWith('/') ? join(source_dir, rel) : join(source_dir, assetDir, rel);
      if (!existsSync(target)) errors.push(`${file}: 图片不存在 ${url}`);
    }
  };

  hexo.locals.get('posts').forEach(post => check(post, true));
  hexo.locals.get('pages').forEach(page => check(page, false));

  if (errors.length) {
    throw new Error(`文章检查未通过：\n  - ${errors.join('\n  - ')}`);
  }
});
