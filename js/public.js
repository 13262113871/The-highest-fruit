// 点击弹出登录
$('.head_login').on('click',function(){
    $('.login_zz').toggle(); //遮罩
    $('.login').toggle();
});

//关闭
$('#closeOff').on('click',function(){
    $('.login_zz').toggle(); //遮罩
    $('.login').toggle();
});

//返回顶部
$(window).scroll(function(){   
    if ($(document).scrollTop()> 500) {
        $('.footer_return').show()
    } else {
        $('.footer_return').hide()
    };

});

var timer_4 = null;
$('.footer_return').on('click',function(){
    timer_4 = setInterval(function(){
    var scoll_y = $(document).scrollTop();
    var v = parseInt(scoll_y/(Math.random()+4));
    // 
    $(document).scrollTop(scoll_y - v);
    if(scoll_y <= 5){clearInterval(timer_4);}
    },100);
});




// 点击登录

    $('#login').on('click',function(){
            $.ajax({
                url:'http://192.168.1.94:3000/users/login',
                type:'post',
                data:{
                    username:$('#phone').val(),
                    password:$('#password').val()
                },
                success:function (res) {
                    alert(res.msg);
                    if($('#checkbox').is(':checked')){
                                localStorage.setItem('phone',$('#phone').val());
                                localStorage.setItem('psd',$('#password').val());
                                localStorage.setItem('tick',$('#checkbox').is(':checked'));
                            }   
                            else{
                                localStorage.clear();
                    }
                }
            })
    });
    
    //记住密码
        if(localStorage.getItem('tick')){
            $('#phone').val(localStorage.getItem('phone'));
            $('#password').val(localStorage.getItem('psd'));
            $('#checkbox').attr('checked',localStorage.getItem('tick'));
        }