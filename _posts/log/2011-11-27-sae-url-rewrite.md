---
id: 971
title: SAE URL Rewrite
date: 2011-11-27T09:52:15+00:00
author: jeehon
layout: post
categories:
  - PHP
  - 分享
  - 学习
tags:
  - SAE
  - SEO
  - URL Rewrite
  - 页面重定向
---
## 什么是SAE？

Sina App Engine是新浪的一个公有云计算平台，采用PHP+Apache+MySQL的架构，支持项目的开发、部署和调试，也可以通过成员协助的方式进行团队开发，具体信息可以查看[SAE文档中心](http://sae.sina.com.cn/?m=devcenter&catId=19)的说明。

## 有关SAE的URL Rewrite

**为什么要进行URL Rewrite？**

<li style="margin-left:2em;">
  保证web应用在进行结构调整、移动页面位置时，用户拥有的URL不会成为死链。
</li>
<li style="margin-left:2em;">
  SEO优化。
</li>

**一些URL Rewrite的例子**

http://xxx.com/a/b页面转向http://xxx.com/index.php?a=b

http://xxx.com/a-b.html页面转向http://xxx.com/index.php?para1=a&para2=b

http://xxx.com/a页面转向http://xxx.com/a/index.php

http://xxx.com/a/b页面转向http://xxx.com/a/index.php?para=b

……

具体怎么转向就看你的项目需求了，一旦确定了转向类型，就可以着手写转向规则。（下文有一些转向规则的例子）<!--more-->

**Apache进行URL Rewirte的方法**

Apache通常会使用.htaccess文件配置URL Rewrite的规则，重定向的页面根据文件中的规则跳转到指定页面，在跳转后的页面获取URL中的参数，然后根据参数信息进行相应处理。网上有很多有关Apache通过.htaccess实现URL Rewrite的例子，这里不再细讲。

**SAE的URL Rewrite方法**

SAE的[平台运行原理](http://sae.sina.com.cn/?m=devcenter&catId=164)中指出，SAE禁用了htaccess，但是提供了自己实现的替代方案：[AppConfig](http://sae.sina.com.cn/?m=devcenter&catId=193)。

在项目根目录中，有个配置文件：config.yaml，通过在其中增加handle段就可以简单的实现URL Rewrite，如下例所示(http://xxx.com/a/b转向http://xxx.com/index.php?a=b)：

    ---
    name: readlist
    version: 2
    handle:
        - rewrite: if(!is_dir() &#038;&#038; !is_file()) goto "index.php?%{QUERY_STRING}"
    

这个配置文件记录了应用名、版本号和一些处理规则。handle段就是处理规则，本例中规则的具体意思是：_如果URL中的参数既不是文件名也不是项目中的目录，那么就跳转到index.php页面，QUERY_STRING是URL中的参数值。_

在index.php文件中，我们可以获取这个URL参数并分解为自己想要的形式，如下所示：

    <?php
        $queryString = $_SERVER['REQUEST_URI'];  //获得URL中的参数
        $arr = explode('/', $queryString);                          //得到参数数组：$arr[1] = a;$arr[2] = b;
        ......                                                                           //获得参数后就可以使用它们了
    ?>
    

http://xxx.com/a-b.html页面转向http://xxx.com/index.php?para1=a&para2=b的规则：

    ---
    name: readlist
    version: 2
    handle:
        - rewrite: if(!is_dir() &#038;&#038; !is_file()) goto "index.php?%{QUERY_STRING}"
    

该例的规则和上面一个例子的一样。

index.php中的处理代码：

    <?php
        $queryString = $_SERVER['REQUEST_URI'];     //获得URL中的参数
        $para1 = substr($queryString,1,1);                        //得到参数：para1 = a;
        $para2 = substr($queryString,3,1);                        //得到参数：para2 = b;
        ......                                                                               //获得参数后就可以使用它们了
    ?>
    

http://xxx.com/a/b页面转向http://xxx.com/a/index.php?para=b的规则(必须保证项目根目录中有目录a，并且目录a中有文件index.php)：

    ---
    name: readlist
    version: 2
    handle:
        - rewrite: if(!is_file() &#038;&#038; path~"a/(.*)") goto "/a/index.php?${QUERY_STRING}"
    

本例中规则的具体意思是：_当URL中参数匹配&#8221;a/(.*)&#8221;并且请求的不是一个文件时，就跳转到/a/index.php，QUERY_STRING表示URL中的参数值。_

/a/index.php的处理方法如下：

    <?php
        $queryString = $_SERVER['REQUEST_URI'];     //获得URL中的参数
        $para = substr($queryString,-1);                           //得到参数：para1 = b;
        ......                                                                            //获得参数后就可以使用它们了
    ?>
    

如果想了解更多的规则，可以到文档中心的服务列表中的[AppConfig](http://sae.sina.com.cn/?m=devcenter&catId=193)中查看。

## SAE存在的一些问题

**本地调试和网络应用的不一致性**

由于SAE禁用了htaccess，采用自己实现的AppConfig，本地调试只能用htaccess，而这两种规则的语法不一样，所以本地调试需要写htaccess规则，发布的时候还要写AppConfig的页面转向规则，增加了编程人员额外的工作量。

SAE有自己封装好的数据库操作方法：[SaeMysql](http://apidoc.sinaapp.com/sae/SaeMysql.html)，SAE提供的数据库名、用户名、密码和端口都是无法自定义的，是系统提供的。

本地调试时操作数据库就很受限制：首先无法使用SAE提供的数据库操作方法，其次建立数据库时也很受SAE提供的数据库信息影响。**建议自己封装一个数据库操作的类，把主机、端口号、用户名、密码和数据库名作为参数传给构造函数**，这样的话，发布代码时只需要修改上述的参数值就OK了。

SAE的主机名是：SAE\_MYSQL\_HOST_M

端口号是：SAE\_MYSQL\_PORT

用户名是：SAE\_MYSQL\_USER

密码是：SAE\_MYSQL\_PASS

数据库名是：SAE\_MYSQL\_DB

应该所有的应用的信息都是一样的。

最近做的书单：查看[DEMO](http://2.readlist.sinaapp.com/user/jeehon)（页面设计和布局实现是[Yuguo](http://yuguo.us/weblog)完成的。）