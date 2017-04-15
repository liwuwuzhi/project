function getStyle (obj,attr) { 
			//IE兼容
			if(obj.currentStyle){ 
				return obj.currentStyle[attr];
			}else{ 
				return getComputedStyle(obj,false)[attr];
			}

		}


	var timer = null;

	function move (obj,json,func,time) { 

		if(time === undefined){ 
			time = 30;
		}

		clearInterval(obj.timer);

		obj.timer = setInterval(function(){ 

			var flag = true;//设定标志位

			//遍历json对象 
			for(var attr in json){ 

				//1.获取当前值 
				var current = 0;

				//判断 
				if(attr == 'opacity'){ 
					current = parseInt(parseFloat(getStyle(obj,attr))*100);
				}else{ 
					current = parseInt(getStyle(obj,attr));
				}

				//2计算速度 
				var speed = (json[attr]-current)/8;
				speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
			

				//3.停止
				
				if(current!=json[attr]){ 
					flag = false;
				}

				if(attr == 'opacity'){ 
					obj.style.filter = 'alpha(opacity:'+(current+speed)+')';
					obj.style.opacity = (current+speed)/100;
				}else{ 
					obj.style[attr] = current+speed+'px';
				}

			}

			//清除定时器判断
			if(flag){ 
				clearInterval(obj.timer);
				if(func !== undefined){ 
					//执行回调函数 
					func();
				}
			}


		},time);
	}
	

