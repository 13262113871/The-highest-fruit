

// 加载更多请求数据。。。。
function more(more_url) {
    $('.mid_main_lfJz>span').on('click', function () {
        $(this).hide();
        $('.mid_main_lfJz>span:last').show();
        setTimeout(function(){
            aj(more_url);
        },1000);
    });
}
// 默认数据
$.ajax({
    url: 'http://192.168.1.94:3000/report/new',
    success: function (json) {
        console.log(json)
        // doT模板
        var dotText = doT.template($('#doT_list').text());
        $('.mid_main_lfDiv').html(dotText(json));
        dianZan();  // 点赞
        more('http://192.168.1.94:3000/report/new'); //加载更多
    }
});


// 封装ajax----------
function aj(data_url) {
    $.ajax({
        url: data_url,
        success: function (json) {
            // $('.mid_main_lfDiv').remove($('.remove_spen'));
            // doT模板
            var dotText = doT.template($('#doT_list').text());
            $('.mid_main_lfDiv').append(dotText(json));
            // 改回更多样式
            $('.mid_main_lfJz>span:first').show();
            $('.mid_main_lfJz>span:last').hide();
        },
        error: function () {
            console.info("error: Not data");
        }
    });
}

// 点击最新-----------------------
$('.mid_top_twoV>span:first').on('click', function () {
    // 先清除
    $('.mid_main_lfDiv').empty();
    // 动态添加样式
    $('.mid_top_twoV>span').removeClass('mid_top_spanC');
    $(this).addClass('mid_top_spanC');
    aj('http://192.168.1.94:3000/report/new');
    more('http://192.168.1.94:3000/report/new'); //加载更多
});

// 点击最热----------------------------
$('.mid_top_twoV>span:last').on('click', function () {
    // 先清除
    $('.mid_main_lfDiv').empty();
    // 动态添加样式
    $('.mid_top_twoV>span').removeClass('mid_top_spanC');
    $(this).addClass('mid_top_spanC');
    aj('http://192.168.1.94:3000/report/hot');
    more('http://192.168.1.94:3000/report/hot'); //加载更多
});
