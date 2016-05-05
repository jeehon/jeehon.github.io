---
id: 48
title: 'WP主题教程 #5d：Eles,文章ID，链接标题(Else, Post ID, Link Title)'
date: 2011-09-03T13:19:03+00:00
author: jeehon
layout: post
guid: http://jeehon.info/themes/?p=48
secondary: theme
permalink: /theme/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b-5d%ef%bc%9aeles%e6%96%87%e7%ab%a0id%ef%bc%8c%e9%93%be%e6%8e%a5%e6%a0%87%e9%a2%98else-post-id-link-title/
categories:
  - WP themes
tags:
  - theme
  - wordpress
  - 主题
---
本教程包括三个额外的可以加到每篇文章的选项：**Else**、**文章ID**（post ID）和**链接标题的值**（link title value）。虽然它们是可选的，但是我的每一个免费的主题里都有它们，因为你不知道人们拿你的主题做什么用。

首先，不要忘了打开Xampp控制台。

**第一步**：

在**<?php endwhile; ?>**下面输入：
  
<strong style="margin-left:2em;"><?php else : ?></strong>
  
<strong style="margin-left:2em;"><div class=”post”></strong>
  
<strong style="margin-left:4em;"><h2><?php _e(‘Not Found’); ?></h2></strong>
  
<strong style="margin-left:2em;"></div></strong>

如下所示：（注意缩进）
  
[<img src="http://jeehon.info/log/files/2011/08/else.gif" alt="" title="else" width="449" height="164" class="aligncenter size-full wp-image-773" />](http://jeehon.info/log/files/2011/08/else.gif)
  
保存文件，但是你会发现没有任何变化。我们得回到教程#5：循环来解释刚才输入的是什么。

下面是这个循环：
  
<strong style="margin-left:2em;"><?php if(have_posts()) : ?><?php while(have_posts()) : the_post(); ?></strong>
  
<strong style="margin-left:2em;"><?php endwhile; ?></strong>
  
<strong style="margin-left:2em;"><?php endif; ?></strong>

首先，**if(have_posts())**用来检查你的博客里是否有一些文章，然后，**while(have_posts())**（当有文章时）执行**the_post()**来调用你的文章。**Else**后面跟的是当你没有任何文章时要做的事。**while()**和**endwhile;**嵌套在**if()**和**else:**里，所以**<?php else : ?>**得放在**<?php endwhile; ?>**后面。

既然你已经知道了**else**是用来干什么的，那么当你没有任何文章或者WordPress找不到文章时，你会让WordPress显示什么呢？你让WordPress显示一个出错的信息**Not Found**，这个信息可以是你喜欢的任何语句。你可以下载一个我的主题，看一下**index.php**里的提示信息做一个参考。

在上面的例子中，错误信息**Not Found**应该放在**<?php _e(‘ ‘); ?>**里，就像昨天告诉你的那样，这个不是必须的。

整个提示信息和代码应该放在一对**<h2>**和**</h2>**标签里，这个也不是必须的，你可以简单的写成：
  
<strong style="margin-left:2em;"><div class=”post”></strong>
  
<strong style="margin-left:2em;">Not Found</strong>
  
<strong style="margin-left:2em;"></div></strong>

但是使用**<h2>**（子标题）标签会让错误信息更加显眼，这样你的访问者很容易就知道网页上没有任何信息。

**<div class=”post”>**和**</div>**是干什么的呢？你应该不希望自己的错误信息裹在页面里分不清吧？你给每篇文章加上了**<div class=”post”>****</div>**，同理，虽然错误信息不是一篇真正存在的文章，但是它和文章有同样的意义。

**第二步**：

在**<div class=”post”>**里加上**id=”post-<?php the_ID(); ?>”**
  
[<img src="http://jeehon.info/log/files/2011/08/post-id.gif" alt="" title="post-id" width="487" height="35" class="aligncenter size-full wp-image-774" />](http://jeehon.info/log/files/2011/08/post-id.gif)
  
保存文件然后刷新页面。点击浏览器上的“**查看**” &#8211;> 选择“**页面源代码**”。这时你会看到每篇文章都有一个数字或者称作文章ID。**the_ID()**仅仅是用来调用每篇文章的id。

为什么要用id呢？这是为了单独定制每篇文章的外观。稍后，当你用**style.css**文件来控制文章的样式，每篇文章都会有同样的样式。通过每篇文章唯一的**ID**，你可以定位到一篇文章然后给它添加样式，使它与其他文章显示的效果不一样。如果没有ID，在**style.css**文件中你没有办法把每篇文章区分出来。

你怎么能同时给一个**DIV**或者不可见框赋**class**和**id**呢？**DIV**是个标签，**class**是一个属性，**id**也是一个属性。每个标签都可以有很多属性，所以每个**DIV**可以拥有**class**和**id**两个属性。（**注意**：**id**是xhtml的一个属性，而**the_ID()**是一个PHP函数，它们是不同的。）

**第三步**：

在文章标题链接上加上**title=”<?php the_title(); ?>”**
  
[<img src="http://jeehon.info/log/files/2011/08/the-title1.gif" alt="" title="the-title1" width="480" height="43" class="aligncenter size-full wp-image-775" />](http://jeehon.info/log/files/2011/08/the-title1.gif)
  
上面的屏幕截图只是完整代码的一部分，它是为了指导你应该把代码加在哪个地方。保存文件然后刷新网页，再去看源代码。当你在看它的源代码时，找一下**文章标题链接**。如果你的标题链接是**Hello World**，那么在它的左边应该有**title=”Hello World”**。

**title=””**是**<a>**标签的另一个xhtml属性。放在双引号里的就是你的链接的描述。在这种情况下，每篇文章的标题也是链接的描述，所以在上面的代码中你才需要把**the_title()**加上。

如果你不把**the_title()**作为**title=””**的一个值，那么你的每篇文章标题链接的描述都相同了。例如你用**title=”Click me”**代替**the_title()**，每篇文章标题链接的描述都变成**Click me**了。

现在，转到你的页面，把鼠标放在一篇文章的标题链接上，将会弹出一个描述，这就是你刚才加的东西。当其他站点检索你的博客时，给你的链接加上描述是非常有用的，拿Technorati.com作为例子来说吧，每当你发表一篇文章，WordPress就会告知Technorati（一种blog搜索引擎）和其他站点你的博客有更新，Technorati然后就会去扫描你的博客，然后获得一个你文章的索引，这个索引就包括链接标题的描述。

明天的教程包括下一页和前一页链接。

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)