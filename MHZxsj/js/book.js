;(function(){

// 获取图书，并动态渲染到页面
    let isall={is_all:1}
    let method='get'
    getAjax(getBooksUrl,isall,method,function (result){
        let books=result.data
        let html=''
        for(let i=0;i<books.length;i++){
            html+='<div class="swiper-slide" >\n'+
            '<div class="item">\n'+
                '<img src="'+books[i].cover_url+'">\n'+
                '<div class="bkname">'+books[i].book_name+'</div>\n'+
                '<div class="author">'+books[i].author+'</div>\n'+
                '<div class="pass">'+books[i].book_publisher+'</div>\n'+
            '</div>\n'+
        '</div>'
        }
        $(".swiper-wrapper").html(html)
    // 轮播图的script代码
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 20,
            freeMode: true,
            slidesPerView:'auto',
            centeredSlides:true,
            slidesOffsetBefore:-305,
            // slidesOffsetAfter:300,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
//为每个书籍注册点击事件跳转到相应的书籍详情页，，此处采用委托
$(".swiper-wrapper").on("click",".swiper-slide",function(){
    let index=$(".swiper-slide").index(this)
    let url='detail.html?cover_url='+books[index].cover_url+'&book_name='+books[index].book_name+'&author='+books[index].author+'&book_publisher='+books[index].book_publisher+'&bookid='+books[index].book_id
    if(localStorage.getItem("skey")){
        location.href=url
    }else{
        $(".warn-warper").show().hide(3000,function(){
            location.href=url
        })
    }
})
})
})();