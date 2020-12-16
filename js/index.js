(function(){

//关注
$('ul').on('click','.aaa',function(){
     if ($(this).hasClass('bbb')) {
        $(this).removeClass('bbb').css('background', 'url("./image/icon/zan.png")no-repeat 0px center')
        $(this).html(3)
    } else {
        $(this).addClass('bbb').css('background', 'url("./image/icon/zan_1.png")no-repeat 0px center')
        $(this).html(4)
    }
})




//倒计时
function auto() {
    var time1 = new Date();
    var time2 = new Date('1 1,2021');
    var wait = time2.getTime() - time1.getTime();
    var date = parseInt(wait / 1000 / 60 / 60 / 24);
    var hour = parseInt(wait / 1000 / 60 / 60 % 24);
    var minute = parseInt(wait / 1000 / 60 % 60);
    var second = parseInt(wait / 1000 % 60);
    $('#countdown').html(date + '天' + hour + '时' + minute + '分' + second + '秒');
}
setInterval(auto, 1000);



//ajax请求
$.ajax({
    url: "http://192.168.1.94:3000/play/new",
    dataType: "json",
    data: "get",
    success: function (res) {
        var  index_hhh = doT.template($('#index_certer_xs').text());
        $('.index_certer_x').html(index_hhh(res[3]));
        var  index_ccc = doT.template($('#index_certer_ds').text());
        $('.index_certer_d').html(index_ccc(res[2]));
        var  index_yyy = doT.template($('#index_certer_fs').text());
        $('.index_certer_f').html(index_yyy(res[2]));
    }
})


//加载更多
var timer_5 = null;
$('.main_more>p').on('click', function () {
    clearTimeout(timer_5);
    $(this).removeClass().addClass('main_loading');
    $(this).text('正在加载......');
    timer_5 = setTimeout(function () {
        $('.main_more>p').removeClass().addClass('nomain_loading');
        $('.main_more>p').text('点击加载更多');
        more_again();
    }, 2000);
});

function more_again() {
    $.ajax({
        url: "http://192.168.1.94:3000/play/new",
        dataType: "json",
        data: "post",
        success: function (res) {
            console.log(res);
            var innerT_1 = doT.template($('#index_certer_mos').text());
            var old = $('.index_certer_mo').html();
            $('.index_certer_mo').html(old + innerT_1(res[parseInt(Math.random() * 4)]));
        }
    });
}





})()
