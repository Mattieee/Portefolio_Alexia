(function() {window.navigator.userAgent.match(/Macintosh/);$(n);function n(){$("form").each(function(){0===$(window).height()/2?window.setTimeout(function(){n()},100):$(this).css("margin-top",-$(this).outerHeight()/2)})};function r(a,b){this.j=(this.i="PUBLIC"!==a)?a:"*";this.o=b}r.prototype.init=function(a){window.addEventListener("message",function(b){b=b.data;b.isCanvaApi&&(a[b.type]||$.noop)(b)},!1);this.sendMessage({type:"Init",authenticated:this.i})};r.prototype.sendMessage=function(a){a.isCanvaApi=!0;this.o.postMessage(a,this.j)};function u(){var a={embedDomain:"PUBLIC"};function b(c){0===$(c.target).closest("#loginForm, #signupForm").length&&f.sendMessage({type:"LoginSignup",action:"hide"})}function k(c){c=c.emailAddress;h();c&&($("#loginUsername").val(c),$("#emailSignup #email").val(c));d()}function d(){window.setTimeout(function(){f.sendMessage({type:"LoginSignup",action:"show"})},300)}function g(){var c=$("body").css("background-image").replace("url","").replace("(","").replace(")","").replace(/["']/g,"");f.sendMessage({type:"LoginSignup",
	action:"pageTransition",u:c})}function h(){$("html").addClass("embedded");$(".embedded canvas").css("display","none");if(/login\?redirect/gi.test(window.location.href)){var c=window.location.href.replace("login?","signup?").replace("redirect","signupRedirect"),c=c+"%3Fonboarding%26layouts";$(function(){if(1===$("#signupLinkWrapper a").length)$("#signupLinkWrapper a").attr("href",c),$("#signupLinkWrapper a").on("mousedown",g);else{var a=$('\x3ca href\x3d"'+c+'"\x3eSignup now\x3c/a\x3e');a.on("mousedown",
		g);$("#loginForm .message").html("Don\x26#8217;t have an account?").append(a)}})}else if(/signup\?signupRedirect/gi.test(window.location.href)){var a=window.location.href.replace("signup?","login?").replace("signupRedirect","redirect");$(function(){if(1===$("#loginLinkWrapper a").length)$("#loginLinkWrapper a").attr("href",a),$("#loginLinkWrapper a").on("mousedown",g);else{var c=$('\x3cp style\x3d"margin-top:2em;"\x3eAlready have an account?\x3c/p\x3e'),d=$('\x3ca href\x3d"'+a+'"\x3eLogin\x3c/a\x3e');
	c.append(d);d.on("mousedown",g);$("#signupForm").append(c)}})}var d=document.createElement("style");d.setAttribute("type","text/css");var e=document.head||document.getElementsByTagName("head")[0];d.styleSheet?d.styleSheet.cssText="\n.embedded body { display: none !important; } .embedded footer { display: none !important; } .embedded body \x3e canvas { display: none !important; } ":d.appendChild(document.createTextNode("\n.embedded body { display: none !important; } .embedded footer { display: none !important; } .embedded body \x3e canvas { display: none !important; } "));
		e.appendChild(d);$("body").hide();$("footer").hide()}if(window!=window.top){var f=new r(a.embedDomain,window.parent);f.init({blur:function(){},focus:function(){},registerOrShowLogin:k});f.sendMessage({type:"LoginSignup"});window.addEventListener("click",b,!1)}}window!==window.top&&u();(function(){function a(){$("body").mousemove(function(a){m=a.clientX;q=a.clientY;t=Date.now();p||k()});$(window).on("blur mouseout",function(){q=m=null}).on("resize",function(){d&&d.parentNode&&d.parentNode.removeChild(d);b()});b()}function b(){var a=null==g?!0:!1;d=document.createElement("canvas");d.width=$(window).width();d.height=$(window).height();$("body").append(d);g=document.createElement("canvas");g.width=$(window).width();g.height=$(window).height();if(d.getContext&&d.getContext("2d")){h=
			d.getContext("2d");f=g.getContext("2d");f.lineCap="round";f.shadowColor="#000000";f.shadowBlur=30;c=new Image;var e=$("body").css("background-image");e&&($(c).one("load",function(){a&&k()}),e=e.replace(/url\((.*)\)/,"$1").replace(/["']/gi,"").replace(/\.jpg/,"_color.jpg"),$(c).attr("src",e),e=$('\x3cdiv style\x3d"position:absolute;height:0;width:0;overflow:hidden;"\x3e\x3c/div\x3e'),$("body").append(e),e.append(c))}}function k(){var a,b=Date.now();p=b>t+500?!1:!0;m&&p&&e.splice(0,0,{time:b,x:m,y:q});
			for(a=0;a<e.length;)1E3<b-e[a].time?e.splice(a,e.length):a++;0<e.length&&window.l(k);f.clearRect(0,0,g.width,g.height);for(a=1;a<e.length;a++){var v=Math.sqrt(Math.pow(e[a].x-e[a-1].x,2)+Math.pow(e[a].y-e[a-1].y,2));f.strokeStyle="rgba(0,0,0,"+Math.max(1-(b-e[a].time)/1E3,0)+")";f.lineWidth=25+75*Math.max(1-v/50,0);f.beginPath();f.moveTo(e[a-1].x,e[a-1].y);f.lineTo(e[a].x,e[a].y);f.stroke()}a=d.width;b=d.width/c.naturalWidth*c.naturalHeight;b<d.height&&(b=d.height,a=d.height/c.naturalHeight*c.naturalWidth);
				h.drawImage(c,0,0,a,b);h.globalCompositeOperation="destination-in";h.drawImage(g,0,0);h.globalCompositeOperation="source-over"}var d,g,h,f,c,m=null,q=null,e=[],t=0,p=!0;"createTouch"in document||$(a);window.l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}()})();$(function(){$("menu .dropdown").on("mouseover",function(){if(0>=$(this).parents("#movedMenus").length){var a=$(this),b=Number(a.data("timer"));null!=b&&clearTimeout(b);b=setTimeout(function(){a.parent().find("li.hover").not(a).removeClass("hover").addClass("hoverOff");a.removeClass("hoverOff").addClass("hover")},0);a.data("timer",b);a.on("mouseout",function(){var b=Number(a.data("timer"));null!=b&&clearTimeout(b);b=setTimeout(function(){a.off("mouseout").removeClass("hover").addClass("hoverOff")},
					500);a.data("timer",b)})}})});})();