---
id: 1189
title: .NET MVC中Controller和View之间的数据传送
date: 2012-11-25T07:17:46+00:00
author: jeehon
layout: post
categories:
  - .NET MVC
  - 分享
  - 学习
tags:
  - .NET
  - Controller
  - MVC
  - View
  - 数据传送
---
前面的文章介绍了一下.NET MVC，如何创建.NET MVC项目，而本篇文章将介绍.NET MVC中Controller层和View层的数据传送。

### 第一种数据传送方式是：ViewData（Asp.net MVC 1中就有了）

ViewData是Key/Value字典集合，定义方式是ViewData["key"] = &#8220;Value&#8221;，数据传送速度比较快，但是如果传送的是对象，就需要进行类型转化，具体可以看下面的例子。

首先在Controller里使用传递简单数据类型的ViewData：

      public ActionResult Index()
       {
           ViewData["name"] = "MVC";  //传递string类型的数据
           ViewData["id"] = 100;   //传递int类型的数据
           return View();
       }
    

View页面对应的读取代码如下：

       <div>
            name is :@ViewData["name"]
            id is :@ViewData["id"]
       </div>
    

<!--more-->


  
然后在Controller里使用传递对象的ViewData：

      public ActionResult Index()
       {
           TransferData people = new TransferData();
           people.name = "MVC";
           people.sex = "female";
           people.id = 11;
           ViewData["people"] = people;   //传递对象
           return View();
       }
       //TransferData的定义
       public class TransferData
       {
            public string name { get; set; }
            public string sex { get; set; }
            public int id { get; set; }
       }
    

View页面对应的读取代码如下：

       <div>
         @if (ViewData["people"] != null) 
         {
             var people = ViewData["people"] as TransferData;
             name is :@people.name
             salary is :@people.salary;
             sex is :@people.sex;
         }
       </div>
    

### 第二种数据传送方式是：ViewBag（Asp.net MVC 3中才出现）

ViewBag传递的是动态类型对象，定义方式是ViewBag.name = &#8220;MVC&#8221;;它的数据传送速度要比ViewData慢，但是不需要类型转换，使用起来更方便，具体可以看下面的例子。

Controller里使用ViewBag的例子如下：

      public ActionResult Index()
       {
           TransferData people = new TransferData();
           people.name = "MVC";
           people.sex = "female";
           people.id = 11;
           ViewBag.people = people;   //传递对象
           ViewBag.name = "MVC1";   //传递string类型数据
           ViewBag.id = 12;       //传递int类型数据
           return View();
       }
       //TransferData的定义
       public class TransferData
       {
            public string name { get; set; }
            public string sex { get; set; }
            public int id { get; set; }
       }
    

View页面对应的读取代码如下：

       <div>
         name1 is :@ViewBag.people.name
         id1 is :@ViewBag.people.id
         name2 is :@ViewBag.name
         id2 is :@ViewBag.id
       </div>
    

### 第三种数据传送方式是：TempData（Asp.net MVC 1中就有）

TempData和ViewData类似，也是Key/Value字典集合，定义方式是TempData["key"] = &#8220;Value&#8221;，但是TempData可以在不同的Controller之间传递数据，这和ViewData有本质的不同，具体可以看下面的例子。

Controller里使用TempData的例子如下：

      public ActionResult Index()
       {
           ViewData["name1"] = "MVC1";  //传递string类型的数据
           ViewData["id1"] = 1;   //传递int类型的数据
           return RedirectToAction("Home");
       }
    
       public ActionResult Home()
       {
           ViewData["name2"] = "MVC2";  //传递string类型的数据
           ViewData["id2"] = 2;   //传递int类型的数据
           return View();
       }
    

Home页面的View中对应的读取代码如下：

       <div>
            name1 is :@TempData["name1"]
            id1 is :@TempData["id1"]
            name2 is :@TempData["name2"]
            id2 is :@TempData["id2"]
       </div>
    

Home页面读到了Index Controller中的name1和id1，说明数据通过TempData从Index Controller传送到了Home Controller，而这个功能只有TempData能够做到，如果使用ViewData，Home页面就读不到Index页面中Controller传来的数据了。

### 第四种数据传送方式是：直接传送类的实例

可以不使用ViewData、ViewBag和TempData来传递数据，而直接传送类的实例，如下面的例子所示。
  
Controller对应的代码如下：

      public ActionResult Index()
       {
           TransferData people = new TransferData();
           people.name = "MVC";
           people.sex = "female";
           people.id = 11;
           return View(people);
       }
       //TransferData的定义
       public class TransferData
       {
            public string name { get; set; }
            public string sex { get; set; }
            public int id { get; set; }
       }
    

View层对应的读取代码如下：

       <div>
            name is :@Model.name
            sex is :@Model.sex
            id is :@Model.id
       </div>
    

### 第五种数据传送方式是：传送linq to sql的数据集

MVC中也可以直接将linq to sql返回的数据集直接通过Controller传递给View层，代码如下例所示。(people是一张表，字段有name、sex和id)
  
Controller层对应的代码(linq to sql的语法这里暂不做解释)：

      public ActionResult Index()
       {
           SqlHelperDataContext DataContent = new SqlHelperDataContext();
           var people= (from peo in DataContent.people
                             where peo.id >= 1
                             select new TransferData
                             {
                                 name = peo.name,
                                 sex = peo.sex,
                                 id = peo.id
                             });
            if (people.ToList().Count > 0)
            {
                return View(people);
            }
            else
                return View();
       }
       //TransferData的定义
       public class TransferData
       {
            public string name { get; set; }
            public string sex { get; set; }
            public int id { get; set; }
       }
    

View层对应的读取代码如下：

       <div>
        @if (null != Model)
        {
            <ul>
                @foreach(var item in Model){
                    <li>@item.name</li>
                    <li>@item.sex</li>
                    <li>@item.id</li>
                    }
            </ul>
        }
       </div>
    

.NET MVC中Controller和View层的数据传递还有一些比较灵活的方式，比如传送Json对象等这里没有做总结，这些那些灵活的方式只是在特点的需求下才会使用，比如使用knockout JS库作为前台展示时，如果感兴趣可以深入交流。