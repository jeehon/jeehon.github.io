---
id: 44
title: wp主题教程-5b：正文(The Content)
date: 2011-09-03T13:12:22+00:00
author: jeehon
layout: post
guid: http://jeehon.info/themes/?p=44
secondary: theme
permalink: /theme/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b-5b%ef%bc%9a%e6%ad%a3%e6%96%87the-content/
categories:
  - WP themes
tags:
  - content
  - theme
  - wordpress
  - 主题
---
在本节，我们将学习那些真正重要的东西。**如何获得你博客的正文来显示呢？**然后，你需要加更多的不可见框或者DIVs来将**正文**与昨天我们调用的**文章标题**分开。

（注意：昨天的教程非常非常的重要，如果你没有完全明白我昨天教的，请重新读一遍然后问我问题，直到你完全清楚为止。）

继续今天的教程，打开**Xampp控制台**，打开“**tutorial**”主题文件夹，打开一个新的**浏览器窗口**并转到**http://localhost/wordpress**地址，然后用Notepad打开**index.php**文件。

**第一步：**

在文章标题代码的后面加上：**<?php the_content(); ?>**
  
[<img src="http://jeehon.info/log/files/2011/08/adding-the-content-300x151.gif" alt="" title="adding-the-content" width="300" height="151" class="aligncenter size-medium wp-image-746" />](http://jeehon.info/log/files/2011/08/adding-the-content.gif)
  
保存notepad里的内容并刷新页面，你会看到你的博客标题下面出现了一些文本。
  
[<img src="http://jeehon.info/log/files/2011/08/refreshed1-300x210.gif" alt="" title="refreshed1" width="300" height="210" class="aligncenter size-medium wp-image-747" />](http://jeehon.info/log/files/2011/08/refreshed1.gif)

**刚才发生了什么？为什么会这样呢？**

你通过PHP方法**the_content()**调用了**文章的正文**。现在，你的正文仅仅只是一长行的文本，并且总是靠在窗口的右边显示，因为你并没有给它添加样式。还记得style.css文件吗？稍后，我们就会用这个文件来控制每个元素的显示。

昨天，我要求你新建了一些测试用的文章来看多个文章列表的样子，如果你还没有做，马上完成它，然后转到首页。多篇文章应该是这样的：
  
[<img src="http://jeehon.info/log/files/2011/08/multiple-posts.gif" alt="" title="multiple-posts" width="150" height="233" class="aligncenter size-full wp-image-748" />](http://jeehon.info/log/files/2011/08/multiple-posts.gif)
  
接着往下看…

回到你的浏览器，点击“**查看**”然后选择“**页面源代码**”，此时会弹出一个写有代码的窗口。如果你使用的是Internet Explorer，将会弹出一个notepad窗口。
  
[<img src="http://jeehon.info/log/files/2011/08/viewsource-300x248.gif" alt="" title="viewsource" width="300" height="248" class="aligncenter size-medium wp-image-749" />](http://jeehon.info/log/files/2011/08/viewsource.gif)
  
我使用的是**FireFox浏览器**，下面就是弹出的代码在**FireFox**中的样子：
  
[<img src="http://jeehon.info/log/files/2011/08/paragraph-tags.gif" alt="" title="paragraph-tags" width="291" height="354" class="aligncenter size-full wp-image-750" />](http://jeehon.info/log/files/2011/08/paragraph-tags.gif)

注意到你的**index.php**文件和**源代码文件**的区别了吗？源代码文件中的所有的文本、图片等都是通过**the_content()**调用的。多有用啊！本节不需要博客系统或特殊的WordPress模板系统，你都可以自己编写这些文本和图片。

你也注意到我圈出来的xhtml中的开始和结束的P标签了吧。它们没有在你的index.php文件中出现，却在你打开的源代码文件中出现了。

**P标签，为什么会这样？怎么出现这种情况的？**

**为什么会这样** &#8212; 当你写文章时，你每空出一行就是一个段落，你需要一种方式来显示它吧。每个段落都放在一对**P**标签里，这才会在两个段落之间出现空行。**怎么出现这种情况？** &#8212; 很简单，WordPress模板系统自动帮你生成了**P**标签。

**第二步：**

在**the_content()**的两边放置一个不可见框（DIV），并且给它的**class**赋值“**entry**”，如下所示：
  
<span style="margin-left:4em;"><strong><div class=”entry”></strong></span>
  
<span style="margin-left:4em;"><strong></div></strong></span>

你应该有如下内容：
  
[<img src="http://jeehon.info/log/files/2011/08/class-entry.gif" alt="" title="class-entry" width="352" height="291" class="aligncenter size-full wp-image-751" />](http://jeehon.info/log/files/2011/08/class-entry.gif)
  
保存文件并刷新页面，如果你再去查看页面源代码，你将会发现在你的**文章正文**被一个class等于“entry”的DIV包裹着。

**为什么会这样做？**

首先，这样可以告诉我们**文章标题**从哪儿结束，**文章正文**从哪儿开始。其次，这可以帮助我们在**style.css**文件中给它添加样式。如果你想给它添加样式，你可以给你的文章正文添加样式并且不会影响其他部分。

****id**和**class**有什么区别？**

至今为止，对于每个不可见框或者DIV，你都是用**id**来给它命名。还记得**id=”header”**吧？那么，这有什么不同呢？**id**是唯一的，而**class**不是。如果你通篇看一下你的源代码，你会发现仅仅有一个**id=”header**”和一个**id=”container”**，但是会有很多个**class=”entry”**。

****header**和**container**能变成**class**而不是**id**吗？当然可以。**

请牢牢记住：相同的**id**不能同时出现两次。例如，在同一个页面，你不能有两个**id=”header”**。如果你想像用文章正文那样重复用一些名字，那就用**class**。

**第三步：**

把你的博客标题和正文用一个DIV裹住，并且给它一个**class=”post”**：
  
<span style="margin-left:4em;"><strong><div class=”post”></strong></span>
  
<span style="margin-left:4em;"><strong></div></strong></span>

(class和id的名字可以任意取，你可以给它们命名为after或者你喜欢的食物，但是post和entry简洁又容易记忆，对吧？)

此时，你有如下的内容了：
  
[<img src="http://jeehon.info/log/files/2011/08/class-post.gif" alt="" title="class-post" width="352" height="291" class="aligncenter size-full wp-image-752" />](http://jeehon.info/log/files/2011/08/class-post.gif)
  
下面是缩进后的版本：
  
[<img src="http://jeehon.info/log/files/2011/08/indent.gif" alt="" title="indent" width="303" height="193" class="aligncenter size-full wp-image-753" />](http://jeehon.info/log/files/2011/08/indent.gif)
  
在**index.php**文件中，我用tab键来增加缩进而不是使用空格键。**为什么要缩进呢？**不像我的屏幕截图那样，你的代码并没有绿色和红色的高亮（highlight）。你需要一种方式来组织你的代码，通过缩进，你可以很容易区分每个结束的**</div>**与哪个开始的**<div>**匹配。

保存文件后刷新页面，然后再去看一下源代码的变化。

**为什么要再加一个DIV来把文章标题和正文包裹起来呢？**

你加的**class=”entry”**的DIV是用来将**文章正文**与**文章标题**分开，**class=”post”**的DIV则是用来区分开每篇文章的。
  
[<img src="http://jeehon.info/log/files/2011/08/post-1-and-2.gif" alt="" title="post-1-and-2" width="393" height="570" class="aligncenter size-full wp-image-754" />](http://jeehon.info/log/files/2011/08/post-1-and-2.gif)

这就是今天的全部内容了，内容有点多，可能难以消化吸收，所以当你有不懂的地方请主动问问题。明天我们将学习文章的**日期**、**分类**和**评论**的相关内容。

如果你在我的文章中发现错误或者一些矛盾的地方，请尽快告诉我，这样我就能马上修改它们了。还有，你觉得至今为止我的教程怎样？需要我讲的更具体点吗？或者你觉得这些教程太冗长了？

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)