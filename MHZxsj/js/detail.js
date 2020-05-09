; (function () {
    // console.log(localStorage.valueOf(),"是否能够获取所有")
    $(".openbooks").hide()
    $(".img img").attr("src", Requestnormal.cover_url)
    $(".bookInfo .bkname").html(Requestnormal.book_name)
    $(".bookInfo .bkaunthor").html(Requestnormal.author)
    $(".bookInfo .padd").html(Requestnormal.book_publisher)
    $(".booktit .bkname").html(Requestnormal.book_name)
    //将评论动态渲染
    let content = ''
    if (localStorage.getItem("content")) {
        content = localStorage.getItem("content")
        let html = '<div class="item">\n' +
            '<img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJt9eFezfhFo9SlS85SDZKsCuicJSoNw3rnRrGR51vbOJuN9esZzbog8kjtVWMUT6iccmicag5D1DnIg/132"alt="">\n' +
            '<div class="listInfo">\n' +
            '<div class="username">暖玉生烟</div>\n' +
            '<div class="text">' + content + '</div>\n' +
            '<div class="time">2020-03-14</div>\n' +
            '</div>\n' +
            '</div>'
        $(".commonList").append(html)
        localStorage.removeItem("content")
        localStorage.setItem("con",content)
    }
    if (localStorage.getItem("con")) {
        let html = '<div class="item">\n' +
            '<img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJt9eFezfhFo9SlS85SDZKsCuicJSoNw3rnRrGR51vbOJuN9esZzbog8kjtVWMUT6iccmicag5D1DnIg/132"alt="">\n' +
            '<div class="listInfo">\n' +
            '<div class="username">暖玉生烟</div>\n' +
            '<div class="text">' + localStorage.getItem("con") + '</div>\n' +
            '<div class="time">2020-03-14</div>\n' +
            '</div>\n' +
            '</div>'
        $(".commonList").append(html)
        localStorage.removeItem("content")
    }
    // 查看时候购买书籍以及动态渲染评论列表
    if (localStorage.getItem("skey")) {
        let data = {
            "skey": localStorage.getItem("skey"),
            bookid: Requestnormal.bookid
        }
        let method = "get"
        getAjax(queryBookUrl, data, method, function (res) {
            if (res.data.is_buy == 1) {
                $(".buybooks").hide()
                $(".openbooks").show()
                if (res.data.lists.length != 0) {
                    $(".commonFlag").hide()
                    let html = ''
                    for (let i = 0; i < res.data.lists.length; i++) {
                        html += '<div class="item">\n' +
                            '<img src="' + res.data.lists[i].uavatar + '"alt="">\n' +
                            '<div class="listInfo">\n' +
                            '<div class="username">' + res.data.lists[i].uname + '</div>\n' +
                            '<div class="text">' + res.data.lists[i].ccontent + '</div>\n' +
                            '<div class="time">' + res.data.lists[i].ctime + '</div>\n' +
                            '</div>\n' +
                            '</div>'
                    }
                    $(".commonList").html(html)
                }
            }
        }, function error(err) {
            console.log(err, "失败")
        })
    }
})();
//买书
function buyBook() {
    if (localStorage.getItem("skey")) {
        $(".duihuan-warper").show()
    } else {
        $(".warn-warper").show().hide(3000)
    }
}
$(".btn-parent .btn").click(function () {
    // if (localStorage.getItem("skey")) {
        // localStorage.setItem("index", $(".btn").index(this))
    //     $(".duihuan-warper").hide()
    // }
    let index=$(".btn").index(this)
    if (index == 4) {
        $(".duihuan-warper").hide()
        let data = {
            skey: localStorage.getItem("skey"),
            bookid: Requestnormal.bookid
        }
        let method = "post"
        getAjax(buyBookUrl, data, method, function (res) {
            $(".buybooks").hide()
            $(".openbooks").show()
            var ubalance = localStorage.getItem("ubalance")
            --ubalance
            localStorage.setItem("ubalance", ubalance)
        }, function (err) {
            console.log(err, "兑换失败")
        })
    }
})
// 页面加载，清楚是否购买缓存
$(document).ready(function () {
    localStorage.removeItem("index")
})