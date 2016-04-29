---
id: 889
title: 'WP主题教程#13：样式化侧边栏(Styling Sidebar)'
date: 2011-08-25T14:57:50+00:00
author: jeehon
layout: post
guid: http://jeehon.info/log/?p=889
permalink: /2011/08/25/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b13%ef%bc%9a%e6%a0%b7%e5%bc%8f%e5%8c%96%e4%be%a7%e8%be%b9%e6%a0%8fstyling-sidebar/
categories:
  - CSS
  - wordpress
  - 分享
  - 学习
tags:
  - styling sidebar
  - theme
  - wordpress
  - 主题
---
样式化侧边栏之后，这个教程序列就差不多要结束了，但是不用担心，我会拿一些案例来一起研究（分解我制作主题的过程）。

今天你也不需要index.php文件，打开Xampp、主题文件夹、Firefox、IE和style.css文件。

### 第一步

在**.sidebar{}**下面输入下面的代码：

    .sidebar ul{
           list-style-type:none;
           margin:0;
           padding:0 10px 0 10px;
    }
    

现在你已经样式化Sidebar的父无序列表(UL)了，所有的子UL都会继承这样的样式。在本例中，样式是列表类型为**无**，外边距为****，左右两边各有**10像素的内边距**。<!--more-->


  
例如：
  
