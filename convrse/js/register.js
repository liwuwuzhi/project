$(function(){

	var userflag = false;
	var pdflag = false; 
	var passedflag = false; 
	var telflag = false;  
	var emailflag = false;
	function foc(name){
		$(name).focusin(function(){
			$(this).css('border','2px solid rgba(255,0,0,.2)');
		});
		$(name).focusout(function(){
			$(this).css('border-color','#ddd')
			switch($(name).attr('id')){
				case 'us':
				if( $(this).val() == ''){
					$('.user-tips').html('用户名不能为空')
						.css({	
								display:'inline-block',
								background:'rgba(255,0,0,.1)',
								border:'2px solid rgba(255,0,0,.5)',
								borderRadius:'5px',
								color:'#000',
								padding:'5px',
								fontSize:'12px'
							});
				}else{
					var pattern = /^[\u4e00-\u9fa0a-zA-Z0-9_]{4,12}$/;
					var res = pattern.test( $(this).val() );
					if(res){
						$('.user-tips').html('√').css({color:'#0f0',background:'none',border:'none',fontWeight:'800'});
					}else{
						$('.user-tips').html('用户名格式错误,请输入4-12位字符,由字母,中文,数字和下划线组成')
							.css({
								display:'inline-block',
								background:'rgba(255,0,0,.1)',
								border:'2px solid rgba(255,0,0,.5)',
								borderRadius:'5px',
								color:'#000',
								padding:'5px',
								fontSize:'12px'
							});
						userflag = false;
					}
				}
				break;

				case 'pd':
				if( $(this).val() == ''){
					$('.pd-tips').html('密码不能为空')
						.css({
								display:'inline-block',
								background:'rgba(255,0,0,.1)',
								border:'2px solid rgba(255,0,0,.5)',
								borderRadius:'5px',
								color:'#000',
								padding:'5px',
								fontSize:'12px'
							});
					pdflag = false
				}else{
					var pattern1 = /^\d{9,16}$|^(?!\d+$)\w{6,16}$/;
					var res = pattern1.test( $(this).val() );
					if(res){
						$('.pd-tips').html('√').css({color:'#0f0',background:'none',border:'none',fontWeight:'800'});
					}else{
						$('.pd-tips').html('密码由6-16位字符(不含空格)组成,不能9位以下为纯数字的密码')
							.css({
								display:'inline-block',
								background:'rgba(255,0,0,.1)',
								border:'2px solid rgba(255,0,0,.5)',
								borderRadius:'5px',
								color:'#000',
								padding:'5px',
								fontSize:'12px'
							});
						pdflag = false;
					}
				}
				
				break;
				case 'pded':
					if( $(this).val() == $('#password').val()){
						$('.passed-tips').html('两次输入密码一致')
							.css({
								display:'inline-block',
								background:'rgba(255,0,0,.1)',
								border:'2px solid rgba(255,0,0,.5)',
								borderRadius:'5px',
								color:'#000',
								padding:'5px',
								fontSize:'12px'
							});
						passedflag = true;
					}else if( $(this).val()==" " ){
						$('.passed-tips').html('再次输入密码不能为空')
							.css({
								display:'inline-block',
								background:'rgba(255,0,0,.1)',
								border:'2px solid rgba(255,0,0,.5)',
								borderRadius:'5px',
								color:'#000',
								padding:'5px',
								fontSize:'12px'
							});
						passedflag = false;
					}else{
						$('.passed-tips').html('两次输入密码不一致')
							.css({
								display:'inline-block',
								background:'rgba(255,0,0,.1)',
								border:'2px solid rgba(255,0,0,.5)',
								borderRadius:'5px',
								color:'#000',
								padding:'5px',
								fontSize:'12px'
							});
						passedflag = false;
					}
				break;
				case 'tel':
					if( $(this).val() == ''){
						$('.tel-tips').html('手机号码不能为空')
							.css({
								display:'inline-block',
								background:'rgba(255,0,0,.1)',
								border:'2px solid rgba(255,0,0,.5)',
								borderRadius:'5px',
								color:'#000',
								padding:'5px',
								fontSize:'12px'
							});
						telflag = false;
					}else{
						var pattern2 = /^1(3|4|5|7|8)\d{9}$/;
						var res = pattern2.test( $(this).val() );
						if(res){
							$('.tel-tips').html('√').css({color:'#0f0',background:'none',border:'none',fontWeight:'800'});
							telflag = true;

						}else{
							$('.tel-tips').html('该号码格式不正确')
								.css({
								display:'inline-block',
								background:'rgba(255,0,0,.1)',
								border:'2px solid rgba(255,0,0,.5)',
								borderRadius:'5px',
								color:'#000',
								padding:'5px',
								fontSize:'12px'
							});
							telflag = false;

						}
					}
				break;
				case 'email':
					if( $(this).val() == ''){
						$('.email-tips').html('邮箱地址不能为空')
							.css({
								display:'inline-block',
								background:'rgba(255,0,0,.1)',
								border:'2px solid rgba(255,0,0,.5)',
								borderRadius:'5px',
								color:'#000',
								padding:'5px',
								fontSize:'12px'
							});
						emailflag = false;
					}else{
						var pattern3 =  /^[1-9a-zA-Z][0-9a-zA-Z]{4,}@([0-9a-zA-Z]{2,})\.(com|net|cn|org|COM)$/;
						var res = pattern3.test( $(this).val() );
						if(res){
							$('.email-tips').html('√').css({color:'#0f0',background:'none',border:'none',fontWeight:'800'});
							emailflag = true;

						}else{
							$('.email-tips').html('该邮箱地址格式不正确')
								.css({
								display:'inline-block',
								background:'rgba(255,0,0,.1)',
								border:'2px solid rgba(255,0,0,.5)',
								borderRadius:'5px',
								color:'#000',
								padding:'5px',
								fontSize:'12px'
							});
							emailflag = false;

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

			
});