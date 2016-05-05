---
id: 884
title: 'WP主题教程#12：格式化日志及其他(Post Formatting and Miscellaneous)'
date: 2011-08-25T02:33:15+00:00
author: jeehon
layout: post
categories:
  - CSS
  - wordpress
  - 分享
  - 学习
tags:
  - post
  - theme
  - wordpress
  - 主题
---
今天不需要index.php文件，打开**Xampp控制台**、**主题文件夹**、**Firefox**浏览器、**IE**浏览器和**style.css**文件。

### 第一步

在**style.css**文件中的**body{}**上面输入下面的代码来去掉大部分的外边距(margins)和内边距(paddings)：

    body,h1,h2,h3,h4,h5,h6,blockquote,p{
            margin:0;
            padding:0;
    }
    

  * 注意到上面代码中的**margin:0;**而不是**margin:0 0 0 0;**了吧，如果你的四个值都相同，就可以只写一个上去就行了，同样对padding也适用。
  * 保存文件，然后刷新Firefox和IE。别担心，你将会在需要的地方加上外边距(margins)和内边距(paddings)而不是浏览器默认要加的地方。

顺便说一下，一会我会让你把代码放在这里或者那里，但是你要知道那些都是可选的，你可以把你的代码放在style.css文件里的任何地方，我告诉你的只是我组织代码的方式。<!--more-->

### 第二步

给**H1**标题添加样式，在**body{}**下面输入下面的代码：

    h1{
           font-family:Georgia,Sans-ferif;
           font-size:24px;
           padding:0 0 10px 0;
    }
    

  * **font-family:Georgia,Sans-serif;**将H1标题的字体由Arial改为Georgia，如果没有Georgia字体，网页就会找Sans-serif字体来替代。
  * **font-size:24px;**意思很明显，但是值得注意的是，你已经在**body{}**设置了字体大小为**12px**，但是**H1**和**H2**标签不会遵守这个规则，因为标题标签只遵守它们自己的规则，如果想控制它们的显示方式，你需要单独给它们添加样式。
  * **padding:0 0 10px 0;**的意思是距底部有10像素的内边距，这是为了在你博客的标题和描述之间增加一些间距。

保存文件然后刷新页面，下面是显示效果：
  
[<img src="http://jeehon.info/log/files/2011/08/h1-styled.gif" alt="" title="h1-styled" width="365" height="89" class="aligncenter size-full wp-image-885" />](http://jeehon.info/log/files/2011/08/h1-styled.gif)

### 第三步

将下面的代码输入到**#container{}**的下面：

    .post{
           padding:10px 0 10px 0;
    }
    

(你给每个class等于post的DIV加了10像素的距顶部的外边距和10像素的距底部的外边距)

    .post h2{
          font-family:Georgia,Sans-serif;
          font-size:18px;
    }
    

(.post h2并不是一个通用规则，它只对class等于post的DIV中的H2子标题起作用，Sidebar里的H2子标题并不会受到影响。)

    .entry{
           line-height:18px;
    }
    

(增加entry DIV里的行高。)

### 第四步

在**a:hover{}**下面输入下面的代码：

    p{
          padding:10px 0 0 0;
    }
    

(给每个段落加上10像素的距顶部的内边距。)

### 第五步

在**.entry{}**下面输入下面代码：

    p.postmetadata{
           border-top:1px solid #ccc;
           margin:10px 0 0 0;
    }
    

还记得那个class等于**postmetadata**的段落标签吗？样式化一个特殊的段落标签和样式化DIV是很相近的，你可以给它们俩添加border、margin、padding和background等属性。

对于**postmetadata**段落标签，你给它加了一个灰色的边框和一个距顶部10像素的外边距。

**border-top**是只有顶部边框，**border-left**是只有左边框，等等。不加**-top**、**-right**、**-bottom**和**-left**，仅有**border**表示有所有的边框。例如**border:1px solid #ccc;**表示四个边都有1像素的灰色边框。

### 第六步

在**p.postmetadata{}**下面输入下面的代码：

    .navigation{
           padding:10px 0 0 0;
           font-size:14px;
           font-weight:bold;
           line-height:18px;
    }
    

对于包裹在**下一页**和**前一页**链接两边的**navigation DIV**，你刚刚做了如下的事情：

  * 加了一个10像素的距顶部的内边距
  * 将它的字体大小改为14px
  * 将它的字体粗细改为加粗
  * 将它的行高改为18px

今天的教程就这么多了。

[返回WordPress主题系列教程的开始](http://jeehon.info/log/2011/08/04/%E6%83%B3%E5%88%B6%E4%BD%9Cwordpress%E4%B8%BB%E9%A2%98%EF%BC%9F/)