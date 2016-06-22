//alert("ok");
//jQuery时间
$(function(){
//-----------客户服务------star
	$(".service").hover(function(){
		
		//console.log("bbbb")
		$("#service_items").slideDown(50);
		$("li.service>a").addClass("active")
	},function(){
		//console.log("aaaa")
		$("#service_items").slideUp(60);
		$("li.service>a").removeClass("active")
	});
	$("#cate_box>li").hover(function(){
		$(this).children("div.sub_cate_box").show(50);
		$(this).children("h3").addClass("active");
		//console.log("aaaa")
	},function(){
		$(this).children("div.sub_cate_box").hide(50);
		$(this).children("h3").removeClass("active");
	});
	$("#cate_box div.close").click(function(){
		// body...
		$(this).parent().hide()
	});
	//var banner = {
		//图片名
		//image:[],
		//轮播定时器
		//timer:null,
		//使用时长，
		//WAIT:1500,
		//轮播开始
		//start:function(){
		//	console.log("aaaa")
		//}
	//}
	/*var image = ["banner_05.jpg",
				 "banner_04.jpg",
				 "banner_03.jpg",
				 "banner_02.jpg",
				 "banner_01.jpg"];
		
	var index = 0;
	function change(){
		if (index==5) {
			index=0;
		}
		$("#slider>img").attr("src","Images\\index\\"+image[index++])*/
	
		//setInterval(change,1500);
		var banner = {
			index:0,
			image:["banner_05.jpg",
				   "banner_04.jpg",
				   "banner_03.jpg",
				   "banner_02.jpg",
				   "banner_01.jpg"],
			WAIT:1500,
			timer:null,
			change:function(){
				if (banner.index==5){
			banner.index=0;

		}
		$("#slider>img").attr("src","Images\\index\\"+banner.image[banner.index]);
		$("#slider li").removeClass("current");
		$("#slider li:eq("+banner.index+")").addClass("current");
		banner.index++;
			},
			start:function(){
				banner.timer = setInterval(this.change,this.WAIT)
				$("#slider").hover(function(){clearInterval(banner.timer);},
					function(){banner.timer = setInterval(banner.change,banner.WAIT);})

			},


		}
		banner.start();
		
		
		var  image= ["ad_01.jpg","ad_02.jpg","ad_03.jpg",
					 "ad_04.jpg","ad_05.jpg","ad_06.jpg",
					 "ad_07.jpg","ad_08.jpg","ad_09.jpg",]
		var pageNo = 1;
		$("#ad span.preview").click(function(){
			// body...
			//alert("1")
			if (pageNo == 1) {
				pageNo = 4;
			}
			pageNo--;
			var offset = (pageNo-1)*3;
			$("#ad img:eq(0)").attr("src","Images\\index\\"+image[offset])
			$("#ad img:eq(1)").attr("src","Images\\index\\"+image[offset+1])
			$("#ad img:eq(2)").attr("src","Images\\index\\"+image[offset+2])
		})
		$("#ad span.next").click(function(){
			// body...
			//alert("2")
			if (pageNo == 3) {
				pageNo = 0;
			}
			pageNo++;
			var offset = (pageNo-1)*3;
			$("#ad img:eq(0)").attr("src","Images\\index\\"+image[offset])
			$("#ad img:eq(1)").attr("src","Images\\index\\"+image[offset+1])
			$("#ad img:eq(2)").attr("src","Images\\index\\"+image[offset+2])
			
		})
//-----------客户服务------end
});
