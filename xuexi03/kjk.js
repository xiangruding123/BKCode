$(document).ready(function () {
	// 添加首页焦点图轮播
    autoPlayPicIndex(5000);
	
    function autoPlayPicIndex(delayTime) {
        var objBox = $('.c1_l_1');
        var objArrow = objBox.find('.g_nav');
        var moveWidth = objBox.width();
        var moveObj = objBox.find('#imgshow>ul');
        var objList = moveObj.find('li');
        var len = objList.length;
        var num = 0;
        var timer = null;
        var objArrowInnerStr = '';
        for (var i = 0; i < len; i++) {
            objArrowInnerStr += '<a class=""></a>';
        }
        objArrow.html('').append(objArrowInnerStr);
        move(delayTime);
        function move(delayTime) {
            clearTimeout(timer);
            auto();
            function auto() {
                if (num >= len) {
                    num = 0;
                }
                objArrow.find('a').eq(num).addClass('active').siblings().removeClass('active');
                moveObj.animate({left: -num * moveWidth}, 300);
                timer = setTimeout(auto, delayTime);
                num++;
            }
        }
        objArrow.find('a').on('click', function () {
            var idx = $(this).index();
            num = idx;
            move(delayTime);
        });
        objList.hover(function () {
            clearTimeout(timer);
        }, function () {
            var idx = $(this).index();
            num = idx;
            move(delayTime);
        });
    }
							
    $(".VAS_100x100 img").addClass('nohover');
    //$(".survey_fixed").delay(10000).fadeOut();

    $(document).click(function(){$("#se_pro_items").hide();});
    $(".se_input").click(function(event){event.stopPropagation();$("#se_pro_items").toggle()});
    $("#se_pro_items").click(function(event){
        event.preventDefault();
        var target = $(event.target);
        var txt = target.text();
        var val = target.attr("rev");
        var url = ["http://so.kimiss.com",
            "http://home.kimiss.com/home.php?mod=spacecp&ac=search&searchsubmit=yes",
            "http://brand.kimiss.com/all.html"
        ];
        if(val==4){
            $("#form_pro").attr("action",url[2]);
            $("#so_dp").attr("name","keyword");
        }else if(val==2){
            $("#form_pro").attr("action",url[1]);
            $("#so_dp").attr("name","username");
        }else{
            $("#form_pro").attr("action",url[0]);
            $("#so_dp").attr("name","keyword");
        }
        $("#se_pro_key").text(txt);
        $("#se_pro_val").val(val);
    });
    //load flash
    //$("#imgshow").scrollable({circular:true}).autoscroll({ autoplay: true,interval: 5000 }).navigator({navi:'#scro_nav'});
    //$("#imgshow").scrollable({circular: true, prev: "#imgshow_l", next: "#imgshow_r"}).autoscroll({autoplay: true, interval: 5000}).navigator({navi: "#scro_nav"});
    $("#scro_2").autoFade({nav: '#scro_nav2', interval: 5000});
    $("#scro_3").autoFade({nav: '#scro_nav3', interval: 5000});
    $("#scro_4").autoFade({nav: '#scro_nav4', interval: 5000});
    $("#scro_5").autoFade({nav: '#scro_nav5', interval: 5000});

    $("#sub1_l li").bind("mouseover", {list: "#sub1_l li", target: "#sub1_r li"}, ashowb);
    function ashowb(event) {
        if (!$(this).hasClass('active')) {
            var n = $(this).index();
            $(event.data.target).hide();
            $(event.data.target).eq(n).fadeIn();
            $(event.data.list).removeClass("active");
            $(this).addClass("active");
        }
        return false;
    }

    //新品入库 最新点评
    $("#c4_sub").tabs("div.c4_l_c", {event: 'mouseover'});
    $("#c4_sub2").tabs("div.c4_l_2_c", {event: 'mouseover'});
    //热评单品
    $(".tabs_t").tabs(".tabs_b>ul", { event: 'mouseover', current: 'hover' });
    $(".tab_ul").each(function(i,el){
        var items = $(el).children("li");
        var prev = $(items[0]) ;
        items.each(function(i,el){
            $(el).mouseover(function(){
                prev.removeClass("active");
                prev.children(".active_c").hide();
                $(this).addClass("active");
                $(this).children(".active_c").show();
                prev = $(this);
            });
        });
    });



    $('.c1_l_2_c dl:first-child').addClass('first');
    $('.c2_c li:first-child').addClass('first');
    $('.c2_c li:last-child').addClass('last');
    $('.c2_c li').last().css('padding','0 0 0 26px');
    $('.c8_c_item:first-child').addClass('first');
    $('.tabs_b li:last-child').addClass('last');
    $('.c6_l_1').next().css('margin-top','10px');
    $('.c4_l_2_c li:first-child').css('padding-top','10px').find('.info').css('top','10px');


    $(".c_search .main_input").bind({
        blur: function () {
            if ($(this).val() == "")
                $(this).val("\u8BF7\u8F93\u5165\u62FC\u97F3\u3001\u62FC\u97F3\u7F29\u5199\u3001\u4E2D\u6587\u3001\u82F1\u6587\u7B49\u53EF\u4EE5\u5FEB\u901F\u5339\u914D");
            $("#se_brand").hide();
        },
        focus: function () {
            if ($(this).val() == "\u8BF7\u8F93\u5165\u62FC\u97F3\u3001\u62FC\u97F3\u7F29\u5199\u3001\u4E2D\u6587\u3001\u82F1\u6587\u7B49\u53EF\u4EE5\u5FEB\u901F\u5339\u914D")
                $(this).val("");
        }
    });


    //右侧快速导航
    $(".top_sidebar_try").click(function(){
        $('html,body').animate({scrollTop:$('[name=freeTry]').offset().top});
    });
    $(".top_sidebar_adv").click(function(){
        $('html,body').animate({scrollTop:$('[name=proComments]').offset().top});
    });
    $(".top_sidebar_night9").click(function(){
        $('html,body').animate({scrollTop:$('[name=nightNine]').offset().top});
    });
    //totop
    $("#totop").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 100);
    });
    function scroll() {
        var top = $(window).scrollTop();
        if (top > 1200) {
            $(".top_sidebar").hide();
        } else {
            $(".top_sidebar").hide();
        }
        //去除锚点问题
        //location.hash='/';
    }

    var t = null;
    $(window).scroll(function () {
        t && clearTimeout(t);
        t = setTimeout(scroll, 100);
    });
    // 20130926 YuanYanjun //
    var $vernier=$('#arrow1 .tab_arrow').eq(0);
    $('#c4_sub').tabs('.c4_l_con .c4_l_c',{
        event:'mouseover'
    });
    $('#c4_sub li').bind('mouseover',function(){
        var $that=$(this);
        $vernier.stop().animate({
            'right':(4-$that.index())*80
        },{
            'easing':'swing'
        });
    });

    var $vernier2=$('#arrow2 .tab2_arrow').eq(0);
    $("#c4_sub2").tabs("div.c4_l_2_c", {event: 'mouseover'});
    $('#c4_sub2 li').bind('mouseover',function(){
        var $that=$(this);
        $vernier2.stop().animate({
            'right':(5-$that.index())*80
        },{
            'easing':'swing'
        });
    });

    $("#scroller_1_inner").scrollable({circular: true, prev: "#scroller_1_prevBtn", next: "#scroller_1_nextBtn"}).autoscroll({autoplay: true, interval: 5000});

    $('#CSscrollContainer').CSscrollbar();


    //登陆信息(XXX位蜜友正在逛闺蜜网)上方资讯滚动 2014-04-18 BEG
    var _login_up_t;
    $(".news").hover(function(){
        clearInterval(_login_up_t);
    },function() {
        _login_up_t = setInterval(function(){
            var ul = $(".s_gd");
            var liHeight = ul.find("li:last").height();
            ul.animate({ marginTop : liHeight +"px" },900,function(){
                ul.find("li:last").prependTo(ul);
                ul.find("li:first").hide();
                ul.css({ marginTop:0 });
                ul.find("li:first").fadeIn(600);
            });
        },3000);
    }).trigger("mouseleave");
    //登陆信息(XXX位蜜友正在逛闺蜜网)上方资讯滚动 2014-04-18 END

    //2016/2/26添加视频模块 BEG
    var y_addTvObj = $('.y_addTv dt');
    y_addTvObj.hover(function(){
        y_addTvObj.find('.y_linkTv').removeClass('now');
        $(this).find('.y_linkTv').addClass('now');
        $('.y_addTv dd').find('.y_addTvRightText').removeClass('js_hover1').addClass('js_hover');
        $(this).siblings('dd').find('.y_addTvRightText').addClass('js_hover1');
    });
});