[<img src="http://jeehon.info/log/files/2011/08/inheritance.gif" alt="" title="inheritance" width="205" height="134" class="aligncenter size-full wp-image-890" />](http://jeehon.info/log/files/2011/08/inheritance.gif)
  
第二级的UL继承了第一级UL的样式，如果你给第一级的UL加上边框，那么第二级的UL也会有一个边框。

保存文件然后刷新页面，你会发现列表项前面的黑点不见了。

注意你是怎样给顶部和底部添加内边距的。
  
[<img src="http://jeehon.info/log/files/2011/08/no-top-padding.gif" alt="" title="no-top-padding" width="260" height="170" class="aligncenter size-full wp-image-891" />](http://jeehon.info/log/files/2011/08/no-top-padding.gif)

### 第二步

在**.sidebar ul{}**的下面输入下面的代码：

    .sidebar ul li{
           padding:10px 0 10px 0;
    }
    

现在的内边距如下图所示：
  
[<img src="http://jeehon.info/log/files/2011/08/top-padding.gif" alt="" title="top-padding" width="260" height="170" class="aligncenter size-full wp-image-892" />](http://jeehon.info/log/files/2011/08/top-padding.gif)
  
**为什么不在.sidebar ul{}里加上10像素的上下内边距呢？**你需要区分开每一个LI，在没有给**.sidebar ul li{}**添加内边距之前，**搜索表单**和**日历**之间没有任何间距，日历和页面链接之间也没有任何间距，**.sidebar ul li{}**里面的10像素上下内边距就是给两块之间加上一个间距。如果UL标签有四个方向的内边距而不是只有左右两内边距的话，最后的结果就是UL里的LI被一个20像素的上下内边距区分开了，知道我想表达的意思了吗？

如果你还没有理解，那么就去**.sidebar ul{}**里加上10像素的上下内边距看一下最终的结果跟不加有什么区别吧。

### 第三步

在**sidebar ul li{}**下面输入以下代码：

    .sidebar ul li h2{
           font-family:Georgia,Sans-serif;
           font-size:14px;
    }
    

记住，样式化.post{}的子标题并不会有什么影响，因为它只在.post{}里才会起作用。现在，你样式化Sidebar的子标题也不会对其他块造成影响，下面是显示效果：
  
[<img src="http://jeehon.info/log/files/2011/08/h2-and-unnecessary-padding.gif" alt="" title="h2-and-unnecessary-padding" width="254" height="414" class="aligncenter size-full wp-image-893" />](http://jeehon.info/log/files/2011/08/h2-and-unnecessary-padding.gif)
  
上面是我的页面链接列表的样子，你很有可能只有一个“**关于**”链接，我在本地WordPress里添加了很多链接和不同的页面级别来测试每一级链接的样子。注意一下页面底部我圈出来的不必要的额外的内边距，这是个样式继承很好的例子，它的内边距是20像素而不是10像素了。

### 第四步

在**.sidebar ul li h2{}**下面输入以下代码：

    .sidebar ul ul li{
           padding:0;
    }
    

**.sidebar ul ul li{}**中两个连续的UL意味着你正在定位最里层的LI。如果所有的值都是0的话，就不需要px后缀了。

下面是显示结果：
  
[<img src="http://jeehon.info/log/files/2011/08/ul-ul-li.gif" alt="" title="ul-ul-li" width="252" height="218" class="aligncenter size-full wp-image-894" />](http://jeehon.info/log/files/2011/08/ul-ul-li.gif)
  
上面的行间距太小了，所以我们可以设置一个24px的行高。

在**.sidebar ul ul li{}**中加入：**line-height:24px;**
  
[<img src="http://jeehon.info/log/files/2011/08/line-height.gif" alt="" title="line-height" width="190" height="74" class="aligncenter size-full wp-image-895" />](http://jeehon.info/log/files/2011/08/line-height.gif)
  
顺便说一下，如果在IE浏览器中你的搜索表单下面多出了额外的空间，你可以在

    body,h1,h2,h3,h4,h5,h6,address,blockquote,dd,dl,hr,p{
           margin:0;
           padding:0;
    }
    

中再加上一个form，如下所示：

    body,h1,h2,h3,h4,h5,h6,address,blockquote,dd,dl,hr,p,form{
           margin:0;
           padding:0;
    }
    

### 第五步（可选）

如果你想要你的日历中的日期可伸展并且占据整个侧边栏的宽度，那么就做这一步。现在你的日历的样子应该如下所示：
  
[<img src="http://jeehon.info/log/files/2011/08/calendar1.gif" alt="" title="calendar1" width="251" height="186" class="aligncenter size-full wp-image-896" />](http://jeehon.info/log/files/2011/08/calendar1.gif)
  
为了样式化日历，你需要找到它放在哪个标签里并且找出这个标签的name或者id是什么，你可以在**页面源代码**里找，你的侧边栏在最下面，所以去源代码文件的最下面找日历。
  
[<img src="http://jeehon.info/log/files/2011/08/caledar-id.gif" alt="" title="caledar-id" width="287" height="101" class="aligncenter size-full wp-image-897" />](http://jeehon.info/log/files/2011/08/caledar-id.gif)
  
现在你知道日历是放在**TABLE**标签里，并且**id**是**wp-calendar**，那么你怎么在**style.css**文件中定位这个**id**为**wp-calendar**的**table**呢？

答案是：**table#wp-calendar{}**。为什么？很简单，你已经知道通过英镑符号来样式化以**id**命名的**DIV**了，本例中，用到的是**id**等于**wp-calendar**的**table**而不是**DIV**。

#wp-calendar{}是可行的，因为它是唯一的，WordPress里也没有这个专用的标签。不过你应该尽可能的让它非常的具体，如果你想让它更加具体的话就用**.sidebar ul li table#wap-calendar{}**。还要更加具体吗？好吧，用**.sidebar ul li#calendar table#wp-calendar{}**。因为列表项(LI)包括日历子标题和**id**等于**calendar**的日历TABLE。

既然你已经知道用什么定位了，那么你怎么让这个table伸展呢？给这个table加上**width:100%;**。

在**.sidebar ul ul li{}**后面输入下面的代码：

    table#wp-calendar{
            width:100%;
    }
    

保存文件并刷新页面，下面是显示效果：
  
[<img src="http://jeehon.info/log/files/2011/08/calendar-width.gif" alt="" title="calendar-width" width="250" height="176" class="aligncenter size-full wp-image-898" />](http://jeehon.info/log/files/2011/08/calendar-width.gif)
  
**width:100%;**是为了让你的日历table会自动调整宽度来适应侧边栏的宽度，这样如果侧边栏多宽，日历都会占满整个侧边栏。

日历现在看起来也不是特别好看，但是你已经知道如果根据自己的需求来实现它了，这个日历还需要更多的样式来让它看起来很好。**提示**：再到源代码里去找**TABLE**的下一级标签，你还可以给它添加样式。

今天的教程就到此为止了。

[返回WordPress主题系列教程的开始](http://jeehon.info/log/2011/08/04/%E6%83%B3%E5%88%B6%E4%BD%9Cwordpress%E4%B8%BB%E9%A2%98%EF%BC%9F/)