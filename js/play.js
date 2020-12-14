//Layui模块
// layui.use(['element','laytpl'], function () {
//     var element = layui.element;
//     var laytpl = layui.laytpl;
// });


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
            var innerT_1 = doT.template($('#new_mores').text());
            var old = $('#new_more').html();
            $('#new_more').html(old + innerT_1(res[parseInt(Math.random() * 4)]));
        }
    });
}



//ajax请求
$.ajax({
    url: "http://192.168.1.94:3000/play/new",
    dataType: "json",
    data: "get",
    success: function (res) {
        var new_ul1 = doT.template($('#new_ul11').text());
        $('#new_ul1').html(new_ul1(res[0]));
        var new_ul2 = doT.template($('#new_ul22').text());
        $('#new_ul2').html(new_ul2(res[1]));
    }
})




// 最新模板

