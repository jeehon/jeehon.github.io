---
id: 38
title: wp主题教程-4：header模板(Header Template)
date: 2011-09-03T13:08:09+00:00
author: jeehon
layout: theme-post
guid: http://jeehon.info/themes/?p=38
secondary: theme
permalink: /theme/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b-4%ef%bc%9aheader%e6%a8%a1%e6%9d%bfheader-template/
categories:
  - WP themes
tags:
  - header
  - theme
  - wordpress
  - 主题
---
如果你还没有读过前面的[教程](http://jeehon.info/themes/)，建议你从头读一下它们，否则只能祝你好运了。昨天，我告诉了你如何打开Xampp控制台、如何安装你自己的主题，并且给你介绍了一些关于PHP的知识。今天，我们将继续探讨PHP的相关内容，并且学着如何调用你站点或者博客的标题。

记住一定要亲自敲每一行代码，**不要复制黏贴**我给你的代码。这样做是为了让你记住你学到的东西。

**第一步：**

打开Xampp控制台。接着，打开你主题所在的文件夹，在**xampp/htdocs/wordpress/wp-content/themes/tutorial**文件夹下。你将会看到你昨天创建的两个文件：**index.php**和**style.css**。
  
[<img src="http://jeehon.info/log/files/2011/08/index-and-style1-300x40.gif" alt="" title="index-and-style" width="300" height="40" class="aligncenter size-medium wp-image-702" />](http://jeehon.info/log/files/2011/08/index-and-style1.gif)
  
你创建的index.php文件和style.css文件应该和[index.txt](http://jeehon.info/samples/index.txt)、[style.txt](http://jeehon.info/samples/style.txt)文件一致。

**第二步：**

&#8212; 打开一个新的浏览器窗口。转到**http://localhost/wordpress**页面。由于你昨天创建了一个空的主题，所以你将会看到一个空白页。

&#8212; 找到你主题所在的文件夹，然后用notepad打开**index.php**文件。你可以通过右键index.php然后选择“**属性**”，点击“**更改**”按钮，选择**Notepad**或者其他你使用着的文本编辑器，然后点击“**确定**”来使notepad成为php文件的默认打开程序。更改完成后双击index.php文件。
  
[<img src="http://jeehon.info/log/files/2011/08/view-php-with-notepad-252x300.gif" alt="" title="view-php-with-notepad" width="252" height="300" class="aligncenter size-medium wp-image-703" />](http://jeehon.info/log/files/2011/08/view-php-with-notepad.gif)
  
[<img src="http://jeehon.info/log/files/2011/08/change-view-tool-for-php-300x144.gif" alt="" title="change-view-tool-for-php" width="300" height="144" class="aligncenter size-medium wp-image-704" />](http://jeehon.info/log/files/2011/08/change-view-tool-for-php.gif)
  
[<img src="http://jeehon.info/log/files/2011/08/select-notepad-300x140.gif" alt="" title="select-notepad" width="300" height="140" class="aligncenter size-medium wp-image-705" />](http://jeehon.info/log/files/2011/08/select-notepad.gif)
  
至此，你已经打开了**主题所在的文件夹**、**浏览器**和**index.php**文件。
  
[<img src="http://jeehon.info/log/files/2011/08/review-300x17.gif" alt="" title="review" width="300" height="17" class="aligncenter size-medium wp-image-706" />](http://jeehon.info/log/files/2011/08/review.gif)

**第三步：**

你应该正在研究用Notepad打开的index.php文件。在**<body>**和**</body>**标签之间输入：
  
**<?php bloginfo(‘name’); ?>**，然后保存。
  
[<img src="http://jeehon.info/log/files/2011/08/bloginfo-name.gif" alt="" title="bloginfo-name" width="233" height="82" class="aligncenter size-full wp-image-707" />](http://jeehon.info/log/files/2011/08/bloginfo-name.gif)
  
[<img src="http://jeehon.info/log/files/2011/08/save-it.gif" alt="" title="save-it" width="155" height="199" class="aligncenter size-full wp-image-708" />](http://jeehon.info/log/files/2011/08/save-it.gif)
  
转到浏览器，**刷新页面**。你将会看到你的博客标题了。我的博客标题是Demo Theme Development。
  
[<img src="http://jeehon.info/log/files/2011/08/refreshed-300x125.gif" alt="" title="refreshed" width="300" height="125" class="aligncenter size-medium wp-image-709" />](http://jeehon.info/log/files/2011/08/refreshed.gif)
  
**刚刚发生了什么？**
  
你在index.php文件中的页面的body内加了一行PHP代码。那一行代码中的**bloginfo()**调用了你博客的信息，而且调用的是博客的标题信息。这个标题是你在“选项页面”中的“博客标题”中设置的。
  
**<?php** &#8212; 开始PHP代码
  
**bloginfo(‘name’)** &#8212; 调用博客的标题信息
  
; &#8212; 结束调用博客信息
  
**?>** &#8212; 结束PHP代码

每当你改变了index.php文件的内容，保存后，刷新网页就可以看到改变了。

**第四步：**

将你的博客标题变成一个文本链接。这需要一个XHTML标签。转到index.php文件，在刚才添加的那行中再加入**<a href=”#”>**和**</a>**，此时刚才那行代码就变成了：
  
**<a href=”#”><?php bloginfo(‘name’); ?></a>**
  
再转到浏览器窗口，刷新页面后你就会看到你的标题变成了一个链接了。
  
[<img src="http://jeehon.info/log/files/2011/08/refreshed2-300x123.gif" alt="" title="refreshed2" width="300" height="123" class="aligncenter size-medium wp-image-710" />](http://jeehon.info/log/files/2011/08/refreshed2.gif)
  
现在，标题变成一个链接了，但是它却不能链接到任何地方。既然它是你的博客标题，你想让它链接到你的首页。为了实现它，将**<?php bloginfo(‘url’); ?>**输入到**href=**后面的引号中，保存文件。此时的代码就变成：
  
**<a href=”<?php bloginfo(‘url’); ?>”><?php bloginfo(‘name’); ?></a>**
  
转到浏览器刷新页面。当你现在把鼠标停留在链接上时，状态栏就会显示http://localhost/wordpress。
  
[<img src="http://jeehon.info/log/files/2011/08/status-bar.gif" alt="" title="status-bar" width="157" height="85" class="aligncenter size-full wp-image-711" />](http://jeehon.info/log/files/2011/08/status-bar.gif)
  
当你点击链接时，页面就会转到你的主页。也许你会觉得这和刚才的链接页面没什么不同，但是链接地址是#和http://localhost/wordpress将会有很大的不同，在后面的教程中你就会发现区别了。

**刚才发生了什么事情？**

你将你的站点的标题变成了一个链接并且点击链接后转到了你博客的首页。
  
**bloginfo(‘url’)** &#8212; 调用你的博客的首页地址信息
  
**<a>** &#8212; 是XHTML中链接开始的标签
  
**</a>** &#8212; 链接的结束标签。否则你的网页就不会知道何时该结束这个链接，你网页后面的内容都会变成一个很大的链接。还记得**规则#1**的内容吗？关闭所有你打开了的标签。
  
**href=”&#8221;** &#8212; 是超文本引用的缩写。放在href=””的双引号中的内容就是引用的值。
  
简而言之，代码：**<a href=”<?php bloginfo(‘url’); ?>”><?php bloginfo(‘name’); ?></a>**的意思是：链接开始，链接的值是我博客的URL；我是通过PHP的方法bloginfo(‘url’)来调用地址的。链接的名称是我博客的标题；我是通过PHP方法bloginfo(‘name’)来调用博客标题的，链接结束。

今天，我向你介绍了XHTML的一些知识，此时也该结束本节了，不要把自己累坏了。

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)