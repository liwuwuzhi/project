$(function(){

	"use strict";

	var sidebar = $("#sidebar"),
		sidebar_trigger =$('#sidebar_trigger'),
		mask = $("#mask"),
		backTop = $("#back-top");

	function showSidebar(){
		mask.fadeIn();
		// sidebar.animate({"right":0});
		sidebar.css("right",0);
	}
	function hideSidebar(){
		mask.fadeOut();
		sidebar.css("right",-sidebar.width());
	}

	sidebar_trigger.on('click',showSidebar);
	mask.on('click',hideSidebar);
	backTop.on("click",function(){
		$("html,body").animate({
			scrollTop:0
		},800)
	})
	$(window).on("scroll",function(){
		if($(window).scrollTop()>$(window).height()){
			backTop.fadeIn();
		}else{
			backTop.fadeOut();
		}

	});


	//每次刷新自动监听滚动时间
	$(window).trigger("scroll");


	//点击更多是滚动页面
	$(".more").on("click",function(){
		$("html,body").animate({scrollTop:$("header").outerHeight()},500)
	});

	//导航下滑线动画
	var startLeft=$(".active").position().left;
    $(".lineHover").css({"left":startLeft,"display":"block"});
    $(".logo-r ul li a").hover(function(){
        var left=$(this).position().left;
        $(".lineHover").finish().animate({left:left},600,"easeOutQuint");
    },function(){});
    $(".logo-r ul").hover(function(){},function(){
        $(".lineHover").finish().animate({left:startLeft},600,"easeOutQuint");
    });
	

})