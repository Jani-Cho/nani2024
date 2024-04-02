var IsMute = false;
var SourePage = "";

var mobileDevice = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
function CanTouch() {

	try { document.createEvent("TouchEvent"); return true; }

	catch (e) { return false; }

}
function isMobileDevice() {
	var isMobileDevice = false
	var Agent = navigator.userAgent.toLowerCase();

	for (var i = 0; i < mobileDevice.length; i++) {
		if (Agent.match(mobileDevice[i]) != null) {
			return true;
		}
	}
	return false;
}
function isMobile() {
	var useragent = navigator.userAgent;
	useragent = useragent.toLowerCase();

	if (useragent.indexOf('iphone') != -1) {
		return true;
	}
	else if (useragent.indexOf('ipad') != -1 || useragent.indexOf('ipod') != -1) {
		return true;
	}
	else if (useragent.indexOf('android') != -1) {
	}
	else {
		return false;
	}
}


var mouseMoved = false;
function touchHandler(event) {
	// Declare the default mouse event.
	var mouseEvent = "mousedown";
	// Create the event to transmit.
	var simulatedEvent = document.createEvent("MouseEvent");

	switch (event.type) {
		case "touchstart":
			mouseEvent = "mousedown";
			break;
		case "touchmove":

			//If this has been hit, then it's a move and a mouseup, not a click
			//will be transmitted.

			mouseMoved = true;
			mouseEvent = "mousemove";
			break;
		case "touchend":

			//Check to see if a touchmove event has been fired. If it has
			//it means this have been a move and not a click, if not
			//transmit a mouse click event.

			if (!mouseMoved) {
				mouseEvent = "click";
			} else {
				mouseEvent = "mouseup";
			}
			// Initialize the mouseMove flag back to false.
			mouseMoved = false;
			break;
	}

	var touch = event.changedTouches[0];


	//Build the simulated mouse event to fire on touch events.

	simulatedEvent.initMouseEvent(mouseEvent, true, true, window, 1,
		touch.screenX, touch.screenY,
		touch.clientX, touch.clientY, false,
		false, false, false, 0, null);


	//Transmit the simulated event to the target. This, in combination
	//with the case statement above, ensures that click events are still
	//transmitted and bubbled up the chain.

	touch.target.dispatchEvent(simulatedEvent);


	//Prevent default dragging of element.

	//event.preventDefault();
	event.stopPropagation();
}


function init() {

	if (isMobileDevice()) {
		console.log("123");
		/*var head= document.getElementsByTagName('head')[0]; 
		var script= document.createElement('script'); 
		script.type= 'text/javascript'; 
		script.src= 'js/jquery.ui.touch-punch.min.js';  //要載入的js
		head.appendChild(script); */
		/*document.addEventListener("touchstart", touchHandler, { passive: false });
		document.addEventListener("touchmove", touchHandler, { passive: false });
		document.addEventListener("touchend", touchHandler, { passive: false });
		document.addEventListener("touchcancel", touchHandler, { passive: false });*/
	}
	else {
		document.addEventListener("touchstart", touchHandler, { passive: false });
		document.addEventListener("touchmove", touchHandler, { passive: false });
		document.addEventListener("touchend", touchHandler, { passive: false });
		document.addEventListener("touchcancel", touchHandler, { passive: false });

	}
}



jQuery(document).ready(function ($) {

	var t = getUrlParameter("t");
	var m = getUrlParameter("m");
	if (typeof(t) != "undefined" && typeof(m) != "undefined") {
		var htm = "";
		switch (m) {
			case "教材搶先看":
				htm = "book_preview.html"
				break;
			case "教材簡介本配套本":
				htm = "book_Introductory.html"
				break;
			case "必選理由":
				htm = "reason.html"
				break;
			case "電子書特色功能":
				htm = "ebook_feature.html"
				break;				
			case "精彩多媒體":
				htm = "multimedia.html"
				break;	
			case "電子書體驗版":
				htm = "ebook_trial.html"
				break;	
			case "NaniBook":
				htm = "onebook.html"
				break;	
			case "NaniBox3.0":
				htm = "OneBox2.html"
				break;	
			case "CloundTest":
				htm = "cloundtest.html"
				break;		
			default:
				break;
		}

		var Hindex = 0;
		switch (t) {
			case "低年級":
				Hindex = 1;
				break;
			case "中年級":
				Hindex = 2;
				break;
			case "高年級":
				Hindex = 3;
				break;
			case "自然":
				Hindex = 4;
				break;				
			case "社會":
				Hindex = 5;
				break;	
			case "綜合健體":
				Hindex = 6;
				break;	
			case "NaniBook":
				Hindex = 7;
				break;	
			default:
				break;
		}
		if(htm.length ==0){
			return;
		}
		$(".card-header[index="+ Hindex +"]").addClass("MenuItemActive");
		$($(".card-header[index="+ Hindex +"]").attr("data-bs-target")).addClass("show")
		console.log(htm +"?t="+t);

		$("a[href='"+ htm +"?t="+t +"']").addClass("ShowItem");
		$("#iframe_a").attr("src",htm +"?t="+t);
	}
	$(".list-group-item").mouseup(function (event) {
		$(".list-group-item").removeClass("ShowItem");
		$(this).addClass("ShowItem");
		if($("#sidebar").css("position")=="absolute"){
			$("#sidebar").removeClass("OpenMenu");
			$(".MenuBtn").show();
		}
	});
	
});
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };
//關閉瀏覽器
function Close() {
	window.location.href = 'about:blank ';
	window.opener = null;
	window.open('', '_self');
	window.close();
}
function onPlayerStateChange(event) // triggered everytime ANY iframe video player among the "players" list is played, paused, ended, etc.
{
	console.log(event);
	// Check if any iframe video is being played (or is currently buffering to be played)
	// Reference: https://developers.google.com/youtube/iframe_api_reference#Events
	if (event.data == YT.PlayerState.PLAYING || event.data == YT.PlayerState.BUFFERING) {
		// If any player has been detected to be currently playing or buffering, pause the carousel from sliding
		// .carousel('pause') - Stops the carousel from cycling through items.
		// Reference: https://getbootstrap.com/docs/4.4/components/carousel/#methods
		for (player of players) {
			if (player.player.h.id != event.target.h.id) {
				player.player.pauseVideo();
			}
		}

		//if( event.target.h)
		$('.YT').carousel('pause');
	}
	else {
		// If there are no currently playing nor buffering videos, resume the sliding of the carousel.
		// This means that once the current video is in a state that is not playing (aside from buffering), either it was:
		//     1. paused intentionally
		//     2. paused as an effect of a slide
		//     3. video has ended
		//     4. wasn't totally played from the start
		//     5. and literally any form where the video timer isn't running ;)
		//     - then the carousel would now resume sliding.
		console.log("carousel");
		$('.YT').carousel();
	}
}

