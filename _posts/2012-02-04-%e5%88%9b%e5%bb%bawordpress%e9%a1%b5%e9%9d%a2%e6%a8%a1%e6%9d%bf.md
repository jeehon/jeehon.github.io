---
id: 1030
title: 创建WordPress页面模板
date: 2012-02-04T10:00:59+00:00
author: jeehon
layout: post
categories:
  - PHP
  - wordpress
  - 分享
  - 学习
tags:
  - page
  - template
  - wordpress
  - 页面模板
---
### 什么是页面？

页面跟日志很相似，它们都有标题和内容，并且通过使用外观模板使外观风格保持一致，例如“关于博主”页，常见的页面还有版权、相关法律信息、转载许可、公司信息及可访性声明等。页面的内容较之日志来说较少受到时间影响，可被组织为页面和子页面的树形结构，并且可以使用各种页面模板。

### 如何创建页面？

当你登入WordPress之后，在“控制面板”->“页面”->“新建页面”里可以新建一个页面，如下图所示：
  
[<img src="http://jeehon.info/log/files/2012/02/add-page.jpg" alt="" title="add-page" width="153" height="195" class="aligncenter size-full wp-image-1032" />](http://jeehon.info/log/files/2012/02/add-page.jpg)

### 为什么要创建WordPress页面模板？

假如你的站点有侧边栏，而你不想让某些页面有侧边栏；假如你想在页面里显示评论最多的10篇文章；假如一个多用户的站点想展示某一个或者几个用户的文章等等你希望的效果，WordPress页面模板可以帮助你。<!--more-->

### 如何创建WordPress页面模板？

我们以一个例子作为说明，看一下创建WordPress页面模板的过程，等这个例子说完，你会发现原来一切是那么的简单。
  
假如我现在的需求是在一个新的页面里显示评论最多的10篇文章，我们可以通过页面模板来实现。
  
首先，在你的主题文件夹中新建一个php文件，如favorite.php，文件的名称可以任意修改。在favorite.php文件的头部输入一下内容：

    <?php
    /**
     * Template Name: favorite
     * Description: favorite template shows the favorite posts
     *
     * @package WordPress
     * @subpackage WhitePaper
     * @since WhitePaper 1.0
     */
    ?>

**Template Name**——页面模板的名称，这个是必须的，会在“新建页面”->“页面属性”->“模板”里显示。
  
**Description**——页面模板的描述，可以省略。
  
**@package**——页面模板所在的包，可以省略。
  
**@subpackage**——页面模板所在的子包，可以省略。
  
**@since**——该页面模板是在主题的第几个版本中加入的，可以省略。

此时，在“新建页面”->“页面属性”->“模板”里，你已经可以看到新建的favorite模板了，如下图所示：
  
[<img src="http://jeehon.info/log/files/2012/02/favorite.jpg" alt="" title="favorite" width="301" height="272" class="aligncenter size-full wp-image-1040" />](http://jeehon.info/log/files/2012/02/favorite.jpg)
  
接下来就是实现该模板的功能了。紧接着上面的代码，输入以下内容：

    <?php get_header(); ?>
    <?php get_sidebar(); ?>
    <div id="content">
    	<?php global $wpdb;
    	$request = "SELECT * FROM $wpdb->posts";
    	$request .= " ORDER BY comment_count DESC LIMIT 0 , 10";
    	$posts = $wpdb->get_results($request);
    	foreach ($posts as $post) 
    	{
    		get_template_part( 'content', 'page');
    	}
    	?>
    </div><!-- #content -->
    <?php get_footer(); ?>

**<?php get_header(); ?>**——调用header模板。
  
**<?php get_sidebar(); ?>**——调用sidebar模板。
  
**id为content的div中的php代码**——从数据库中找到评论最多的10篇文章，并且将它们显示出来。
  
**get\_template\_part( &#8216;content&#8217;, &#8216;page&#8217;)**——该函数的作用是调用content-page.php模板，该函数的具体使用方法可以参考[Function Reference/get template part](http://codex.wordpress.org/Function_Reference/get_template_part)
  
在content-page.php模板中，定义每一篇文章的内容。下面是一个简单的例子：

    <div class="entry">
    	<h2 class="entrytitle">
    	     <a href="<?php the_permalink() ?>"><?php the_title(); ?></a>
    	</h2>
    	<div class="entrymeta">
    		<span class="author"><?php the_author_link(); ?></span>
    		<span class="category"><?php the_category(', ') ?></span>
    	</div>
    	<div class="entrybody">
    	    <?php the_content('Read the rest of this entry &raquo;'); ?>
    	</div>
    </div>

好了，创建WordPress页面模板已经结束了，当你新建一个页面，并且选择favorite作为模板时，打开这个页面后，显示的就是评论最多的10篇文章了。

### 参考文献：

[Pages](http://codex.wordpress.org/Pages)
  
[Function Reference/get template part](http://codex.wordpress.org/Function_Reference/get_template_part)