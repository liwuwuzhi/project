window.onload = function(){

	//轮播图------------------------
	var banner = document.getElementById('banner');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;//存放当前显示的是第几张图片,即第几个span小圆点
   	// var len=5;
   	var animated = false;/*动态函数是否运行的存放*/
   	var interval = 3000;
   	var timer;

   	//亮起小圆点函数
   	function showButton(){

   		//用遍历判读每一个按钮是否是亮着的
   		for(var i=0;i<buttons.length;i++){
   			if(buttons[i].className == 'on'){
   				buttons[i].className = '';
   				break;
   			}
   		}

   		//获取class属性让按钮亮起了
   		buttons[index - 1].className = 'on';
   	} 
   	
	//箭头点击事件
	function animate(offset){

		animated = true;/*动画开始*/
		
		var newLeft = parseInt(list.style.left) + offset;

		//动画切换特效
		var time = 300;//位移总时间
		var inteval = 10//位移间隔时间
		var speed = offset/(time/inteval);//每次位移量
		function go(){
		if((speed<0 && parseInt(list.style.left)>newLeft) || (speed>0 && parseInt(list.style.left)<newLeft)){
			list.style.left=parseInt(list.style.left) + speed + 'px';
			setTimeout(go,inteval);
		}else{
			
			animated = false;

			list.style.left = newLeft +'px';
			if(newLeft > -1300){
				list.style.left = -9100 + 'px';
			}
			if(newLeft < -9100){
				list.style.left = -1300 + 'px';
			}
		}
	}
		go()
	}
	//切换特效结束
	
	//存放每隔3s切换一次功能(每3s点击一次右箭头)
	function play(){
		timer = setInterval(function(){
			next.onclick();
		},3000);
	}
	function stop(){
		clearInterval(timer);
	}
	
	next.onclick = function(){
		if(index == 7){
			index = 1;
		}else{
			index += 1;
		}
		
		showButton();
		if(!animated){/*动画是否执行判断*/
			animate(-1300);
		}
	}
	prev.onclick=function(){
		if(index == 1){
			index = 7;
		}else{
			index -= 1;
		}

		showButton();
		if(!animated){/*动画是否执行判断*/
			animate(1300);
		}
	}

	//span按钮点击事件——取到每个span按钮——用遍历取
	for(var i=0;i<buttons.length;i++){
		buttons[i].onmouseover = function(){

			if(animated){
				return;
			}
			if(this.className == 'on'){
				return;
			}
			
			var myIndex=parseInt(this.getAttribute('index'));//获取span属性节点inde
			var offset=-1300*(myIndex-index);

			animate(offset);
			index = myIndex;
				showButton();
		}
	}
	
	banner.onmouseover = stop;//给banner移上加上事件
	banner.onmouseout = play;
	play();	


	//----------------------轮播图结束---------------
	

	//跟随广告
	var weChat = document.getElementById('wechat');	
	var e = e || window.event;
	
	window.onscroll = function(e){ 
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var target = scrollTop + 130;
		
		move(parseInt(target));

		function move (target) { 

			var weChat = document.getElementById('wechat');

			clearInterval(weChat.timer);

			weChat.timer = setInterval(function(){ 
				var speed = (target-weChat.offsetTop)/8;
				speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
				if(weChat.offsetTop==target){ 
					clearInterval(weChat.timer);
					
				}else{ 
					weChat.style.top = weChat.offsetTop+speed+'px';
				}

			},30);
		}
	}


	//nav3走马灯
	var str = '尊敬的顾客您好，我们店铺是不会泄露您的消费信息的，请放心。另外我们也不会要求获取、收集、使用任何与消费者金融消费类信息，如果接到以上信息电话，是属于诈骗电话，请勿相信，以防钱财损失。如您对订单有疑问，请联系在线客服';
	var box = document.getElementById('nav3');
	box.innerHTML = str;

	setInterval(function(){

		var arr = str.split('');
		var str2 = arr.shift();
		var str3 = arr.push(str2);

		str = arr.join('');
		box.innerHTML = str;

	},500);

}



