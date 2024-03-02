$(function()
{
	$(window).resize(objSizeReset);
	objSizeReset();
	function objSizeReset() {
		convertSizeALL('.Page_Home');	


		//convertSizeALL('.labatable');
	}
	
	

	$(window).on('load', function(){
		objSizeReset();
	});


});
var sRatio=1;
var sRatio2=1;
var sRSS
var change_img = $('.AddCube').css("width")

var obj_padding
var cursor_padding
var src_thd = 'img/cube.svg';
var Now_Type = "1";
function convertSizeALL(className){
		
		var w = 1920;
		var iw = $(window).innerWidth();
		var pRatio = window.devicePixelRatio || 0, xRatio=iw/w;
		$(".Page_Home").css("width",1920 *xRatio +"px");
		//$(".Page_Home").css("height",1080 *sRatio +"px");

}
