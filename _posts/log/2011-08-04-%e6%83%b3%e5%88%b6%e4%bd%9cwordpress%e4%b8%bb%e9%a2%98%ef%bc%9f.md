---
id: 660
title: 想制作WordPress主题？
date: 2011-08-04T14:45:03+00:00
author: jeehon
layout: post
categories:
  - CSS
  - wordpress
  - 分享
  - 学习
tags:
  - wordpress
  - 主题
  - 教程
---
最近一直在看一个如何制作wordpress主题的教程，觉得很不错，就试着把它翻译成中文供大家学习，在接下来的几天，我会一篇一篇将翻译的内容发布，希望大家指正批评。原文地址：[So you want to create WordPress themes huh?](http://www.wpdesigner.com/2007/02/19/so-you-want-to-create-wordpress-themes-huh/)

从头开始制作一个WordPress主题并不难。我将手把手教你。

之前也有人写了有关于这方面的一些指导，[WordPress网站](http://codex.wordpress.org/Main_Page)也有些指南可以供你参考。但是当你不懂那些专业术语时，这些指导和指南是不是真的对你有用呢？在读WordPress网站的指南时，我有时都会很困惑。

**工具** &#8212;- 在我们明天开始前，你需要下面这些工具：

  * **首先你需要先在自己的电脑上安装WordPress**.可以参考**在windows xp中安装本地WordPress**的[WampServer版](http://www.wopus.org/wordpress-basic/getting-started/34.html)和[XAMPP版](http://fairyfish.net/2007/06/25/installing-wordpress-locally/)。如果因为一些原因你无法在自己的电脑上安装WordPress，也不要担心，就在你的网站上放置一个测试用的WordPress。
  * **Notepad或者其他文本编译器**。我使用Notepad。
  * **SmartFTP**—如果你要联机测试你的主题，建议你下载安装SmartFTP或者其他的FTP软件来上传你的主题文件。
  * [**XHTML验证**](http://validator.w3.org/)和[**CSS验证**](http://jigsaw.w3.org/css-validator/)书签。你将需要这些工具来验证你的主题。当你需要查找修复错误时，他们迟早会有用的。

<!--more-->

## 完整的教程一览表

  * [#1 引言](http://jeehon.info/log/2011/08/05/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B1%EF%BC%9A%E5%BC%95%E8%A8%80/)
  * [#2 模板文件和模板](http://jeehon.info/log/2011/08/06/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-2%EF%BC%9A%E6%A8%A1%E6%9D%BF%E6%96%87%E4%BB%B6%E5%92%8C%E6%A8%A1%E6%9D%BF/)
  * [#3 开始Index.php](http://jeehon.info/log/2011/08/08/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-3%EF%BC%9A%E5%BC%80%E5%A7%8Bindex-php/)
  * [#4 Header模板](http://jeehon.info/log/2011/08/09/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-4%EF%BC%9Aheader%E6%A8%A1%E6%9D%BF/)
  * [#4b Header模板续](http://jeehon.info/log/2011/08/10/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-4b%EF%BC%9Aheader%E6%A8%A1%E6%9D%BF%E7%BB%AD/)
  * [#5 循环](http://jeehon.info/log/2011/08/11/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-5%EF%BC%9A%E5%BE%AA%E7%8E%AF/)
  * [#5b 正文](http://jeehon.info/log/2011/08/12/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-5b%EF%BC%9A%E6%AD%A3%E6%96%87/)
  * [#5c 文章元数据](http://jeehon.info/log/2011/08/13/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-5c-%E6%96%87%E7%AB%A0%E5%85%83%E6%95%B0%E6%8D%AE%EF%BC%88postmetadata%EF%BC%89/)
  * [#5d Eles,文章ID，链接标题](http://jeehon.info/log/2011/08/14/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-5d%EF%BC%9Aeles%E6%96%87%E7%AB%A0id%EF%BC%8C%E9%93%BE%E6%8E%A5%E6%A0%87%E9%A2%98/)
  * [#5e 文章导航链接](http://jeehon.info/log/2011/08/15/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-5e%EF%BC%9A%E6%96%87%E7%AB%A0%E5%AF%BC%E8%88%AA%E9%93%BE%E6%8E%A5/)
  * [#6 侧边栏(和分类)](http://jeehon.info/log/2011/08/16/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-6%EF%BC%9A%E4%BE%A7%E8%BE%B9%E6%A0%8F%EF%BC%88sidebar%EF%BC%89/)
  * [#6b 页面链接列表](http://jeehon.info/log/2011/08/17/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-6b%EF%BC%9A%E9%A1%B5%E9%9D%A2%E9%93%BE%E6%8E%A5%E5%88%97%E8%A1%A8/)
  * [#6c 获得存档和链接](http://jeehon.info/log/2011/08/18/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B-6c%EF%BC%9A%E8%8E%B7%E5%BE%97%E5%AD%98%E6%A1%A3%E5%92%8C%E9%93%BE%E6%8E%A5archives-and-links/)
  * [#6d 搜索表单和日历](http://jeehon.info/log/2011/08/19/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B6d%EF%BC%9A%E6%90%9C%E7%B4%A2%E8%A1%A8%E5%8D%95%E5%92%8C%E6%97%A5%E5%8E%86search-form-and-calendar/)
  * [#6e 窗体化侧边栏](http://jeehon.info/log/2011/08/20/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B6e%EF%BC%9A%E7%AA%97%E4%BD%93%E5%8C%96%E4%BE%A7%E8%BE%B9%E6%A0%8F%EF%BC%88widgetizing-sidebar%EF%BC%89/)
  * [#7 页脚](http://jeehon.info/log/2011/08/20/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B7%EF%BC%9A%E9%A1%B5%E8%84%9A%EF%BC%88footer%EF%BC%89/)
  * [#8 如何验证](http://jeehon.info/log/2011/08/21/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B8%EF%BC%9A%E5%A6%82%E4%BD%95%E9%AA%8C%E8%AF%81how-to-validate/)
  * [#9 Style.css和CSS简介](http://jeehon.info/log/2011/08/22/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B9%EF%BC%9Astyle-css%E5%92%8Ccss%E7%AE%80%E4%BB%8Bstyle-css-and-css-intro/)
  * [#10 十六进制代码和样式化链接](http://jeehon.info/log/2011/08/23/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B10%EF%BC%9A%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E4%BB%A3%E7%A0%81%E5%92%8C%E6%A0%B7%E5%BC%8F%E5%8C%96%E9%93%BE%E6%8E%A5-hex-codes-and-styling-links/)
  * [#11 宽度和浮动](http://jeehon.info/log/2011/08/24/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B11%EF%BC%9A%E5%AE%BD%E5%BA%A6%E5%92%8C%E6%B5%AE%E5%8A%A8widths-and-floats/)
  * [#12 格式化日志及其他](http://jeehon.info/log/2011/08/25/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B12%EF%BC%9A%E6%A0%BC%E5%BC%8F%E5%8C%96%E6%97%A5%E5%BF%97%E5%8F%8A%E5%85%B6%E4%BB%96post-formatting-and-miscellaneous/)
  * [#13 样式化侧边栏](http://jeehon.info/log/2011/08/25/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B13%EF%BC%9A%E6%A0%B7%E5%BC%8F%E5%8C%96%E4%BE%A7%E8%BE%B9%E6%A0%8Fstyling-sidebar/)
  * [#14 页脚和拆分index.php文件](http://jeehon.info/log/2011/08/27/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B14%EF%BC%9A%E9%A1%B5%E8%84%9A%E5%92%8C%E6%8B%86%E5%88%86index-php%E6%96%87%E4%BB%B6footer-and-dividing-index/)
  * [#15 子模板文件](http://jeehon.info/log/2011/08/28/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B15%EF%BC%9A%E5%AD%90%E6%A8%A1%E6%9D%BF%E6%96%87%E4%BB%B6sub-template-files/)
  * [#16 评论模板](http://jeehon.info/log/2011/08/29/wp%E4%B8%BB%E9%A2%98%E6%95%99%E7%A8%8B16%EF%BC%9A%E8%AF%84%E8%AE%BA%E6%A8%A1%E6%9D%BF%EF%BC%88comments-template%EF%BC%89/)