---
id: 17
title: Sinaapp-豆瓣书单
date: 2012-02-09T13:31:13+00:00
author: jeehon
layout: post
guid: http://jeehon.info/works/?p=17
permalink: /works/2012/02/09/sinaapp-douban-book/
single_image:
  - http://jeehon.info/works/files/2012/02/用户列表.jpg
  - http://jeehon.info/works/files/2012/02/jeehon书单.jpg
  - http://jeehon.info/works/files/2012/02/用户登录.jpg
  - http://jeehon.info/works/files/2012/02/添加书单.jpg
  - http://jeehon.info/works/files/2012/02/添加成功.jpg
categories:
  - 未分类
---
2011年11月份，新疆的项目已经接近尾声，大部分的功能都实现了，所以11月份时间稍微宽松一些，就跟[Yuguo](http://yuguo.us)合作了这个书单。[书单首页](http://2.readlist.sinaapp.com/user/jeehon)是Yuguo设计实现的，我加了“[用户登录](http://2.readlist.sinaapp.com/login.php)”、“添加书单”等功能。

书单是用PHP做的，数据库使用的是sinaapp提供的MySql数据库。用户登录时设置了cookie，用户书单首页用了URL Rewrite，具体细节博客文章里有写，地址是：[SAE URL Rewrite](http://jeehon.info/log/2011/11/27/sae-url-rewrite/)。其中添加书单是通过豆瓣API抓取某一个ID的书籍的链接、标题、图片地址和作者，用户输入书籍评论，然后将这些信息存入数据库。

书单的[DEMO](http://2.readlist.sinaapp.com/)，感兴趣的朋友可以找我要用户。

关于豆瓣书单的应用，还有很多工作需要做，比如豆瓣授权、用户注册等，希望以后有时间来完成这些功能。