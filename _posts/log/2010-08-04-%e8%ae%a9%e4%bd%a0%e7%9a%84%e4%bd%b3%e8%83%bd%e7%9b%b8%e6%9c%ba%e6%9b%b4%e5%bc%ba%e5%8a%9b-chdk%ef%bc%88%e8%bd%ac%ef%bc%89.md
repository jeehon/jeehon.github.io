---
id: 371
title: 让你的佳能相机更强力 -CHDK（转）
date: 2010-08-04T14:53:29+00:00
author: jeehon
layout: post
tb_tweet:
  - yes
  - yes
categories:
  - 分享
  - 学习
tags:
  - CHDK
  - 佳能相机
  - 升级
---
转至：[张默](http://www.zmor.net/html/2010/07/make-your-cannon-dc-more-powerful-chdk.html/comment-page-1#comment-165)
  
CHDK是什么？有什么用？

CHDK是一套用来扩展佳能相机（Powershot / Digital IXUS）功能的非官方固件扩展包。它能在很多方面扩充相机的功能，包括但不仅限于：

* 拍摄 RAW/DNG格式的图片（高速存储卡更好）
      
* 实时直方图显示
      
* 更宽的快门速度（1/40到60 秒）
      
* 提供脚本接口（uBasic & LUA）
      
* 游戏（推箱子和黑白棋）
      
* 包围测光模式
      
* 实时电量与存储空间显示
      
* 更低的运动检测响应时间（60毫秒或更低）

对于普通用户，CHDK正确安装后不须任何设置，重新开机后立即实现实时的剩余电量显示、剩余空间显示以及时钟显示功能，除打印键功能被借用外，相机的中文菜单及其他功能键和操纵不受任何影响。对于高级用户，CHDK可实现很多新的功能，主要有RAW图象格式支持、包围测光模式支持、更多的光圈、快门及ISO档选择、剩余电量/磁盘空间显示、实时测距、实时直方图显示、电子书等。<!--more-->


  
如何安装CHDK扩展包？

以前安装CHDK是比较麻烦的，需要手动格式化存储卡为FAT格式，再进行操作，现在开发者提供了图形化的安装程序，只需要点击几次鼠标，即可完成操作。

首先，到其开发者网站 http://mighty-hoernsche.de/ 下载适合你自己相机的CHDK安装包。有两种类型，一种是 Complete，是包含了常用脚本的；另一种是仅包含CHDK核心程序，不包含插件的。

第二，下载CardTricks自动化安装工具，http://savedonthe.net/download/78/CardTricks-144-SFX.mht，这里是1.44版本的；请关注 http://chdk.wikia.com/wiki/Cardtricks 获得最新版本的 CardTricks自动化安装工具。

三，打开 CardTricks，点击存储卡样子的图标来选择你的存储卡。

![](http://www.zmor.net/wp-content/uploads/2010/07/500pxCardtricks_Installation_01.jpg)

四，点击存储卡图标下面的“Show”图标来确认选择了正确的存储卡。

五，确认之后，点击“Format as FAT”按钮对存储卡进行格式化，这一过程可能耗时比较长。

六，如果你想在以后你每次打开相机的时候都能自动启动CHDK程序，就点击“Make Bootable”讲引导信息写入存储卡。（推荐）

七，因为我们之前就下载了适合自己相机的 CHDK程序包，所以这里就不用点右边的 “Download CHDK”按钮了，直接点 “CHDK—>Card”按钮，选择之前下载的 CHDK安装包即可。需要注意的是，确保旁边“Overwrite”选项前面的钩是选中状态的。这一步也可能花一点时间。

八，这样我们就讲 CHDK安装在我们的存储卡上，可以退出 CardTricks了。

九，非常重要，从读卡器取下 SD卡之后，请将 SD卡上的滑动块拨到“LOCK”位置，也就是锁定存储卡，注意，是锁定存储卡。有人可能有疑问，要是锁定了存储卡，怎么拍照呢？一般情况下SD卡锁定后无法储存照片，但CHDK却恰恰是利用了这一点，只有卡处于写保护状态时才会引发破解程序的自动运行，然后便可对SD卡正常读写操纵，一旦打开SD卡锁，程序将不会被运行。

十，将存储卡放入相机，开机。看看有什么不同吧！如果没什么不同，不，这不可能！不过如果真的没什么不同，请仔细检查你的安装步骤。