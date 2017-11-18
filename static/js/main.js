$(function(){
	// Page Preloader
	$(window).load(function() {
		$(".loader").delay(300).fadeOut();
		$(".animationload").delay(600).fadeOut("slow");
	});

	$("#menu-trigger").on("click", function(){    //点击菜单
		$("#menu-trigger").toggleClass("open");
		$("#leftmenu").toggleClass("toggled");
		$(".leftmenu-mb").toggleClass("toggleDisplay");
	})
	$(".leftmenu-mb").on("click", function(){    //点到其他位置收起菜单
		$("#menu-trigger").toggleClass("open");
		$("#leftmenu").toggleClass("toggled");
		$(".leftmenu-mb").toggleClass("toggleDisplay");
		$("#chat").removeClass("show-chat");
	})
	$("#top-search").on("click", function(e){	//header 搜索按钮
		e = e||event;
		$("#top-search-wrap").toggleClass("show-search");
		$("#top-search-wrap .tsw-inner input").focus()
		$(".tsw-inner input").on("click", function(e){e.stopPropagation();})
		e.stopPropagation();
		$(document).one("click", function(e){
			$("#top-search-wrap").removeClass("show-search");
			e.stopPropagation();
		})
	})
	$("#chat-btn").on("click", function(e){				//在线用户聊天 chat	
		e = e||event;	
		$("#chat").toggleClass("show-chat");
		$(".chat-btn").toggleClass("toggleli");
		$("#chat").on("click", function(e){e.stopPropagation();})
		e.stopPropagation();
		$(document).one("click", function(e){
			$("#chat").removeClass("show-chat");
			$(".chat-btn, #info-btn, #top-user-btn").removeClass("toggleli");
			e.stopPropagation();
		})
	})
	$("#info-btn").on("click", function(e){				//消息提醒
		e = e||event;
		$("#info").toggleClass("show-info");
		$("#info-btn").toggleClass("toggleli");
		$("#info").on("click", function(e){e.stopPropagation();})
		e.stopPropagation();
		$(document).one("click", function(e){
			$("#info").removeClass("show-info");
			$(".chat-btn, #info-btn, #top-user-btn").removeClass("toggleli");
			e.stopPropagation();
		})
	})
	$("#top-user-btn").on("click", function(e){				//当前用户
		e = e||event;
		$("#top-user").toggleClass("show-info");
		$("#top-user-btn").toggleClass("toggleli");
		$("#top-user").on("click", function(e){e.stopPropagation();})
		e.stopPropagation();
		$(document).one("click", function(e){
			$("#top-user").removeClass("show-info");
			$(".chat-btn, #info-btn, #top-user-btn").removeClass("toggleli");
			e.stopPropagation();
		})
	})
	$("#main").on("click", function(){
		$("#top-search-wrap").removeClass("show-search");	//收起header搜索
		$("#chat").removeClass("show-chat");				//收起chat
		$("#info").removeClass("show-info");				//收起消息栏
		$("#top-user").removeClass("show-info");				//收起当前用户
		$(".chat-btn, #info-btn, #top-user-btn").removeClass("toggleli");	//去掉按钮背景	
	})
	var touchtime = new Date().getTime();      //双击header返回顶部
	$("#header").on("click", function(){
        if( new Date().getTime() - touchtime < 500 ){
            $("html,body").animate({scrollTop:"0px"},800)
        }else{
            touchtime = new Date().getTime();
        }
    });
	// 判断上滚下滚
	var bottom=0,top=0;  
	$(window).scroll(function(e){  
	   	bottom = $(this).scrollTop();  
	    if(top <= bottom){//下滚  
	      // $("#header").css("top", "-75px");
	      // $(".dataShare_back_listveiw").css("bottom", "-75px");
	    }  
	    else{//上滚  
	      // $("#header").css("top", "0");
	      // $(".dataShare_back_listveiw").css("bottom", "15px");
	    }  
	    setTimeout(function(){top = bottom;},0);         
	});
	// 隐藏和显示通用新增按钮
	// $(window).scroll(function(){
	// 	if($(window).scrollTop() > 100){
	// 		$(".currenty-new").css("bottom", "20px");
	// 	}
	// 	if($(window).scrollTop() < 100){
	// 		$(".currenty-new").css("bottom", "-50px");
	// 	}
	// })

	$("#header, .currenty-new").headroom({
	 	"offset": 80,
	  	"tolerance": 5,
	  	"classes" : {
	        // 当元素初始化后所设置的class
	        initial : "toggle",
	        // 向上滚动时设置的class
	        pinned : "headroom--pinned",
	        // 向下滚动时所设置的class
	        unpinned : "headroom--unpinned"
	    }
	});
})