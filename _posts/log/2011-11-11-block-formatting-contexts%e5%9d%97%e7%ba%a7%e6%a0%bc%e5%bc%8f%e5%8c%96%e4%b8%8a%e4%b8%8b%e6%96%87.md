---
id: 956
title: Block Formatting Contexts(块级格式化上下文)
date: 2011-11-11T09:40:47+00:00
author: jeehon
layout: post
categories:
  - CSS
  - 分享
  - 学习
tags:
  - BFC
  - 块级格式化上下文
---
前几天看到kejun‘s blog里面的一篇文章：“[近期面试感受](http://hikejun.com/blog/2011/10/26/%E8%BF%91%E6%9C%9F%E9%9D%A2%E8%AF%95%E6%84%9F%E5%8F%97/)”，里面提到面试时的一道题的不同的解决方案，比较它们之间的优缺点，其中出现了一个概念：Block Formatting Contexts(块级格式化上下文)，而我一点印象都没有，所以就找了一些相关的文章学习一下，看到一篇很好的文章，所以就翻译出来和大家共享一下。原文是：[Block Formatting Contexts](http://www.yuiblog.com/blog/2010/05/19/css-101-block-formatting-contexts)

一个块级格式化上下文是满足以下条件中至少一条的盒模型：

<li style="margin-left:2em;">
  float的值不为空
</li>
<li style="margin-left:2em;">
  overflow的值不为visible
</li>
<li style="margin-left:2em;">
  display的值是table-cell、table-caption或者inline-block之一
</li>
<li style="margin-left:2em;">
  position的值不为static或者relative
</li>

当谈到[视觉格式模型](http://www.w3.org/TR/CSS21/visuren.html)(visual formatting model，针对[可视化媒体](http://www.w3.org/TR/CSS21/media.html)，用户代理如何处理[DOM树](http://www.w3.org/TR/CSS21/conform.html#doctree)),块级格式化上下文发挥着巨大的作用。所以对于CSS编程人员来说，深刻的理解块级格式化上下文和flow、float、clear、margin的关系至关重要。<!--more-->

## 先看一下有关BFC的规则或者定义

### 块级格式化上下文如何浮动

块级格式化上下文的[定位方案](http://www.w3.org/TR/CSS21/visuren.html#positioning-scheme)(positioning scheme)属于[普通流](http://www.w3.org/TR/CSS21/visuren.html#normal-flow)(normal flow)。块级格式化上下文中的块是通过页面流中的[块级元素](http://www.w3.org/TR/CSS21/visuren.html#block-box)、[行内元素](http://www.w3.org/TR/CSS21/visuren.html#inline-box)的[行内格式化](http://www.w3.org/TR/CSS21/visuren.html#inline-formatting)、块级元素或者行内元素的[相对定位](http://www.w3.org/TR/CSS21/visuren.html#relative-positioning)以及将元素定位为[run-in](http://www.w3.org/TR/CSS21/visuren.html#run-in)来定位的。简言之，块级格式化上下文就是页面流的一部分。

### 怎样触发块级格式化上下文

以下方法可以创建新的块级格式化上下文：

<li style="margin-left:2em;">
  floats
</li>
<li style="margin-left:2em;">
  元素的绝对定位
</li>
<li style="margin-left:2em;">
  inline-blocks
</li>
<li style="margin-left:2em;">
  table-cells
</li>
<li style="margin-left:2em;">
  table-captions
</li>
<li style="margin-left:2em;">
  给元素添加overflow样式，并且值不为visible
</li>

但是根据[CSS3标准](http://www.w3.org/TR/css3-box/#block-level0)，当以下条件符合的时候就会创建块级格式化上下文：

    <a href="http://www.w3.org/TR/css3-box/#position">position</a>的值不是static或者relative（见【<a href="http://www.w3.org/TR/css3-box/#CSS3POS">CSS3POS</a>】）

这个定义意味着当position为fixed的时候也会创建新的块级格式化上下文。参照标准，一个绝对定位的元素就暗示着这个元素的[position](http://www.w3.org/TR/CSS21/visuren.html#propdef-position)属性值为absolute或者fixed。

请注意display:table本身不会创建块级格式化上下文。但是由于它可以产生[匿名盒](http://www.w3.org/TR/CSS21/tables.html#anonymous-boxes)(anonymous boxes)，而匿名盒中的display:table-cell可以创建新的块级格式化上下文。换句话说，触发块级格式化上下文的是匿名盒，而不是display:table。编程人员需要铭记于心的是，虽然这两种样式都能够创建新的块级格式化上下文（间接的或者直接的），但是display:table的clear却和display:table-cell的clear效果不一样。

最后一个触发块级格式化上下文的是fieldset元素。奇怪的是，www.w3.org里没有任何有关这个触发行为的信息，直到[HTML5](www.w3.org/TR/html5/the-xhtml-syntax.html#the-fieldset-element-0)标准里才出现。有些浏览器bugs（Webkit，Mozilla）提到过这个触发行为，但是没有任何官方声明。实际上，即使fieldset在大多数的浏览器上都能创建新的块级格式化上下文，开发者也不应该把这当做理所当然的：

    CSS 2.1没有定义哪种属性适用于表单控件和相框，也没有定义如何使用CSS来给它
    们添加样式。用户代理可能会给这些属性应用CSS属性，建议开发者们把这种支撑
    当做实验性的。更高版本的CSS可能会进一步规定这个。

### 块级格式化上下文都做些什么

由于块级格式化上下文的流动方式，所以它包含了浮动，这样可以阻止外边距叠加和浮动重叠：

在块级格式化上下文中，盒（boxes）都是从一个包含块的顶部开始，垂直的一个接一个排列着。两个兄弟元素之间的垂直距离由[margin](http://www.w3.org/TR/CSS21/box.html#propdef-margin)属性来决定的。在块级格式化上下文中，相邻的块元素之间的垂直外边距会产生[叠加](http://www.w3.org/TR/CSS21/box.html#collapsing-margins)。

在块级格式化上下文中，每个框(box)的左外边缘挨着包含块的左边(如果是从右往左格式化，情况正好相反)。哪怕存在浮动也会如此，除非这个框(box)创建了一个新的块级格式化上下文(这种情况下，这个框会由于浮动而[变窄](http://www.w3.org/TR/CSS21/visuren.html#bfc-next-to-float))。

## 说了这么多规则之后，在现实世界中这意味着什么？

块级格式化上下文或多或少有点像其他的块框(block box)，除了下面这些例外：

### 块级格式化上下文会阻止外边距叠加

仅当两个相邻的块框在同一个块级格式化上下文中时，它们之间垂直方向的外边距才会[叠加](http://www.w3.org/TR/CSS21/box.html#collapsing-margins)。换句话说，如果这两个相邻的块框不属于同一个块级格式化上下文，那么它们的外边距就不会叠加。

例如：

<div style="background:skyBlue">
  <p style="margin:20px">
    This is a paragraph inside a DIV with a blue background, styled with <em>margin:20px</em>
  </p>
</div>

<div style="background:skyBlue">
  <p style="margin:20px">
    This is a paragraph inside a DIV with a blue background, styled with <em>margin:20px</em>.
  </p>
</div>

<div style="background:skyBlue;overflow:hidden;zoom:1;">
  <p style="margin:20px">
    This is a paragraph inside a DIV with a blue background, it is styled with <em>margin:20px</em>, The parent DIV is styled with <em>overflow:hidden;zoom:1</em>.
  </p>
</div>

在上面的前两个框中，第一个框的底部外边距和第二个框的顶部外边距叠加在了一起(它们之间的间距是20px而不是40px)，但是由于最后一个DIV创建了一个新的块级格式化上下文，第三段的外边距并没有叠加，因此外边距没有超出段落所在的容器，而是成为了这个块框的一部分。

**注意**：在IE6中，如果没有明确的margin值，DIV将无法附上margin属性。

当谈到外边距叠加时，创建一个新的块级格式化上下文的作用是和给这个元素添加border或者padding属性是一样的。

### 块级格式化上下文包含浮动

我相信你应该听过这句话：“ a float always contains floats”，或者可能听过[FNE](http://orderedlist.com/our-writing/blog/articles/clearing-floats-the-fne-method/)方法。但是，这个方法的基础则是浮动是块级格式化上下文，所以用一种比较好的方式来表达这个就是“块级格式化上下文通常包含浮动”。

例如：

<div style="background:skyBlue">
  <p style="float:left;margin:20px">
    This paragraph is a float inside a DIV with a blue background, it is styled with <em>margin:20px</em>.
  </p>
</div>

<div style="background:skyBlue;overflow:hidden;clear:left;zoom:1;">
  <p style="float:left;margin:20px">
    This paragraph is a float inside a DIV with a blue background, it is styled with <em>margin:20px</em>. The parent DIV is styled with <em>overflow:hidden;zoom:1</em>.
  </p>
</div>

第一个段落是个浮动的段落，所以它从流中移除了并且它所在的容器叠加在了一起，所以它所在的容器背景并没有显示出来。

第二个段落也是一个浮动的段落，但是它的内部包含了一个可以创建新的块级格式化上下文的DIV，因此这个容器附上了它子节点的margin属性。你应该注意到，和第一个段落不一样的是，没有必要来清除前一个框的浮动。通常把这个称作“自我清除”（self-clearing），考虑到块级格式化上下文是普通流的一部分，self-clearing将非常有意思。

**注意**：_clear_仅仅清除同一个块级格式化上下文里的浮动。

### 块级格式化上下文不会重叠浮动元素

这个是[我最喜欢的](http://www.ez-css.org/)。根据规定，一个块级格式化上下文的边框不能和它里面的元素的外边距重叠。这就意味着浏览器将会给块级格式化上下文创建隐式的外边距来阻止它和浮动元素的外边距叠加。由于这个原因，当给一个挨着浮动的块级格式化上下文添加负的外边距时将会不起作用（Webkit和IE6在这点上有一个问题——可以看这个[测试用例](http://www.tjkdesign.com/lab/bfc/test.html)）。

例如：

<div style="width:520px;">
  <div style="background:skyBlue;float:left;width:180px">
    <code style="padding:7px">.sideBar { background: skyBlue; float: left; width: 180px; }</code>
  </div>
  
  <div style="background:yellow;float:right;width:180px">
    <code style="padding:7px">.sideBar { background: yellow; float: right; width: 180px; }</code>
  </div>
  
  <div style="background:pink;overflow:hidden;border:5px solid teal;zoom:1;">
    <code style="padding:7px">#main { background: pink; overflow: hidden; zoom: 1; border: 5px solid teal; } </code>
  </div>
</div>

由于这个行为依附于有边框的框(border box)而不是有外边距的框，为了创建粉红色框和它兄弟框的间距(例如一个20px的间距)，编程人员需要做下面两件事情中的任何一个：

<li style="margin-left:2em;">
  给浮动元素设置一个20px的外边距
</li>
<li style="margin-left:2em;">
  将粉红色框的外边距设置的比浮动元素的宽度大一点(例如：margin:0 220px)
</li>

是的，你会使用_220px_而不是_20px_。因为是有边框的框要试着处在两个浮动元素之间而不是有外边距的框。上句中的“试着”是因为如果这两个浮动元素之间没有足够的空间，那么这个容器就要下沉。

换句话说，如果粉红色的框设置了一个400px的宽度，那么当它的父容器小于770px(180px+180px+400px+10px)时，这个框就会下沉。在少数情况下，在Firefox(至少在v.3.5.9中)中，这种行为将会被打破(例如，当上面的这个结构是body元素的第一个子节点时&#8212;看[测试用例](http://www.tjkdesign.com/lab/bfc/test.html))。

**注意**：在IE6中，粉红色框和两个浮动元素之间的显示的空间是由于IE中的[3像素文本偏移的bug](http://www.positioniseverything.net/explorer/threepxtest.html)。

## hasLayout和BFC

正如你已经注意到的，前面的所有的例子都用了样式:_overflow:hidden;zoom:1_。第一个声明是为了在现代浏览器中创建一个块级格式化上下文，而第二个声明则是为了触发IE(IE5.5/6/7)的hasLayout。这是因为那些渲染都很相近([CSS规则的相似处](http://www.satzansatz.de/cssd/onhavinglayout.html#engineer))。就像块级格式化上下文一样，给元素一个布局似乎可以防止外边距叠加，也可以包含浮动和防止叠加浮动。

### 可以给元素添加布局的属性或者声明

下面的清单显示了创建一个新的块级格式化上下文的同时也触发hasLayout的属性，至少这些属性会被浏览器支持，除了IE6或更低版本不支持overflow。

在IE5和6中：

<li style="margin-left:2em;">
  position:absolute
</li>
<li style="margin-left:2em;">
  position:fixed
</li>
<li style="margin-left:2em;">
  float:除了none的任何值
</li>
<li style="margin-left:2em;">
  display:inline-block
</li>
<li style="margin-left:2em;">
  width:除了outo之外的任何值
</li>
<li style="margin-left:2em;">
  height:除了auto之外的任何值
</li>
<li style="margin-left:2em;">
  zoom:除了normal之外的任何值
</li>
<li style="margin-left:2em;">
  writing-mode:tb-rl
</li>
<li style="margin-left:2em;">
  -ms-writing-mode:tb-rl
</li>

在IE7中：

<li style="margin-left:2em;">
  min-width:任何值
</li>
<li style="margin-left:2em;">
  min-height:任何值
</li>
<li style="margin-left:2em;">
  max-width:除了none之外的任何值
</li>
<li style="margin-left:2em;">
  max-height:除了none之外的任何值
</li>
<li style="margin-left:2em;">
  添加了overflow样式的元素,并且overflow的值不为visible
</li>
<li style="margin-left:2em;">
  overflow-x、overflow-y:除了visible之外的任何值
</li>

### 需要考虑的事：

<li style="margin-left:2em;">
  zoom和writing-mode是IE专有的属性，并且无法通过验证。
</li>
<li style="margin-left:2em;">
  IE5.0不支持zoom
</li>
<li style="margin-left:2em;">
  仅当width和height属性应用到行内元素时才会触发hasLayout(例如在IE6怪异模式下)
</li>
<li style="margin-left:2em;">
  overflow-x和overflow-y是CSS盒模型模块的一部分
</li>
<li style="margin-left:2em;">
  当布局流和父布局流不同时也会触发hasLayout
</li>

在怪异模式和IE7模式中

<li style="margin-left:2em;">
  当overflow设置的值不为visible时，table-cell元素不会创建新的块级格式化上下文
</li>
<li style="margin-left:2em;">
  当overflow的值为visible时，table-cell元素会创建一个新的块级格式化上下文。
</li>

### HTML元素通常都会有布局：

在IE中，下面的元素默认情况下会有一个布局:

<li style="margin-left:2em;">
  <body>（就像严格模式里的<html>一样）
</li>
<li style="margin-left:2em;">
  <table>,<tr>,<th>,<td>
</li>
<li style="margin-left:2em;">
  <img>
</li>
<li style="margin-left:2em;">
  <hr>
</li>
<li style="margin-left:2em;">
  <input>,<button>,<select>,<textarea>,<fieldset>,<legend>
</li>
<li style="margin-left:2em;">
  <iframe>,<embed>,<object>,<applet>
</li>
<li style="margin-left:2em;">
  <marquee>
</li>

## 总结

为了减少现代浏览器和IE(<8)之间的问题，编程人员可以给框(box)一个布局来创建新的块级格式化上下文。在这种情况下，流式相同的，元素也是通过相同的方式清除浮动，clear也是清除相同的浮动，外边距也像预期的那样叠加。同时，编程人员在通过触发hasLayout的方式来给框添加样式时必须留意因为这种添加样式的方法可能使那个元素变成新的块级格式化上下文。

## 进一步阅读：

### Implications

<li style="margin-left:2em;">
  Page breaks and block-formatting contexts: <a href="http://www.w3.org/TR/CSS21/page.html#allowed-page-breaks">Allowed page breaks (13.3.3)</a>
</li>
<li style="margin-left:2em;">
  Clearfix and block formatting contexts: <a href="http://carsonified.com/blog/design/everything-you-know-about-clearfix-is-wrong/">Everything you Know about Clearfix is Wrong</a>
</li>

### Demos and testcases

<li style="margin-left:2em;">
  <a href="http://dev.l-c-n.com/IEW/simulations.php">Block formating contexts, “hasLayout” – IE Window vs CSS2.1 browsers: simulations.</a>
</li>
<li style="margin-left:2em;">
  <a href="http://www.brunildo.org/test/FloatMarginOverflow.html">New block formatting contexts next to floats</a>
</li>

### hasLayout articles

<li style="margin-left:2em;">
  <a href="http://www.satzansatz.de/cssd/onhavinglayout.html">On having layout</a>
</li>
<li style="margin-left:2em;">
  <a href="http://msdn.microsoft.com/en-us/library/bb250481%28VS.85%29.aspx">“HasLayout” Overview</a>
</li>
<li style="margin-left:2em;">
  <a href="http://msdn.microsoft.com/en-us/library/ms533776%28VS.85%29.aspx">hasLayout Property</a>
</li>