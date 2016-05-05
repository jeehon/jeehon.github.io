---
id: 71
title: 'WP主题教程#11：宽度和浮动(Widths and Floats)'
date: 2011-09-03T13:31:42+00:00
author: jeehon
layout: post
guid: http://jeehon.info/themes/?p=71
secondary: theme
permalink: /theme/2011/09/03/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b11%ef%bc%9a%e5%ae%bd%e5%ba%a6%e5%92%8c%e6%b5%ae%e5%8a%a8widths-and-floats/
categories:
  - WP themes
tags:
  - float
  - theme
  - wordpress
  - 主题
---
本节的内容将覆盖如何设置DIV的宽度以及如何给它们布局。本节也会给你展示一些让你的主题正确的显示或者让你的主题在Firefox和IE中都能正常显示的方法。

在开始前，还是要先打开**Xampp控制台**、**主题文件夹**、**Firefox浏览器**、**IE浏览器**、**index.php**文件以及**style.css**文件。

### 第一步

你应该考虑的第一件事是你主题的总宽度应该是多少。我们将使用750px(750像素)，100像素是1英寸。你主题的宽度应该由你大部分的访问者的视图规格来决定，你应该尽量避免下面的情况出现：你主题的宽度900px而你的访问者却使用800px×600px分辨率的屏幕，这就意味着呢的900px宽度的主题将会有100像素超出他们的屏幕了，这是一个禁忌。

**那么你怎么将你的总宽度设置为750px呢？**

你需要将所有的内容都放在一个750px宽度的DIV中，这里提到的所有内容包括：header、container、sidebar和footer。

在**<body>**后面加上：**<div id=”wrapper”>**，然后在**</body>**前面加上：**</div>**。
  
在style.css文件中输入下面的代码：

    #wrapper{
           margin: 0 auto 0 auto;
           width: 750px;
           text-align: left;
    }
    

在CSS中，尤其是再style.css文件中，英镑符号#是用来通过id定位DIV的方法，句点(.)是用来通过class定位DIV的方法。拿class来说吧，如果你的代码是**<div class=”wrapper”>**，那么就用**.wrapper**代替**#wrapper**来定位**wrapper** DIV。

保存index.php文件和style.css文件，刷新Firefox浏览器和IE浏览器来看看发生了什么变化。

**进一步解释：**

  * **margin:0 auto 0 auto;**的意思是（顺序不能出错）顶部外边距为0、右边外边距是自动、底部外边距为0，左边的外边距是自动。记住如果将左右外边距都设置为自动的话就是居中的意思。
  * **width:750px;**意思很明显吧。
  * **text-align:left;**是将**wrapper DIV**中的文本左对齐，因为你马上要将**body{text-align:left;}**改为**text-align:center;**

### 第二步

将**body{}**中的**text-align:left;**改为**text-align:center;**

**为什么要这么做？**（我是假设你现在正在用Firefox浏览器和IE6浏览器。）也许你查看自己的布局显示是正确的，但是对于那些使用低版本IE的用户就不一定正确了。还记得将左右外边距设为自动就是居中吗？然后这并不是对所有的IE浏览器都起作用的，所以设置**body{text-align:center;}**是用来修复老版本IE无法居中**wrapper DIV**的bug的。
  
（顺便说一下，现在Firefox和IE中文本的大小已经不同了，我们稍后会修复它。）

### 第三步

使**Header**向左浮动，并且设置其宽度为750px：

    #header{
           float: left;
           width: 750px;
    }
    

### 第四步

使**Container**向左浮动，并且将其宽度设置为500px：

    #container{
          float: left;
          width: 500px;
    }
    

### 第五步

使**Sidebar**向左浮动，并且将其宽度设置为240px，背景色设为灰色（丢失了10px是吧）：

    .sidebar{
          float: left;
          width: 240px;
          background: #eeeeee;
    }
    

注意，你没有使用英镑符号(#)来定位**Sidebar DIV**，你使用的是句点(.)。还记得#ffffff是白色吗？**background:#eeeeee;**是很浅的灰色。你给Sidebar添加一个背景色是为了当你将剩下的10像素加上时能看出来区别。

### 第六步

使**Footer**向左浮动、清除两边的浮动并给其一个750px的宽度：

    #footer{
           clear: both;
           float: left;
           width: 750px;
    }
    

**Header**和**Footer**的样式有什么不同？答案是**footer{}**中**clear:both;**的出现。这是为了确保**Footer**不依附它上面的任何东西，像**Sidebar**和**Container**。
  
保存**style.css**文件，刷新浏览器。

### 第七步

通过外边距将剩下的10像素添加给Sidebar，现在你sidebar的样式代码如下：

    .sidebar{
          float: left;
          width: 240px;
          background: #eeeeee;
          <em>margin: 0 0 0 10px;</em>
    }
    

保存文件然后刷新页面，这时就可以看到给Sidebar的左边添加的10像素间距了。**margin:0 0 0 10px;**的意思是顶部的外边距是0，右边是0，下边是0，左边的外边距是10像素。当像素大小为0时，px就可以省略了。

### 第八步（额外的步骤）

这步是以防你给Sidebar设置了20px的左外边距而不是10px。20px的外边距将会打破你的布局并且将sidebar挤到页面的底部去了，因为20px的外边距就使Container和Sidebar的总宽度变成760px而不是750px了。这额外的一步都是**IE**的错因为只有IE才会有加倍外边距的bug。

为了修复这个bug，在Sidebar里添加**display:inline;**。现在你的Sidebar就变成：

    .sidebar{
          float: left;
          width: 240px;
          background: #eeeeee;
          margin: 0 0 0 10px;
          <em>display: inline;</em>
    }
    

今天的内容就到这了。如果有问题，请随时问我问题，我可以随时给你帮助而不是仅仅告诉你这些敲门。

链接里是我的[index](http://jeehon.info/samples/index-lesson-11.txt)和[style](http://jeehon.info/samples/style-lesson-11.txt)文件的内容。

[返回WordPress主题系列教程的开始](http://jeehon.info/themes/)