//ajax请求
$.ajax({
    url: "http://192.168.1.94:3000/guid/hot",
    dataType: "json",
    data: "get",
    success: function (res) {
        var new_ul1 = doT.template($('#new_ul11').text());
        $('.new_ul1').html(new_ul1(res));
        console.log(res);
    }
})

