// hexo-renderer-marked's `figcaption` wraps a standalone image as <p><figure>…</figure></p>,
// which is invalid HTML (browsers split it into empty paragraphs). Drop the outer <p>.
hexo.extend.filter.register('after_post_render', data => {
  data.content = data.content.replace(/<p>\s*(<figure>[\s\S]*?<\/figure>)\s*<\/p>/g, '$1');
  return data;
});
