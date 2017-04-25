$(function(){
	$('.main_nav a').mouseenter(function(){
		$('.nav_line').show();
	});
	$('.main_nav a').mouseleave(function(){
		$('.nav_line').hide();
	});
	
	
	
	//navSlider
	function navSlider(){
		var $nav = $('.main_nav'),
			$cur = $('.main_nav li.cur a'),
			
			$navLine = $('.nav_line'),
			$anchor = $('a',$nav.children()),
			curPosL = $cur.position().left,
			curW = $cur.outerWidth(true),
			curIdx = $('li.cur',$nav).index();
		$navLine.css({'width':curW,'left':curPosL});
		$anchor.not('li.last a',$nav).each(function(index){
			var posL = $(this).position().left,
				w = $(this).outerWidth(true);
			$(this).mouseenter(function(){
				$navLine.stop().animate({'width':w,'left':posL},250);
				$(this).parent().addClass('cur').siblings().removeClass('cur');
			});
		});
		$nav.mouseleave(function(){
			$navLine.animate({'width':curW,'left':curPosL},250);
			$anchor.parent(':eq('+curIdx+')').addClass('cur').siblings().removeClass('cur');
		});
	}

	navSlider();
	
	

});



$(document).ready(function () {

	$(".search .main_input").bind({
		blur: function () {
			if ($(this).val() == "")
				$(this).val("\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\u3001\u54C1\u724C\u6216\u5173\u952E\u5B57");
			$("#se_brand").hide();
		},
		focus: function () {
			if ($(this).val() == "\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\u3001\u54C1\u724C\u6216\u5173\u952E\u5B57")
				$(this).val("");
		}
	});
	//¶¥²¿Î¢ÐÅÍ¼±ê
	$("#show_weixin").hover(function(){
		$("#add_weixin").show();
	},function(){
		$("#add_weixin").hide();
	});
	/*×ÊÑ¶Ò³¶¥²¿ÊúÌõ»¬¶¯*/
	var $verticalBar = $('<div class="vbar"></div>');
	var $tabCards = $('.c1 .com_l .sub_left .subshow .subshow_item'),$tabHeaders = $('.c1 .com_l .sub_right .sub_right_item'),$tabBar = $('.c1 .com_l .sub_right').eq(0) ;

	init();
	function init(){
		$tabBar.eq(0).append($verticalBar);
		$tabCards.eq(0).show().siblings().hide();
		bindEvent();
	}
	function bindEvent(){
		$tabHeaders.bind('mouseenter',function(){
			var $this=$(this),index=$this.index();
			$tabCards.fadeOut().eq(index).fadeIn();
			$verticalBar.stop().animate({
				top:$this.position().top
			})
		})
	}

	//Ëæ»ú´ó±³¾°Í¼
	var random_img_bg=Math.floor(Math.random()*7+1);
	var imgbg='url(http://new-icon.ol-img.com/kimiss/0926/img/bg_'+random_img_bg+'.jpg)';
	$("#mainbg").css({
		"background-image":imgbg,
		"background-repeat":"no-repeat",
		"background-position":"center top"
	});

	//ÓÑÇéÁ´½Ó¹ö¶¯
	if(document.getElementById("scrolltext")){
		var scrollup = new ScrollText("scrolltext");
		scrollup.LineHeight = 24;
		scrollup.Amount = 1;
		scrollup.Delay = 20;
		scrollup.Start();
		scrollup.Direction = "up";
	}

});