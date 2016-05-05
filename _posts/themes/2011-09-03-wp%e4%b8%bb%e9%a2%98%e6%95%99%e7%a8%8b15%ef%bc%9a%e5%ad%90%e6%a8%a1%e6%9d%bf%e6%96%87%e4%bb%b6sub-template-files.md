---
id: 81
title: 'WP主题教程#15：子模板文件(Sub-Template Files)'
date: 2011-09-03T13:44:02+00:00
author: jeehon
layout: theme-post
guid: http://jeehon.info/themes/?p=81
secondary: themes
permalink: /themes/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b15%ef%bc%9a%e5%ad%90%e6%a8%a1%e6%9d%bf%e6%96%87%e4%bb%b6sub-template-files/
categories:
  - WP themes
tags:
  - sub-template
  - theme
  - wordpress
  - 主题
---
继续昨天没有完成的内容，今天你将会新建更多的子模板文件，就像昨天的**header.php**、**sidebar.php**和**footer.php**文件一样。

既然昨天就已经将[index.php文件拆分](http://jeehon.info/log/2011/08/27/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B14%EF%BC%9A%E9%A1%B5%E8%84%9A%E5%92%8C%E6%8B%86%E5%88%86index-php%E6%96%87%E4%BB%B6footer-and-dividing-index/)了，那今天的内容就变得更加简单了。

### 第一步

在进行这一步之前，先看一下的侧边栏，点击一下存档链接，跳转的页面应该跟你的首页没有任何不同吧？

  * 新建一个新文件：**archive.php**
  * 将**index.php**文件中的所有内容都复制黏贴到**archive.php**文件中
  * 保存archive.php文件
  * 在archive.php文件中，将**the_content**改为**the_excerpt**
  * 再次保存archive.php文件

你通过新建**archive.php**文件并且改变它的内容使其与index.php文件不同来**自定义存档页面的外观**

现在，如果你刷新你的存档页面，你只会得到摘要而不是全部的文章内容。

**为什么你想这么做？**为了避免因为你的博客有重复内容而受到Google的不利对待。如果一个存档页面和首页显示的内容相同，那么这就是重复内容。

**如果你的博客是私有的呢？**那么就没有必要将存档页面和首页分开了，但是这也并不是说摘要对于私有博客没有什么用处。

同样的，默认情况下，你的分类页面也会从**archive.php**文件中寻找信息来展示它的内容，如果你没有**archive.php**文件，分类页面就会找**index.php**文件中的信息。

如果你想让你的**分类页面**看起来和**首页**还有**存档页面**不同，那么就新建一个**category.php**文件并且自定义它。

### 第二步

  * 新建文件：**search.php**
  * 将**archive.php**文件中的所有内容都复制黏贴到**search.php**文件中
  * 保存你刚刚做的修改

现在，所有的搜索结果都会以摘要的形式展示了，如果没有**search.php**模板文件，搜索选项就会在**index.php**寻找怎样展示搜索结果的信息。

（可选的）你也可以到[第一节](http://jeehon.info/log/2011/08/05/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B1%EF%BC%9A%E5%BC%95%E8%A8%80/)去回顾一下层次结构。

### 第三步

  * 新建两个文件：**page.php**和**single.php**
  * 将**index.php**文件中的所有内容都复制黏贴到**page.php**文件和**single.php**文件中。（此时，page和single应该是相同的）
  * 保存page.php和single.php，关闭index.php文件和single.php文件

### 第四步

还记得**Page**和**page**是不同的吧？**page.php模板**就是用来自定义那么特殊的**Pages**(单个独立的页面，就像你的“关于”页面)的外观的。

首先，在**page.php**文件中的**<?php the_content(); ?>**的下面输入以下代码：
  
**<?php link_pages(‘<p><strong>Pages:</strong> ‘, ‘</p>’, ‘number’); ?>**
  
和
  
**<?php edit\_post\_link(‘Edit’, ‘<p>’, ‘</p>’); ?>**

其次，从**page.php**文件中删除**postmetadata**代码，下面是没有postmetadata后的代码的样子：
  
[<img src="http://jeehon.info/log/files/2011/08/page-php.gif" alt="" title="page-php" width="399" height="128" class="aligncenter size-full wp-image-915" />](http://jeehon.info/log/files/2011/08/page-php.gif)
  
最后，从**page.php**中删除**posts\_nav\_link()**或者**导航模块**的内容。
  
[<img src="http://jeehon.info/log/files/2011/08/remove-navigation.gif" alt="" title="remove-navigation" width="385" height="123" class="aligncenter size-full wp-image-916" />](http://jeehon.info/log/files/2011/08/remove-navigation.gif)

**刚刚发生了什么事情？**

第一行代码是用来显示子页面的链接的。
  
[<img src="http://jeehon.info/log/files/2011/08/nextpage1.gif" alt="" title="nextpage1" width="324" height="175" class="aligncenter size-full wp-image-917" />](http://jeehon.info/log/files/2011/08/nextpage1.gif)
  
例如，编辑你的“**关于**”页面。根据我下面的截图来看要加什么。
  
[<img src="http://jeehon.info/log/files/2011/08/add-nextpage.gif" alt="" title="add-nextpage" width="290" height="292" class="aligncenter size-full wp-image-918" />](http://jeehon.info/log/files/2011/08/add-nextpage.gif)
  
当你不得不将你的一个很长的页面拆分为很多页面的时候，这就非常有用了。

对于第二行代码，它是只针对管理员的**编辑链接**。

你的页面是没有分类的，同时你也不想显示它们的时间戳（页面创建时间等信息），所以你将postmetadata删除了。同时你也把**posts\_nav\_link()**删除了，是因为Page页面不用显示**下一页**和**前一页**链接。

保存**page.php**文件然后关闭 。

### 第五步

点击一篇文章的标题来查看剩下的文章内容就会跳转到单篇文章的页面。**Single.php**模板就是用来处理特定某篇文章的外观的。

在**single.php**文件中的**<?php the_content() ?>**下面输入以下代码：
  
**<?php link_pages(‘<p><strong>Pages:</strong> ‘, ‘</p>’, ‘number’); ?>**

对，这和子页面链接的代码是一样的。你知道其实你也可以将文章拆分为很多个子文章吗？

然后，在**postmetadata**模块，删除**<?php comments\_popup\_link(); ?>**函数和它前面的**<br />**标签，但是不要将整个**postmetadata**都删除了。

你删除了评论链接函数因为在单篇文章中它没有用了，所以在single.php文件中不没有必要留着它。在BR标签后只有管理员能看到的编辑链接了，你不想给只有你能看到的链接换行吧？所以你把BR标签删除了。

最后，用下面的代码替换**<?php posts\_nav\_link(); ?>**：
  
**<?php previous\_post\_link(‘&laquo; %link’) ?> <?php next\_post\_link(‘ %link &raquo;’) ?>**

在首页、存档页、分类页面和搜索页面，你用**posts\_nav\_link()**函数来调用**下一页**和**前一页**链接，在单篇文章页面，没有下一页和前一页链接，你通过**previous\_post\_link()**和**next\_post\_link()**函数来调用前一篇文章链接和下一篇文章链接。

保存**single.php**文件，到单篇文章页面的导航区去看一下有什么不同了。

### 本节回顾

  * 你新建了四个文件或者说子模板：[archive.php](http://jeehon.info/samples/archive-lesson-15.txt)、search.php、[page.php](http://jeehon.info/samples/page-lesson-15.txt)和[single.php](http://jeehon.info/samples/single-lesson-15.txt)文件
  * **archive.php**模板和**search.php**的内容是一样的
  * **独立的页面**(Pages)没有分类（和文章不同）。它们也没有**下一页**和**前一页**链接
  * **ingle.php**不会显示评论的数量（通过**comments\_popup\_link()**函数调用）也不是通过**posts\_nav\_link()**调用导航链接的。

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)