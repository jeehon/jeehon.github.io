---
id: 837
title: 'WP主题教程#6e：窗体化侧边栏（Widgetizing Sidebar）'
date: 2011-08-20T02:20:36+00:00
author: jeehon
layout: post
categories:
  - CSS
  - wordpress
  - 分享
  - 学习
tags:
  - theme
  - widgetizing sidebar
  - wordpress
  - 主题
---
一个可窗体化或者已窗体化的侧边栏是WordPress2.0和2.1及以后序列的主题标准。但是，首先，什么是窗体化的？窗口化简单的说就是侧边栏支持[小工具插件](http://automattic.com/code/widgets/)，这个插件允许你在侧边栏里轻松的放置你的小工具（你可以通过拖拽小工具到侧边栏来添加小工具或者在侧边栏拖动它们来改变它们的位置）。

例如，不再需要修改侧边栏的代码来交换分类和存档的位置了，你只需要拖曳存档和分类列表来将它们放置在相应的位置。

**第一步**：新建functions.php文件

新建一个文本文件，重命名其为**functions.php**。将[functions.txt](http://jeehon.info/samples/functions.txt)文件中的所有内容都复制黏贴到你的**functions.php**文件里，保存并关闭**functions.php**文件。

回顾一下，你的主题文件夹“**tutorial**”里现在应该有四个文件。
  
[<img src="http://jeehon.info/log/files/2011/08/number-of-files.gif" alt="" title="number-of-files" width="357" height="237" class="aligncenter size-full wp-image-838" />](http://jeehon.info/log/files/2011/08/number-of-files.gif)<!--more-->

**第二步**：窗体化侧边栏

紧接着侧边栏的第一个**<ul>**标签，输入以下的代码：
  
<strong style="margin-left:2em;"><?php if ( function_exists(‘dynamic_sidebar’) && dynamic_sidebar() ) : else : ?></strong>
  
[<img src="http://jeehon.info/log/files/2011/08/widgetize-if.gif" alt="" title="widgetize-if" width="542" height="176" class="aligncenter size-full wp-image-839" />](http://jeehon.info/log/files/2011/08/widgetize-if.gif)

在**</ul>**的前面输入下面的代码：
  
<strong style="margin-left:2em;"><?php endif; ?></strong>
  
[<img src="http://jeehon.info/log/files/2011/08/widgetize-endif.gif" alt="" title="widgetize-endif" width="278" height="146" class="aligncenter size-full wp-image-840" />](http://jeehon.info/log/files/2011/08/widgetize-endif.gif)

保存index.php文件。如果你还没有安装小工具插件你将在页面上看不到任何变化，稍后我们就来安装小工具插件。

[返回WordPress主题系列教程的开始](http://jeehon.info/log/2011/08/04/%E6%83%B3%E5%88%B6%E4%BD%9Cwordpress%E4%B8%BB%E9%A2%98%EF%BC%9F/)