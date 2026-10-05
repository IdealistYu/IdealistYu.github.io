---
title: Links
date: 2025-08-20 04:29:54
# 友链列表：新增一位朋友只要在这里加一项（字段和下面的交换格式一致，avatar 可以是本目录的图片或完整网址）
links:
  - name: 随思南游
    url: https://www.ssnur.com/
    avatar: 1.jpg
    descr: 生如夏花之绚烂，死如秋叶之静
  - name: 肥猪qwq
    url: https://blog.feizhuqwq.com
    avatar: 2.jpg
    descr: 因为不可能，所以才值得相信。
  - name: 二次元论坛
    url: https://www.ecylt.top/
    avatar: 3.jpg
    descr: 按下F逃离世界
  - name: 绯鞠的博客
    url: https://loli.fj.cn
    avatar: 4.gif
    descr: 一只爱折腾的绯鞠
  - name: 沉舟侧畔Blog
    url: https://springwood.me
    avatar: 5.jpg
    descr: 新生的力量，生机勃勃
  - name: tinsir888's blog
    url: https://tinsir888.github.io
    avatar: 6.jpg
    descr: Ηλύσια Πεδία ;-)
---

<style>
.friends {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
.post-body .friends a.friend {
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1rem;
  align-items: center;
  padding: .8rem 1rem;
  border: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-radius: 10px;
  color: inherit;
  text-decoration: none;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
}
.post-body .friends a.friend:hover {
  transform: translateY(-3px);
  border-color: transparent;
  box-shadow: 0 6px 16px rgba(0, 0, 0, .08);
}
.post-body .friends .friend-avatar {
  grid-row: span 2;
  width: 3rem;
  height: 3rem;
  margin: 0;
  border-radius: 10px;
  object-fit: cover;
}
.friends .friend-name,
.friends .friend-descr {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.friends .friend-name {
  font-weight: 600;
}
.friends .friend-descr {
  color: #999;
  font-size: .85em;
}
</style>

<div class="friends">
{% for f in links %}
<a class="friend" href="{{ f.url }}" title="{{ f.name }} — {{ f.descr }}"><img class="friend-avatar" src="{{ f.avatar }}" alt="{{ f.name }}" width="48" height="48" loading="lazy"><span class="friend-name">{{ f.name }}</span><span class="friend-descr">{{ f.descr }}</span></a>
{% endfor %}
</div>

---

## 交换友链

欢迎交换友链！按下面的格式在评论区留下贵站信息，我会尽快加上：

```yaml
- name: Yu's Site
  url: https://blog.loveyou.moe/
  avatar: https://idealistyu.github.io/images/avatar.jpg
  descr: ゆちゃんのブログ
```