$(function(){

	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

	//导航2切换
	function navToggle(clickBtn,thisClickCon,otherCon1,otherCon2){

		$(clickBtn).click(function(){

			var clickCon = $(thisClickCon);
			var display = clickCon.css('display');
			var display1 = $(otherCon1).css('display');
			var display2 = $(otherCon2).css('display');
			
			if(display == 'none'){
				clickCon.slideDown(500);
		 		$('#hovermark2').fadeIn(500);
		 		$("#nav2mask").css("display","block");
		 		$('#nav3').fadeOut(500);		
			}else{
				clickCon.slideUp(500);
		 		$('#hovermark2').fadeOut(500);
		 		$("#nav2mask").css("display","none");
		 		if(scrollTop<80){ $('#nav3').fadeIn(500); }
	
			}
			if(display1 == 'block'){
				$(otherCon1).slideUp(500);
		 		clickCon.slideDown(500);
			}
			if(display2 == 'block'){
				$(otherCon2).slideUp(500);
		 		clickCon.slideDown(500);
			}
		});

	}
	navToggle('#search_icon','#search','#login','#help');
	navToggle('#nav1-nthc1','#login','#search','#help');
	navToggle('#nav1-nthc5','#help','#search','#login');

	$('#hovermark2').click(function(){
		$('#login,#search,#help').slideUp(500);
		$(this).fadeOut(500);
		$("#nav2mask").css("display","none");
		if(scrollTop<80){ $('#nav3').fadeIn(500); }
	});

	//搜索框清空
	$('.search_icon2').click(function(){
		$('input').val('');
	});

	// 购物车
	$('#nav1-nthc2').hover(function(){
		$('#shoppingcar').fadeIn(300);
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>80){
			$('#shoppingcar').css("display","none");
		}
	},function(){
		$('#shoppingcar').fadeOut(300);
	});



	//导航3图片切换
	function car(id1,id2){

		$(id1).hover(function(){
			$(id2).css('display','block');
			$('#hovermark').css('display','block');
		},function(){
			$(id2).css('display','none');
			$('#hovermark').css('display','none');
		});

		$(id2).hover(function(){
			$(id2).css('display','block');
			$('#hovermark').css('display','block');
		},function(){
			$(id2).css('display','none');
			$('#hovermark').css('display','none');
		});

	}

	car('.nav2-block>li:eq(0)','#nav2-out>div:eq(0)');
	car('.nav2-block>li:eq(1)','#nav2-out>div:eq(1)');
	car('.nav2-block>li:eq(2)','#nav2-out>div:eq(2)');







	//滚动条滚动时切换
	var isTop=false;
	$(window).scroll(function(){

		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;

		if(scrollTop>80){

			$('#header').css({position:'fixed',top:'0',zIndex:'1000'})
			$('.nav1').css('padding-top','5px')
			$('i').css('margin-top','-25px').css('margin-left','37px');
			$('.nav1').css({height:'40px'});
			$('.nav2').css({height:'30px'});
			$('#nav3').slideUp(300);
			$('.nav2-sonout').css('margin-top','-42px');

		}else{
			$('#header').css({position:'position',top:'0',zIndex:'1000'})
			$('.nav1').css('padding-top','30px');
			$('.nav1').css({height:'80px'});
			$('.nav2').css({height:'50px'});
			$('#nav3').slideDown(300);
			$('.nav2-sonout').css('margin-top','0px');
			$('i').css('margin-top','0').css('margin-left','0px');
			$('#main').css('top','170px');
			$('#footer').css('top','5070px')
		}

		// 回到顶部出现隐藏
		var clientH = document.documentElement.clientHeight || document.body.clientHeight;
		//console.log(clientH)
		if(scrollTop >= clientH){
				$('#top').css('display','block');
			}else{
				$('#top').css('display','none');
		}

	});


	// 回到顶部事件绑定
	$('#top').click(function(){
		timerTop = setInterval(function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			var ispeed=Math.floor(-scrollTop/10);
			document.documentElement.scrollTop = document.body.scrollTop =scrollTop+ispeed;

			isTop = true;

			if(scrollTop == 0){
				clearInterval(timerTop);
			}

			if(!isTop){
				clearInterval(timerTop);
			}
			isTop=false;

		},30)
	})
	

	//主体部分特效---------------------------------------------------

	//hot导航
	var hotNav = $('.navblock li');
	var hotMain= $('.hot-main');
	var ani = $('#ani img');
	
	hotNav.mouseover(function(){
		var index = $(this).index();
		hotMain.eq(index).fadeIn(600).siblings().fadeOut(600);

		var ainOffSetL = ($(this).offset().left)+60+'px';
		ani.animate({left:ainOffSetL},300);
	});



	//更多箭头 
	function go(id1,id2,id3){

		$(id2).hover(function(){
			$(this).css('cursor','pointer')
			$(id1).css('background','url(./images/icon.png) -33px -160px no-repeat');
			$(id2).css('background','#fff').css('border','1px solid #000');
			$(id3).css('color','#000');

		},function(){
			// console.log(2);
			$(id1).css('background','url(./images/icon.png) 0px -160px no-repeat');
			$(id2).css('background','#000');
			$(id3).css('color','#fff');
		});
	}

	go('.hotgo','.hotmore','.hottext');
	go('.col1go','.col1more','.col1text');
	go('.col2go','.col2more','.col2text');
	go('.loggo','.logmore','.logtext');
	go('.reggo','.regmore','.regtext');
	go('.helpgo','.helpmore','.helptext');


	// 热夏酷色
	$('#entm1').mouseenter(function(){
	
		$('#entm1 div').animate({ left: '400px' }, 600,function(){
  			$('#entm1 div').animate({left: '-390px'}, 600);
  		});
	});

	$('#entm2').mouseenter(function(){
		
		$('#entm2 div').animate({ left: '400px' }, 600,function(){
  			$('#entm2 div').animate({left: '-390px'}, 600);
  		});
	});


	// 看看有哪些新产品故事
	$('#scan span').mouseover(function(){

		$(this).animate({opacity:0.2},200,function(){
			$(this).animate({opacity:1},200);
			$(this).css({background:'#000',color:'#FFF'});
		});
	});

	$('#scan span').mouseout(function(){

		$(this).animate({opacity:0.2},200,function(){
			$(this).animate({opacity:1},200);
			$(this).css({background:'#fff',color:'#000'});
		});
	});



});