---
id: 83
title: 'WP主题教程#16：评论模板（Comments Template）'
date: 2011-09-03T13:45:05+00:00
author: jeehon
layout: post
guid: http://jeehon.info/themes/?p=83
secondary: theme
permalink: /theme/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b16%ef%bc%9a%e8%af%84%e8%ae%ba%e6%a8%a1%e6%9d%bf%ef%bc%88comments-template%ef%bc%89/
categories:
  - WP themes
tags:
  - comment
  - theme
  - wordpress
  - 主题
---
**你基本上已经完成这一系列的教程啦**，这是**最后一个教程**了。今天，你要学习的内容对于所有博客来说都非常重要：**评论模板**。在我看来如果一个博客不允许读者留言的话，那么它就不能称为是博客，也许对于一些人来说评论不是很重要，但是对于我来说如果博客不能评论那就太奇怪了。

你应该知道：

  * 没有**合适的方法**在**comments.php**文件中放置评论模板
  * 大部分的WordPress设计者都会使用**WordPress默认主题Kubrick**中的默认评论模板
  * 有些设计者修改了默认的评论模板以适应自己的需求
  * **你将会使用我对默认评论模板进行修改后的版本**

### 第一步

  * 新建文件：**comments.php**
  * 将我的[comments.txt](http://jeehon.info/samples/comments.txt)中的内容复制黏贴到你的**comments.php**文件中
  * 保存comments.php文件

### 第二步

  * 将我的[comments-template-css](http://jeehon.info/samples/comments-template-css.txt)文件中的内容复制到你的**style.css**文件中
  * 将它放在你的style.css文件的最后或者放在**#footer**的上面

### 第三步

在**single.php**文件的**entry** DIV的下面输入以下的代码：

    <div class=”comments-template”>
         <?php comments_template(); ?>
    </div>
    

[<img src="http://jeehon.info/log/files/2011/08/comments-template.gif" alt="" title="comments-template" width="300" height="227" class="aligncenter size-full wp-image-924" />](http://jeehon.info/log/files/2011/08/comments-template.gif)
  
**comments_template()**函数是用来调用**comments.php**文件中的评论模板的，comments.php文件根据模板（或者代码）来展示评论列表。列表中的每一项都是一个评论。

你也可以使用page.php文件中的**comments_template()**函数来允许读者给页面留言。做不做都由你而定，如果你想这样做的话，就对**page.php**文件重复步骤3.

### 第四步

步骤4是用来验证你的代码，但是也可以不进行这一步因为你正在使用的默认评论模板是我已经整理并且**修改过**的版本，我已经**帮你验证过了**。

验证你的代码：

  * 点击浏览器的”**查看**” &#8211;> “**页面源代码**”。
  * 复制所有的源码
  * 转到[验证页面](http://validator.w3.org/)
  * 在**Direct Input**框内黏贴你的代码
  * 点击**Check**

作为以后的参考（当你创建自己的主题和评论模板时），下面是需要验证的页面：

  * 首页(Home page)
  * 存档页(Archive pages)
  * 分类页(Category pages)(如果你自定义了分类页)
  * 搜索结果页(Search result pages)
  * 静态页面(Pages)(例如：About页面)
  * 单篇文章页面(Single post view page)
  * 无评论的单篇文章页面(Single post with no comments)
  * 有评论的单篇文章页面(Single post with comments)
  * 含必须的登录信息的单篇文章页面(Single post with must login message)
  * 不含需要的登录信息的单篇文章页面(Single post with no login required message)
  * 有评论且有密码保护的单篇文章页面(Password protected single post with comments)

### 有关评论模板的进一步解释

  * 评论模板从基本上说是一个**有序列表**，而不是无序列表，虽然它们的工作方式相同。无序列表是以圆点列表方式组织的，而有序列表则是以数字列表组织的（每个列表项都有一个数字，从1开始）。
  * 在**single.php**文件中，你用一个class等于**comments-template**的DIV裹住**comments_template()**函数，现在你的评论模板就是一个DIV里的有序列表了。

如果你给你的文章设置了密码保护，你的评论选项也被密码保护了：
  
[<img src="http://jeehon.info/log/files/2011/08/password-protected.gif" alt="" title="password-protected" width="435" height="61" class="aligncenter size-full wp-image-925" />](http://jeehon.info/log/files/2011/08/password-protected.gif)
  
你正在使用的评论模板的修改版本有一个H2子标题写着**Password Protected**。默认的评论模板没有这个。

**下面是评论列表的组成：**
  
[<img src="http://jeehon.info/log/files/2011/08/comments-template-core.gif" alt="" title="comments-template-core" width="320" height="384" class="aligncenter size-full wp-image-926" />](http://jeehon.info/log/files/2011/08/comments-template-core.gif)
  
**下面是上面的那些代码的作用：**
  
[<img src="http://jeehon.info/log/files/2011/08/comments-template-simple.gif" alt="" title="comments-template-simple" width="299" height="212" class="aligncenter size-full wp-image-927" />](http://jeehon.info/log/files/2011/08/comments-template-simple.gif)
  
**comment_text()**函数是用来调用每一个评论的。

评论模板里的CSS代码的意思我就不解释了，不像**comments.php**文件中的代码，你可以随意改动这些CSS代码而不会破坏评论模板。你自己研究这些CSS代码并且修改它们比从我这儿读那些解释要有用的多。

**猜猜接下来还有什么？今天没有本节回顾了，你已经完成了主题教程的所有内容了。**

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)