---
id: 823
title: 'WP主题教程#6d：搜索表单和日历(Search Form and Calendar)'
date: 2011-08-19T01:50:30+00:00
author: jeehon
layout: post
categories:
  - CSS
  - wordpress
  - 分享
  - 学习
tags:
  - calendar
  - search form
  - theme
  - wordpress
  - 主题
---
虽然标题是**搜索表单**和**日历**，但是今天我也会附带讲一下**功能块**的内容。我们今天先把侧边栏的常规内容结束，明天学习如何窗体化你的侧边栏（就是使你的博客可以通过拖拽小工具到侧边栏来添加小工具或者在侧边栏拖动它们来改变它们的位置），好吧？好了，开始今天的教程吧。

**第一步**：添加搜索表单

在我告诉你需要的代码之前，先新建一个文本文档，重命名为**searchform.php**（当然这个文件需要和**index.php**在同一个文件夹内）。将我的[searchform.txt](http://jeehon.info/samples/searchform.txt)文件中的代码拷贝到你的**searchform.php**文件中，好了，从现在开始就不用管**searchform.php**文件了。

将下面的代码输入到index.php文件中的侧边栏里，并且放在侧边栏里所有的列表的上面：

    <li id=”search”>
    <?php include(TEMPLATEPATH . ‘/searchform.php’); ?>
    </li>
    

[<img src="http://jeehon.info/log/files/2011/08/add-search.gif" alt="" title="add-search" width="500" height="380" class="aligncenter size-full wp-image-824" />](http://jeehon.info/log/files/2011/08/add-search.gif)<!--more-->


  
保存文件然后刷新页面，下面就是显示效果：
  
[<img src="http://jeehon.info/log/files/2011/08/search.gif" alt="" title="search" width="397" height="334" class="aligncenter size-full wp-image-825" />](http://jeehon.info/log/files/2011/08/search.gif)

**发生了什么事？**

  * **<li id=”search”>** &#8212; 开始一个**ID**等于**search**的列表项，给它一个**ID**是为了稍后能够给它添加样式。
  * **include()** &#8212; 将你需要的文件包含进程序中。这与通过一个WordPress模板函数调用一些东西不同因为**include()**仅仅是将已经存在的东西包含进来，在本例中，包含的是**searchform.php**文件中的代码。包含的信息不会因为博客的不同而有所变化，换句话说，我的搜索表单和你看起来完全一样。
  * **TEMPLATEPATH** &#8212; 你的主题文件夹的位置：**wp-content/themes/tutorial**
  * **‘/searchform.php’** &#8212; 文件的位置和名称：**/searchform.php**
  * **TEMPLATEPATH**和**’/searchform.php’**之间的**点**将它们俩连在一起，所以最后得到的是：**wp-content/themes/tutorial/searchform.php**。
  * **</li>** &#8212; 结束列表项

注意，搜索表单不像分类、存档、页面或友情链接那样有一个子标题，你也可以给它加上一个子标题，但是为了让你的现在的侧边栏更可能的接近窗体化的版本（明天我们要学习这个），建议还是不要给它加上子标题。

**第二步**：添加日历

在搜索表单或者页面列表下面加入下面的代码：

    <li id=”calendar”><h2><?php _e(‘Calendar’); ?></h2>
    <?php get_calendar(); ?>
    </li>
    

[<img src="http://jeehon.info/log/files/2011/08/add-calendar.gif" alt="" title="add-calendar" width="440" height="129" class="aligncenter size-full wp-image-826" />](http://jeehon.info/log/files/2011/08/add-calendar.gif)
  
保存文件然后刷新页面，下面是显示结果：
  
[<img src="http://jeehon.info/log/files/2011/08/calendar.gif" alt="" title="calendar" width="233" height="322" class="aligncenter size-full wp-image-827" />](http://jeehon.info/log/files/2011/08/calendar.gif)

**发生了什么事？**

  * **<li id=”calendar”>** &#8212; 开始一个**ID**为”**calendar**”的列表项
  * **<h2>** &#8212; 开始一个子标题
  * **<?php _e(‘Calendar’); ?>** &#8212; 显示单词**Calendar**
  * **</h2>** &#8212; 子标题结束
  * **get_calendar()** &#8212; 通过**get_calendar()**函数调用日历
  * **</li>** &#8212; 列表项结束

你已经添加完日历了。

**第三步**：添加功能块

在**get\_links\_list()**下面添加如下的代码：

    <li><h2><?php _e(‘Meta’); ?></h2>
    <ul>
    <?php wp_register(); ?>
    <li><?php wp_loginout(); ?></li>
    <?php wp_meta(); ?>
    </ul>
    </li>
    

[<img src="http://jeehon.info/log/files/2011/08/add-meta.gif" alt="" title="add-meta" width="418" height="156" class="aligncenter size-full wp-image-828" />](http://jeehon.info/log/files/2011/08/add-meta.gif)
  
保存文件然后刷新页面，下面是显示的效果：（如果你还没有登录WordPress的话）
  
[<img src="http://jeehon.info/log/files/2011/08/meta-logged-out.gif" alt="" title="meta-logged-out" width="220" height="109" class="aligncenter size-full wp-image-829" />](http://jeehon.info/log/files/2011/08/meta-logged-out.gif)
  
（如果你已经登录了）
  
[<img src="http://jeehon.info/log/files/2011/08/meta-logged-in.gif" alt="" title="meta-logged-in" width="220" height="109" class="aligncenter size-full wp-image-830" />](http://jeehon.info/log/files/2011/08/meta-logged-in.gif)

**发生了什么事？**

你开始了一个列表项(**LI**)和一个**Meta**子标题，在子标题的下面，你放了一个无序列表，你将每一个链接都放在列表项(**LI**)标签里。

**wp_register()**会自动生成**<li>**、**</li>**标签，当你没有登录时，它会显示**登录链接**，当你已经登录了，它会显示**站点管理链接**。**wp_loginout()**不会自动生成列表项标签，所以我们给它加了列表项标签，当你没有登录的时候，将会显示**登录链接**，当你已经登录，将会显示**登出链接**。至此，**wp_meta()**并没有实现任何东西，它在网页和源代码里都是不可见的，现在不要考虑**wp_meta()**函数，迟些时候你会用到它的。

就这些了，你已经完成了功能块的内容同时也完成了常规的侧边栏内容。

[返回WordPress主题系列教程的开始](http://jeehon.info/log/2011/08/04/%E6%83%B3%E5%88%B6%E4%BD%9Cwordpress%E4%B8%BB%E9%A2%98%EF%BC%9F/)