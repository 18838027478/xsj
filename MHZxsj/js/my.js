$(document).ready(function(){
    if(localStorage.getItem("skey")){
        $(".header1").addClass("none")
        $(".header2").addClass("block")
    }
})
$(".login").click(function(){
    $(".header1").addClass("none")
    $(".header2").addClass("block")
    localStorage.setItem("skey","5c627edbcc81517f906ac360c1072ff2cd2da6dd");
    localStorage.setItem("uname","暖玉生烟");
    localStorage.setItem("uimg","https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJt9eFezfhFo9SlS85SDZKsCuicJSoNw3rnRrGR51vbOJuN9esZzbog8kjtVWMUT6iccmicag5D1DnIg/132");
    localStorage.setItem("ubalance",100);
        $(".header2 img").attr("src",localStorage.getItem("uimg"))
        $(".username").text(localStorage.getItem("uname"))
        $(".balance").text(localStorage.getItem("ubalance"))
})
function unlogin(){
    localStorage.clear()
    // localStorage.removeItem("skey");
    // localStorage.removeItem("uname");
    // localStorage.removeItem("uimg");
    // localStorage.removeItem("ubalance");
    location.reload()
}
$(document).ready(function(){
    if(localStorage.getItem("skey")){
        $(".header2 img").attr("src",localStorage.getItem("uimg"))
        $(".username").text(localStorage.getItem("uname"))
        $(".balance").text(localStorage.getItem("ubalance"))
    }
})
$(".gomyBook").click(function(){
    if(localStorage.getItem("skey")){
        go('myBook.html')
    }else{
        $(".warn-warper").show().hide(3000)
    }
})

