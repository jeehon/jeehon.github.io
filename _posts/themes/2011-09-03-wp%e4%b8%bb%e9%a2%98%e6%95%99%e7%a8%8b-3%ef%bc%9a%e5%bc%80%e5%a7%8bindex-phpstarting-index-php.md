---
id: 36
title: wp主题教程-3：开始index-php(Starting Index.php)
date: 2011-09-03T13:07:07+00:00
author: jeehon
layout: theme-post
guid: http://jeehon.info/themes/?p=36
secondary: themes
permalink: /themes/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b-3%ef%bc%9a%e5%bc%80%e5%a7%8bindex-phpstarting-index-php/
categories:
  - WP themes
tags:
  - index
  - theme
  - wordpress
  - 主题
---
我的关于制作[WordPress主题的教程序列](http://jeehon.info/themes/)的第三个教程是开始Index.php。如果你没有读过教程[1](http://jeehon.info/themes/2011/09/03/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B1%EF%BC%9A%E5%BC%95%E8%A8%80intro/)和[2](http://jeehon.info/themes/2011/09/03/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-2%EF%BC%9A%E6%A8%A1%E6%9D%BF%E6%96%87%E4%BB%B6%E5%92%8C%E6%A8%A1%E6%9D%BFtemplate-files-and-templates/)的内容，建议你先读一下它们，否则对于本节的内容，你会毫无头绪。

是时候停止阅读教程而开始动手制作你的WordPress主题了。本节里，你将要动手写一些WordPress代码。此时需要你在自己的电脑上安装WordPress博客系统（[WampServer版](http://www.wopus.org/wordpress-basic/getting-started/34.html)和[XAMPP版](http://fairyfish.net/2007/06/25/installing-wordpress-locally/)）而不是一个在线博客，因为本地博客更加方便。

**第一步**：打开Xampp控制台（如果安装的是wampsever就打开它，对于wampserver，这里不详细介绍，读者可以google一下就可以找到很多相关介绍界面），找到xampp的安装目录。双击**xampp-control.exe**。将会弹出一个窗口。点击Apache和MySQL的开始按钮，打开的xampp窗口将会出现下图所示的界面：
  
[<img src="http://jeehon.info/log/files/2011/08/xampp-control-300x242.gif" alt="" title="xampp-control" width="300" height="242" class="aligncenter size-medium wp-image-690" />](http://jeehon.info/log/files/2011/08/xampp-control.gif)
  
当Apache和MySQL都打开后，就可以将这个窗口最小化了。

**第二步：**创建主题文件夹。
  
找到你的wordpress主题文件夹。这个文件夹应该位于**xampp/htdocs/wordpress/wp-content/themes**。新建一个叫做**tutorial**的文件夹。

**第三步：**创建**index.php**和**style.css**文件。
  
打开Notepad或者其他你喜欢的文本编译器。将[index.txt](http://jeehon.info/samples/index.txt)里面所有的内容复制黏贴到你的Notepad窗口，并且将这些内容保存到tutorial文件夹中的**index.php**中。
  
[<img src="http://jeehon.info/log/files/2011/08/save-as-indexphp-300x242.gif" alt="" title="save-as-indexphp" width="300" height="242" class="aligncenter size-medium wp-image-691" />](http://jeehon.info/log/files/2011/08/save-as-indexphp.gif)
  
[<img src="http://jeehon.info/log/files/2011/08/save-as-indexphp2-300x158.gif" alt="" title="save-as-indexphp2" width="300" height="158" class="aligncenter size-medium wp-image-692" />](http://jeehon.info/log/files/2011/08/save-as-indexphp2.gif)
  
在tutorial文件夹中鼠标右键新建一个文本文件并且重命名为style.css。

此时tutorial文件夹中有两个文件：index.php和style.css。
  
[<img src="http://jeehon.info/log/files/2011/08/index-and-style-300x40.gif" alt="" title="index-and-style" width="300" height="40" class="aligncenter size-medium wp-image-693" />](http://jeehon.info/log/files/2011/08/index-and-style.gif)
  
Index.php解释：
  
[<img src="http://jeehon.info/log/files/2011/08/indexphp-explain-300x194.gif" alt="" title="indexphp-explain" width="300" height="194" class="aligncenter size-medium wp-image-694" />](http://jeehon.info/log/files/2011/08/indexphp-explain.gif)
  
点击上面的图片以查看大图，我将会解释每个红圈里内容的作用。
  
**Doctype** &#8212; 表明你用哪种规则来编写你的主题。此时Doctype并不是特别重要，我先指出它的作用，这样以后你就不会再考虑它了。
  
**<html>** &#8212; 是一个网页的开始。
  
**<head>** &#8212; 是网页头部的开始，每个网页都有头部和主体。
  
**</head>** &#8212; 是头部的结束。
  
**<?php bloginfo(‘stylesheet_url’); ?>**是一个PHP函数，它用来调用本地的style.css文件，这样我的主体就可以链接到这个文件并给页面上的所有元素添加样式。无论何时，代码都被包裹在**<?php**和**?>**标签里，这表明里面的是PHP代码，而不同与其他的代码。PHP中，**<?php**是开始标签，而**?>**是结束标签。

所以：

  * **<?php** &#8212; 开始PHP代码
  * **bloginfo(‘stylesheet_url’)** &#8212; 调用本地style.css文件
  * ; &#8212; 结束调用style.css文件。分号是在PHP中结束一段代码的一种方法。
  * **?>** &#8212; 结束PHP代码

继续往下看…

**<body>** &#8212; 主体部分的开始。在页面上看到的读到的所有的内容都属于主体。正在读这个教程就意味着我正在看这个网页的主体部分。**</body>**主体部分结束。
  
**</html>** &#8212; 网页结束。后面再也不会有任何内容了。

**第四步：**将[style.txt](http://jeehon.info/samples/style.txt)文件中的所有内容复制黏贴到style.css文件中，保存并关闭它。

**第五步：**开始体验你的主题。
  
打开一个浏览器。输入http://localhost/wordpress/wp-login.php。转到这个页面并且登录到WordPress的管理页面（你之所以可以看到登录页面是因为在第一步的时候你打开了Xampp控制台，否则你将会看到一个网页未找到的404错误）。

在管理页面找到“外观”选项并且点击外观里的“主题”选项，在主题里找到Tutorial并且激活它。
  
[<img src="http://jeehon.info/log/files/2011/08/theme-empty-screenshot.gif" alt="" title="theme-empty-screenshot" width="265" height="275" class="aligncenter size-full wp-image-695" />](http://jeehon.info/log/files/2011/08/theme-empty-screenshot.gif)
  
注意，此时你的主题并没有一个小的屏幕截图，博客缩略图那块是空白的，一旦主题被激活，WordPress将会出现提示。
  
[<img src="http://jeehon.info/log/files/2011/08/theme-activated-300x191.gif" alt="" title="theme-activated" width="300" height="191" class="aligncenter size-medium wp-image-696" />](http://jeehon.info/log/files/2011/08/theme-activated.gif)
  
现在，需要打开一个新的页面或者一个标签页（如果你的浏览器有标签页选项），然后转到http://localhost/wordpress。此时你将会看到一个空白页，完全空白的一个页面，如果你看到的不是一个空白页，就说明你输错页面地址了。

你已经建立一个主题了，这也是本节的目的。下一节，我们将会介绍header模板。

不要忘记关闭你的Xampp控制台。双击你的工具栏上的托盘图标，停止Apache和MySQL然后点击退出。
  
[<img src="http://jeehon.info/log/files/2011/08/xampp-control-close-300x241.gif" alt="" title="xampp-control-close" width="300" height="241" class="aligncenter size-medium wp-image-697" />](http://jeehon.info/log/files/2011/08/xampp-control-close.gif)
  
有问题吗？请留言告诉我。

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)