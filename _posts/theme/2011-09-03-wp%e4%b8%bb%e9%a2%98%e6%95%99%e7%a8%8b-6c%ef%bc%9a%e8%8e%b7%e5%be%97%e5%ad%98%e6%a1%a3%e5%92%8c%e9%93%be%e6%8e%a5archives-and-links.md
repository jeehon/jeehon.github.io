---
id: 57
title: 'WP主题教程 #6c：获得存档和链接(Archives and Links)'
date: 2011-09-03T13:24:18+00:00
author: jeehon
layout: theme-post
guid: http://jeehon.info/themes/?p=57
secondary: themes
permalink: /themes/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b-6c%ef%bc%9a%e8%8e%b7%e5%be%97%e5%ad%98%e6%a1%a3%e5%92%8c%e9%93%be%e6%8e%a5archives-and-links/
categories:
  - WP themes
tags:
  - archive
  - theme
  - wordpress
  - 主题
---
今天的教程非常的简单，你将学习怎样调用一个**存档链接列表**和博客的**友情链接**。明天的教程是**日历**和**搜索表单**。

在我们开始之前，我想解释一下为什么我要把我的教程分解成为一个个很小的节。那些自学的人可能需要花几个月来消化吸收你现在学的所有的东西，在我第一次教你这些的时候你就全懂了是非常重要的，这样你就不用回头再重新学一遍了。

**第一步**：添加存档链接

在侧边栏区的分类列表的下面输入下面的代码：
  
<strong style="margin-left:2em;"><li><h2><?php _e(‘Archives’); ?></h2></strong>
  
<strong style="margin-left:2em;"><ul></strong>
  
<strong style="margin-left:4em;"><?php wp_get_archives(‘type=monthly’); ?></strong>
  
<strong style="margin-left:2em;"></ul></strong>
  
<strong style="margin-left:2em;"></li></strong>

在适当的位置用tab键来增加缩进以便于代码组织。看一下你的代码是否跟我的一致：
  
[<img src="http://jeehon.info/log/files/2011/08/add-archives.gif" alt="" title="add-archives" width="496" height="193" class="aligncenter size-full wp-image-815" />](http://jeehon.info/log/files/2011/08/add-archives.gif)
  
保存文件然后刷新页面，下面就是显示的效果：
  
[<img src="http://jeehon.info/log/files/2011/08/archives.gif" alt="" title="archives" width="224" height="210" class="aligncenter size-full wp-image-816" />](http://jeehon.info/log/files/2011/08/archives.gif)

**发生了什么事？**

你用PHP的函数**wp\_get\_archives()**以及它的**type属性**和**monthly值**来调用了每个月的存档链接。

  * **<li>** &#8212; 列表项的开始
  * **<h2>** &#8212; 子标题开始
  * **<?php _e(‘Archives’); ?>** &#8212; 子标题的文字内容
  * **</h2>** &#8212; 子标题结束
  * **<ul>** &#8212; 在列表项里的子标题下面开始一个无序列表
  * **<?php wp\_get\_archives(‘type=monthly’); ?>** &#8212; 调用每个月的存档链接，把每个链接都放在一对**<li>**、**</li>**标签里。如果你查看页面源代码的话，你会发现**wp\_get\_archives()**自动给每个链接生成了列表项(**LI**)，就像**wp\_list\_cats()**函数一样。
  * **</ul>** &#8212; 结束子标题后面的无序列表
  * **</li>** &#8212; 结束列表项

**第二步**：添加博客友情链接

在存档链接列表的后面输入下面的代码：
  
<strong style="margin-left:2em;"><?php get_links_list(); ?></strong>
  
[<img src="http://jeehon.info/log/files/2011/08/add-blogroll.gif" alt="" title="add-blogroll" width="494" height="140" class="aligncenter size-full wp-image-817" />](http://jeehon.info/log/files/2011/08/add-blogroll.gif)
  
保存文件然后刷新页面，下面就是最终的效果：
  
[<img src="http://jeehon.info/log/files/2011/08/blogroll.gif" alt="" title="blogroll" width="263" height="285" class="aligncenter size-full wp-image-818" />](http://jeehon.info/log/files/2011/08/blogroll.gif)
  
默认情况下，我的友情链接和你的是一样的。下面是页面源代码中友情链接的样子：
  
[<img src="http://jeehon.info/log/files/2011/08/blogroll-source.gif" alt="" title="blogroll-source" width="473" height="209" class="aligncenter size-full wp-image-819" />](http://jeehon.info/log/files/2011/08/blogroll-source.gif)

上面的代码并没有严格的缩进因为这是**get\_links\_list()**函数自动为你生成的，就像我们在昨天的教程里学过的**wp\_list\_pages()**函数一样。但是上面的代码还是遵守规则1的：按照顺序关闭你打开的标签。为了便于你观察，我圈出了列表项和无序列表标签。

这就是今天教程的全部内容了，明天来学习日历和搜索表单的内容。

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)