---
id: 33
title: wp主题教程-2：模板文件和模板(Template Files and Templates)
date: 2011-09-03T13:05:08+00:00
author: jeehon
layout: theme-post
guid: http://jeehon.info/themes/?p=33
secondary: themes
permalink: /themes/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b-2%ef%bc%9a%e6%a8%a1%e6%9d%bf%e6%96%87%e4%bb%b6%e5%92%8c%e6%a8%a1%e6%9d%bftemplate-files-and-templates/
categories:
  - WP themes
tags:
  - template
  - theme
  - wordpress
  - 主题
---
我的关于[制作WordPress主题的教程序列](http://jeehon.info/themes/)的第二个教程是模板文件和模板。如果你没有读过教程1的内容，请马上停下来，读一下[教程1](http://jeehon.info/themes/2011/09/03/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B1%EF%BC%9A%E5%BC%95%E8%A8%80intro/)，否则你将无法理解本节用的术语。

既然我们已经知道了规则和术语，本节将会让你熟悉**模板文件**、**模板**和**每个页面的结构**。

需要记住的是**你博客里的每个页面都是由多个模板文件组成的**。下面是首页的一个例子。
  
[<img src="http://jeehon.info/log/files/2011/08/index-225x300.gif" alt="" title="index" width="225" height="300" class="aligncenter size-medium wp-image-681" />](http://jeehon.info/log/files/2011/08/index.gif)
  
在上面的例子中，你的首页是由四个模板文件组成：**header**、**index**、**sidebar**和**footer**。

**Header模板文件：**
  
[<img src="http://jeehon.info/log/files/2011/08/header-template-300x60.gif" alt="" title="header-template" width="300" height="60" class="aligncenter size-medium wp-image-682" />](http://jeehon.info/log/files/2011/08/header-template.gif)
  
你的_博客的标题_和_描述_都放在这个文件里。它们通常在整个博客里都保持不变。

**Index模板文件：**
  
这个文件包含你_文章的标题_、_内容_（每篇文章的文字和图片）、_文章元数据_（每篇文章的信息，如：作者是谁、什么时候发表的、属于哪个分类和有多少评论）。
  
[<img src="http://jeehon.info/log/files/2011/08/index-template-225x300.gif" alt="" title="index-template" width="225" height="300" class="aligncenter size-medium wp-image-683" />](http://jeehon.info/log/files/2011/08/index-template.gif)

**Sidebar模板文件：**
  
这个文件控制着你的_页面链接列表_、_分类链接列表_、_存档链接列表_、_友情链接列表_等。（侧边栏不是一定要在布局的右边，我用的例子是一个典型的两栏式页面布局。）
  
[<img src="http://jeehon.info/log/files/2011/08/sidebar-template-225x300.gif" alt="" title="sidebar-template" width="225" height="300" class="aligncenter size-medium wp-image-684" />](http://jeehon.info/log/files/2011/08/sidebar-template.gif)

**Footer模板文件：**
  
[<img src="http://jeehon.info/log/files/2011/08/footer-template-300x32.gif" alt="" title="footer-template" width="300" height="32" class="aligncenter size-medium wp-image-685" />](http://jeehon.info/log/files/2011/08/footer-template.gif)
  
就像header.php模板文件一样，页脚也不会随着页面的变化而变化。你可以在这个文件里放任何东西，但是习惯上放你的_版权信息_。

现在我要解释一下为什么上面的例子中index.php是红色的。Index.php是红色表明那块区域是会改变的，你位于不同的博客页面它就会变成相应的内容。

如果你打开了某一篇文章，你的页面将由下面四个文件构成：Header、single、sidebar和footer。
  
[<img src="http://jeehon.info/log/files/2011/08/index-225x300.gif" alt="" title="index" width="225" height="300" class="aligncenter size-medium wp-image-681" />](http://jeehon.info/log/files/2011/08/index.gif)

返回[WordPress主题系列教程](http://jeehon.info/themes/)的开始