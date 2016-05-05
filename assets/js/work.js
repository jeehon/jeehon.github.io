//头部导航的鼠标hover事件处理
$(document).ready(function () {
	$('.slides').slides({
				preload: true,
				preloadImage: 'imgages/loading.gif',
				play: 5000,
				pause: 2500,
				hoverPause: true
			});
    $('#topnav li').hover(function () {
        $(this).addClass('page_item');
    }, function () {
        $(this).removeClass('page_item');
    });
});