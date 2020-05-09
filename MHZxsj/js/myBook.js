; (function () {
    let books={}
    $(".noBook").show()
    let data = { "skey": localStorage.getItem("skey") }
    let method = "get"
    getAjax(getBoughtBooksUrl, data, method, function (res) {
        books=res.list
        if (res.list != 0) {
            $(".noBook").hide()
            let html = ''
            for (let i = 0; i < res.list.length; i++) {
                html += '<div class="item" id="'+res.list[i].bkid+'">\n' +
                    '<img src="'+res.list[i].bkcover+'" alt="">\n' +
                    '<div class="bkname">'+res.list[i].bkname+'</div>\n' +
                    '</div>'
            }
            $(".booklist").html(html)
        }
    }, function (err) {
        console.log(err, "失败获取已购")
    })
    
    //动态绑定点击
    $(".booklist").on("click",".item",function(){
    // 根据id获取书本信息
        let id=$(this).attr("id")
        let data={
            is_all:0,
            bookid:id
        }
        let method="get"
        getAjax(getBooksUrl,data,method,function(res){
            let books=res.data[0]
            let url='detail.html?cover_url='+books.cover_url+'&book_name='+books.book_name+'&author='+books.author+'&book_publisher='+books.book_publisher+'&bookid='+books.book_id
            location.href=url
        })
    })
})();