$(function () {
    //顶部的“客户服务”弹出：注意，需要在 CSS 文件中添加类 active
    //当鼠标移入到 客户服务.
    //a 元素添加active
    //显示所有
    $("li.service").hover(function(){
        $("li.service>a").addClass("active");
        $("#service_items").show();
    },function(){
        $("li.service>a").removeClass("active");
        $("#service_items").hide();
    });
    //common.css 111行
    //鼠标移出
    
    
    //全部商品分类 jd_index.html line 77
    //二级分类菜单的弹出
    $("#cate_box li").hover(function(){
       $(this).children("h3").addClass("active");
       $(this).children("div.sub_cate_box").show();

    },function(){
       $(this).children("h3").removeClass("active");
       $(this).children("div.sub_cate_box").hide();
    });
    
    //单击弹出的二级分类菜单中的“X”，关闭二级分类菜单
    $("#cate_box div.close").click(function(){
        $(this).parent().hide();
    }); 
    
    //$('#cate_box div.close').click(function () {
    //    $(this).parent().hide();
    //});

    //banner 的图片轮换
    banner.init();

    //小广告图片的点击切换
    adv.init();
});

var banner = {
    index:0,
    WAIT:2000,
    timer:null,
    kk:null,
    items:["banner_01.jpg","banner_02.jpg","banner_03.jpg","banner_04.jpg","banner_04.jpg"],
    init:function(){
        var me = this;
        me.nextImage();
        me.timer = setInterval(me.nextImage,me.WAIT);
        $("#slider").hover(function(){
            clearInterval(me.timer);
        },function(){
           me.timer = setInterval(me.nextImage,me.WAIT);
        });
    },
    nextImage:function(){
        if(banner.index==5){
            banner.index = 0;
        }
        $("#slider>img").attr("src","Images//index//"+banner.items[banner.index]);
        $("#slider li").removeClass("current");
        $("#slider li:eq("+banner.index+")").addClass("current");
        banner.index++;
    }
};
var adv = {
    pageNo:1,
    pageSize:3,
    totalPage:3,
    offset:0,
    items:["ad_01.jpg","ad_02.jpg","ad_03.jpg","ad_04.jpg","ad_05.jpg","ad_06.jpg","ad_07.jpg","ad_08.jpg","ad_09.jpg"],
    init:function(){
       var me = this; 
       $("#ad span.preview").click(function(){
         me.pageNo--; 
         if(me.pageNo < 1){
            me.pageNo = 1;
         }
         me.offset = (me.pageNo - 1) * me.pageSize;
         $("#ad img:eq(0)").attr("src","Images//index//"+me.items[me.offset]);
         $("#ad img:eq(1)").attr("src","Images//index//"+me.items[me.offset+1]);
         $("#ad img:eq(2)").attr("src","Images//index//"+me.items[me.offset+2]);

       });
       $("#ad span.next").click(function(){
         me.pageNo++; 
         if(me.pageNo > me.totalPage){
            me.pageNo = me.totalPage;
         }
         me.offset = (me.pageNo - 1) * me.pageSize;
         $("#ad img:eq(0)").attr("src","Images//index//"+me.items[me.offset]);
         $("#ad img:eq(1)").attr("src","Images//index//"+me.items[me.offset+1]);
         $("#ad img:eq(2)").attr("src","Images//index//"+me.items[me.offset+2]);        
       });
    }
};


    