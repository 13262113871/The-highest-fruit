/* 手机号的验证 */
$('#phone_').on('focus', function () {
    
    $(this).css('color', 'black');
    $(this).val('');
});

$('#phone_').on('blur', function () {
   
    if ($(this).val() == '') {
        $(this).val('手机号码不能为空！');
        $(this).css('color', 'red');
        $(this)[0].bool = false;
    }
    else if ($(this).val().search(/^1[3578]\d{9}$/) == -1) {
        $(this).val('请输入正确的手机号码!');
        $(this).css('color', 'red')
        $(this)[0].bool = false;
    } else {
        $(this).css('color', 'black')
        $(this)[0].bool = true;
    };

});

/* 图片验证码的验证 */
$('#imgCode').on('focus', function () {
    $(this).val('');
    $(this).css('color', 'black');
   
});
$('#imgCode').on('blur', function () {
   var rescode = $(this).val() == 'r2B7' || $(this).val() == 'R2b7' || $(this).val() == 'r2b7';
    if ($(this).val() == '') {
        $(this).val('请输入验证码！');
        $(this).css('color', 'red');
        $(this)[0].bool = false;
    }
    else if (rescode == false) {
        $(this).val('验证码输入错误！');
        $(this).css('color', 'red');
        $(this)[0].bool = false;
      
    }else{
        $(this)[0].bool = true;
    }

});

/* 数字验证码 */
/* 点击获取验证码并且不能二次点击 */
var yzm_val = $('#yzm').text();
var num = 10; 
var timeid = null;
$('#yzm').on('click', function () {
    $(this).attr('disabled', true); //限制不可二次点击
    timeid = setInterval(function () {
        num--;
        $('#yzm').css('backgroundColor', 'gray');
        $('#yzm').text(num + '秒后获取验证码');
        if (num < 0) {
            num = 10;
            clearInterval(timeid);
            $('#yzm').text('重新获取验证码');
            $('#yzm').css('backgroundColor', 'red');
            $('#yzm').attr('disabled', false);
        };
    }, 1000);
});

//在此处没有做验证码的验证
$('#four').on('focus', function () {
    $(this).val('');
    $(this).css('color', 'black');
});
$('#four').on('blur', function () {
    if($(this).val()==''){
        $(this).val('验证码不能为空！');
        $(this).css('color', 'red');
        $(this)[0].bool = false;

    }else{
        $(this)[0].bool = true;
    }
   
});


$('#username').on('blur',function(){
    
  
  
    if($(this).val()==''){
        $(this).val('用户名不能为空！');
        $(this).css('color', 'red');
        $(this)[0].bool = false;
      }
    else if($(this).val().search(/^[\u4e00-\u9fa5]{2,4}$/) == -1){
        $(this).val('用户名不可用');
        $(this).css('color', 'red');
        $(this)[0].bool = false;
      }else{
        $(this)[0].bool = true;
      }
});

/* 验证密码 不能包含空格、回车、换行、中文字符，其他都可以，长度6到16位 */
$('#password_').on('focus',function(){
    $(this).val('');
    $(this).css('color', 'black');
});
var pass=$('#password_').val().search(/^[^\s\u4e00-\u9fa5]{6,16}$/);

$('#password_').on('blur',function(){
   
    if($(this).val()==''){
        $(this).val('');
        alert('密码不能为空！');
        $(this)[0].bool = false;
      }
   else if(pass!=-1){
        $(this).val('');
        alert('6-16位,不含有汉字，空格等特殊字符');
        $(this)[0].bool = false;
    }else{
        $(this)[0].bool = true;
    }
});

/* 验证密码是否一致 */
$('#re_password').on('focus',function(){
    $(this).val('');
    $(this).css('color', 'black');
});
$('#re_password').on('blur',function(){
    if($('#re_password').val()!=$('#password_').val()){
        $(this).val('');
        alert('两次密码不一致！'); 
        $(this)[0].bool = false;
    }else{
        $(this)[0].bool = true;
    }
   
});

$('#reg').on('click',function(){
    var ajax_bool =true;
    $('.ipts input').each(function(){
        var bol = $(this)[0].bool;
        if (bol==false){
            alert('再来一次')
            ajax_bool = false;
            return false;
        }
    });
    if(ajax_bool){
        $.ajax({
            url:'http://192.168.1.94:3000/users/register',
            type:'post',
            data:{
                
                phone:$('#phone_').val(),
                code:$('#four').val(),
                username:$('#username').val(),
                password:$('#password_').val()
            },
            success:function (res) { 
                alert(res.msg);
            }
        })
    }

});

