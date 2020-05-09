// rem适配
; (function () {
    var change = 'orientationchange' in window ? 'orientationchange' : 'resize';
    function calculate() {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth < 241) {
            deviceWidth = 240;
        } else if (deviceWidth < 320) {
            deviceWidth = 320;
        } else if (deviceWidth > 750) {
            deviceWidth = 750;
        }
        document.documentElement.style.fontSize = deviceWidth / 37.5 + 'px';
    };
    window.addEventListener('resize', calculate, false);
    calculate();

})();
// 底部样式   点击跳转
function go(res) {
    if(localStorage.getItem("skey")){
        location.href = res
    }else{
        $(".warn-warper").show().hide(3000)
    }
}
//返回上一个页面
function back(){
    window.history.back(-1);
}
//封装一个ajax函数，用于发送ajax请求，请求接口
function getAjax(url, data, method,success, error) {
    $.ajax({
        type: method,
        url: url,
        dataType: 'json',
        async: true,
        data: data,
        success: function (res) {
            success(res)
        },
        error: function (err) {
            error(err)
        }
    })
}
//截取字符串
function GetRequest() {
    let url = location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
Requestnormal = GetRequest();//把所有参数打包成数组，如果用里面的某个元素直接用Requestnormal.name
