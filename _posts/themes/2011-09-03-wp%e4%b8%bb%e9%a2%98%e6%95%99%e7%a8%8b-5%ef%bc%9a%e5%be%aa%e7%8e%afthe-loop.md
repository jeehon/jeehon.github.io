---
id: 42
title: wp主题教程-5：循环(The Loop)
date: 2011-09-03T13:11:11+00:00
author: jeehon
layout: theme-post
guid: http://jeehon.info/themes/?p=42
secondary: themes
permalink: /themes/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b-5%ef%bc%9a%e5%be%aa%e7%8e%afthe-loop/
categories:
  - WP themes
tags:
  - loop
  - theme
  - wordpress
  - 主题
---
**循环**是用来调用你博客的文章，它是PHP代码中最重要的部分。现在你应该知道在开始本节之前你应该做什么吧，快去把前面几篇读一下。现在让我们回顾一下至今都学了什么：

  * [一个WordPress主题的规则、结构和层次](http://jeehon.info/themes/2011/09/03/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B1%EF%BC%9A%E5%BC%95%E8%A8%80intro/)
  * [你的每一页都有哪些东西构成](http://jeehon.info/themes/2011/09/03/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-2%EF%BC%9A%E6%A8%A1%E6%9D%BF%E6%96%87%E4%BB%B6%E5%92%8C%E6%A8%A1%E6%9D%BFtemplate-files-and-templates/)
  * [如何安装你的主题](http://jeehon.info/themes/2011/09/03/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-3%EF%BC%9A%E5%BC%80%E5%A7%8Bindex-phpstarting-index-php/)
  * [如何调用你博客的标题并且把它变成一个链接](http://jeehon.info/themes/2011/09/03/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-4%EF%BC%9Aheader%E6%A8%A1%E6%9D%BFheader-template/)
  * [如何调用描述信息并且将header与其他部分区分开](http://jeehon.info/themes/2011/09/03/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-4b%EF%BC%9Aheader%E6%A8%A1%E6%9D%BF%E7%BB%ADheader-template-continues/)

**让我们开始今天的教程#5：**

现在，你应该打开了Xampp控制台，打开了“tutorial”主题文件夹，浏览器里打开了http://localhost/wordpress，也用notepad打开了index.php了吧。

你的index.php文件中应该有以下内容：
  
[<img src="http://jeehon.info/log/files/2011/08/indexphp-291x300.gif" alt="" title="indexphp" width="291" height="300" class="aligncenter size-medium wp-image-730" />](http://jeehon.info/log/files/2011/08/indexphp.gif)
  
记住，为了学习这些代码，要亲自敲所有的代码，**而不是复制和黏贴**。

**第一步：**

在header部分的下面加上一个DIV（不可见的框），并且给它赋值一个“container”的ID，就像下面这样：

**<div id=”container”>**

**</div>**

DIV是干什么的？它是用于将你的内容部分和它后面像侧边栏和页脚等的其他内容分开的。

**第二步**：在DIV标签里加入如下的代码，请正确的将你看到的内容输入到相应位置，如果出现任何错误就重新输入。

**<?php if(have\_posts()) : ?><?php while(have\_posts()) : the_post(); ?>**
  
<span style="margin-left:2em;"><strong><?php endwhile; ?></strong></span>
  
<span style="margin-left:2em;"><strong><?php endif; ?></strong></span>

此刻，对于你来说，找出这段代码有哪些部分应该比说出每一部分是什么、用来干什么要简单的多吧。你刚才输入的是WordPress中的**循环**。在我解释这些代码都是干什么的之前，你应该有如下的代码：
  
[<img src="http://jeehon.info/log/files/2011/08/the-loop-300x185.gif" alt="" title="the-loop" width="300" height="185" class="aligncenter size-medium wp-image-731" />](http://jeehon.info/log/files/2011/08/the-loop.gif)

也许你注意到了我对文本框里的每行代码都进行了缩进，每一行都空出很多，这是为了组织代码，一行写不下这么多代码，你需要将代码组织成这样。稍后你就会知道每一部分都是什么意思以及它们之间是如何相关联的。请用tabs键来缩进，而不要用空格键。

**刚才发生了什么？**

  * **if(have_posts())** &#8212; 检查你是否有文章
  * **while(have_posts())** &#8212; 如果你有一些文章，循环你的每一篇文章，并且执行the_post()
  * **the_post()** &#8212; 调用你的文章并且展示出来
  * **endwhile;** &#8212; 遵循规则#1，结束**while()**循环
  * **endif;** &#8212; 结束if()
  * **注意**：并不是所有的代码段都需要开始和结束两部分的，一些代码段可以自我结束，这就解释了**have_post()**和**the_post();**。因为**the_post();**在**if()**和**while()**的外面，所以它需要自己的分号来结束自己。

**第三步**：在前面的教程中，你已经学过了如何通过**bloginfo(‘name’)**来调用博客的标题了，现在你该学如何在**循环**里调用每一篇文章的标题。

在**the_post(); ?>**之后和**<?php endwhile; ?>**之前加入**<?php the_title(); ?>**
  
[<img src="http://jeehon.info/log/files/2011/08/the-title-226x300.gif" alt="" title="the-title" width="226" height="300" class="aligncenter size-medium wp-image-732" />](http://jeehon.info/log/files/2011/08/the-title.gif)

保存index.php文件，刷新页面。你将会在博客的描述下面看到**“Hello World”**。默认情况下，你的博客仅仅只有一篇文章。对我来说，我的测试博客里有很多文章，所以我有很多文章标题。又因为我用的文章标题都相同，也没有任何的组织，所以它看起来就是一长行的Hello World。
  
[<img src="http://jeehon.info/log/files/2011/08/hello-world-300x174.gif" alt="" title="hello-world" width="300" height="174" class="aligncenter size-medium wp-image-733" />](http://jeehon.info/log/files/2011/08/hello-world.gif)

**第四步**：将你的文章标题变成**链接**。还记得你是怎样将博客的标题变成链接的吗？同样的道理。在**<?php the_title(); ?>**两边加上**<a href=”#”>**和**</a>**

保存index.php文件，刷新页面。现在你的标题已经变成标题链接了，但是它们并不指向任何地方。为了让每一个标题指向正确的文章，你需要将#替换为**the_permalink()**.

<a href=”**<?php the_permalink(); ?>**“><?php the_title(); ?></a>

**the_permalink()**是调用每一篇文章的地址或者位置的PHP方法。保存并刷新页面。如果你仅有一个叫做Hello World的标题，将鼠标停留在标题链接上，看你浏览器底部的状态栏，显示的已经不再是**http://localhost/wordpress/#**了。

如果你有远不止一个标题连接，你将会发现每个标题都链接到一个不同的文章或者网页。但是我们的文章标题仍在同一行，为了把它们分开，可以在链接代码两边加上**<h2>**和**</h2>**。

**<h2>**<a href=”<?php the\_permalink(); ?>”><?php the\_title(); ?></a>**</h2>**

还记得博客的标题是**H1**吗？那是你网页的标题，**H2**用作子标题。既然你的标题链接是一个子标题，那么每一个标题链接都会占用一行。保存index.php然后刷新页面来看有什么变化。
  
[<img src="http://jeehon.info/log/files/2011/08/post-title-heading-300x151.gif" alt="" title="post-title-heading" width="300" height="151" class="aligncenter size-medium wp-image-734" />](http://jeehon.info/log/files/2011/08/post-title-heading.gif)
  
这是本节的结尾了，**你现在应该有以下代码了：**
  
[<img src="http://jeehon.info/log/files/2011/08/end-lesson-5-300x175.gif" alt="" title="end-lesson-5" width="300" height="175" class="aligncenter size-medium wp-image-735" />](http://jeehon.info/log/files/2011/08/end-lesson-5.gif)

**注意**：如果你还没有准备好本节的内容，请先写一些测试的文章来测试你的主题。转到http://localhost/wordpress/wp-login.php，登录，然后在“**Post**”栏点击“**Add New**”，写一篇文章，重复几次。你可以把它们都命名为**Hello World**或者给它们一个唯一的名字。

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)