---
id: 79
title: 'WP主题教程#14：页脚和拆分index.php文件(Footer and Dividing Index)'
date: 2011-09-03T13:43:10+00:00
author: jeehon
layout: post
guid: http://jeehon.info/themes/?p=79
secondary: theme
permalink: /theme/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b14%ef%bc%9a%e9%a1%b5%e8%84%9a%e5%92%8c%e6%8b%86%e5%88%86index-php%e6%96%87%e4%bb%b6footer-and-dividing-index/
categories:
  - WP themes
tags:
  - theme
  - wordpress
  - 主题
---
今天，我们将完成样式化的内容并且开始将**index.php**文件拆分为多个小的文件。在本节的开始部分你需要**style.css**文件，稍后你将会一直和**index.php**文件打交道，并且要新建一些文件。最后呢？嗯，你差不多就完成今天的内容了。

打开Xampp、主题文件夹、Firefox、IE、index.php和style.css文件。

### 第一步

给**footer** DIV添加一个**10像素**的顶部内边距，还记得怎样添加内边距吧？这次我不会给你代码了哦。

### 第二步

给**页脚**(footer)中的**P**标签添加一个**18像素**的行高，就是**#footer p{}**。(今天有关style.css文件的内容就结束了。)

### 第三步

  * 新建一个名为**header.php**的文件，要确保新建的是php文件而不是文本文档。
  * 将index.php文件中的**header** DIV结束的</div>以上的所有的内容复制黏贴到**header.php**文件中。

[<img src="http://jeehon.info/log/files/2011/08/create-headerphp.gif" alt="" title="create-headerphp" width="136" height="92" class="aligncenter size-full wp-image-905" />](http://jeehon.info/log/files/2011/08/create-headerphp.gif)
  
[<img src="http://jeehon.info/log/files/2011/08/copy-header.gif" alt="" title="copy-header" width="262" height="244" class="aligncenter size-full wp-image-906" />](http://jeehon.info/log/files/2011/08/copy-header.gif)
  
链接里是我的[header.php](http://jeehon.info/samples/header-lesson-14.txt)文件，不要复制黏贴我的文件，要从你的**index.php**文件中复制黏贴。

### 第四步

将刚才你在**index.php**文件中复制的那些内容用**<?php get_header(); ?>**代替。
  
[<img src="http://jeehon.info/log/files/2011/08/get-header.gif" alt="" title="get-header" width="298" height="203" class="aligncenter size-full wp-image-907" />](http://jeehon.info/log/files/2011/08/get-header.gif)
  
**<?php get_header(); ?>**是WordPress主题系统中包含header.php文件的一个函数，而不需要使用**<?php include (TEMPLATEPATH . ‘/header.php’); ?>**了。

保存文件然后刷新浏览器，你不会看到任何变化，如果你的主题看起来不完整了那就说明中间出现错误了。

### 第四步

  * 第四步和第三步很相似，这次新建的是**sidebar.php**文件。
  * 将**Sidebar** DIV里的所有内容都复制黏贴到**sidebar.php**文件中。
  * 然后在**index.php**文件中将上面复制的内容替换为**<?php get_sidebar(); ?>**
  * 保存文件然后刷新页面，这次你也不会看到任何变化。
  * 链接里是我的[sidebar.php](http://jeehon.info/samples/sidebar-lesson-14.txt)文件。

[<img src="http://jeehon.info/log/files/2011/08/get-sidebar.gif" alt="" title="get-sidebar" width="227" height="229" class="aligncenter size-full wp-image-908" />](http://jeehon.info/log/files/2011/08/get-sidebar.gif)

### 第五步

  * 对于**footer.php**文件也重复上面的步骤。
  * 链接里是我的[footer.php](http://jeehon.info/samples/footer-lesson-14.txt)文件。

[<img src="http://jeehon.info/log/files/2011/08/get-footer.gif" alt="" title="get-footer" width="180" height="131" class="aligncenter size-full wp-image-909" />](http://jeehon.info/log/files/2011/08/get-footer.gif)

### 本节回顾

  * 你新建了三个新文件：**header.php**、**sidebar.php**和**footer.php**。
  * 你学到了三个新的函数：**get_header()**、**get_sidebar()**和**get_footer()**。
  * 在本节的结束部分，我链接上我的所有的文件：[index](http://jeehon.info/samples/index-lesson-14.txt)、[style](http://jeehon.info/samples/style-lesson-14.txt)、[header](http://jeehon.info/samples/header-lesson-14.txt)、[sidebar](http://jeehon.info/samples/sidebar-lesson-14.txt)和[footer](http://jeehon.info/samples/footer-lesson-14.txt)。

不要复制我的代码也不要用我的文件替代你的文件，如果你的主题出现错误或者主题没有正确的显示，你可以对照我的文件来检查你的代码。

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)