---
id: 53
title: 'WP主题教程 #6：侧边栏（Sidebar）'
date: 2011-09-03T13:21:58+00:00
author: jeehon
layout: post
guid: http://jeehon.info/themes/?p=53
secondary: theme
permalink: /theme/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b-6%ef%bc%9a%e4%be%a7%e8%be%b9%e6%a0%8f%ef%bc%88sidebar%ef%bc%89/
categories:
  - WP themes
tags:
  - sidebar
  - theme
  - wordpress
  - 主题
---
是不是已经期待侧边栏的内容了啊？咋一看，你也许觉得侧边栏比较难，但是实际上它并不是很复杂。一旦你熟悉了它的结构，你就能够快速的编写它并且给它添加样式了。

在跳到侧边栏之前，你的[index.php](http://jeehon.info/samples/index-2007-march-02.txt)文件的内容应该和链接中的文本内容一致。

不要忘记打开Xampp控制台。

**第一步**：我们先将侧边栏里所有的东西用一个class等于sidebar的框包裹住。将下面这段代码放在container框的下面，**</body>**的上面：
  
<strong style="margin-left:2em;"><div class=”sidebar”></strong>
  
<strong style="margin-left:2em;"></div></strong>
  
[<img src="http://jeehon.info/log/files/2011/08/class-sidebar.gif" alt="" title="class-sidebar" width="329" height="141" class="aligncenter size-full wp-image-791" />](http://jeehon.info/log/files/2011/08/class-sidebar.gif)

**第二步**：在你的新侧边栏框里加入一个无序列表。

**<ul>** &#8212; 无序列表的开始

**</ul>** &#8212; 无序列表的结束
  
[<img src="http://jeehon.info/log/files/2011/08/ul.gif" alt="" title="ul" width="329" height="141" class="aligncenter size-full wp-image-792" />](http://jeehon.info/log/files/2011/08/ul.gif)

**第三步**：在无序列表（ul）里加入一个列表项（li）并且在列表项（li）中放一个子标题。
  
<strong style="margin-left:2em;"><li><h2><?php _e(‘Categories’); ?></h2></strong>**</li>**
  
[<img src="http://jeehon.info/log/files/2011/08/li-categories.gif" alt="" title="li-categories" width="371" height="92" class="aligncenter size-full wp-image-793" />](http://jeehon.info/log/files/2011/08/li-categories.gif)
  
注意要在**<li>**和**</li>**标签前用tab键来空出间距以便代码的组织。

**<li>** &#8212; 列表项的开始
  
<strong style="margin-left:2em;"><h2></strong> &#8212; 子标题开始
  
<strong style="margin-left:2em;"><?php _e(‘Categories’); ?></strong> &#8212; 输出字母Categories
  
<strong style="margin-left:2em;"></h2></strong> &#8212; 子标题结束
  
<strong style="margin-left:2em;"></li></strong> &#8212; 列表项结束

再次声明，在单词Categories两边可以不加**<?php e(‘ ‘); ?>**。如果你现在做的主题是自己使用，那么你的子标题是**<h2>Categories</h2>**没有任何关系。

保存index.php文件然后刷新浏览器页面。你会看到Categories子标题的结构如下所示：
  
[<img src="http://jeehon.info/log/files/2011/08/h2-categories.gif" alt="" title="h2-categories" width="254" height="140" class="aligncenter size-full wp-image-794" />](http://jeehon.info/log/files/2011/08/h2-categories.gif)
  
你的子标题前的那个点暗示着这个子标题是放在一个列表项（li）里的。如果你的无序列表（ul）里有两个列表项，就会出现两个点。这就像做笔记一样，在每个项目前加上一个点。

**第四步**：

在列表项里加上下面的代码：
  
<strong style="margin-left:2em;"><ul></strong>
  
<strong style="margin-left:2em;"><?php wp_list_cats(‘sort_column=name&optioncount=1&hierarchical=0′); ?></strong>
  
<strong style="margin-left:2em;"></ul></strong>
  
[<img src="http://jeehon.info/log/files/2011/08/category-links-add.gif" alt="" title="category-links-add" width="708" height="132" class="aligncenter size-full wp-image-795" />](http://jeehon.info/log/files/2011/08/category-links-add.gif)
  
下面是那些代码的作用：
  
<strong style="margin-left:2em;"><ul></strong> &#8212; 无序列表的开始
  
<strong style="margin-left:2em;"><?php wp_list_cats(); ?></strong> &#8212; 调用分类链接列表
  
<strong style="margin-left:2em;"></ul></strong> &#8212; 无序列表结束
  
保存文件然后刷新页面，下面是我的分类链接的样子：
  
[<img src="http://jeehon.info/log/files/2011/08/category-links.gif" alt="" title="category-links" width="211" height="183" class="aligncenter size-full wp-image-796" />](http://jeehon.info/log/files/2011/08/category-links.gif)
  
你的默认分类是**未分类**。如果你没有发表属于不同分类的文章，你的分类链接列表只有未分类这一个。

**进一步解释**：

  * **sort_colume=name** &#8212; 将分类链接按字母顺序排列
  * **optioncount=1** &#8212; 显示每个分类中的文章数
  * **hierarchial=0** &#8212; 禁止将子分类(sub-categories)按照子列表项(sub-list-items)方式显示，所以我的分类列表中的**Sub Category**链接也列在列表的第一级了。
  * **&** &#8212; 每当你新加入一个属性，你都需要在它之前输入一个**&**来将它与之前的属性分开。就像**sort_colume**和**optioncount**之间的**&**一样。

为什么不在**<?php wp\_list\_cats(); ?>**两边也加上**<li>**和**</li>**呢:

当你用**wp\_list\_cats()**调用分类链接列表时，就会在每个链接上自动加上**<li>**和**</li>**标签。转到你的浏览器，点击**查看源代码**，在弹出的窗口中转到结尾处看一下分类链接列表的源代码，你会发现每个链接都被一个列表项标签包裹住了。

当你修改侧边栏时，使用无序列表或者列表项时，一定要记住下面的规则：

**规则#1**：按照顺序关闭你曾打开的标签。
  
[<img src="http://jeehon.info/log/files/2011/08/right-and-wrong-of-closing1.gif" alt="" title="right-and-wrong-of-closing" width="196" height="330" class="aligncenter size-full wp-image-797" />](http://jeehon.info/log/files/2011/08/right-and-wrong-of-closing1.gif)

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)