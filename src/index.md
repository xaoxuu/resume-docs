---
# Language (Optional)
lang: en
# Site Keywords & Description
keywords: Resume,Hexo,Resume Theme
description: This is a cool resume theme for hexo.
# Resume Title
resume_title: Jon Snow's Resume
# Job Applicant Name
name: Jon Snow
avatar: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png
# Contact
contact:
  # URL
  - icon: fas fa-globe-europe
    text: https://resume.js.org
    url: https://resume.js.org
  # Email
  - icon: fas fa-envelope
    text: your email
    url:
  # Phone Number
  - icon: fas fa-phone-alt
    text: 1xxxxxxxxxx
    url: tel:10086
# PDF Download Link
download:
  title: Download
  icon: fas fa-download fa-fw
  url: https://github.com/xaoxuu/resume-docs
---

{% raw %}
<center>
<a href='/'>English</a> | <a href='/zh-cn/'>简体中文</a>
</center>
{% endraw %}


## <i class="fas fa-flag"></i> Getting Started

Please directly download the source code of this site and refer to the source code for rewriting.

- Site Source code: https://github.com/xaoxuu/resume-docs
- Theme source code: https://github.com/xaoxuu/hexo-theme-resume


## <i class="fas fa-user-graduate"></i> Education

**XX University X College X Course X Major X Graduation**


## <i class="fas fa-user-tie"></i> Work Experience


#### 2000 ~ Present: Company XX

- Mainly responsible for XXX

#### 1900 ~ 2000: Company XX

- Mainly responsible for XXX

#### 1800 ~ 1900: company XX

- Mainly responsible for XXX



## <i class="fas fa-award"></i> Featured Projects


{% raw %}
<btns rounded>
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/heartmate/icon.png'>
  心率管家
</a>
<a href='https://apps.apple.com/cn/app/c%E5%85%BB%E8%80%81/id1458315594'>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/het-cyanglao/icon.png'>
  C养老
</a>
<a href='https://apps.apple.com/cn/app/c-life%E5%85%BB%E8%80%81/id1393937890'>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/het-clife/icon.png'>
  C-Life养老
</a>
<a href='https://apps.apple.com/cn/app/linksmart/id1109303355'>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/ht-linksmart/icon.png'>
  LinkSmart
</a>
<a href='https://apps.apple.com/cn/app/hitfit/id1207738581'>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/ht-hitfit/icon.png'>
  HitFit
</a>
<a href='https://apps.apple.com/cn/app/%E8%85%95%E8%83%BD%E5%8A%A9%E6%89%8B/id1138242219'>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/ht-fiyta/icon.png'>
  飞亚达腕能助手
</a>
</btns><br>
{% endraw %}


### Project A

#### 2000/01 ~ 2019/01: Developed by XX company, team project, maintenance so far

啦啦啦

### Project B

#### 1900/01 ~ 2000/01: Developed by XX company

啦啦啦

### Project C

#### 1800/01 ~ 1900/01: Developed by XX company

啦啦啦

## <i class="fab fa-github"></i> Open Source Contributions


### Volantis

#### 2017 ~ Present, a wonderful blog theme for Hexo 4.2

- 完全自由的模块化、易于定制化设计
- 移动端优化
- 源码：https://github.com/xaoxuu/hexo-theme-volantis
- 官网：https://volantis.js.org/

### ProHUD

#### 2019/08 ~ present, HUD library with easy customization and simple interface

- 使用Swift5编写。
- 包含顶部通知横幅、弹窗、底部操作表三种使用场景的UI控件。
- 易于配置UI从而满足公司各业务线的UI要求，接口调用简单明了。
- 源码：https://github.com/xaoxuu/ProHUD

<fancybox>
<img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/prohud/screenshot01.png'>
<img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/prohud/screenshot02.png'>
<img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/prohud/screenshot03.png'>
<img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/prohud/screenshot04.png'>
<img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/prohud/screenshot05.png'>
<img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/prohud/screenshot06.png'>
<img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/prohud/screenshot07.png'>
<img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/prohud/screenshot08.png'>
<img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/prohud/screenshot09.png'>
<img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/prohud/screenshot10.png'>
</fancybox>


## <i class="fas fa-phone-alt"></i> Contact

目前状态为：在职，考虑换工作，100年内可到岗。

<i class="fas fa-envelope fa-fw"></i> your email
<i class="fas fa-phone-alt fa-fw"></i> 1xxxxxxxxxx



## Theme Config

```yaml
cdn:
  # These base libraries cannot be deleted
  jquery: https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js
  vue: https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js
  # When these CDN resources are deleted, local resources are loaded.
  common: https://cdn.jsdelivr.net/gh/xaoxuu/hexo-theme-resume@1.0.0/source/js/common.js
  escape: https://cdn.jsdelivr.net/gh/xaoxuu/hexo-theme-resume@1.0.0/source/js/css.escape.js
  smooth_scroll: https://cdn.jsdelivr.net/gh/xaoxuu/hexo-theme-resume@1.0.0/source/js/smooth-scroll.min.js
  css: https://cdn.jsdelivr.net/gh/xaoxuu/hexo-theme-resume@1.0.0/source/css/style.min.css
  # Optional plug-in: image zoom
  fancybox:
    css: https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css
    js: https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js

# robots meta tag
robots: noindex,nofollow

# the footer of your site
copyright: '[Copyright © 2017-2020 Mr. X](https://xaoxuu.com)'
```

## Comments

{% raw %}
<script src="https://utteranc.es/client.js"
        repo="xaoxuu/hexo-theme-resume"
        issue-number="17"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
{% endraw %}
