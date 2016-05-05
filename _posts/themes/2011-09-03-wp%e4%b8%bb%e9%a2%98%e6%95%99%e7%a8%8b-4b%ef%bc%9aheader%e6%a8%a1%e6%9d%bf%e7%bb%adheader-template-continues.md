---
id: 40
title: wp主题教程-4b：header模板续(Header Template Continues)
date: 2011-09-03T13:10:01+00:00
author: jeehon
layout: theme-post
guid: http://jeehon.info/themes/?p=40
secondary: themes
permalink: /themes/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b-4b%ef%bc%9aheader%e6%a8%a1%e6%9d%bf%e7%bb%adheader-template-continues/
categories:
  - WP themes
tags:
  - header
  - theme
  - wordpress
  - 主题
---
好了，这是[WordPress主题教程序列](http://jeehon.info/themes/)的第四个。我本不应该再重复的，但是还是要说最后一遍：请确保你已经读过之前的所有的教程，否则本节有一个内容你将无法理解。今天的教程是一个用于完成header模板同时介绍一下框模型(box model)的快速教程。

**第一步：**

&#8212; 打开Xampp控制台

&#8212; 打开主题所在的文件夹，Tutorial文件夹

&#8212; 打开一个浏览器窗口，转到http://localhost/wordpress

&#8212; 回到主题文件夹，用Notepad打开index.php文件
  
**第二步：**

当前，index.php文件中有代码：

**<a href=”<?php bloginfo(‘url’); ?>”><?php bloginfo(‘name’); ?></a>**

在这段代码的两边加上**<h1>**和**</h1>**，H1标签的意思是标题1.总共有六个标题：H1，H2，H3，H4，H5，H6.默认情况下，H1字体最大而H6字体最小。

现在，index.php中的代码变成：

**<h1><a href=”<?php bloginfo(‘url’); ?>”><?php bloginfo(‘name’); ?></a></h1>**

保存文件，转到浏览器窗口，刷新页面。

**第三步：**

调用博客的描述，在标题链接的右边输入代码：**<?php bloginfo(‘description’); ?>**，此时，完整代码变成：

**<h1><a href=”<?php bloginfo(‘url’); ?>”><?php bloginfo(‘name’); ?></a></h1>****<?php bloginfo(‘description’); ?>**

保存文件，刷新页面就会看到在标题链接的下面出现了你博客的描述。稍后你可以在后台管理页面修改你的博客描述。

**<?php** &#8212; 开始PHP代码

**bloginfo(‘description’)** &#8212; 调用博客的描述信息

; &#8212; 调用描述信息结束

**?>** &#8212; 结束PHP代码

**第四步**：这一步将给你介绍一个新的标签：DIV标签。

在完整的代码两边加上**<div>**和**</div>**:

**<div>
  
<span style="margin-left: 4em;"><h1><a href=”?php bloginfo(‘url’); ?>”><?php bloginfo(‘name’); ?></a></h1></span>
  
<span style="margin-left: 4em;"><?php bloginfo(‘description’); ?></span>
  
<span style="margin-left: 2em;"></div></strong></span></p> 

保存文件，刷新页面，你将发现页面并未发生什么变化。

可以把**DIV**看成是一个看不见的框，它把你博客的**标题链接**及**描述**和博客的其他部分区分开来了。如果你不给它加样式，那么它除了把博客的内容区分开来就没有其他的作用了。稍后，你将用style.css文件来给这个看不见的框加上样式。你可以给DIV加上**边框**(borders)、**内边距**(paddings)、**外边距**(margins)、**背景色**(background color)、**背景图片**(background images)等样式。

**第五步：**

给DIV标签加上id=”header”，就像：**<div id=”header”>**.保存文件，然后刷新页面。

这个改变至此也不会给页面带来什么变化。我们给DIV指定了一个ID是因为一个页面中会有很多DIV或者很多不可见的框，我们需要一个方法将它们区分开来，是吧？

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)