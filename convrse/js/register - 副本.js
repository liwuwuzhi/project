$(function(){

	var userflag = false;
	var passflag = false; 
	var passedflag = false; 
	var phoneflag = false;  
	var emailflag = false;

	showSubmit();
	function foc(name){
		$(name).focusin(function(){
			$(this).css('border-color','#ff3366');
		})
		$(name).focusout(function(){
			$(this).css('border-color','#CFCFCF')
			switch($(name).attr('id')){
				case 'username':
				if( $(this).val() == ''){
					$('.user-tips').css('display','block');
					$('.user-tips').html('用户名不能为空');
					showSubmit();
				}else{
					var pattern = /^[\w\u4E00-\u9FA5]{6,10}$/;
					var res = pattern.test( $(this).val() );
					if(res){
						$.post('check.php',{user:$(this).val(),flag:'1'},getData);
					}else{
						$('.user-tips').css({display:'block',background:'#fffff8',color:'#ff5783'});
						$('.user-tips').html('请输入用户名6-10位,包含字母,中文,数字');
						userflag = false;
						showSubmit();
					}
				}
				function getData(data){
					var result = JSON.parse(data);
					if(result==0){
						$('.user-tips').css({display:'block',background:'green',color:'white'});
						$('.user-tips').html('该昵称可以注册');
						userflag = true;
						showSubmit();
					}else{
						$('.user-tips').css({display:'block',background:'#fffff8',color:'#ff5783'});
						$('.user-tips').html('该昵称已存在');
						userflag = false;
						showSubmit();
					}
				}
				break;

				case 'password':
				if( $(this).val() == ''){
					$('.pass-tips').css({display:'block',background:'#fffff8',color:'#ff5783'});
					$('.pass-tips').html('密码不能为空');
					passflag = false;
					showSubmit();
				}else{
					var pattern1 = /^\d{9,16}$|^(?!\d+$)\w{6,16}$/;
					var res = pattern1.test( $(this).val() );
					if(res){
						$.post('check.php',{pass:$(this).val(),flag:'2'},getData1);
					}else{
						$('.pass-tips').css({display:'block',background:'#fffff8',color:'#ff5783'});
						$('.pass-tips').html('6-16位不含空格,不能9位以下为纯数字的密码');
						passflag = false;
						showSubmit();
					}
				}
				function getData1(data){
					var result = JSON.parse(data);
					if(result==0){
						$('.pass-tips').css({display:'block',background:'green',color:'white'});
						$('.pass-tips').html('该密码可以使用');
						passflag = true;
						showSubmit();
					}
				}
				break;
				case 'passworded':
					if( $(this).val() == $('#password').val()){
						$('.passed-tips').css({display:'block',background:'green',color:'white'});
						$('.passed-tips').html('两次输入密码一致');
						passedflag = true;
						showSubmit();
					}else if( $(this).val()==" " ){
						$('.passed-tips').css({display:'block',background:'#fffff8',color:'#ff5783'});
						$('.passed-tips').html('再次输入密码不能为空');
						passedflag = false;
						showSubmit();
					}else{
						$('.passed-tips').css({display:'block',background:'#fffff8',color:'#ff5783'});
						$('.passed-tips').html('两次输入密码不一致');
						passedflag = false;
						showSubmit();
					}
				break;
				case 'phone':
					if( $(this).val() == ''){
						$('.phone-tips').css({display:'block',background:'#fffff8',color:'#ff5783'});
						$('.phone-tips').html('手机号码不能为空');
						phoneflag = false;
						showSubmit();
					}else{
						var pattern2 = /^1(3|4|5|7|8)\d{9}$/;
						var res = pattern2.test( $(this).val() );
						if(res){
							$('.phone-tips').css({display:'block',background:'green',color:'white'});
							$('.phone-tips').html('该号码正确');
							phoneflag = true;
							showSubmit();
						}else{
							$('.phone-tips').css({display:'block',background:'#fffff8',color:'#ff5783'});
							$('.phone-tips').html('该号码格式不正确');
							phoneflag = false;
							showSubmit();
						}
					}
				break;
				case 'email':
					if( $(this).val() == ''){
						$('.email-tips').css({display:'block',background:'#fffff8',color:'#ff5783'});
						$('.email-tips').html('邮箱地址不能为空');
						emailflag = false;
						showSubmit();
					}else{
						var pattern3 = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
						var res = pattern3.test( $(this).val() );
						if(res){
							$('.email-tips').css({display:'block',background:'green',color:'white'});
							$('.email-tips').html('邮箱地址正确');
							emailflag = true;
							showSubmit();
						}else{
							$('.email-tips').css({display:'block',background:'#fffff8',color:'#ff5783'});
							$('.email-tips').html('邮箱地址不正确');
							emailflag = false;
							showSubmit();
						}
					}
				break;
			}
			$(name).val()
		})
	}
	foc('#us');
	foc('#pd');
	foc('#pded');
	foc('#tel');
	foc('#email');
	//失焦聚焦事件
	
	function showSubmit(){
		if(userflag&&passflag&&passedflag&&phoneflag&&emailflag){
			$('#submit').css('display','block');
		}else{
			$('#submit').css('display','none');
		}
	}
	//隐藏按钮与显示按钮
	$(window).resize(function(){
		if($(document).width() < $('body').width() ? $(document).width() : $('body').width()<=941){
		
		}
	});
			
});