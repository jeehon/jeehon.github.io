---
id: 541
title: 远距离翻转
date: 2011-05-25T14:23:15+00:00
author: jeehon
layout: post
categories:
  - CSS
  - 分享
  - 学习
tags:
  - CSS
  - 远距离翻转
---
上篇博客分享了《CSS图像映射》，通过对它进行基本扩展，就可以实现本文的示例：远距离翻转。

**远距离翻转是一个鼠标停留事件，这个事件可以触发页面上其他地方显示方式的变化。**实现的方法是：在锚链接内嵌套一个或多个元素，然后使用绝对定位对嵌套的元素进行单独定位。虽然这些元素在不同的地方显示，但是它们却包含在同一个锚链接中，所以它们可以同时对同一个鼠标停留事件做出反应。

首先看一下这个示例的HTML代码，它与CSS图像映射示例很相似，只是需要对锚链接内的元素做一下改变：添加两个span，一个存放链接文本，另一个空的span作为热点。链接文本定位在图像的下方，而热点放在相应的人的身上。<!--more-->

    
    <div id="pic">
    <img src="images/graduate.jpg" width="600" height="463" alt="fish,hunter,jeehon" />
    <ul>
       <li class="fish">
         <a href="http://yuguo.us/weblog" title="fish">
           <span class="hotspot"></span>
           <span class="link">&raquo;fish</span>
         </a>
       </li>
       <li class="hunter">
         <a href="http://hanzongze.info/blog" title="hunter">
           <span class="hotspot"></span>
           <span class="link">&raquo;hunter</span>
         </a>
       </li>
       <li class="jeehon">
          <a href="http://jeehon.info/log" title="jeehon">
            <span class="hotspot"></span>
            <span class="link">&raquo;jeehon</span>
          </a>
       </li>
    </ul>
    </div>
    
    

基本的样式与图像映射的示例相同：

    
    #pic {
    	background: url(images/graduate.jpg) no-repeat;
    	width:600px;
    	height:463px;
    	position:relative;/*The key to this technique*/
    }
    #pic ul{
    	margin:0;
    	padding:0;
    	list-style:none;
    	font-size: 1.8em;
    }
    #pic a {
      text-decoration: none;
      color: #6C6C6C;
    }
    
    

然后就需要将热点的span进行绝对定位，将每个热点定位到图像中相关的人身上。

    
    #pic a .hotspot{
    	width:55px;
    	height:66px;
    	position:absolute;
    }
    #pic .fish a .hotspot{
    	top:200px;
    	left:392px;
    }
    #pic .hunter a .hotspot{
    	top:205px;
    	left:255px;
    }
    #pic .jeehon a .hotspot{
    	top:180px;
    	left:163px;
    }
    
    

同样，对存放链接文本的span也进行绝对定位（这里将它的宽度设为15em），在示例中，使用负值的底，让列表向下排列：

    
    #pic a .link{
    	position:absolute;
    	width:15em;
    	display:block;
    }
    #pic .fish a .link{
    	bottom:-2em;
    	left:0;
    }
    #pic .hunter a .link{
    	bottom:-3.2em;
    	left:0;
    }
    #pic .jeehon a .link{
    	bottom:-4.4em;
    	left:0;
    }
    
    

为了添加鼠标停留在热点或文本上时的翻转效果，给热点的span应用一个边框：

    
    #pic a:hover .hotspot{
    	border:1px solid #fff;
    }
    
    

同样，给文本的span应用一下样式：

    
    #pic a:hover .link{
    	color:#D00110;
    }
    
    

现在，这个示例在Safari和Firefox中的效果已经很好了，但是在IE中却不正常，IE在使用：hover动态伪类寻找锚链接中的嵌套元素方面有问题，添加下面一条规则可以修复这个IE的bug：

    
    #pic a:hover{
    	border:none;
    }
    
    

最终的效果：查看[Demo演示](http://jeehon.info/samples/remote_rollovers.html)