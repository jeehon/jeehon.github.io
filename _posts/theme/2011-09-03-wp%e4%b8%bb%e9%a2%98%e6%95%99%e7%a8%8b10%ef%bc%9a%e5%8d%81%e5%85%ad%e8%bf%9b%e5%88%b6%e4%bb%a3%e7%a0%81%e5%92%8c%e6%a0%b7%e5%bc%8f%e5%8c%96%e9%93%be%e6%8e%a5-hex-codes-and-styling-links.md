---
id: 69
title: 'WP主题教程#10：十六进制代码和样式化链接 (Hex Codes and Styling Links)'
date: 2011-09-03T13:30:30+00:00
author: jeehon
layout: post
guid: http://jeehon.info/themes/?p=69
secondary: theme
permalink: /theme/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b10%ef%bc%9a%e5%8d%81%e5%85%ad%e8%bf%9b%e5%88%b6%e4%bb%a3%e7%a0%81%e5%92%8c%e6%a0%b7%e5%bc%8f%e5%8c%96%e9%93%be%e6%8e%a5-hex-codes-and-styling-links/
categories:
  - WP themes
tags:
  - link
  - theme
  - wordpress
  - 主题
---
继续昨天的介绍CSS的内容，我们要进行更多的有关**着色**的练习以及学更多的有关**十六进制代码**的内容。颜色属性是用来给文本着色的，它后面一般都跟着一个十六进制代码。例如body{color:#000000;}的意思就是你网页的body部分所有的文本都会是黑色的。

背景属性是用来给所有的非文本内容着色的，它后面也是跟着一个十六进制代码。例如**body{background:#ffffff;}**的意思就是body的背景是白色的。

### 十六进制代码

  * 以一个英镑符号(#)开始，每个十六进制代码都有六位，它们的范围从**#ffffff**(白色)到**#000000**(黑色)。
  * #ffffff, #eeeeee, #dddddd, #cccccc, #bbbbbb, #aaaaaa, #999999, #888888, #777777, #666666, #555555, #444444, #333333. #222222, #111111
  * 前两位代表红色，第三和第四位代表绿色，后两位代表蓝色。**#ff0000**是红色，**#550000**是深红色，**#220000**是更深的红色（好纠结啊），**#00ff00**是绿色，**#0000ff**是蓝色。等等，黄色不是主要的颜色吗？黄色的十六进制代码是什么呢？**#ffff00**是黄色，**#ff00ff**是紫色。

### 第一步

在**body{}**选择器的下面输入下面的代码：

    a:link,a:visited{
            text-decoration:underline;
            color:#336699;
    }
    

[<img src="http://jeehon.info/log/files/2011/08/style-links.gif" alt="" title="style-links" width="254" height="86" class="aligncenter size-full wp-image-870" />](http://jeehon.info/log/files/2011/08/style-links.gif)

  * **上面的代码是干什么用的？**你给你的链接加上了下划线(**text-decoration:underline**)并且将它的颜色设置为蓝色(**color:#336699**)。这是一种不同色调的蓝色，说它是蓝色是因为最后两个代表蓝色的数字比其它数字都大。
  * **a:link**是用来样式化链接。当你想把一个单词变成链接时，你将会怎么做？你会使用 **<a>** **</a>**标签，因此样式化链接就是给 **<a>**标签添加样式。
  * **a:visited**是用来样式化**被点击过**的链接。
  * 你可以通过下面这种方式给**a:link**和**a:visited**添加样式： 
        a:link{
        	text-decoration:underline;
        	color:#336699;
        }
        
        a:visited{
              text-decoration:underline;
              color:#336699;
        }
        

  * 在之前的代码中，你在给**a:link**和**a:visited**两个选择器添加样式**text-decoration:underline**和**color:#336699**时，你用逗号将它们俩隔开，这样就可以同时给它们两个添加相同的样式了。

### 第二步

在**a:link,a:visited{}**的下面输入下面的代码：

    a:hover{
            text-decoration:none;
    }
    

**上面的代码是干什么的？**当你将鼠标停留在链接上时，链接的下划线将会消失。

如果你想当鼠标停留在链接上才显示出下划线而不是默认情况下显示下划线，就请交换一下**a:link**和**a:hover**的**text-decoration**值。

如果你想改变鼠标停留在链接上时链接的颜色，那就就给**a:hover**加上**color:**属性，并且赋一个你想要的颜色的十六进制代码。例如：

    a:hover{
           text-decoration:none;
           color:#ff0000;
    }
    

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)