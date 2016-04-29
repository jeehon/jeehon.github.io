---
id: 1162
title: ASP.NET MVC
date: 2012-10-26T12:22:27+00:00
author: jeehon
layout: post
guid: http://jeehon.info/log/?p=1162
permalink: /2012/10/26/asp-net-mvc/
categories:
  - .NET MVC
  - 分享
  - 学习
tags:
  - .NET MVC
  - ASP
  - MVC
  - 三层架构
---
## 什么是MVC？

MVC是Model（模型）、View（视图）和Controler（控制器）的缩写，是一种设计模式，这种模式将程序的输入、处理和输出分开，每个部分各司其职，分工清晰，对于团队开发、测试和维护都有很大的帮助，如下图所示。

[<img src="http://jeehon.info/log/files/2012/10/492e04fe902a5.png" alt="" title="MVC" width="278" height="232" class="aligncenter size-full wp-image-1163" />](http://jeehon.info/log/files/2012/10/492e04fe902a5.png)

Model（模型）负责与数据库进行交互，在实际项目中可以在model中封装一些数据库基本操作；View（视图）负责页面的呈现，包括数据的格式化输出及样式的控制；Controler（控制器）负责业务逻辑的处理，对于相应的请求，从数据库中找出数据并且组织成格式化的数据提交给View层。

由于MVC的优点，它被各种语言广泛的使用，java中的SSH(Struts、Spring和Hibernate)是非常有名的MVC架构，PHP的Wordpress里面也用到MVC架构，而CodeIgniter则是比较快速易用的PHP MVC架构，也是我比较喜欢的架构。由于工作的原因，我又接触了C#的MVC架构：ASP.NET MVC，本文就是简单的介绍一下这个架构，后面的文章会讲一些技术细节。<!--more-->

## ASP.NET MVC简介

研究生阶段做过一个ASP.NET的web项目，由于是很多届学生一起开发的，所以结构比较混乱，曾经有几次想按照MVC架构进行调整，但是由于各自风格的不统一最终还是没有结构化，所以新人接手项目都会花很多时间来了解项目的结构，是一件很痛苦的事情。今年暑假，在公司接到一个ASP.NET MVC的站点，很喜欢它清晰的结构，跟PHP的CodeIgniter很相似。

Visual studio 2012自带MVC3和MVC4，而Visual studio 2010及以前版本需要手动安装ASP.NET MVC，[MVC下载](http://www.asp.net/mvc)。安装完ASP.NET MVC之后，在“新建项目”里选择“WEB”就会出现下图所示的MVC项目。

[<img src="http://jeehon.info/log/files/2012/10/新建MVC.jpg" alt="" title="新建MVC" width="636" height="301" class="aligncenter size-full wp-image-1167" />](http://jeehon.info/log/files/2012/10/新建MVC.jpg)

选择ASP.NET MVC3之后会出现下面界面，在此界面选择视图引擎Razor或者ASPX，ASPX是经典的ASP视图引擎，而新生的Razor引擎让布局更加得心应手，后续文章会详细介绍。

[<img src="http://jeehon.info/log/files/2012/10/视图引擎.jpg" alt="" title="视图引擎" width="438" height="420" class="aligncenter size-full wp-image-1168" />](http://jeehon.info/log/files/2012/10/视图引擎.jpg)

创建成功后，出现下图所示的目录结构：

[<img src="http://jeehon.info/log/files/2012/10/目录结构.jpg" alt="" title="目录结构" width="205" height="394" class="aligncenter size-full wp-image-1175" />](http://jeehon.info/log/files/2012/10/目录结构.jpg)

Content文件夹放置的是和样式相关的文件；Scripts文件夹放置的是javascript文件，默认自带jquery库的；Models、Views和Controllers对应MVC的model、view和controller；Views里面的Shared文件夹里的_Layout.cshtml是View的母版页；Global.asax是配置起始页的路由信息。

Global.asax页面配置默认起始页的函数如下所示：

    public static void RegisterRoutes(RouteCollection routes)
            {
                routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
    
                routes.MapRoute(
                    "Default", // 路由名称
                    "{controller}/{action}/{id}", // 带有参数的 URL
                    new { controller = "Home", action = "Index", id = UrlParameter.Optional } // 参数默认值
                );
    
            }
    

其中controller=&#8221;Home&#8221;指定了默认页面所在的controller文件，即controllers文件夹里的HomeController.cs文件，Index指定了方法名，即HomeController.cs文件里的Index()方法，id是可选项，指定Index方法的参数。在View层，该控制器对应的文件是Views目录下以controller为名称（该例子中时Home目录）的目录里面的以action为名称的view文件（该例子中的是Index.cshtml），如上图所示。

至此，一个ASP.NET MVC项目就创建成功了，接下来的文章会具体讲MVC的数据传输，Razor引擎，linq to sql等相关的内容。