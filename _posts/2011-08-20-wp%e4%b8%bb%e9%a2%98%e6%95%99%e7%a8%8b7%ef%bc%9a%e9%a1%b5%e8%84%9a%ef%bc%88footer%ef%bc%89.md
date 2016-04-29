---
id: 844
title: 'WP主题教程#7：页脚（Footer）'
date: 2011-08-20T16:05:52+00:00
author: jeehon
layout: post
guid: http://jeehon.info/log/?p=844
permalink: /2011/08/20/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b7%ef%bc%9a%e9%a1%b5%e8%84%9a%ef%bc%88footer%ef%bc%89/
categories:
  - CSS
  - wordpress
  - 分享
  - 学习
tags:
  - footer
  - theme
  - wordpress
  - 主题
---
本节的内容是关于**页脚**的，将非常的简单。你需要在侧边栏的DIV下面添加一个DIV或者一个不可见框并加一些有关版权的文字作为页脚。想一下如果没有我的指导你将会怎么做？勇敢的去尝试吧，一会再回到本节来确认一下。

**第一步**：添加一个DIV

在侧边栏的DIV下面输入下面的代码：
  
<strong style="margin-left:2em;"><div id=”footer”></strong>**</div>**
  
[<img src="http://jeehon.info/log/files/2011/08/add-footer.gif" alt="" title="add-footer" width="251" height="189" class="aligncenter size-full wp-image-846" />](http://jeehon.info/log/files/2011/08/add-footer.gif)<!--more-->

**第二步**：在段落标签（P标签）里加入页脚文本，你可以输入任何你想输的东西，下面是我的信息：
  
<strong style="margin-left:2em;"><p>Copyright &#169; 2007 <?php bloginfo(‘name’); ?></p></strong>
  
[<img src="http://jeehon.info/log/files/2011/08/add-footer-text.gif" alt="" title="add-footer-text" width="344" height="89" class="aligncenter size-full wp-image-847" />](http://jeehon.info/log/files/2011/08/add-footer-text.gif)
  
保存文件然后刷新页面，下面是显示效果：
  
[<img src="http://jeehon.info/log/files/2011/08/footer.gif" alt="" title="footer" width="321" height="121" class="aligncenter size-full wp-image-848" />](http://jeehon.info/log/files/2011/08/footer.gif)

在上面的代码中，**&#169;**是显示版权符号的代码。还记得我们在页头（header）里用来调用博客信息的**bloginfo()**函数吗？在页脚我又用到它了。’**name**’调用的是博客的标题信息，’**url**’调用的是博客的地址。

如果你想将页脚里的博客标题变成一个链接，那么到[教程#4：Header模板](http://jeehon.info/log/2011/08/09/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-4%EF%BC%9Aheader%E6%A8%A1%E6%9D%BF/)里看一下之前你是怎么做的。

[返回WordPress主题系列教程的开始](http://jeehon.info/log/2011/08/04/%E6%83%B3%E5%88%B6%E4%BD%9Cwordpress%E4%B8%BB%E9%A2%98%EF%BC%9F/)