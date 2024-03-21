var Setting = 
[
    {
        "Img":"img/resource/4電子書體驗版/1低年級/低年級特色.png",
        "Url":"https://reader.oneclass.com.tw/71c547e9f5e8bb6a",
        "TextImg":"img/pic071.png",
        "Type":"低年級"
    },

    {
        "Img":"img/resource/4電子書體驗版/2中年級/中年級特色.png",
        "Url":"https://reader.oneclass.com.tw/71c547e9f5e8bb6a",
        "TextImg":"img/pic072.png",
        "Type":"中年級"
    },

    {
        "Img":"img/resource/4電子書體驗版/3高年級/國語.png",
        "Url":"https://reader.oneclass.com.tw/e3e3bda2fc234a63",
        "TextImg":"img/pic051.png",
        "Type":"高年級"
    },
    {
        "Img":"img/resource/4電子書體驗版/3高年級/數學.png",
        "Url":"https://reader.oneclass.com.tw/fac07bbcb20ab4f8",
        "TextImg":"img/pic052.png",
        "Type":"高年級"
    },
	
    {
        "Img":"img/resource/4電子書體驗版/4自然/自然.png",
        "Url":"https://reader.oneclass.com.tw/8ea318f7d1e465ec",
        "TextImg":"img/pic054.png",
        "Type":"自然"
    },
	
    {
        "Img":"img/resource/4電子書體驗版/5社會/社會.png",
        "Url":"https://reader.oneclass.com.tw/a134380ab1bd2010",
        "TextImg":"img/pic055.png",
        "Type":"社會"
    },
    {
        "Img":"img/resource/4電子書體驗版/6綜合健體/綜合.png",
        "Url":"https://reader.oneclass.com.tw/843d6ecd6aaff815",
        "TextImg":"img/pic056.png",
        "Type":"綜合健體"
    },
    {
        "Img":"img/resource/4電子書體驗版/6綜合健體/健體.png",
        "Url":"https://reader.oneclass.com.tw/d71cf2d7b9bc6dbe",
        "TextImg":"img/pic057.png",
        "Type":"綜合健體"
    },
]

jQuery(document).ready(function ($) {

    var str = getUrlParameter("t");
    console.log(str);
    var Add = "";
    var YTSetting = [];

    for (var i in Setting) {
        if(Setting[i].Type == str){
            Add += '<a class="col-lg-4 col-12" target="_blank" href="'+ Setting[i].Url +'"><div class="ebook_div " >'
            Add += '        <div class="ebook">'
            Add += '           <img src="'+ Setting[i].Img +'">'
            Add += '       </div>'
            Add += '       <img src="'+ Setting[i].TextImg +'">'
            Add += ' </div></a>'
        }
	}
    $(".divContent").append(Add);
})

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