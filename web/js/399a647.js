/**
 * Created by nevada on 25.03.14.
 */

// divider for InsideFortuna.html.twig
$(document).ready(function($){

    var divs = $('div.divider'),
        k = 0,
        cntInGroup = 3; // по сколько элементов в группе

    divs.each(function(i){
        if(i % cntInGroup == 0){
            k++;
        }
        $(this).addClass('tmp' + k);
    });

    for(i = 1; i <= divs.length + 1 / cntInGroup; i++)
    {
        $('.tmp' + i).wrapAll('<div class="row"></div>');
    }

});
//end divider

// hover effect for InsideFortuna.html.twig
$(document).ready(function($){

    var fortune = $('div.fortune-incl');

    fortune.each(function(){
        var d = $(this).height();
        var h = $('h2',this).height();
        var clear_h = (d) - (h);
        $('p, ul', this).addClass("hidden");
        $('.thumbnail', this).css("height",clear_h +"px");

        $(this).hover(
            function () {
                $('h2', this).hide();
                $('p, ul', this).removeClass("hidden");
                $('p, ul', this).fadeIn(300);
            },
            function () {
                $('p, ul', this).hide();
                $('h2', this).fadeIn(300);
            })
    });

});
/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:v()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).is("img")&&t(this).attr("src",t(this).attr("src")+"?timestamp="+(new Date).getTime()),t(this).load(function(){setTimeout(function(){++n==s&&i()},0)})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",B),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&I(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},p=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},v=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.delegate("a","click",q)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},q=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},I=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},B=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider())};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&I(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",p()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),I(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",B))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function decode(s) {
		if (config.raw) {
			return s;
		}
		try {
			// If we can't decode the cookie, ignore it, it's unusable.
			return decodeURIComponent(s.replace(pluses, ' '));
		} catch(e) {}
	}

	function decodeAndParse(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		s = decode(s);

		try {
			// If we can't parse the cookie, ignore it, it's unusable.
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	var config = $.cookie = function (key, value, options) {

		// Write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				result = decodeAndParse(cookie);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = decodeAndParse(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));

/*
 * jQuery The Final Countdown plugin v1.0.0
 * http://github.com/hilios/jquery.countdown
 *
 * Copyright (c) 2011 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function(h){h.fn.countdown=function(a,l){function m(a,d){return function(){return d.call(a)}}var k="seconds minutes hours days weeks daysLeft".split(" ");return this.each(function(){function j(){if(0===e.closest("html").length)clearInterval(f),d("removed");else{c--;0>c&&(c=0);g={seconds:c%60,minutes:Math.floor(c/60)%60,hours:Math.floor(c/60/60)%24,days:Math.floor(c/60/60/24),weeks:Math.floor(c/60/60/24/7),daysLeft:Math.floor(c/60/60/24)%7};for(var a=0;a<k.length;a++){var b=k[a];i[b]!=g[b]&&(i[b]=g[b],d(b))}0==c&&(clearInterval(f),d("finished"))}}function d(d){var b=h.Event(d);b.date=new Date((new Date).valueOf()+c);b.value=i[d]||"0";b.toDate=a;b.lasting=g;switch(d){case "seconds":case "minutes":case "hours":b.value=10>b.value?"0"+b.value.toString():b.value.toString();break;default:b.value&&(b.value=b.value.toString())}l.call(e,b)}if(!(a instanceof Date))if(String(a).match(/^[0-9]*$/))a=new Date(a);else if(a.match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{2,4})\s([0-9]{1,2})\:([0-9]{2})\:([0-9]{2})/)||a.match(/([0-9]{2,4})\/([0-9]{1,2})\/([0-9]{1,2})\s([0-9]{1,2})\:([0-9]{2})\:([0-9]{2})/))a=new Date(a);else if(a.match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{2,4})/)||a.match(/([0-9]{2,4})\/([0-9]{1,2})\/([0-9]{1,2})/))a=new Date(a);else throw Error("Doesn't seen to be a valid date object or string");var e=h(this),i={},g={},f=e.data("countdownInterval"),c=Math.floor((a.valueOf()-(new Date).valueOf())/1E3);j();f&&clearInterval(f);e.data("countdownInterval",setInterval(m(e,j),1E3));f=e.data("countdownInterval")})}})(jQuery);
/*global jQuery */
/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        //$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        
        /*** CUSTOM FIX FOR BOOTSTRAP 3 ***/
        $this.css('font-size', Math.max(Math.min($('body').find('#carousel').width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {

      var div = document.createElement('div'),
          ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0],
          cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';

      div.className = 'fit-vids-style';
      div.id = 'fit-vids-style';
      div.style.display = 'none';
      div.innerHTML = cssStyles;

      ref.parentNode.insertBefore(div,ref);

    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );

/**
 * jquery.hoverdir.js v1.1.1
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {
	
	'use strict';

	$.HoverDir = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );

	};

	// the options
	$.HoverDir.defaults = {
		speed : 300,
		easing : 'ease',
		hoverDelay : 0,
		inverse : false,
		hoverElem : 'div'
	};

	$.HoverDir.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.HoverDir.defaults, options );
			// transition properties
			this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
			// support for CSS transitions
			this.support = Modernizr.csstransitions;
			// load the events
			this._loadEvents();

		},
		_loadEvents : function() {

			var self = this;
			
			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
				
				var $el = $( this ),
					$hoverElem = $el.find( self.options.hoverElem ),
					direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					styleCSS = self._getStyle( direction );
				
				if( event.type === 'mouseenter' ) {
					
					$hoverElem.hide().css( styleCSS.from );
					clearTimeout( self.tmhover );

					self.tmhover = setTimeout( function() {
						
						$hoverElem.show( 0, function() {
							
							var $el = $( this );
							if( self.support ) {
								$el.css( 'transition', self.transitionProp );
							}
							self._applyAnimation( $el, styleCSS.to, self.options.speed );

						} );
						
					
					}, self.options.hoverDelay );
					
				}
				else {
				
					if( self.support ) {
						$hoverElem.css( 'transition', self.transitionProp );
					}
					clearTimeout( self.tmhover );
					self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );
					
				}
					
			} );

		},
		// credits : http://stackoverflow.com/a/3647634
		_getDir : function( $el, coordinates ) {
			
			// the width and height of the current div
			var w = $el.width(),
				h = $el.height(),

				// calculate the x and y to get an angle to the center of the div from that x and y.
				// gets the x value relative to the center of the DIV and "normalize" it
				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
			
				// the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
				// first calculate the angle of the point,
				// add 180 deg to get rid of the negative values
				// divide by 90 to get the quadrant
				// add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
			
			return direction;
			
		},
		_getStyle : function( direction ) {
			
			var fromStyle, toStyle,
				slideFromTop = { left : '0px', top : '-100%' },
				slideFromBottom = { left : '0px', top : '100%' },
				slideFromLeft = { left : '-100%', top : '0px' },
				slideFromRight = { left : '100%', top : '0px' },
				slideTop = { top : '0px' },
				slideLeft = { left : '0px' };
			
			switch( direction ) {
				case 0:
					// from top
					fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
					toStyle = slideTop;
					break;
				case 1:
					// from right
					fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
					toStyle = slideLeft;
					break;
				case 2:
					// from bottom
					fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
					toStyle = slideTop;
					break;
				case 3:
					// from left
					fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
					toStyle = slideLeft;
					break;
			};
			
			return { from : fromStyle, to : toStyle };
					
		},
		// apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
		_applyAnimation : function( el, styleCSS, speed ) {

			$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms' } ) );

		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.hoverdir = function( options ) {

		var instance = $.data( this, 'hoverdir' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for hoverdir instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );

/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);
/*! Magnific Popup - v0.9.5 - 2013-08-21
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,i,n,o,a,r,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",v="."+g,h="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,i){t.ev.on(g+e+v,i)},k=function(t,i,n,o){var a=document.createElement("div");return a.className="mfp-"+t,n&&(a.innerHTML=n),o?i&&i.appendChild(a):(a=e(a),i&&a.appendTo(i)),a},T=function(i,n){t.ev.triggerHandler(g+i,n),t.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),t.st.callbacks[i]&&t.st.callbacks[i].apply(t,e.isArray(n)?n:[n]))},E=function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},S=function(i){return i===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=i),t.currTemplate.closeBtn},P=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},_=function(i){if(!e(i).hasClass(y)){var n=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(n&&o)return!0;if(!t.content||e(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||e.contains(t.content[0],i)){if(n)return!0}else if(o&&e.contains(document,i))return!0;return!1}},O=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var i=navigator.appVersion;t.isIE7=-1!==i.indexOf("MSIE 7."),t.isIE8=-1!==i.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(i),t.isIOS=/iphone|ipad|ipod/gi.test(i),t.supportsTransition=O(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),n=e(document.body),o=e(document),t.popupsCache={}},open:function(i){var n;if(i.isObj===!1){t.items=i.items.toArray(),t.index=0;var a,s=i.items;for(n=0;s.length>n;n++)if(a=s[n],a.parsed&&(a=a.el[0]),a===i.el[0]){t.index=n;break}}else t.items=e.isArray(i.items)?i.items:[i.items],t.index=i.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],r="",t.ev=i.mainEl&&i.mainEl.length?i.mainEl.eq(0):o,i.key?(t.popupsCache[i.key]||(t.popupsCache[i.key]={}),t.currTemplate=t.popupsCache[i.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,i),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+v,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+v,function(e){_(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(n=0;l.length>n;n++){var c=l[n];c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,i,n){i.close_replaceWith=S(n.type)}),r+=" mfp-close-btn-in"):t.wrap.append(S())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+v,function(e){27===e.keyCode&&t.close()}),I.on("resize"+v,function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var d=t.wH=I.height(),u={};if(t.fixedContentPos&&t._hasScrollBar(d)){var m=t._getScrollbarSize();m&&(u.paddingRight=m)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):u.overflow="hidden");var g=t.st.mainClass;t.isIE7&&(g+=" mfp-ie7"),g&&t._addClassToMFP(g),t.updateItemHTML(),T("BuildControls"),e("html").css(u),t.bgOverlay.add(t.wrap).prependTo(document.body),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(h),E()):t.bgOverlay.addClass(h),o.on("focusin"+v,function(i){return i.target===t.wrap[0]||e.contains(t.wrap[0],i.target)?void 0:(E(),!1)})},16),t.isOpen=!0,t.updateSize(d),T(f)},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var i=C+" "+h+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(i+=t.st.mainClass+" "),t._removeClassFromMFP(i),t.fixedContentPos){var n={paddingRight:""};t.isIE7?e("body, html").css("overflow",""):n.overflow="",e("html").css(n)}o.off("keyup"+v+" focusin"+v),t.ev.off(v),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*i;t.wrap.css("height",n),t.wH=n}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var i=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),i.parsed||(i=t.parseEl(t.index));var n=i.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",n]),t.currItem=i,!t.currTemplate[n]){var o=t.st[n]?t.st[n].markup:!1;T("FirstMarkupParse",o),t.currTemplate[n]=o?e(o):!0}a&&a!==i.type&&t.container.removeClass("mfp-"+a+"-holder");var r=t["get"+n.charAt(0).toUpperCase()+n.slice(1)](i,t.currTemplate[n]);t.appendContent(r,n),i.preloaded=!0,T(m,i),a=i.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,i){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[i]===!0?t.content.find(".mfp-close").length||t.content.append(S()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+i+"-holder"),t.contentContainer.append(t.content)},parseEl:function(i){var n=t.items[i],o=n.type;if(n=n.tagName?{el:e(n)}:{data:n,src:n.src},n.el){for(var a=t.types,r=0;a.length>r;r++)if(n.el.hasClass("mfp-"+a[r])){o=a[r];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=o||t.st.type||"inline",n.index=i,n.parsed=!0,t.items[i]=n,T("ElementParse",n),t.items[i]},addGroup:function(e,i){var n=function(n){n.mfpEl=this,t._openClick(n,e,i)};i||(i={});var o="click.magnificPopup";i.mainEl=e,i.items?(i.isObj=!0,e.off(o).on(o,n)):(i.isObj=!1,i.delegate?e.off(o).on(o,i.delegate,n):(i.items=e,e.off(o).on(o,n)))},_openClick:function(i,n,o){var a=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(a||2!==i.which&&!i.ctrlKey&&!i.metaKey){var r=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(r)if(e.isFunction(r)){if(!r.call(t))return!0}else if(r>I.width())return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation()),o.el=e(i.mfpEl),o.delegate&&(o.items=n.find(o.delegate)),t.open(o)}},updateStatus:function(e,n){if(t.preloader){i!==e&&t.container.removeClass("mfp-s-"+i),n||"loading"!==e||(n=t.st.tLoading);var o={status:e,text:n};T("UpdateStatus",o),e=o.status,n=o.text,t.preloader.html(n),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),i=e}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_parseMarkup:function(t,i,n){var o;n.data&&(i=e.extend(n.data,i)),T(p,[t,i,n]),e.each(i,function(e,i){if(void 0===i||i===!1)return!0;if(o=e.split("_"),o.length>1){var n=t.find(v+"-"+o[0]);if(n.length>0){var a=o[1];"replaceWith"===a?n[0]!==i[0]&&n.replaceWith(i):"img"===a?n.is("img")?n.attr("src",i):n.replaceWith('<img src="'+i+'" class="'+n.attr("class")+'" />'):n.attr(o[1],i)}}else t.find(v+"-"+e).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(e,t){return P(),e||(e={}),e.isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(i){P();var n=e(this);if("string"==typeof i)if("open"===i){var o,a=b?n.data("magnificPopup"):n[0].magnificPopup,r=parseInt(arguments[1],10)||0;a.items?o=a.items[r]:(o=n,a.delegate&&(o=o.find(a.delegate)),o=o.eq(r)),t._openClick({mfpEl:o},n,a)}else t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1));else b?n.data("magnificPopup",i):n[0].magnificPopup=i,t.addGroup(n,i);return n};var z,M,B,H="inline",L=function(){B&&(M.after(B.addClass(z)).detach(),B=null)};e.magnificPopup.registerModule(H,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(H),x(l+"."+H,function(){L()})},getInline:function(i,n){if(L(),i.src){var o=t.st.inline,a=e(i.src);if(a.length){var r=a[0].parentNode;r&&r.tagName&&(M||(z=o.hiddenClass,M=k(z),z="mfp-"+z),B=a.after(M).detach().removeClass(z)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),a=e("<div>");return i.inlineElement=a,a}return t.updateStatus("ready"),t._parseMarkup(n,{},i),n}}});var A,F="ajax",j=function(){A&&n.removeClass(A)};e.magnificPopup.registerModule(F,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(F),A=t.st.ajax.cursor,x(l+"."+F,function(){j(),t.req&&t.req.abort()})},getAjax:function(i){A&&n.addClass(A),t.updateStatus("loading");var o=e.extend({url:i.src,success:function(n,o,a){var r={data:n,xhr:a};T("ParseAjax",r),t.appendContent(e(r.data),F),i.finished=!0,j(),E(),setTimeout(function(){t.wrap.addClass(h)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){j(),i.finished=i.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",i.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var N,W=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var n=t.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(t,i);if(i.el)return i.el.attr(n)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,i=".image";t.types.push("image"),x(f+i,function(){"image"===t.currItem.type&&e.cursor&&n.addClass(e.cursor)}),x(l+i,function(){e.cursor&&n.removeClass(e.cursor),I.off("resize"+v)}),x("Resize"+i,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var i=0;t.isLowIE&&(i=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-i)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,N&&clearInterval(N),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var i=0,n=e.img[0],o=function(a){N&&clearInterval(N),N=setInterval(function(){return n.naturalWidth>0?(t._onImageHasSize(e),void 0):(i>200&&clearInterval(N),i++,3===i?o(10):40===i?o(50):100===i&&o(500),void 0)},a)};o(1)},getImage:function(i,n){var o=0,a=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(a,100):r()))},r=function(){i&&(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("error",s.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},s=t.st.image,l=n.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",i.img=e(c).on("load.mfploader",a).on("error.mfploader",r),c.src=i.src,l.is("img")&&(i.img=i.img.clone()),i.img[0].naturalWidth>0&&(i.hasSize=!0)}return t._parseMarkup(n,{title:W(i),img_replaceWith:i.img},i),t.resizeImage(),i.hasSize?(N&&clearInterval(N),i.loadError?(n.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",i.src))):(n.removeClass("mfp-loading"),t.updateStatus("ready")),n):(t.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,n.addClass("mfp-loading"),t.findImageSize(i)),n)}}});var R,Z=function(){return void 0===R&&(R=void 0!==document.createElement("p").style.MozTransform),R};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e=t.st.zoom,i=".zoom";if(e.enabled&&t.supportsTransition){var n,o,a=e.duration,r=function(t){var i=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+e.duration/1e3+"s "+e.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition";return o["-webkit-"+a]=o["-moz-"+a]=o["-o-"+a]=o[a]=n,i.css(o),i},s=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(n),t.content.css("visibility","hidden"),image=t._getItemToZoom(),!image)return s(),void 0;o=r(image),o.css(t._getOffset()),t.wrap.append(o),n=setTimeout(function(){o.css(t._getOffset(!0)),n=setTimeout(function(){s(),setTimeout(function(){o.remove(),image=o=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(n),t.st.removalDelay=a,!image){if(image=t._getItemToZoom(),!image)return;o=r(image)}o.css(t._getOffset(!0)),t.wrap.append(o),t.content.css("visibility","hidden"),setTimeout(function(){o.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(s(),o&&o.remove())})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(i){var n;n=i?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=n.offset(),a=parseInt(n.css("padding-top"),10),r=parseInt(n.css("padding-bottom"),10);o.top-=e(window).scrollTop()-a;var s={width:n.width(),height:(b?n.innerHeight():n[0].offsetHeight)-r-a};return Z()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var q="iframe",D="//about:blank",K=function(e){if(t.currTemplate[q]){var i=t.currTemplate[q].find("iframe");i.length&&(e||(i[0].src=D),t.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(q,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(q),x("BeforeChange",function(e,t,i){t!==i&&(t===q?K():i===q&&K(!0))}),x(l+"."+q,function(){K()})},getIframe:function(i,n){var o=i.src,a=t.st.iframe;e.each(a.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var r={};return a.srcAction&&(r[a.srcAction]=o),t._parseMarkup(n,r,i),t.updateStatus("ready"),n}}});var Y=function(e){var i=t.items.length;return e>i-1?e-i:0>e?i+e:e},U=function(e,t,i){return e.replace("%curr%",t+1).replace("%total%",i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=t.st.gallery,n=".mfp-gallery",a=Boolean(e.fn.mfpFastClick);return t.direction=!0,i&&i.enabled?(r+=" mfp-gallery",x(f+n,function(){i.navigateByImgClick&&t.wrap.on("click"+n,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+n,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+n,function(e,i){i.text&&(i.text=U(i.text,t.currItem.index,t.items.length))}),x(p+n,function(e,n,o,a){var r=t.items.length;o.counter=r>1?U(i.tCounter,a.index,r):""}),x("BuildControls"+n,function(){if(t.items.length>1&&i.arrows&&!t.arrowLeft){var n=i.arrowMarkup,o=t.arrowLeft=e(n.replace("%title%",i.tPrev).replace("%dir%","left")).addClass(y),r=t.arrowRight=e(n.replace("%title%",i.tNext).replace("%dir%","right")).addClass(y),s=a?"mfpFastClick":"click";o[s](function(){t.prev()}),r[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",r[0],!1,!0),k("a",r[0],!1,!0)),t.container.append(o.add(r))}}),x(m+n,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+n,function(){o.off(n),t.wrap.off("click"+n),t.arrowLeft&&a&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=Y(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=Y(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,i=t.st.gallery.preload,n=Math.min(i[0],t.items.length),o=Math.min(i[1],t.items.length);for(e=1;(t.direction?o:n)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?n:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(i){if(i=Y(i),!t.items[i].preloaded){var n=t.items[i];n.parsed||(n=t.parseEl(i)),T("LazyLoad",n),"image"===n.type&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0,T("LazyLoadError",n)}).attr("src",n.src)),n.preloaded=!0}}}});var G="retina";e.magnificPopup.registerModule(G,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,i=e.ratio;i=isNaN(i)?i():i,i>1&&(x("ImageHasSize."+G,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})}),x("ElementParse."+G,function(t,n){n.src=e.replaceSrc(n,i)}))}}}}),function(){var t=1e3,i="ontouchstart"in window,n=function(){I.off("touchmove"+a+" touchend"+a)},o="mfpFastClick",a="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var r,s=e(this);if(i){var l,c,d,u,p,f;s.on("touchstart"+a,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+a,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,n())}).on("touchend"+a,function(e){n(),u||f>1||(r=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){r=!1},t),o())})})}s.on("click"+a,function(){r||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+a+" click"+a),i&&I.off("touchmove"+a+" touchend"+a)}}()})(window.jQuery||window.Zepto);
//
// LESS - Leaner CSS v1.3.3
// http://lesscss.org
//
// Copyright (c) 2009-2013, Alexis Sellier
// Licensed under the Apache 2.0 License.
//
(function(e,t){function n(t){return e.less[t.split("/")[1]]}function f(){r.env==="development"?(r.optimization=0,r.watchTimer=setInterval(function(){r.watchMode&&g(function(e,t,n,r,i){t&&S(t.toCSS(),r,i.lastModified)})},r.poll)):r.optimization=3}function m(){var e=document.getElementsByTagName("style");for(var t=0;t<e.length;t++)e[t].type.match(p)&&(new r.Parser({filename:document.location.href.replace(/#.*$/,""),dumpLineNumbers:r.dumpLineNumbers})).parse(e[t].innerHTML||"",function(n,r){var i=r.toCSS(),s=e[t];s.type="text/css",s.styleSheet?s.styleSheet.cssText=i:s.innerHTML=i})}function g(e,t){for(var n=0;n<r.sheets.length;n++)w(r.sheets[n],e,t,r.sheets.length-(n+1))}function y(e,t){var n=b(e),r=b(t),i,s,o,u,a="";if(n.hostPart!==r.hostPart)return"";s=Math.max(r.directories.length,n.directories.length);for(i=0;i<s;i++)if(r.directories[i]!==n.directories[i])break;u=r.directories.slice(i),o=n.directories.slice(i);for(i=0;i<u.length-1;i++)a+="../";for(i=0;i<o.length-1;i++)a+=o[i]+"/";return a}function b(e,t){var n=/^((?:[a-z-]+:)?\/\/(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/,r=e.match(n),i={},s=[],o,u;if(!r)throw new Error("Could not parse sheet href - '"+e+"'");if(!r[1]||r[2]){u=t.match(n);if(!u)throw new Error("Could not parse page url - '"+t+"'");r[1]=u[1],r[2]||(r[3]=u[3]+r[3])}if(r[3]){s=r[3].replace("\\","/").split("/");for(o=0;o<s.length;o++)s[o]===".."&&o>0&&(s.splice(o-1,2),o-=2)}return i.hostPart=r[1],i.directories=s,i.path=r[1]+s.join("/"),i.fileUrl=i.path+(r[4]||""),i.url=i.fileUrl+(r[5]||""),i}function w(t,n,i,s){var o=t.contents||{},u=t.files||{},a=b(t.href,e.location.href),f=a.url,c=l&&l.getItem(f),h=l&&l.getItem(f+":timestamp"),p={css:c,timestamp:h},d;r.relativeUrls?r.rootpath?t.entryPath?d=b(r.rootpath+y(a.path,t.entryPath)).path:d=r.rootpath:d=a.path:r.rootpath?d=r.rootpath:t.entryPath?d=t.entryPath:d=a.path,x(f,t.type,function(e,l){v+=e.replace(/@import .+?;/ig,"");if(!i&&p&&l&&(new Date(l)).valueOf()===(new Date(p.timestamp)).valueOf())S(p.css,t),n(null,null,e,t,{local:!0,remaining:s},f);else try{o[f]=e,(new r.Parser({optimization:r.optimization,paths:[a.path],entryPath:t.entryPath||a.path,mime:t.type,filename:f,rootpath:d,relativeUrls:t.relativeUrls,contents:o,files:u,dumpLineNumbers:r.dumpLineNumbers})).parse(e,function(r,i){if(r)return k(r,f);try{n(r,i,e,t,{local:!1,lastModified:l,remaining:s},f),N(document.getElementById("less-error-message:"+E(f)))}catch(r){k(r,f)}})}catch(c){k(c,f)}},function(e,t){throw new Error("Couldn't load "+t+" ("+e+")")})}function E(e){return e.replace(/^[a-z]+:\/\/?[^\/]+/,"").replace(/^\//,"").replace(/\.[a-zA-Z]+$/,"").replace(/[^\.\w-]+/g,"-").replace(/\./g,":")}function S(e,t,n){var r,i=t.href||"",s="less:"+(t.title||E(i));if((r=document.getElementById(s))===null){r=document.createElement("style"),r.type="text/css",t.media&&(r.media=t.media),r.id=s;var o=t&&t.nextSibling||null;(o||document.getElementsByTagName("head")[0]).parentNode.insertBefore(r,o)}if(r.styleSheet)try{r.styleSheet.cssText=e}catch(u){throw new Error("Couldn't reassign styleSheet.cssText.")}else(function(e){r.childNodes.length>0?r.firstChild.nodeValue!==e.nodeValue&&r.replaceChild(e,r.firstChild):r.appendChild(e)})(document.createTextNode(e));if(n&&l){C("saving "+i+" to cache.");try{l.setItem(i,e),l.setItem(i+":timestamp",n)}catch(u){C("failed to save")}}}function x(e,t,n,i){function a(t,n,r){t.status>=200&&t.status<300?n(t.responseText,t.getResponseHeader("Last-Modified")):typeof r=="function"&&r(t.status,e)}var s=T(),u=o?r.fileAsync:r.async;typeof s.overrideMimeType=="function"&&s.overrideMimeType("text/css"),s.open("GET",e,u),s.setRequestHeader("Accept",t||"text/x-less, text/css; q=0.9, */*; q=0.5"),s.send(null),o&&!r.fileAsync?s.status===0||s.status>=200&&s.status<300?n(s.responseText):i(s.status,e):u?s.onreadystatechange=function(){s.readyState==4&&a(s,n,i)}:a(s,n,i)}function T(){if(e.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(t){return C("browser doesn't support AJAX."),null}}function N(e){return e&&e.parentNode.removeChild(e)}function C(e){r.env=="development"&&typeof console!="undefined"&&console.log("less: "+e)}function k(e,t){var n="less-error-message:"+E(t),i='<li><label>{line}</label><pre class="{class}">{content}</pre></li>',s=document.createElement("div"),o,u,a=[],f=e.filename||t,l=f.match(/([^\/]+(\?.*)?)$/)[1];s.id=n,s.className="less-error-message",u="<h3>"+(e.message||"There is an error in your .less file")+"</h3>"+'<p>in <a href="'+f+'">'+l+"</a> ";var c=function(e,t,n){e.extract[t]&&a.push(i.replace(/\{line\}/,parseInt(e.line)+(t-1)).replace(/\{class\}/,n).replace(/\{content\}/,e.extract[t]))};e.stack?u+="<br/>"+e.stack.split("\n").slice(1).join("<br/>"):e.extract&&(c(e,0,""),c(e,1,"line"),c(e,2,""),u+="on line "+e.line+", column "+(e.column+1)+":</p>"+"<ul>"+a.join("")+"</ul>"),s.innerHTML=u,S([".less-error-message ul, .less-error-message li {","list-style-type: none;","margin-right: 15px;","padding: 4px 0;","margin: 0;","}",".less-error-message label {","font-size: 12px;","margin-right: 15px;","padding: 4px 0;","color: #cc7777;","}",".less-error-message pre {","color: #dd6666;","padding: 4px 0;","margin: 0;","display: inline-block;","}",".less-error-message pre.line {","color: #ff0000;","}",".less-error-message h3 {","font-size: 20px;","font-weight: bold;","padding: 15px 0 5px 0;","margin: 0;","}",".less-error-message a {","color: #10a","}",".less-error-message .error {","color: red;","font-weight: bold;","padding-bottom: 2px;","border-bottom: 1px dashed red;","}"].join("\n"),{title:"error-message"}),s.style.cssText=["font-family: Arial, sans-serif","border: 1px solid #e00","background-color: #eee","border-radius: 5px","-webkit-border-radius: 5px","-moz-border-radius: 5px","color: #e00","padding: 15px","margin-bottom: 15px"].join(";"),r.env=="development"&&(o=setInterval(function(){document.body&&(document.getElementById(n)?document.body.replaceChild(s,document.getElementById(n)):document.body.insertBefore(s,document.body.firstChild),clearInterval(o))},10))}Array.isArray||(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"||e instanceof Array}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var n=this.length>>>0;for(var r=0;r<n;r++)r in this&&e.call(t,this[r],r,this)}),Array.prototype.map||(Array.prototype.map=function(e){var t=this.length>>>0,n=new Array(t),r=arguments[1];for(var i=0;i<t;i++)i in this&&(n[i]=e.call(r,this[i],i,this));return n}),Array.prototype.filter||(Array.prototype.filter=function(e){var t=[],n=arguments[1];for(var r=0;r<this.length;r++)e.call(n,this[r])&&t.push(this[r]);return t}),Array.prototype.reduce||(Array.prototype.reduce=function(e){var t=this.length>>>0,n=0;if(t===0&&arguments.length===1)throw new TypeError;if(arguments.length>=2)var r=arguments[1];else do{if(n in this){r=this[n++];break}if(++n>=t)throw new TypeError}while(!0);for(;n<t;n++)n in this&&(r=e.call(null,r,this[n],n,this));return r}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length,n=arguments[1]||0;if(!t)return-1;if(n>=t)return-1;n<0&&(n+=t);for(;n<t;n++){if(!Object.prototype.hasOwnProperty.call(this,n))continue;if(e===this[n])return n}return-1}),Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),String.prototype.trim||(String.prototype.trim=function(){return String(this).replace(/^\s\s*/,"").replace(/\s\s*$/,"")});var r,i,s;typeof environment=="object"&&{}.toString.call(environment)==="[object Environment]"?(typeof e=="undefined"?r={}:r=e.less={},i=r.tree={},r.mode="rhino"):typeof e=="undefined"?(r=exports,i=n("./tree"),r.mode="node"):(typeof e.less=="undefined"&&(e.less={}),r=e.less,i=e.less.tree={},r.mode="browser"),r.Parser=function(t){function g(){a=c[u],f=o,h=o}function y(){c[u]=a,o=f,h=o}function b(){o>h&&(c[u]=c[u].slice(o-h),h=o)}function w(e){var t=e.charCodeAt(0);return t===32||t===10||t===9}function E(e){var t,n,r,i,a;if(e instanceof Function)return e.call(p.parsers);if(typeof e=="string")t=s.charAt(o)===e?e:null,r=1,b();else{b();if(!(t=e.exec(c[u])))return null;r=t[0].length}if(t)return S(r),typeof t=="string"?t:t.length===1?t[0]:t}function S(e){var t=o,n=u,r=o+c[u].length,i=o+=e;while(o<r){if(!w(s.charAt(o)))break;o++}return c[u]=c[u].slice(e+(o-i)),h=o,c[u].length===0&&u<c.length-1&&u++,t!==o||n!==u}function x(e,t){var n=E(e);if(!!n)return n;T(t||(typeof e=="string"?"expected '"+e+"' got '"+s.charAt(o)+"'":"unexpected token"))}function T(e,t){var n=new Error(e);throw n.index=o,n.type=t||"Syntax",n}function N(e){return typeof e=="string"?s.charAt(o)===e:e.test(c[u])?!0:!1}function C(e,t){return e.filename&&t.filename&&e.filename!==t.filename?p.imports.contents[e.filename]:s}function k(e,t){for(var n=e,r=-1;n>=0&&t.charAt(n)!=="\n";n--)r++;return{line:typeof e=="number"?(t.slice(0,e).match(/\n/g)||"").length:null,column:r}}function L(e){return r.mode==="browser"||r.mode==="rhino"?e.filename:n("path").resolve(e.filename)}function A(e,t,n){return{lineNumber:k(e,t).line+1,fileName:L(n)}}function O(e,t){var n=C(e,t),r=k(e.index,n),i=r.line,s=r.column,o=n.split("\n");this.type=e.type||"Syntax",this.message=e.message,this.filename=e.filename||t.filename,this.index=e.index,this.line=typeof i=="number"?i+1:null,this.callLine=e.call&&k(e.call,n).line+1,this.callExtract=o[k(e.call,n).line],this.stack=e.stack,this.column=s,this.extract=[o[i-1],o[i],o[i+1]]}var s,o,u,a,f,l,c,h,p,d=this,t=t||{};t.contents||(t.contents={}),t.rootpath=t.rootpath||"",t.files||(t.files={});var v=function(){},m=this.imports={paths:t.paths||[],queue:[],files:t.files,contents:t.contents,mime:t.mime,error:null,push:function(e,n){var i=this;this.queue.push(e),r.Parser.importer(e,this.paths,function(t,r,s){i.queue.splice(i.queue.indexOf(e),1);var o=s in i.files;i.files[s]=r,t&&!i.error&&(i.error=t),n(t,r,o),i.queue.length===0&&v(i.error)},t)}};return this.env=t=t||{},this.optimization="optimization"in this.env?this.env.optimization:1,this.env.filename=this.env.filename||null,p={imports:m,parse:function(e,a){var f,d,m,g,y,b,w=[],S,x=null;o=u=h=l=0,s=e.replace(/\r\n/g,"\n"),s=s.replace(/^\uFEFF/,""),c=function(e){var n=0,r=/(?:@\{[\w-]+\}|[^"'`\{\}\/\(\)\\])+/g,i=/\/\*(?:[^*]|\*+[^\/*])*\*+\/|\/\/.*/g,o=/"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'|`((?:[^`]|\\.)*)`/g,u=0,a,f=e[0],l;for(var c=0,h,p;c<s.length;){r.lastIndex=c,(a=r.exec(s))&&a.index===c&&(c+=a[0].length,f.push(a[0])),h=s.charAt(c),i.lastIndex=o.lastIndex=c;if(a=o.exec(s))if(a.index===c){c+=a[0].length,f.push(a[0]);continue}if(!l&&h==="/"){p=s.charAt(c+1);if(p==="/"||p==="*")if(a=i.exec(s))if(a.index===c){c+=a[0].length,f.push(a[0]);continue}}switch(h){case"{":if(!l){u++,f.push(h);break};case"}":if(!l){u--,f.push(h),e[++n]=f=[];break};case"(":if(!l){l=!0,f.push(h);break};case")":if(l){l=!1,f.push(h);break};default:f.push(h)}c++}return u!=0&&(x=new O({index:c-1,type:"Parse",message:u>0?"missing closing `}`":"missing opening `{`",filename:t.filename},t)),e.map(function(e){return e.join("")})}([[]]);if(x)return a(x,t);try{f=new i.Ruleset([],E(this.parsers.primary)),f.root=!0}catch(T){return a(new O(T,t))}f.toCSS=function(e){var s,o,u;return function(s,o){var u=[],a;s=s||{},typeof o=="object"&&!Array.isArray(o)&&(o=Object.keys(o).map(function(e){var t=o[e];return t instanceof i.Value||(t instanceof i.Expression||(t=new i.Expression([t])),t=new i.Value([t])),new i.Rule("@"+e,t,!1,0)}),u=[new i.Ruleset(null,o)]);try{var f=e.call(this,{frames:u}).toCSS([],{compress:s.compress||!1,dumpLineNumbers:t.dumpLineNumbers})}catch(l){throw new O(l,t)}if(a=p.imports.error)throw a instanceof O?a:new O(a,t);return s.yuicompress&&r.mode==="node"?n("ycssmin").cssmin(f):s.compress?f.replace(/(\s)+/g,"$1"):f}}(f.eval);if(o<s.length-1){o=l,b=s.split("\n"),y=(s.slice(0,o).match(/\n/g)||"").length+1;for(var N=o,C=-1;N>=0&&s.charAt(N)!=="\n";N--)C++;x={type:"Parse",message:"Syntax Error on line "+y,index:o,filename:t.filename,line:y,column:C,extract:[b[y-2],b[y-1],b[y]]}}this.imports.queue.length>0?v=function(e){e=x||e,e?a(e):a(null,f)}:a(x,f)},parsers:{primary:function(){var e,t=[];while((e=E(this.mixin.definition)||E(this.rule)||E(this.ruleset)||E(this.mixin.call)||E(this.comment)||E(this.directive))||E(/^[\s\n]+/)||E(/^;+/))e&&t.push(e);return t},comment:function(){var e;if(s.charAt(o)!=="/")return;if(s.charAt(o+1)==="/")return new i.Comment(E(/^\/\/.*/),!0);if(e=E(/^\/\*(?:[^*]|\*+[^\/*])*\*+\/\n?/))return new i.Comment(e)},entities:{quoted:function(){var e,t=o,n;s.charAt(t)==="~"&&(t++,n=!0);if(s.charAt(t)!=='"'&&s.charAt(t)!=="'")return;n&&E("~");if(e=E(/^"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'/))return new i.Quoted(e[0],e[1]||e[2],n)},keyword:function(){var e;if(e=E(/^[_A-Za-z-][_A-Za-z0-9-]*/))return i.colors.hasOwnProperty(e)?new i.Color(i.colors[e].slice(1)):new i.Keyword(e)},call:function(){var e,n,r,s,a=o;if(!(e=/^([\w-]+|%|progid:[\w\.]+)\(/.exec(c[u])))return;e=e[1],n=e.toLowerCase();if(n==="url")return null;o+=e.length;if(n==="alpha"){s=E(this.alpha);if(typeof s!="undefined")return s}E("("),r=E(this.entities.arguments);if(!E(")"))return;if(e)return new i.Call(e,r,a,t.filename)},arguments:function(){var e=[],t;while(t=E(this.entities.assignment)||E(this.expression)){e.push(t);if(!E(","))break}return e},literal:function(){return E(this.entities.ratio)||E(this.entities.dimension)||E(this.entities.color)||E(this.entities.quoted)||E(this.entities.unicodeDescriptor)},assignment:function(){var e,t;if((e=E(/^\w+(?=\s?=)/i))&&E("=")&&(t=E(this.entity)))return new i.Assignment(e,t)},url:function(){var e;if(s.charAt(o)!=="u"||!E(/^url\(/))return;return e=E(this.entities.quoted)||E(this.entities.variable)||E(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/)||"",x(")"),new i.URL(e.value!=null||e instanceof i.Variable?e:new i.Anonymous(e),t.rootpath)},variable:function(){var e,n=o;if(s.charAt(o)==="@"&&(e=E(/^@@?[\w-]+/)))return new i.Variable(e,n,t.filename)},variableCurly:function(){var e,n,r=o;if(s.charAt(o)==="@"&&(n=E(/^@\{([\w-]+)\}/)))return new i.Variable("@"+n[1],r,t.filename)},color:function(){var e;if(s.charAt(o)==="#"&&(e=E(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/)))return new i.Color(e[1])},dimension:function(){var e,t=s.charCodeAt(o);if(t>57||t<43||t===47||t==44)return;if(e=E(/^([+-]?\d*\.?\d+)(px|%|em|pc|ex|in|deg|s|ms|pt|cm|mm|rad|grad|turn|dpi|dpcm|dppx|rem|vw|vh|vmin|vm|ch)?/))return new i.Dimension(e[1],e[2])},ratio:function(){var e,t=s.charCodeAt(o);if(t>57||t<48)return;if(e=E(/^(\d+\/\d+)/))return new i.Ratio(e[1])},unicodeDescriptor:function(){var e;if(e=E(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/))return new i.UnicodeDescriptor(e[0])},javascript:function(){var e,t=o,n;s.charAt(t)==="~"&&(t++,n=!0);if(s.charAt(t)!=="`")return;n&&E("~");if(e=E(/^`([^`]*)`/))return new i.JavaScript(e[1],o,n)}},variable:function(){var e;if(s.charAt(o)==="@"&&(e=E(/^(@[\w-]+)\s*:/)))return e[1]},shorthand:function(){var e,t;if(!N(/^[@\w.%-]+\/[@\w.-]+/))return;g();if((e=E(this.entity))&&E("/")&&(t=E(this.entity)))return new i.Shorthand(e,t);y()},mixin:{call:function(){var e=[],n,r,u=[],a=[],f,l,c,h,p,d,v,m=o,b=s.charAt(o),w,S,C=!1;if(b!=="."&&b!=="#")return;g();while(n=E(/^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/))e.push(new i.Element(r,n,o)),r=E(">");if(E("(")){p=[];while(c=E(this.expression)){h=null,S=c;if(c.value.length==1){var k=c.value[0];k instanceof i.Variable&&E(":")&&(p.length>0&&(d&&T("Cannot mix ; and , as delimiter types"),v=!0),S=x(this.expression),h=w=k.name)}p.push(S),a.push({name:h,value:S});if(E(","))continue;if(E(";")||d)v&&T("Cannot mix ; and , as delimiter types"),d=!0,p.length>1&&(S=new i.Value(p)),u.push({name:w,value:S}),w=null,p=[],v=!1}x(")")}f=d?u:a,E(this.important)&&(C=!0);if(e.length>0&&(E(";")||N("}")))return new i.mixin.Call(e,f,m,t.filename,C);y()},definition:function(){var e,t=[],n,r,u,a,f,c=!1;if(s.charAt(o)!=="."&&s.charAt(o)!=="#"||N(/^[^{]*\}/))return;g();if(n=E(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/)){e=n[1];do{E(this.comment);if(s.charAt(o)==="."&&E(/^\.{3}/)){c=!0,t.push({variadic:!0});break}if(!(u=E(this.entities.variable)||E(this.entities.literal)||E(this.entities.keyword)))break;if(u instanceof i.Variable)if(E(":"))a=x(this.expression,"expected expression"),t.push({name:u.name,value:a});else{if(E(/^\.{3}/)){t.push({name:u.name,variadic:!0}),c=!0;break}t.push({name:u.name})}else t.push({value:u})}while(E(",")||E(";"));E(")")||(l=o,y()),E(this.comment),E(/^when/)&&(f=x(this.conditions,"expected condition")),r=E(this.block);if(r)return new i.mixin.Definition(e,t,r,f,c);y()}}},entity:function(){return E(this.entities.literal)||E(this.entities.variable)||E(this.entities.url)||E(this.entities.call)||E(this.entities.keyword)||E(this.entities.javascript)||E(this.comment)},end:function(){return E(";")||N("}")},alpha:function(){var e;if(!E(/^\(opacity=/i))return;if(e=E(/^\d+/)||E(this.entities.variable))return x(")"),new i.Alpha(e)},element:function(){var e,t,n,r;n=E(this.combinator),e=E(/^(?:\d+\.\d+|\d+)%/)||E(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/)||E("*")||E("&")||E(this.attribute)||E(/^\([^()@]+\)/)||E(/^[\.#](?=@)/)||E(this.entities.variableCurly),e||E("(")&&(r=E(this.entities.variableCurly)||E(this.entities.variable)||E(this.selector))&&E(")")&&(e=new i.Paren(r));if(e)return new i.Element(n,e,o)},combinator:function(){var e,t=s.charAt(o);if(t===">"||t==="+"||t==="~"||t==="|"){o++;while(s.charAt(o).match(/\s/))o++;return new i.Combinator(t)}return s.charAt(o-1).match(/\s/)?new i.Combinator(" "):new i.Combinator(null)},selector:function(){var e,t,n=[],r,u;if(E("("))return e=E(this.entity),E(")")?new i.Selector([new i.Element("",e,o)]):null;while(t=E(this.element)){r=s.charAt(o),n.push(t);if(r==="{"||r==="}"||r===";"||r===","||r===")")break}if(n.length>0)return new i.Selector(n)},attribute:function(){var e="",t,n,r;if(!E("["))return;if(t=E(/^(?:[_A-Za-z0-9-]|\\.)+/)||E(this.entities.quoted))(r=E(/^[|~*$^]?=/))&&(n=E(this.entities.quoted)||E(/^[\w-]+/))?e=[t,r,n.toCSS?n.toCSS():n].join(""):e=t;if(!E("]"))return;if(e)return"["+e+"]"},block:function(){var e;if(E("{")&&(e=E(this.primary))&&E("}"))return e},ruleset:function(){var e=[],n,r,u,a;g(),t.dumpLineNumbers&&(a=A(o,s,t));while(n=E(this.selector)){e.push(n),E(this.comment);if(!E(","))break;E(this.comment)}if(e.length>0&&(r=E(this.block))){var f=new i.Ruleset(e,r,t.strictImports);return t.dumpLineNumbers&&(f.debugInfo=a),f}l=o,y()},rule:function(){var e,t,n=s.charAt(o),r,a;g();if(n==="."||n==="#"||n==="&")return;if(e=E(this.variable)||E(this.property)){e.charAt(0)!="@"&&(a=/^([^@+\/'"*`(;{}-]*);/.exec(c[u]))?(o+=a[0].length-1,t=new i.Anonymous(a[1])):e==="font"?t=E(this.font):t=E(this.value),r=E(this.important);if(t&&E(this.end))return new i.Rule(e,t,r,f);l=o,y()}},"import":function(){var e,n,r=o;g();var s=E(/^@import(?:-(once))?\s+/);if(s&&(e=E(this.entities.quoted)||E(this.entities.url))){n=E(this.mediaFeatures);if(E(";"))return new i.Import(e,m,n,s[1]==="once",r,t.rootpath)}y()},mediaFeature:function(){var e,t,n=[];do if(e=E(this.entities.keyword))n.push(e);else if(E("(")){t=E(this.property),e=E(this.entity);if(!E(")"))return null;if(t&&e)n.push(new i.Paren(new i.Rule(t,e,null,o,!0)));else{if(!e)return null;n.push(new i.Paren(e))}}while(e);if(n.length>0)return new i.Expression(n)},mediaFeatures:function(){var e,t=[];do if(e=E(this.mediaFeature)){t.push(e);if(!E(","))break}else if(e=E(this.entities.variable)){t.push(e);if(!E(","))break}while(e);return t.length>0?t:null},media:function(){var e,n,r,u;t.dumpLineNumbers&&(u=A(o,s,t));if(E(/^@media/)){e=E(this.mediaFeatures);if(n=E(this.block))return r=new i.Media(n,e),t.dumpLineNumbers&&(r.debugInfo=u),r}},directive:function(){var e,n,r,u,a,f,l,c,h,p;if(s.charAt(o)!=="@")return;if(n=E(this["import"])||E(this.media))return n;g(),e=E(/^@[a-z-]+/);if(!e)return;l=e,e.charAt(1)=="-"&&e.indexOf("-",2)>0&&(l="@"+e.slice(e.indexOf("-",2)+1));switch(l){case"@font-face":c=!0;break;case"@viewport":case"@top-left":case"@top-left-corner":case"@top-center":case"@top-right":case"@top-right-corner":case"@bottom-left":case"@bottom-left-corner":case"@bottom-center":case"@bottom-right":case"@bottom-right-corner":case"@left-top":case"@left-middle":case"@left-bottom":case"@right-top":case"@right-middle":case"@right-bottom":c=!0;break;case"@page":case"@document":case"@supports":case"@keyframes":c=!0,h=!0;break;case"@namespace":p=!0}h&&(e+=" "+(E(/^[^{]+/)||"").trim());if(c){if(r=E(this.block))return new i.Directive(e,r)}else if((n=p?E(this.expression):E(this.entity))&&E(";")){var d=new i.Directive(e,n);return t.dumpLineNumbers&&(d.debugInfo=A(o,s,t)),d}y()},font:function(){var e=[],t=[],n,r,s,o;while(o=E(this.shorthand)||E(this.entity))t.push(o);e.push(new i.Expression(t));if(E(","))while(o=E(this.expression)){e.push(o);if(!E(","))break}return new i.Value(e)},value:function(){var e,t=[],n;while(e=E(this.expression)){t.push(e);if(!E(","))break}if(t.length>0)return new i.Value(t)},important:function(){if(s.charAt(o)==="!")return E(/^! *important/)},sub:function(){var e;if(E("(")&&(e=E(this.expression))&&E(")"))return e},multiplication:function(){var e,t,n,r;if(e=E(this.operand)){while(!N(/^\/[*\/]/)&&(n=E("/")||E("*"))&&(t=E(this.operand)))r=new i.Operation(n,[r||e,t]);return r||e}},addition:function(){var e,t,n,r;if(e=E(this.multiplication)){while((n=E(/^[-+]\s+/)||!w(s.charAt(o-1))&&(E("+")||E("-")))&&(t=E(this.multiplication)))r=new i.Operation(n,[r||e,t]);return r||e}},conditions:function(){var e,t,n=o,r;if(e=E(this.condition)){while(E(",")&&(t=E(this.condition)))r=new i.Condition("or",r||e,t,n);return r||e}},condition:function(){var e,t,n,r,s=o,u=!1;E(/^not/)&&(u=!0),x("(");if(e=E(this.addition)||E(this.entities.keyword)||E(this.entities.quoted))return(r=E(/^(?:>=|=<|[<=>])/))?(t=E(this.addition)||E(this.entities.keyword)||E(this.entities.quoted))?n=new i.Condition(r,e,t,s,u):T("expected expression"):n=new i.Condition("=",e,new i.Keyword("true"),s,u),x(")"),E(/^and/)?new i.Condition("and",n,E(this.condition)):n},operand:function(){var e,t=s.charAt(o+1);s.charAt(o)==="-"&&(t==="@"||t==="(")&&(e=E("-"));var n=E(this.sub)||E(this.entities.dimension)||E(this.entities.color)||E(this.entities.variable)||E(this.entities.call);return e?new i.Operation("*",[new i.Dimension(-1),n]):n},expression:function(){var e,t,n=[],r;while(e=E(this.addition)||E(this.entity))n.push(e);if(n.length>0)return new i.Expression(n)},property:function(){var e;if(e=E(/^(\*?-?[_a-z0-9-]+)\s*:/))return e[1]}}}};if(r.mode==="browser"||r.mode==="rhino")r.Parser.importer=function(e,t,n,r){!/^([a-z-]+:)?\//.test(e)&&t.length>0&&(e=t[0]+e),w({href:e,title:e,type:r.mime,contents:r.contents,files:r.files,rootpath:r.rootpath,entryPath:r.entryPath,relativeUrls:r.relativeUrls},function(e,i,s,o,u,a){e&&typeof r.errback=="function"?r.errback.call(null,a,t,n,r):n.call(null,e,i,a)},!0)};(function(e){function t(t){return e.functions.hsla(t.h,t.s,t.l,t.a)}function n(t,n){return t instanceof e.Dimension&&t.unit=="%"?parseFloat(t.value*n/100):r(t)}function r(t){if(t instanceof e.Dimension)return parseFloat(t.unit=="%"?t.value/100:t.value);if(typeof t=="number")return t;throw{error:"RuntimeError",message:"color functions take numbers as parameters"}}function i(e){return Math.min(1,Math.max(0,e))}e.functions={rgb:function(e,t,n){return this.rgba(e,t,n,1)},rgba:function(t,i,s,o){var u=[t,i,s].map(function(e){return n(e,256)});return o=r(o),new e.Color(u,o)},hsl:function(e,t,n){return this.hsla(e,t,n,1)},hsla:function(e,t,n,i){function u(e){return e=e<0?e+1:e>1?e-1:e,e*6<1?o+(s-o)*e*6:e*2<1?s:e*3<2?o+(s-o)*(2/3-e)*6:o}e=r(e)%360/360,t=r(t),n=r(n),i=r(i);var s=n<=.5?n*(t+1):n+t-n*t,o=n*2-s;return this.rgba(u(e+1/3)*255,u(e)*255,u(e-1/3)*255,i)},hsv:function(e,t,n){return this.hsva(e,t,n,1)},hsva:function(e,t,n,i){e=r(e)%360/360*360,t=r(t),n=r(n),i=r(i);var s,o;s=Math.floor(e/60%6),o=e/60-s;var u=[n,n*(1-t),n*(1-o*t),n*(1-(1-o)*t)],a=[[0,3,1],[2,0,1],[1,0,3],[1,2,0],[3,1,0],[0,1,2]];return this.rgba(u[a[s][0]]*255,u[a[s][1]]*255,u[a[s][2]]*255,i)},hue:function(t){return new e.Dimension(Math.round(t.toHSL().h))},saturation:function(t){return new e.Dimension(Math.round(t.toHSL().s*100),"%")},lightness:function(t){return new e.Dimension(Math.round(t.toHSL().l*100),"%")},red:function(t){return new e.Dimension(t.rgb[0])},green:function(t){return new e.Dimension(t.rgb[1])},blue:function(t){return new e.Dimension(t.rgb[2])},alpha:function(t){return new e.Dimension(t.toHSL().a)},luma:function(t){return new e.Dimension(Math.round((.2126*(t.rgb[0]/255)+.7152*(t.rgb[1]/255)+.0722*(t.rgb[2]/255))*t.alpha*100),"%")},saturate:function(e,n){var r=e.toHSL();return r.s+=n.value/100,r.s=i(r.s),t(r)},desaturate:function(e,n){var r=e.toHSL();return r.s-=n.value/100,r.s=i(r.s),t(r)},lighten:function(e,n){var r=e.toHSL();return r.l+=n.value/100,r.l=i(r.l),t(r)},darken:function(e,n){var r=e.toHSL();return r.l-=n.value/100,r.l=i(r.l),t(r)},fadein:function(e,n){var r=e.toHSL();return r.a+=n.value/100,r.a=i(r.a),t(r)},fadeout:function(e,n){var r=e.toHSL();return r.a-=n.value/100,r.a=i(r.a),t(r)},fade:function(e,n){var r=e.toHSL();return r.a=n.value/100,r.a=i(r.a),t(r)},spin:function(e,n){var r=e.toHSL(),i=(r.h+n.value)%360;return r.h=i<0?360+i:i,t(r)},mix:function(t,n,r){r||(r=new e.Dimension(50));var i=r.value/100,s=i*2-1,o=t.toHSL().a-n.toHSL().a,u=((s*o==-1?s:(s+o)/(1+s*o))+1)/2,a=1-u,f=[t.rgb[0]*u+n.rgb[0]*a,t.rgb[1]*u+n.rgb[1]*a,t.rgb[2]*u+n.rgb[2]*a],l=t.alpha*i+n.alpha*(1-i);return new e.Color(f,l)},greyscale:function(t){return this.desaturate(t,new e.Dimension(100))},contrast:function(e,t,n,r){return e.rgb?(typeof n=="undefined"&&(n=this.rgba(255,255,255,1)),typeof t=="undefined"&&(t=this.rgba(0,0,0,1)),typeof r=="undefined"?r=.43:r=r.value,(.2126*(e.rgb[0]/255)+.7152*(e.rgb[1]/255)+.0722*(e.rgb[2]/255))*e.alpha<r?n:t):null},e:function(t){return new e.Anonymous(t instanceof e.JavaScript?t.evaluated:t)},escape:function(t){return new e.Anonymous(encodeURI(t.value).replace(/=/g,"%3D").replace(/:/g,"%3A").replace(/#/g,"%23").replace(/;/g,"%3B").replace(/\(/g,"%28").replace(/\)/g,"%29"))},"%":function(t){var n=Array.prototype.slice.call(arguments,1),r=t.value;for(var i=0;i<n.length;i++)r=r.replace(/%[sda]/i,function(e){var t=e.match(/s/i)?n[i].value:n[i].toCSS();return e.match(/[A-Z]$/)?encodeURIComponent(t):t});return r=r.replace(/%%/g,"%"),new e.Quoted('"'+r+'"',r)},unit:function(t,n){return new e.Dimension(t.value,n?n.toCSS():"")},round:function(e,t){var n=typeof t=="undefined"?0:t.value;return this._math(function(e){return e.toFixed(n)},e)},ceil:function(e){return this._math(Math.ceil,e)},floor:function(e){return this._math(Math.floor,e)},_math:function(t,n){if(n instanceof e.Dimension)return new e.Dimension(t(parseFloat(n.value)),n.unit);if(typeof n=="number")return t(n);throw{type:"Argument",message:"argument must be a number"}},argb:function(t){return new e.Anonymous(t.toARGB())},percentage:function(t){return new e.Dimension(t.value*100,"%")},color:function(t){if(t instanceof e.Quoted)return new e.Color(t.value.slice(1));throw{type:"Argument",message:"argument must be a string"}},iscolor:function(t){return this._isa(t,e.Color)},isnumber:function(t){return this._isa(t,e.Dimension)},isstring:function(t){return this._isa(t,e.Quoted)},iskeyword:function(t){return this._isa(t,e.Keyword)},isurl:function(t){return this._isa(t,e.URL)},ispixel:function(t){return t instanceof e.Dimension&&t.unit==="px"?e.True:e.False},ispercentage:function(t){return t instanceof e.Dimension&&t.unit==="%"?e.True:e.False},isem:function(t){return t instanceof e.Dimension&&t.unit==="em"?e.True:e.False},_isa:function(t,n){return t instanceof n?e.True:e.False},multiply:function(e,t){var n=e.rgb[0]*t.rgb[0]/255,r=e.rgb[1]*t.rgb[1]/255,i=e.rgb[2]*t.rgb[2]/255;return this.rgb(n,r,i)},screen:function(e,t){var n=255-(255-e.rgb[0])*(255-t.rgb[0])/255,r=255-(255-e.rgb[1])*(255-t.rgb[1])/255,i=255-(255-e.rgb[2])*(255-t.rgb[2])/255;return this.rgb(n,r,i)},overlay:function(e,t){var n=e.rgb[0]<128?2*e.rgb[0]*t.rgb[0]/255:255-2*(255-e.rgb[0])*(255-t.rgb[0])/255,r=e.rgb[1]<128?2*e.rgb[1]*t.rgb[1]/255:255-2*(255-e.rgb[1])*(255-t.rgb[1])/255,i=e.rgb[2]<128?2*e.rgb[2]*t.rgb[2]/255:255-2*(255-e.rgb[2])*(255-t.rgb[2])/255;return this.rgb(n,r,i)},softlight:function(e,t){var n=t.rgb[0]*e.rgb[0]/255,r=n+e.rgb[0]*(255-(255-e.rgb[0])*(255-t.rgb[0])/255-n)/255;n=t.rgb[1]*e.rgb[1]/255;var i=n+e.rgb[1]*(255-(255-e.rgb[1])*(255-t.rgb[1])/255-n)/255;n=t.rgb[2]*e.rgb[2]/255;var s=n+e.rgb[2]*(255-(255-e.rgb[2])*(255-t.rgb[2])/255-n)/255;return this.rgb(r,i,s)},hardlight:function(e,t){var n=t.rgb[0]<128?2*t.rgb[0]*e.rgb[0]/255:255-2*(255-t.rgb[0])*(255-e.rgb[0])/255,r=t.rgb[1]<128?2*t.rgb[1]*e.rgb[1]/255:255-2*(255-t.rgb[1])*(255-e.rgb[1])/255,i=t.rgb[2]<128?2*t.rgb[2]*e.rgb[2]/255:255-2*(255-t.rgb[2])*(255-e.rgb[2])/255;return this.rgb(n,r,i)},difference:function(e,t){var n=Math.abs(e.rgb[0]-t.rgb[0]),r=Math.abs(e.rgb[1]-t.rgb[1]),i=Math.abs(e.rgb[2]-t.rgb[2]);return this.rgb(n,r,i)},exclusion:function(e,t){var n=e.rgb[0]+t.rgb[0]*(255-e.rgb[0]-e.rgb[0])/255,r=e.rgb[1]+t.rgb[1]*(255-e.rgb[1]-e.rgb[1])/255,i=e.rgb[2]+t.rgb[2]*(255-e.rgb[2]-e.rgb[2])/255;return this.rgb(n,r,i)},average:function(e,t){var n=(e.rgb[0]+t.rgb[0])/2,r=(e.rgb[1]+t.rgb[1])/2,i=(e.rgb[2]+t.rgb[2])/2;return this.rgb(n,r,i)},negation:function(e,t){var n=255-Math.abs(255-t.rgb[0]-e.rgb[0]),r=255-Math.abs(255-t.rgb[1]-e.rgb[1]),i=255-Math.abs(255-t.rgb[2]-e.rgb[2]);return this.rgb(n,r,i)},tint:function(e,t){return this.mix(this.rgb(255,255,255),e,t)},shade:function(e,t){return this.mix(this.rgb(0,0,0),e,t)}}})(n("./tree")),function(e){e.colors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen
:"#9acd32"}}(n("./tree")),function(e){e.Alpha=function(e){this.value=e},e.Alpha.prototype={toCSS:function(){return"alpha(opacity="+(this.value.toCSS?this.value.toCSS():this.value)+")"},eval:function(e){return this.value.eval&&(this.value=this.value.eval(e)),this}}}(n("../tree")),function(e){e.Anonymous=function(e){this.value=e.value||e},e.Anonymous.prototype={toCSS:function(){return this.value},eval:function(){return this},compare:function(e){if(!e.toCSS)return-1;var t=this.toCSS(),n=e.toCSS();return t===n?0:t<n?-1:1}}}(n("../tree")),function(e){e.Assignment=function(e,t){this.key=e,this.value=t},e.Assignment.prototype={toCSS:function(){return this.key+"="+(this.value.toCSS?this.value.toCSS():this.value)},eval:function(t){return this.value.eval?new e.Assignment(this.key,this.value.eval(t)):this}}}(n("../tree")),function(e){e.Call=function(e,t,n,r){this.name=e,this.args=t,this.index=n,this.filename=r},e.Call.prototype={eval:function(t){var n=this.args.map(function(e){return e.eval(t)}),r;if(this.name in e.functions)try{r=e.functions[this.name].apply(e.functions,n);if(r!=null)return r}catch(i){throw{type:i.type||"Runtime",message:"error evaluating function `"+this.name+"`"+(i.message?": "+i.message:""),index:this.index,filename:this.filename}}return new e.Anonymous(this.name+"("+n.map(function(e){return e.toCSS(t)}).join(", ")+")")},toCSS:function(e){return this.eval(e).toCSS()}}}(n("../tree")),function(e){e.Color=function(e,t){Array.isArray(e)?this.rgb=e:e.length==6?this.rgb=e.match(/.{2}/g).map(function(e){return parseInt(e,16)}):this.rgb=e.split("").map(function(e){return parseInt(e+e,16)}),this.alpha=typeof t=="number"?t:1},e.Color.prototype={eval:function(){return this},toCSS:function(){return this.alpha<1?"rgba("+this.rgb.map(function(e){return Math.round(e)}).concat(this.alpha).join(", ")+")":"#"+this.rgb.map(function(e){return e=Math.round(e),e=(e>255?255:e<0?0:e).toString(16),e.length===1?"0"+e:e}).join("")},operate:function(t,n){var r=[];n instanceof e.Color||(n=n.toColor());for(var i=0;i<3;i++)r[i]=e.operate(t,this.rgb[i],n.rgb[i]);return new e.Color(r,this.alpha+n.alpha)},toHSL:function(){var e=this.rgb[0]/255,t=this.rgb[1]/255,n=this.rgb[2]/255,r=this.alpha,i=Math.max(e,t,n),s=Math.min(e,t,n),o,u,a=(i+s)/2,f=i-s;if(i===s)o=u=0;else{u=a>.5?f/(2-i-s):f/(i+s);switch(i){case e:o=(t-n)/f+(t<n?6:0);break;case t:o=(n-e)/f+2;break;case n:o=(e-t)/f+4}o/=6}return{h:o*360,s:u,l:a,a:r}},toARGB:function(){var e=[Math.round(this.alpha*255)].concat(this.rgb);return"#"+e.map(function(e){return e=Math.round(e),e=(e>255?255:e<0?0:e).toString(16),e.length===1?"0"+e:e}).join("")},compare:function(e){return e.rgb?e.rgb[0]===this.rgb[0]&&e.rgb[1]===this.rgb[1]&&e.rgb[2]===this.rgb[2]&&e.alpha===this.alpha?0:-1:-1}}}(n("../tree")),function(e){e.Comment=function(e,t){this.value=e,this.silent=!!t},e.Comment.prototype={toCSS:function(e){return e.compress?"":this.value},eval:function(){return this}}}(n("../tree")),function(e){e.Condition=function(e,t,n,r,i){this.op=e.trim(),this.lvalue=t,this.rvalue=n,this.index=r,this.negate=i},e.Condition.prototype.eval=function(e){var t=this.lvalue.eval(e),n=this.rvalue.eval(e),r=this.index,i,i=function(e){switch(e){case"and":return t&&n;case"or":return t||n;default:if(t.compare)i=t.compare(n);else{if(!n.compare)throw{type:"Type",message:"Unable to perform comparison",index:r};i=n.compare(t)}switch(i){case-1:return e==="<"||e==="=<";case 0:return e==="="||e===">="||e==="=<";case 1:return e===">"||e===">="}}}(this.op);return this.negate?!i:i}}(n("../tree")),function(e){e.Dimension=function(e,t){this.value=parseFloat(e),this.unit=t||null},e.Dimension.prototype={eval:function(){return this},toColor:function(){return new e.Color([this.value,this.value,this.value])},toCSS:function(){var e=this.value+this.unit;return e},operate:function(t,n){return new e.Dimension(e.operate(t,this.value,n.value),this.unit||n.unit)},compare:function(t){return t instanceof e.Dimension?t.value>this.value?-1:t.value<this.value?1:t.unit&&this.unit!==t.unit?-1:0:-1}}}(n("../tree")),function(e){e.Directive=function(t,n){this.name=t,Array.isArray(n)?(this.ruleset=new e.Ruleset([],n),this.ruleset.allowImports=!0):this.value=n},e.Directive.prototype={toCSS:function(e,t){return this.ruleset?(this.ruleset.root=!0,this.name+(t.compress?"{":" {\n  ")+this.ruleset.toCSS(e,t).trim().replace(/\n/g,"\n  ")+(t.compress?"}":"\n}\n")):this.name+" "+this.value.toCSS()+";\n"},eval:function(t){var n=this;return this.ruleset&&(t.frames.unshift(this),n=new e.Directive(this.name),n.ruleset=this.ruleset.eval(t),t.frames.shift()),n},variable:function(t){return e.Ruleset.prototype.variable.call(this.ruleset,t)},find:function(){return e.Ruleset.prototype.find.apply(this.ruleset,arguments)},rulesets:function(){return e.Ruleset.prototype.rulesets.apply(this.ruleset)}}}(n("../tree")),function(e){e.Element=function(t,n,r){this.combinator=t instanceof e.Combinator?t:new e.Combinator(t),typeof n=="string"?this.value=n.trim():n?this.value=n:this.value="",this.index=r},e.Element.prototype.eval=function(t){return new e.Element(this.combinator,this.value.eval?this.value.eval(t):this.value,this.index)},e.Element.prototype.toCSS=function(e){var t=this.value.toCSS?this.value.toCSS(e):this.value;return t==""&&this.combinator.value.charAt(0)=="&"?"":this.combinator.toCSS(e||{})+t},e.Combinator=function(e){e===" "?this.value=" ":this.value=e?e.trim():""},e.Combinator.prototype.toCSS=function(e){return{"":""," ":" ",":":" :","+":e.compress?"+":" + ","~":e.compress?"~":" ~ ",">":e.compress?">":" > ","|":e.compress?"|":" | "}[this.value]}}(n("../tree")),function(e){e.Expression=function(e){this.value=e},e.Expression.prototype={eval:function(t){return this.value.length>1?new e.Expression(this.value.map(function(e){return e.eval(t)})):this.value.length===1?this.value[0].eval(t):this},toCSS:function(e){return this.value.map(function(t){return t.toCSS?t.toCSS(e):""}).join(" ")}}}(n("../tree")),function(e){e.Import=function(t,n,r,i,s,o){var u=this;this.once=i,this.index=s,this._path=t,this.features=r&&new e.Value(r),this.rootpath=o,t instanceof e.Quoted?this.path=/(\.[a-z]*$)|([\?;].*)$/.test(t.value)?t.value:t.value+".less":this.path=t.value.value||t.value,this.css=/css([\?;].*)?$/.test(this.path),this.css||n.push(this.path,function(t,n,r){t&&(t.index=s),r&&u.once&&(u.skip=r),u.root=n||new e.Ruleset([],[])})},e.Import.prototype={toCSS:function(e){var t=this.features?" "+this.features.toCSS(e):"";return this.css?(typeof this._path.value=="string"&&!/^(?:[a-z-]+:|\/)/.test(this._path.value)&&(this._path.value=this.rootpath+this._path.value),"@import "+this._path.toCSS()+t+";\n"):""},eval:function(t){var n,r=this.features&&this.features.eval(t);return this.skip?[]:this.css?this:(n=new e.Ruleset([],this.root.rules.slice(0)),n.evalImports(t),this.features?new e.Media(n.rules,this.features.value):n.rules)}}}(n("../tree")),function(e){e.JavaScript=function(e,t,n){this.escaped=n,this.expression=e,this.index=t},e.JavaScript.prototype={eval:function(t){var n,r=this,i={},s=this.expression.replace(/@\{([\w-]+)\}/g,function(n,i){return e.jsify((new e.Variable("@"+i,r.index)).eval(t))});try{s=new Function("return ("+s+")")}catch(o){throw{message:"JavaScript evaluation error: `"+s+"`",index:this.index}}for(var u in t.frames[0].variables())i[u.slice(1)]={value:t.frames[0].variables()[u].value,toJS:function(){return this.value.eval(t).toCSS()}};try{n=s.call(i)}catch(o){throw{message:"JavaScript evaluation error: '"+o.name+": "+o.message+"'",index:this.index}}return typeof n=="string"?new e.Quoted('"'+n+'"',n,this.escaped,this.index):Array.isArray(n)?new e.Anonymous(n.join(", ")):new e.Anonymous(n)}}}(n("../tree")),function(e){e.Keyword=function(e){this.value=e},e.Keyword.prototype={eval:function(){return this},toCSS:function(){return this.value},compare:function(t){return t instanceof e.Keyword?t.value===this.value?0:1:-1}},e.True=new e.Keyword("true"),e.False=new e.Keyword("false")}(n("../tree")),function(e){e.Media=function(t,n){var r=this.emptySelectors();this.features=new e.Value(n),this.ruleset=new e.Ruleset(r,t),this.ruleset.allowImports=!0},e.Media.prototype={toCSS:function(e,t){var n=this.features.toCSS(t);return this.ruleset.root=e.length===0||e[0].multiMedia,"@media "+n+(t.compress?"{":" {\n  ")+this.ruleset.toCSS(e,t).trim().replace(/\n/g,"\n  ")+(t.compress?"}":"\n}\n")},eval:function(t){t.mediaBlocks||(t.mediaBlocks=[],t.mediaPath=[]);var n=new e.Media([],[]);return this.debugInfo&&(this.ruleset.debugInfo=this.debugInfo,n.debugInfo=this.debugInfo),n.features=this.features.eval(t),t.mediaPath.push(n),t.mediaBlocks.push(n),t.frames.unshift(this.ruleset),n.ruleset=this.ruleset.eval(t),t.frames.shift(),t.mediaPath.pop(),t.mediaPath.length===0?n.evalTop(t):n.evalNested(t)},variable:function(t){return e.Ruleset.prototype.variable.call(this.ruleset,t)},find:function(){return e.Ruleset.prototype.find.apply(this.ruleset,arguments)},rulesets:function(){return e.Ruleset.prototype.rulesets.apply(this.ruleset)},emptySelectors:function(){var t=new e.Element("","&",0);return[new e.Selector([t])]},evalTop:function(t){var n=this;if(t.mediaBlocks.length>1){var r=this.emptySelectors();n=new e.Ruleset(r,t.mediaBlocks),n.multiMedia=!0}return delete t.mediaBlocks,delete t.mediaPath,n},evalNested:function(t){var n,r,i=t.mediaPath.concat([this]);for(n=0;n<i.length;n++)r=i[n].features instanceof e.Value?i[n].features.value:i[n].features,i[n]=Array.isArray(r)?r:[r];return this.features=new e.Value(this.permute(i).map(function(t){t=t.map(function(t){return t.toCSS?t:new e.Anonymous(t)});for(n=t.length-1;n>0;n--)t.splice(n,0,new e.Anonymous("and"));return new e.Expression(t)})),new e.Ruleset([],[])},permute:function(e){if(e.length===0)return[];if(e.length===1)return e[0];var t=[],n=this.permute(e.slice(1));for(var r=0;r<n.length;r++)for(var i=0;i<e[0].length;i++)t.push([e[0][i]].concat(n[r]));return t},bubbleSelectors:function(t){this.ruleset=new e.Ruleset(t.slice(0),[this.ruleset])}}}(n("../tree")),function(e){e.mixin={},e.mixin.Call=function(t,n,r,i,s){this.selector=new e.Selector(t),this.arguments=n,this.index=r,this.filename=i,this.important=s},e.mixin.Call.prototype={eval:function(t){var n,r,i,s=[],o=!1,u,a,f,l,c;i=this.arguments&&this.arguments.map(function(e){return{name:e.name,value:e.value.eval(t)}});for(u=0;u<t.frames.length;u++)if((n=t.frames[u].find(this.selector)).length>0){c=!0;for(a=0;a<n.length;a++){r=n[a],l=!1;for(f=0;f<t.frames.length;f++)if(!(r instanceof e.mixin.Definition)&&r===(t.frames[f].originalRuleset||t.frames[f])){l=!0;break}if(l)continue;if(r.matchArgs(i,t)){if(!r.matchCondition||r.matchCondition(i,t))try{Array.prototype.push.apply(s,r.eval(t,i,this.important).rules)}catch(h){throw{message:h.message,index:this.index,filename:this.filename,stack:h.stack}}o=!0}}if(o)return s}throw c?{type:"Runtime",message:"No matching definition was found for `"+this.selector.toCSS().trim()+"("+(i?i.map(function(e){var t="";return e.name&&(t+=e.name+":"),e.value.toCSS?t+=e.value.toCSS():t+="???",t}).join(", "):"")+")`",index:this.index,filename:this.filename}:{type:"Name",message:this.selector.toCSS().trim()+" is undefined",index:this.index,filename:this.filename}}},e.mixin.Definition=function(t,n,r,i,s){this.name=t,this.selectors=[new e.Selector([new e.Element(null,t)])],this.params=n,this.condition=i,this.variadic=s,this.arity=n.length,this.rules=r,this._lookups={},this.required=n.reduce(function(e,t){return!t.name||t.name&&!t.value?e+1:e},0),this.parent=e.Ruleset.prototype,this.frames=[]},e.mixin.Definition.prototype={toCSS:function(){return""},variable:function(e){return this.parent.variable.call(this,e)},variables:function(){return this.parent.variables.call(this)},find:function(){return this.parent.find.apply(this,arguments)},rulesets:function(){return this.parent.rulesets.apply(this)},evalParams:function(t,n,r,i){var s=new e.Ruleset(null,[]),o,u,a=this.params.slice(0),f,l,c,h,p,d;if(r){r=r.slice(0);for(f=0;f<r.length;f++){u=r[f];if(h=u&&u.name){p=!1;for(l=0;l<a.length;l++)if(!i[l]&&h===a[l].name){i[l]=u.value.eval(t),s.rules.unshift(new e.Rule(h,u.value.eval(t))),p=!0;break}if(p){r.splice(f,1),f--;continue}throw{type:"Runtime",message:"Named argument for "+this.name+" "+r[f].name+" not found"}}}}d=0;for(f=0;f<a.length;f++){if(i[f])continue;u=r&&r[d];if(h=a[f].name)if(a[f].variadic&&r){o=[];for(l=d;l<r.length;l++)o.push(r[l].value.eval(t));s.rules.unshift(new e.Rule(h,(new e.Expression(o)).eval(t)))}else{c=u&&u.value;if(c)c=c.eval(t);else{if(!a[f].value)throw{type:"Runtime",message:"wrong number of arguments for "+this.name+" ("+r.length+" for "+this.arity+")"};c=a[f].value.eval(n)}s.rules.unshift(new e.Rule(h,c)),i[f]=c}if(a[f].variadic&&r)for(l=d;l<r.length;l++)i[l]=r[l].value.eval(t);d++}return s},eval:function(t,n,r){var i=[],s=this.frames.concat(t.frames),o=this.evalParams(t,{frames:s},n,i),u,a,f,l;return o.rules.unshift(new e.Rule("@arguments",(new e.Expression(i)).eval(t))),a=r?this.parent.makeImportant.apply(this).rules:this.rules.slice(0),l=(new e.Ruleset(null,a)).eval({frames:[this,o].concat(s)}),l.originalRuleset=this,l},matchCondition:function(e,t){return this.condition&&!this.condition.eval({frames:[this.evalParams(t,{frames:this.frames.concat(t.frames)},e,[])].concat(t.frames)})?!1:!0},matchArgs:function(e,t){var n=e&&e.length||0,r,i;if(!this.variadic){if(n<this.required)return!1;if(n>this.params.length)return!1;if(this.required>0&&n>this.params.length)return!1}r=Math.min(n,this.arity);for(var s=0;s<r;s++)if(!this.params[s].name&&!this.params[s].variadic&&e[s].value.eval(t).toCSS()!=this.params[s].value.eval(t).toCSS())return!1;return!0}}}(n("../tree")),function(e){e.Operation=function(e,t){this.op=e.trim(),this.operands=t},e.Operation.prototype.eval=function(t){var n=this.operands[0].eval(t),r=this.operands[1].eval(t),i;if(n instanceof e.Dimension&&r instanceof e.Color){if(this.op!=="*"&&this.op!=="+")throw{name:"OperationError",message:"Can't substract or divide a color from a number"};i=r,r=n,n=i}if(!n.operate)throw{name:"OperationError",message:"Operation on an invalid type"};return n.operate(this.op,r)},e.operate=function(e,t,n){switch(e){case"+":return t+n;case"-":return t-n;case"*":return t*n;case"/":return t/n}}}(n("../tree")),function(e){e.Paren=function(e){this.value=e},e.Paren.prototype={toCSS:function(e){return"("+this.value.toCSS(e)+")"},eval:function(t){return new e.Paren(this.value.eval(t))}}}(n("../tree")),function(e){e.Quoted=function(e,t,n,r){this.escaped=n,this.value=t||"",this.quote=e.charAt(0),this.index=r},e.Quoted.prototype={toCSS:function(){return this.escaped?this.value:this.quote+this.value+this.quote},eval:function(t){var n=this,r=this.value.replace(/`([^`]+)`/g,function(r,i){return(new e.JavaScript(i,n.index,!0)).eval(t).value}).replace(/@\{([\w-]+)\}/g,function(r,i){var s=(new e.Variable("@"+i,n.index)).eval(t);return s instanceof e.Quoted?s.value:s.toCSS()});return new e.Quoted(this.quote+r+this.quote,r,this.escaped,this.index)},compare:function(e){if(!e.toCSS)return-1;var t=this.toCSS(),n=e.toCSS();return t===n?0:t<n?-1:1}}}(n("../tree")),function(e){e.Ratio=function(e){this.value=e},e.Ratio.prototype={toCSS:function(e){return this.value},eval:function(){return this}}}(n("../tree")),function(e){e.Rule=function(t,n,r,i,s){this.name=t,this.value=n instanceof e.Value?n:new e.Value([n]),this.important=r?" "+r.trim():"",this.index=i,this.inline=s||!1,t.charAt(0)==="@"?this.variable=!0:this.variable=!1},e.Rule.prototype.toCSS=function(e){return this.variable?"":this.name+(e.compress?":":": ")+this.value.toCSS(e)+this.important+(this.inline?"":";")},e.Rule.prototype.eval=function(t){return new e.Rule(this.name,this.value.eval(t),this.important,this.index,this.inline)},e.Rule.prototype.makeImportant=function(){return new e.Rule(this.name,this.value,"!important",this.index,this.inline)},e.Shorthand=function(e,t){this.a=e,this.b=t},e.Shorthand.prototype={toCSS:function(e){return this.a.toCSS(e)+"/"+this.b.toCSS(e)},eval:function(){return this}}}(n("../tree")),function(e){e.Ruleset=function(e,t,n){this.selectors=e,this.rules=t,this._lookups={},this.strictImports=n},e.Ruleset.prototype={eval:function(t){var n=this.selectors&&this.selectors.map(function(e){return e.eval(t)}),r=new e.Ruleset(n,this.rules.slice(0),this.strictImports),i;r.originalRuleset=this,r.root=this.root,r.allowImports=this.allowImports,this.debugInfo&&(r.debugInfo=this.debugInfo),t.frames.unshift(r),(r.root||r.allowImports||!r.strictImports)&&r.evalImports(t);for(var s=0;s<r.rules.length;s++)r.rules[s]instanceof e.mixin.Definition&&(r.rules[s].frames=t.frames.slice(0));var o=t.mediaBlocks&&t.mediaBlocks.length||0;for(var s=0;s<r.rules.length;s++)r.rules[s]instanceof e.mixin.Call&&(i=r.rules[s].eval(t),r.rules.splice.apply(r.rules,[s,1].concat(i)),s+=i.length-1,r.resetCache());for(var s=0,u;s<r.rules.length;s++)u=r.rules[s],u instanceof e.mixin.Definition||(r.rules[s]=u.eval?u.eval(t):u);t.frames.shift();if(t.mediaBlocks)for(var s=o;s<t.mediaBlocks.length;s++)t.mediaBlocks[s].bubbleSelectors(n);return r},evalImports:function(t){var n,r;for(n=0;n<this.rules.length;n++)this.rules[n]instanceof e.Import&&(r=this.rules[n].eval(t),typeof r.length=="number"?(this.rules.splice.apply(this.rules,[n,1].concat(r)),n+=r.length-1):this.rules.splice(n,1,r),this.resetCache())},makeImportant:function(){return new e.Ruleset(this.selectors,this.rules.map(function(e){return e.makeImportant?e.makeImportant():e}),this.strictImports)},matchArgs:function(e){return!e||e.length===0},resetCache:function(){this._rulesets=null,this._variables=null,this._lookups={}},variables:function(){return this._variables?this._variables:this._variables=this.rules.reduce(function(t,n){return n instanceof e.Rule&&n.variable===!0&&(t[n.name]=n),t},{})},variable:function(e){return this.variables()[e]},rulesets:function(){return this._rulesets?this._rulesets:this._rulesets=this.rules.filter(function(t){return t instanceof e.Ruleset||t instanceof e.mixin.Definition})},find:function(t,n){n=n||this;var r=[],i,s,o=t.toCSS();return o in this._lookups?this._lookups[o]:(this.rulesets().forEach(function(i){if(i!==n)for(var o=0;o<i.selectors.length;o++)if(s=t.match(i.selectors[o])){t.elements.length>i.selectors[o].elements.length?Array.prototype.push.apply(r,i.find(new e.Selector(t.elements.slice(1)),n)):r.push(i);break}}),this._lookups[o]=r)},toCSS:function(t,n){var r=[],i=[],s=[],o=[],u=[],a,f,l;this.root||this.joinSelectors(u,t,this.selectors);for(var c=0;c<this.rules.length;c++){l=this.rules[c];if(l.rules||l instanceof e.Media)o.push(l.toCSS(u,n));else if(l instanceof e.Directive){var h=l.toCSS(u,n);if(l.name==="@charset"){if(n.charset){l.debugInfo&&(o.push(e.debugInfo(n,l)),o.push((new e.Comment("/* "+h.replace(/\n/g,"")+" */\n")).toCSS(n)));continue}n.charset=!0}o.push(h)}else l instanceof e.Comment?l.silent||(this.root?o.push(l.toCSS(n)):i.push(l.toCSS(n))):l.toCSS&&!l.variable?i.push(l.toCSS(n)):l.value&&!l.variable&&i.push(l.value.toString())}o=o.join("");if(this.root)r.push(i.join(n.compress?"":"\n"));else if(i.length>0){f=e.debugInfo(n,this),a=u.map(function(e){return e.map(function(e){return e.toCSS(n)}).join("").trim()}).join(n.compress?",":",\n");for(var c=i.length-1;c>=0;c--)s.indexOf(i[c])===-1&&s.unshift(i[c]);i=s,r.push(f+a+(n.compress?"{":" {\n  ")+i.join(n.compress?"":"\n  ")+(n.compress?"}":"\n}\n"))}return r.push(o),r.join("")+(n.compress?"\n":"")},joinSelectors:function(e,t,n){for(var r=0;r<n.length;r++)this.joinSelector(e,t,n[r])},joinSelector:function(t,n,r){var i,s,o,u,a,f,l,c,h,p,d,v,m,g,y;for(i=0;i<r.elements.length;i++)f=r.elements[i],f.value==="&"&&(u=!0);if(!u){if(n.length>0)for(i=0;i<n.length;i++)t.push(n[i].concat(r));else t.push([r]);return}g=[],a=[[]];for(i=0;i<r.elements.length;i++){f=r.elements[i];if(f.value!=="&")g.push(f);else{y=[],g.length>0&&this.mergeElementsOnToSelectors(g,a);for(s=0;s<a.length;s++){l=a[s];if(n.length==0)l.length>0&&(l[0].elements=l[0].elements.slice(0),l[0].elements.push(new e.Element(f.combinator,"",0))),y.push(l);else for(o=0;o<n.length;o++)c=n[o],h=[],p=[],v=!0,l.length>0?(h=l.slice(0),m=h.pop(),d=new e.Selector(m.elements.slice(0)),v=!1):d=new e.Selector([]),c.length>1&&(p=p.concat(c.slice(1))),c.length>0&&(v=!1,d.elements.push(new e.Element(f.combinator,c[0].elements[0].value,0)),d.elements=d.elements.concat(c[0].elements.slice(1))),v||h.push(d),h=h.concat(p),y.push(h)}a=y,g=[]}}g.length>0&&this.mergeElementsOnToSelectors(g,a);for(i=0;i<a.length;i++)t.push(a[i])},mergeElementsOnToSelectors:function(t,n){var r,i;if(n.length==0){n.push([new e.Selector(t)]);return}for(r=0;r<n.length;r++)i=n[r],i.length>0?i[i.length-1]=new e.Selector(i[i.length-1].elements.concat(t)):i.push(new e.Selector(t))}}}(n("../tree")),function(e){e.Selector=function(e){this.elements=e},e.Selector.prototype.match=function(e){var t=this.elements,n=t.length,r,i,s,o;r=e.elements.slice(e.elements.length&&e.elements[0].value==="&"?1:0),i=r.length,s=Math.min(n,i);if(i===0||n<i)return!1;for(o=0;o<s;o++)if(t[o].value!==r[o].value)return!1;return!0},e.Selector.prototype.eval=function(t){return new e.Selector(this.elements.map(function(e){return e.eval(t)}))},e.Selector.prototype.toCSS=function(e){return this._css?this._css:(this.elements[0].combinator.value===""?this._css=" ":this._css="",this._css+=this.elements.map(function(t){return typeof t=="string"?" "+t.trim():t.toCSS(e)}).join(""),this._css)}}(n("../tree")),function(e){e.UnicodeDescriptor=function(e){this.value=e},e.UnicodeDescriptor.prototype={toCSS:function(e){return this.value},eval:function(){return this}}}(n("../tree")),function(e){e.URL=function(e,t){this.value=e,this.rootpath=t},e.URL.prototype={toCSS:function(){return"url("+this.value.toCSS()+")"},eval:function(t){var n=this.value.eval(t),r;return typeof n.value=="string"&&!/^(?:[a-z-]+:|\/)/.test(n.value)&&(r=this.rootpath,n.quote||(r=r.replace(/[\(\)'"\s]/g,function(e){return"\\"+e})),n.value=r+n.value),new e.URL(n,this.rootpath)}}}(n("../tree")),function(e){e.Value=function(e){this.value=e,this.is="value"},e.Value.prototype={eval:function(t){return this.value.length===1?this.value[0].eval(t):new e.Value(this.value.map(function(e){return e.eval(t)}))},toCSS:function(e){return this.value.map(function(t){return t.toCSS(e)}).join(e.compress?",":", ")}}}(n("../tree")),function(e){e.Variable=function(e,t,n){this.name=e,this.index=t,this.file=n},e.Variable.prototype={eval:function(t){var n,r,i=this.name;i.indexOf("@@")==0&&(i="@"+(new e.Variable(i.slice(1))).eval(t).value);if(this.evaluating)throw{type:"Name",message:"Recursive variable definition for "+i,filename:this.file,index:this.index};this.evaluating=!0;if(n=e.find(t.frames,function(e){if(r=e.variable(i))return r.value.eval(t)}))return this.evaluating=!1,n;throw{type:"Name",message:"variable "+i+" is undefined",filename:this.file,index:this.index}}}}(n("../tree")),function(e){e.debugInfo=function(t,n){var r="";if(t.dumpLineNumbers&&!t.compress)switch(t.dumpLineNumbers){case"comments":r=e.debugInfo.asComment(n);break;case"mediaquery":r=e.debugInfo.asMediaQuery(n);break;case"all":r=e.debugInfo.asComment(n)+e.debugInfo.asMediaQuery(n)}return r},e.debugInfo.asComment=function(e){return"/* line "+e.debugInfo.lineNumber+", "+e.debugInfo.fileName+" */\n"},e.debugInfo.asMediaQuery=function(e){return"@media -sass-debug-info{filename{font-family:"+("file://"+e.debugInfo.fileName).replace(/[\/:.]/g,"\\$&")+"}line{font-family:\\00003"+e.debugInfo.lineNumber+"}}\n"},e.find=function(e,t){for(var n=0,r;n<e.length;n++)if(r=t.call(e,e[n]))return r;return null},e.jsify=function(e){return Array.isArray(e.value)&&e.value.length>1?"["+e.value.map(function(e){return e.toCSS(!1)}).join(", ")+"]":e.toCSS(!1)}}(n("./tree"));var o=/^(file|chrome(-extension)?|resource|qrc|app):/.test(location.protocol);r.env=r.env||(location.hostname=="127.0.0.1"||location.hostname=="0.0.0.0"||location.hostname=="localhost"||location.port.length>0||o?"development":"production"),r.async=r.async||!1,r.fileAsync=r.fileAsync||!1,r.poll=r.poll||(o?1e3:1500);if(r.functions)for(var u in r.functions)r.tree.functions[u]=r.functions[u];var a=/!dumpLineNumbers:(comments|mediaquery|all)/.exec(location.hash);a&&(r.dumpLineNumbers=a[1]),r.watch=function(){return r.watchMode||(r.env="development",f()),this.watchMode=!0},r.unwatch=function(){return clearInterval(r.watchTimer),this.watchMode=!1},/!watch/.test(location.hash)&&r.watch();var l=null;if(r.env!="development")try{l=typeof e.localStorage=="undefined"?null:e.localStorage}catch(c){}var h=document.getElementsByTagName("link"),p=/^text\/(x-)?less$/;r.sheets=[];for(var d=0;d<h.length;d++)(h[d].rel==="stylesheet/less"||h[d].rel.match(/stylesheet/)&&h[d].type.match(p))&&r.sheets.push(h[d]);var v="";r.modifyVars=function(e){var t=v;for(name in e)t+=(name.slice(0,1)==="@"?"":"@")+name+": "+(e[name].slice(-1)===";"?e[name]:e[name]+";");(new r.Parser).parse(t,function(e,t){S(t.toCSS(),r.sheets[r.sheets.length-1])})},r.refresh=function(e){var t,n;t=n=new Date,g(function(e,r,i,s,o){o.local?C("loading "+s.href+" from cache."):(C("parsed "+s.href+" successfully."),S(r.toCSS(),s,o.lastModified)),C("css for "+s.href+" generated in "+(new Date-n)+"ms"),o.remaining===0&&C("css generated in "+(new Date-t)+"ms"),n=new Date},e),m()},r.refreshStyles=m,r.refresh(r.env==="development"),typeof define=="function"&&define.amd&&define("less",[],function(){return r})})(window);
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-shiv-cssclasses-load
 */
;window.Modernizr=function(a,b,c){function u(a){j.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
$(document).ready(function() {	
	
	/* Slideshow (Carousel)
	-------------------------*/
	$('.carousel').carousel({
	  interval: 8000 // Slider interval in ms. Default is 8000 (=8sec)
	});
	
	$('.carousel').bind('slide', function(e) {
		$('.carousel').animate({height: $(e.relatedTarget).outerHeight()});
	}); 
	
	// Slideshow - Update margin-bottom when dispalying indicators
	if ( $('.carousel').find('.carousel-indicators').length > 0 ) {
		$('.carousel').css('margin-bottom','60px');
	}


	/* animate.css: CSS Animations (Random Display)
	http://daneden.me/animate/
	Example: Homepage Slideshow
	-------------------------*/
	
	// Random Delay from .25s to 1s
	var delay = ["delay025s", "delay050s", "delay075s", "delay1s"];
	function random_delay() {
	 return delay[Math.floor(Math.random() * delay.length)];
	}
	
	// animate.css Effects Library:
	
		// Effect: Attention seekers
		var attention = ["flash", "bounce", "shake", "tada", "swing", "wobble", "pulse"];
		function random_attention() {
		   return attention[Math.floor(Math.random() * attention.length)];
		}
		
		// Effect: Flip
		var flip = ["flip", "flipInX", "flipOutX", "flipInYada", "flipOutY"];
		function random_flip() {
		   return flip[Math.floor(Math.random() * flip.length)];
		}   
		
		// Effect: FadeInSmall
		var fadeInSmall = ["fadeIn", "fadeInUp", "fadeInDown", "fadeInLeft", "fadeInRight"];
		function random_fadeInSmall() {
		   return fadeInSmall[Math.floor(Math.random() * fadeInSmall.length)];
		}
		
		// Effect: FadeInBig 
		var fadeInBig = ["fadeInUpBig", "fadeInDownBig", "fadeInLeftBig", "fadeInRightBig"];
		function random_fadeInBig() {
		   return fadeInBig[Math.floor(Math.random() * fadeInBig.length)];
		}
		
		// Effect: FadeOutSmall
		var fadeOutSmall = ["fadeOut", "fadeOutUp", "fadeOutDown", "fadeOutLeft", "fadeOutRight"];
		function random_fadeOutSmall() {
		   return fadeOutSmall[Math.floor(Math.random() * fadeOutSmall.length)];
		}
		
		// Effect: FadeOutBig 
		var fadeOutBig = ["fadeOutUpBig", "fadeOutDownBig", "fadeOutLeftBig", "fadeOutRightBig"];
		function random_fadeOutBig() {
		   return fadeOutBig[Math.floor(Math.random() * fadeOutBig.length)];
		}
		
		// Effect: BounceIn
		var bounceIn = ["bounceIn", "bounceInDown", "bounceInUp", "bounceInLeft", "bounceInRight"];
		function random_bounceIn() {
		   return bounceIn[Math.floor(Math.random() * bounceIn.length)];
		}
		
		// Effect: BounceOut
		var bounceOut = ["bounceOut", "bounceOutDown", "bounceOutUp", "bounceOutLeft", "bounceOutRight"];
		function random_bounceOut() {
		   return bounceOut[Math.floor(Math.random() * bounceOut.length)];
		}
		
		// Effect: RotateIn 
		var rotateIn = ["rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight"];
		function random_rotateIn() {
		   return rotateIn[Math.floor(Math.random() * rotateIn.length)];
		}
		
		// Effect: RotateOut 
		var rotateOut = ["rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight"];
		function random_rotateOut() {
		   return rotateOut[Math.floor(Math.random() * rotateOut.length)];
		}
		
		// Effect: Lightspeed 
		var lightspeed = ["lightSpeedIn", "lightSpeedOut"];
		function random_lightspeed() {
		   return lightspeed[Math.floor(Math.random() * lightspeed.length)];
		}
		
		// Effect: Specials 
		var special = ["hinge", "rollIn", "rollOut"];
		function random_special() {
		   return special[Math.floor(Math.random() * special.length)];
		} 
	
	// CSS Animation - Random Choice
	$('.carousel .random').each( function( index ) {
		$(this).addClass('animated ' + random_bounceIn() + ' ' + random_delay());
	});
	
	/* FitText - Responsive Slider font-size scaling according to parent element width
	-------------------------*/
	$('.carousel-content .carousel-header').fitText(3, { minFontSize: '14px', maxFontSize: '48px' } );
	$('.carousel-content .carousel-body').fitText(6, { minFontSize: '12px', maxFontSize: '28px' } );
	$('.carousel-caption').fitText(8, { minFontSize: '16px', maxFontSize: '21px' } );
	$('.carousel-control i').fitText(2, { minFontSize: '20px', maxFontSize: '60px' } );
	
	
	/* Navigation - Collapse (for mobile)
	-------------------------*/
	$('.navbar .collapse').collapse();
	
	
	/* Dropdown Menu - Add a caret to each dropdown menu
	-------------------------*/
	$('.dropdown-toggle').dropdown();
	$('.dropdown').not('.header-search-form').find('> a').append('<i class="icon-angle-down"></i>');
	$('.dropdown > a').prepend('<div class="nav-caret-square"><span></span></div>');


	/* Seperator: .hr2 Fine Double Line Styling
	-------------------------*/
	$('.hr2').wrapInner('<span></span>');


	/* FitVids v1.0 - Fluid Width Video Embeds
	https://github.com/davatron5000/FitVids.js/
	Example: Blog - Video Demo Post
	-------------------------*/
	$('.video-full-width').fitVids();
	$('.fluid-width-video-wrapper').css('padding-top','56.25%'); // Always display videos 16:9 (100/16*9=56.25)


	/* BxSlider v4.0 - Multislider
	http://bxslider.com/
	-------------------------*/
	container = $('.container').width();
	slide2 = Math.round(container / 2);
	slide3 = Math.round(container / 3);
	slide4 = Math.round(container / 4);
	slide5 = Math.round(container / 5);
	slide6 = Math.round(container / 6);
	slide7 = Math.round(container / 7);
	slide8 = Math.round(container / 8);
	 
	$('.bxslider2').bxSlider({ minSlides: 2, maxSlides: 2, slideWidth: slide2, slideMargin: 10 });
	$('.bxslider3').bxSlider({ minSlides: 3, maxSlides: 3, slideWidth: slide3, slideMargin: 10 });
	$('.bxslider4').bxSlider({ minSlides: 4, maxSlides: 4, slideWidth: slide4, slideMargin: 10 });
	$('.bxslider5').bxSlider({ minSlides: 5, maxSlides: 5, slideWidth: slide5, slideMargin: 10 });
	$('.bxslider6').bxSlider({ minSlides: 6, maxSlides: 6, slideWidth: slide6, slideMargin: 10 });
	$('.bxslider7').bxSlider({ minSlides: 7, maxSlides: 7, slideWidth: slide7, slideMargin: 10 });
	$('.bxslider8').bxSlider({ minSlides: 8, maxSlides: 8, slideWidth: slide8, slideMargin: 10 });
	
	$('.bxslider').bxSlider();	
	
	// Multislider: Replace arrows with Icon Font
	$('.bx-prev').html('<i class="icon-angle-left"></i>');
	$('.bx-next').html('<i class="icon-angle-right"></i>');
	
	
	/* Magnific Popup v0.9.5 - Lightbox plugin
	https://github.com/dimsemenov/Magnific-Popup
	-------------------------*/
	$('.lightbox-image').magnificPopup({type: 'image'});
	$('.lightbox-iframe').magnificPopup({type:'iframe'});
	$('.lightbox-ajax').magnificPopup({type:'ajax'});
	
	$('.gallery').each(function() { // the containers for all your galleries should have the class "gallery"
    $(this).magnificPopup({
      delegate: 'a', // the element that hosts each of your gallery items
      type: 'image',
			gallery:{enabled:true},
			callbacks: {    
		    buildControls: function() {
		      // re-appends controls inside the main container
		      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
		    }		    
		  },
		  zoom: {
				enabled: true,
				duration: 300, // don't forget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			}
    });
	});

	
	/* Bootstrap Plugins
	-------------------------*/
	
	// Tooltip
	$('[data-toggle="tooltip"]').tooltip(); 
	
	// Popover on click
	$('[data-toggle="popover"]').popover({
		html: true,
		placement: 'top' // Popover Position (top, right, bottom, left)
	});
	
	// Popover on hover
	$('[data-toggle="popover-hover"]').popover({
		html: true,
		placement: 'top',
		trigger: 'hover' // Popover Position (top, right, bottom, left)
	});
	
	// Sidebar Affix: Offset from the Top (.affix-top) & Dynamically calculated from the Bottom (.affix-bottom)
	$('#sidebar').affix({
	  offset: {
	  	top: 160,
			bottom: function () {
	      return (this.bottom = $('#footer').outerHeight(true))
	    }
	  }
	});
	
	
	/* Blog
	-------------------------*/	
	$('.like a').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});
	
	// Blog Comments: Triangle pointing to the Comment Author
	$(window).on('resize', function () {
		if ( $(window).width() >= 992 ) {
			$('.comment-data').prepend('<div class="arrow-left"></div>');
		}
		else {
			$('.comment-data .arrow-left').hide();
		}
	}).resize();
	
	
	/* Scroll To The Top - Button
	-------------------------*/
	$('#scrollToTop').click(function(e) {
		e.preventDefault();
		$('html,body').animate({scrollTop: 0}, 800);
	});

}); // END $(document).ready();


$(window).scroll(function() {

	/* Scroll To The Top - Button Visibility
	-------------------------*/
  if ($(this).scrollTop() > 180) {
  		$('#scrollToTop').css({'visibility': 'visible', 'opacity': '.75'});
  }
  else {
  		$('#scrollToTop').css({'visibility': 'hidden', 'opacity': '0'});
  }	
  
  /* On Scroll Down: Fixed Header
  -------------------------*/  
  if ($(this).scrollTop() > 0) {
      $('body').css('padding-top','60px'); // = header height
      $('header').addClass('navbar-fixed-top');
  }
  else {
      $('body').css('padding-top','0px');
      $('header').removeClass('navbar-fixed-top');
  }  


	/* On Scroll Down: Logo Resize
	-------------------------*/
  if ($(this).scrollTop() > 120) {
      $('.logo').css('font-size','20px');
  }
  else {
      $('.logo').css('font-size','28px');
  }
  
}); // END $(window).scroll();


$(window).load(function() {

	/* Isotope Layout Plugin
	-------------------------*/
	
	// Cache portfolio container
	var $container = $('.portfolio');
	var $columns2 = $('.portfolio.columns2');
	var $columns3 = $('.portfolio.columns3');

	// Direction Aware Hover Effect
	$container.find(".divider").each(function() {
		$(this).hoverdir({
			speed : 			200,
			hoverDelay : 	100,
			hoverElem: 		'.portfolio-item-content'
		});
	});
	
	// Initialize Isotope & Masonry Layout
	$container.imagesLoaded( function() {
		$container.isotope({
		  masonry: { columnWidth: $container.width() / 4 } // 4 Columns (Default)
		});
		$columns3.isotope({
			masonry: { columnWidth: $container.width() / 3 } // 3 Columns
		});
		$columns2.isotope({
			masonry: { columnWidth: $container.width() / 2 } // 2 Columns
		});
	 });

	// Recalculate Portfolio Item width when resizing the browser window
  $(window).smartresize(function() {
	  $container.isotope({
		  masonry: { columnWidth: $container.width() / 4 } // 4 Columns (Default)
		});
		$columns3.isotope({
			masonry: { columnWidth: $container.width() / 3 } // 3 Columns
		});
		$columns2.isotope({
			masonry: { columnWidth: $container.width() / 2 } // 2 Columns
		});
	});
    
	$(window).smartresize();
	
	// Initialize Portfolio Filter (on click)
	$('.portfolio-filter a').click(function(e) {		
		e.preventDefault();	  
	  var selector = $(this).attr('data-filter');
	  $container.isotope({ filter: selector });		
		// Active Filter Class
		$('.portfolio-filter').find('.active').removeClass('active');
		$(this).parent().addClass('active');		
		return false;		
	});
	
	// Portfolio Filter Item Counter
	$('.portfolio-filter a').each(function() {
		var projecttype = $(this).attr('data-filter');
		if ( projecttype == "*" || "" ) {
			$(this).append( '<span class="type-counter">'+$(".portfolio > li").length+'</span>' ); // Count All Projects
		}
		else {
			$(this).append( '<span class="type-counter">'+$(".portfolio > li"+projecttype).length+'</span>' ); // Count The Specific Project Type
		}
	});
	
}); // END $(window).load();
$(document).ready(function() {

	$('#submit_contact_form').click(function(e) {
	
		// Stop form submission, validate first
		e.preventDefault();
		
		// Variable declaration
		var empty = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();
		var emptyEmail = $('#email_error_empty');
		var emptyMessage = $('#message_error_empty');
		
		// Form field validation
		if(!email) {
			var empty = true;
			emptyEmail.fadeIn();
			emptyEmail.closest('.form-group').addClass('has-error');
		} else {
			emptyEmail.fadeOut();
			emptyEmail.closest('.form-group').removeClass('has-error');
		}
		if(!message) {
			var empty = true;
			emptyMessage.fadeIn();
			emptyMessage.closest('.form-group').addClass('has-error');
		} else {
			emptyMessage.fadeOut();
			emptyMessage.closest('.form-group').removeClass('has-error');
		}		
		
		// Process, if there is no validation error
		if(empty == false) {
		
			// Disable submit button just after the form processed 1st time successfully.
			$('#submit_contact_form').attr({'disabled' : 'true', 'value' : 'Sending..' });
			
			// Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php
			$.post("contactform.php", $("#contactform").serialize(),function(result) {
			//Check the result set from email.php file.
			
			// Server Side Validation
			if(result == 'invalidEmailAddress') {
				$('#email_error_invalid').fadeIn();			
			} else {
				$('#email_error_invalid').fadeOut();			
			
				// if email.php outputs 'sent' show success message
				if(result == 'sent') {
					//Display the success message
					$('#mailsuccess').fadeIn();
					// Enable the submit button again
					$('#submit_contact_form').removeAttr('disabled').attr('value', 'Send');
				} else {
					//Display the error message
					$('#mailfail').fadeIn();
					// Enable the submit button again
					$('#submit_contact_form').removeAttr('disabled').attr('value', 'Send');
				}
			
			}
			
			});
			
		}
	
	});    

});