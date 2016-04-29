---
id: 852
title: 'WP主题教程#8：如何验证(How to Validate)'
date: 2011-08-21T07:00:03+00:00
author: jeehon
layout: post
guid: http://jeehon.info/log/?p=852
permalink: /2011/08/21/wp%e4%b8%bb%e9%a2%98%e6%95%99%e7%a8%8b8%ef%bc%9a%e5%a6%82%e4%bd%95%e9%aa%8c%e8%af%81how-to-validate/
categories:
  - CSS
  - wordpress
  - 分享
  - 学习
tags:
  - theme
  - validate
  - wordpress
  - 主题
---
在学习CSS并与style.css文件打交道之前，你需要学会怎样验证你的代码的正确性。验证的意思就是确保你的代码中没有错误。在开始学习验证代码之前，先给你两个链接：[XHTML Validator](http://validator.w3.org)和[CSS Validator](http://jigsaw.w3.org/css-validator)。在本节，你将用到XHTML validator。

本节内容会非常的短并且很简单因为你需要时间来理解你学过的关于XHTML和PHP的知识。不要一直紧跟着我的教程往前走，花点时间来整理理解学过的代码。怎样开始一个不可见框？ID和Class的区别是什么？哪个PHP函数是用来调用博客的标题？哪个是用来调用博客的描述？你能回想的越多，你记住的也就越多。

今天过后，你最好准备好，我们将学习CSS的相关知识，我将深入讨论它因为你要花百分之八十的时间来和style.css文件打交道。

对于今天这节，你仅仅需要打开**Xampp控制台**和浏览器（转向http://localhost/wordpress）。点击浏览器的“**查看**”—> “**页面源代码**”。全选(你可以用鼠标点击拖拉选中所有的代码或者直接**Ctrl+a**)复制所有的代码(通过右键选择复制或者直接**Ctrl+c**)。打开一个新的标签页或者新的窗口，转到[XHTML Validator](http://validator.w3.org)。到页面的底部，在“**Validate by Direct Input**”的框里黏贴刚才复制的代码：通过右键选择黏贴或者直接**Ctrl+v**。<!--more-->


  
[<img src="http://jeehon.info/log/files/2011/08/paste-codes.gif" alt="" title="paste-codes" width="484" height="344" class="aligncenter size-full wp-image-853" />](http://jeehon.info/log/files/2011/08/paste-codes.gif)
  
当你点击**Check**之后，验证程序将会检查你的代码，然后转到结果页面，如果结果的信息是绿色的，就说明你的代码里没有错误。
  
[<img src="http://jeehon.info/log/files/2011/08/passed-validation.gif" alt="" title="passed-validation" width="373" height="184" class="aligncenter size-full wp-image-854" />](http://jeehon.info/log/files/2011/08/passed-validation.gif)

[返回WordPress主题系列教程的开始](http://jeehon.info/log/2011/08/04/%E6%83%B3%E5%88%B6%E4%BD%9Cwordpress%E4%B8%BB%E9%A2%98%EF%BC%9F/)