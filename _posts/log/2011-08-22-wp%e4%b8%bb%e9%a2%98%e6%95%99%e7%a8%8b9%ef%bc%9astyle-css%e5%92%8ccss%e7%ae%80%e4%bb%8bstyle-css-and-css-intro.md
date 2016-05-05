---
id: 857
title: 'WP主题教程#9：Style.css和CSS简介(Style.css and CSS Intro)'
date: 2011-08-22T12:04:36+00:00
author: jeehon
layout: post
categories:
  - CSS
  - wordpress
  - 分享
  - 学习
tags:
  - CSS
  - theme
  - wordpress
  - 主题
---
学习CSS最好的方法就是动手写代码，不像学习XHTML和PHP那样不需要接触你模板的核心文件，也不需要理解任何基本概念。学习CSS需要你亲自实践，试验和错误都会帮你学到很多东西。

在我们开始之前，你的style.css文件里应该已经有了一些信息了吧，让我们来看一下每个模块都代表什么意思。
  
[<img src="http://jeehon.info/log/files/2011/08/theme-info.gif" alt="" title="theme-info" width="303" height="209" class="aligncenter size-full wp-image-858" />](http://jeehon.info/log/files/2011/08/theme-info.gif)

  * 第一行很明显就是主题的名字。
  * 第二行是你主题的下载地址，如果你正在制作一个自己用的主题就不用管这行了。
  * 第三行是主题的描述。
  * 第四行是版本号，这个很重要尤其是当你的主题是供大家使用的并且发布了更新版本。
  * 第五行和第六行是你的名字和主页。

你主题信息两边的**/***和***/**符号是为了防止你的主题信息影响到文件的其他内容，这是CSS的注释。当你通过CSS代码来给你的网页添加样式时，你可能想在很多地方添加注释来记录一些信息，但是你并不想添加的注释影响到其他的代码，这时候你就可以通过**/***和***/**符号来将你的注释隐藏起来。<!--more-->

下面就是处理过的主题的信息：
  
[<img src="http://jeehon.info/log/files/2011/08/theme-info-thumbnail.gif" alt="" title="theme-info-thumbnail" width="267" height="276" class="aligncenter size-full wp-image-859" />](http://jeehon.info/log/files/2011/08/theme-info-thumbnail.gif)

**第一步**：

  * 打开Xampp控制台、主题文件夹、一个Firefox浏览器、一个IE浏览器和style.css文件。
  * 在两个浏览器里都打开http://localhost/wordpress页面。

这里真的需要**Firefox**和**IE**来同时测试你的主题，不同的系统对CSS的解释也不同，在越多的浏览器和系统(Safari,Opera,Linux,Netscape等)上测试你的主题就越好。如果你跟我一样懒的话，就只在Firefox和IE上测试吧。

**第二步**：

在你的style.css文件里输入下面的代码：

    body{
    margin: 0;
    font-family: Arial, Helvetica, Georgia, Sans-serif;
    font-size: 12px;
    text-align: left;
    vertical-align: top;
    background: #ffffff;
    color: #000000;
    }
    

就像处理XHTML或者PHP代码一样，用tab键来增加缩进以便于代码组织：
  
[<img src="http://jeehon.info/log/files/2011/08/add-body.gif" alt="" title="add-body" width="405" height="368" class="aligncenter size-full wp-image-860" />](http://jeehon.info/log/files/2011/08/add-body.gif)
  
保存style.css文件然后刷新Firefox和IE页面来看有什么变化。（从现在起你将一直和这两个浏览器打交道了。）

可以把**body{}**当成一个标签，里面的所有的内容都是这个标签的属性以及属性的值，就像XHTML一样，{是开始标签，}是结束标签，{和}里面的内容，冒号是开始标志，分号是结束标志。(当涉及XHTML、PHP和CSS时，简单起见，我用了标签、属性和值这些术语，实际上，PHP和CSS的代码有不同的术语，例如参数(parameters)、选择器(selector)和属性(property)。)

在我们继续下面的内容之前，我要解释一下为什么你需要使用**body{}**(CSS选择器)，这是因为你正在给页面最基本的部分(**<body>**标签)添加样式。你没有给<header> 标签添加样式是因为它没有什么可以添加的样式。你网站上显示的所有的内容都是在**<body>**和**</body>**标签里的。

然而，稍后你将要给一个ID为**header**的DIV添加样式。

**进一步解释**：

**margin:0;**去掉body标签默认的外边距。如果你需要一个外边距或者更大的外边距，可以把0改为10px、20px等等。PX是像素的意思，一个像素就是你电脑屏幕的一个点。如果外边距是0的话就不用加px了。

在下面的图片中，红色加亮的空间是body标签默认的外边距。
  
[<img src="http://jeehon.info/log/files/2011/08/show-margin.gif" alt="" title="show-margin" width="385" height="160" class="aligncenter size-full wp-image-861" />](http://jeehon.info/log/files/2011/08/show-margin.gif)
  
当把它改为**margin:0;**之后，下面就是该页没有外边距的样子：
  
[<img src="http://jeehon.info/log/files/2011/08/margin-0.gif" alt="" title="margin-0" width="311" height="208" class="aligncenter size-full wp-image-862" />](http://jeehon.info/log/files/2011/08/margin-0.gif)

**font-family:Arial,Helvetica,Georgia,Sans-serif;**选择你网站使用的字体。跟在第一个字体(**Arial**)后面的都是用来替换的，如果用户电脑里没有安装**Arial**字体，style.css文件就会查找**Helvetica**，然后是**Georgia**，接着是**Sans-serif**。你可以在”**我的电脑**” > “**本地磁盘(C)**” > “**Windows**”文件夹里的” **Font**s”文件夹里看到所有的字体列表。

**font-size:12px;**作用很明显吧，改变字体的大小来看有什么变化。

**text-align:left;**将你的文本左对齐，把它改为**text-align:right**来看有什么不同。

**vertical-align:top;**确保所有的内容都是从页面的最上面开始显示。如果你将对齐方式改为middle或者right，所有的内容都会下推。

**background:#ffffff;**将背景设为白色的，#ffffff是白色的十六进制代码，#000000是黑色的十六进制代码。

**color:#000000;**的意思是文本的颜色将会是黑色。

如果你想自学CSS的话，[w3schools.com](http://w3schools.com/css/default.asp)将会是最好的网站。

[返回WordPress主题系列教程的开始](http://jeehon.info/log/2011/08/04/%E6%83%B3%E5%88%B6%E4%BD%9Cwordpress%E4%B8%BB%E9%A2%98%EF%BC%9F/)