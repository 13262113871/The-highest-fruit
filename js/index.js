
//关注
$('.aaa').on('click', function () {
    if ($(this).hasClass('bbb')) {
        $(this).removeClass('bbb').css('background', 'url("../image/icon/zan.png")no-repeat 0px center')
        $(this).html(3)
    } else {
        $(this).addClass('bbb').css('background', 'url("../image/icon/zan_1.png")no-repeat 0px center')
        $(this).html(4)
    }
})




//倒计时
// var span = document.getElementById('span')
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
