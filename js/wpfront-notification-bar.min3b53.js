(function(){window.wpfront_notification_bar=function(a,q){function b(g,b,f){b=b||d.noop;f&&(r=!0);if(0==g){if(l)return;l=!0}else{if(!l)return;l=!1}var h=b;b=function(){h();0<g&&(0==a.height&&k.height("auto"),a.display_open_button&&(e("Setting reopen button state to hidden."),m.addClass("hidden")),l=!1);0==g&&a.display_open_button&&(e("Setting reopen button state to visible."),m.removeClass("hidden"));0==g&&a.keep_closed&&f&&(0<a.keep_closed_for?Cookies.set(p,1,{path:"/",expires:a.keep_closed_for}):
Cookies.set(p,1,{path:"/"}))};0<g?e("Setting notification bar state to visible."):e("Setting notification bar state to hidden.");0<a.animate_delay?(k.stop().animate({height:g+"px"},1E3*a.animate_delay,"swing",b),a.fixed_position&&c.stop().animate({height:g+"px"},1E3*a.animate_delay)):(k.height(g),a.fixed_position&&c.height(g),b())}var e=function(b){a.log&&console.log("[WPFront Notification Bar] "+b)};if("function"!==typeof jQuery||a.keep_closed&&"function"!==typeof Cookies)e("Waiting for "+("function"!==
typeof jQuery?"jQuery.":"Cookies.")),setTimeout(function(){wpfront_notification_bar(a,q)},100);else if(2==a.position&&!0!==q)jQuery(function(){wpfront_notification_bar(a,!0)});else{var d=jQuery,p=a.keep_closed_cookie,c=d("#wpfront-notification-bar-spacer").removeClass("hidden"),k=d("#wpfront-notification-bar"),m=d("#wpfront-notification-bar-open-button");if(1==a.position){e("Setting notification bar at top.");var f=0;a.fixed_position&&a.is_admin_bar_showing&&(f=d("html").css("margin-top"),"0px"==
f&&(f=d("html").css("padding-top")),f=parseInt(f));a.fixed_position&&(f+=a.position_offset);k.css("top",f+"px");m.css("top",f+"px");c.css("top",a.position_offset+"px");var h=d("body").prepend(c);d(function(){h.children().first().is(c)||h.prepend(c)})}else e("Setting notification bar at bottom."),h=d("body"),h.children().last().is(c)||h.append(c),d(function(){h.children().last().is(c)||h.append(c)});var n=k.height();0<a.height&&(n=a.height,k.find("table, tbody, tr").css("height","100%"));k.height(0).css({position:a.fixed_position?
"fixed":"relative",visibility:"visible"});m.css({position:a.fixed_position?"fixed":"absolute"});var l=!1,r=!1;if(a.close_button)c.on("click",".wpfront-close",function(){b(0,null,!0)});if(a.button_action_close_bar)c.on("click",".wpfront-button",function(){b(0,null,!0)});if(a.display_open_button)c.on("click","#wpfront-notification-bar-open-button",function(){b(n)});a.keep_closed&&Cookies.get(p)?(e("Keep closed enabled and keep closed cookie exists. Hiding notification bar."),b(0)):(l=!0,a.display_scroll?
(e("Display on scroll enabled. Hiding notification bar."),b(0),d(window).on("scroll",function(){r||(d(this).scrollTop()>a.display_scroll_offset?b(n):b(0))})):(e("Setting notification bar open event after "+a.display_after+" second(s)."),setTimeout(function(){b(n,function(){0<a.auto_close_after&&(e("Setting notification bar auto close event after "+a.auto_close_after+" second(s)."),setTimeout(function(){b(0,null,!0)},1E3*a.auto_close_after))})},1E3*a.display_after)))}}})();