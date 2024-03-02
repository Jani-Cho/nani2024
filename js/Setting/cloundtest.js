var Setting =
    [
        {
            "Title": "新增自動配分機制與字型包下載",
            "Items":
            [
                {
                    "YT_ID": "wDLpCjJ7azI",
                    "Title":"▶配分出卷好快速！",
                    "Text": "出卷不用手動配分，系統可自動依照總答數配分，方便又快速！",
                    "TitleImg":"img/resource/7南一雲端出題/1.png"
                },
                {
                    "YT_ID": "v0ieg-us-fE",
                    "Title":"▶字型包首頁即可載",
                    "Text": "下載字型包即可順利顯示考卷內注音",
                    "TitleImg":"img/resource/7南一雲端出題/2.png"
                }
            ]
        },
        {
            "Title": "速測自訂公布成績時間",
            "Items":
            [
                {
                    "YT_ID": "C86IVy_T7ss",
                    "Title":"▶老師可自行選擇公布成績與答案時機",
                    "Text": "成績在學生測驗完畢後公布，還是老師統一公布呢？您都可以自由設定！",
                    "TitleImg":"img/resource/7南一雲端出題/3.png"
                }
            ]
        }
        ,
        {
            "Title": "速測一鍵輸出班級成績",
            "Items":
            [
                {
                    "YT_ID": "tRdBzhrQjBE",
                    "Title":"▶不用另外登記成績，最便利！",
                    "Text": "成績報表內含成績、作答／交卷時間／作答時長，讓老師掌握學生作答狀況",
                    "TitleImg":"img/resource/7南一雲端出題/4.png"
                }
            ]
        }
        ,
        {
            "Title": "速測做答畫記功能 ",
            "Items":
            [
                {
                    "YT_ID": "h3oujt-u1QI",
                    "Title":"▶學生作答最佳輔助，計算題好幫手",
                    "Text": "交卷後學生和老師皆可回查，方便老師了解學生作答過程",
                    "TitleImg":"img/resource/7南一雲端出題/5.png"
                }
            ]
        }
        ,
        {
            "Title": "速測提供強大班級測驗分析",
            "Items":
            [
                {
                    "YT_ID": "oEwwDY8WXCw",
                    "Title":"▶整張考卷、單題答對率都有清楚數據",
                    "Text": "透過測驗分析快速看出普遍學生弱點；提供畫筆功能方便老師檢討講解考卷",
                    "TitleImg":"img/resource/7南一雲端出題/6.png"
                }
            ]
        }
 
    ]
var Tabs = [];
jQuery(document).ready(function ($) {

    var str = getUrlParameter("t");
    console.log(str);
    var Add = "";
    var AddTabs = "";
    var DoAddTab = true;

    for (var i in Setting) {
        /*if (Setting[i].Type == str) {
            if (Setting[i].TabType != null) {
                DoAddTab = true;
                Tabs.forEach(item => { if (item.TabType == Setting[i].TabType) { DoAddTab = false; } });
                if (DoAddTab) {
                    var x = {};
                    x.TabImg = Setting[i].TabImg;
                    x.TabImg_Active = Setting[i].TabImg_Active;
                    x.TabType = Setting[i].TabType;
                    Tabs.push(x);
                }
            }
            console.log(Setting[i]);*/

            var stri = i.toString();

            //Header
            Add += '<div class="row" style="margin-left:0;margin-right:0;">'
            Add += '  <div class="card-header header'+ stri +' Btn" id="heading'+ stri +'" data-bs-toggle="collapse" data-bs-target="#collapse'+ stri +'"'
            Add += '    aria-controls="collapse'+ stri +'" index="'+ stri +'" aria-expanded="false">'
            Add += '    <div class="row justify-content-center" style="z-index: 1;">'
            Add += '        <div class="col-lg-12 Fold Fold2">'
            Add += '            <div class="row align-items-center">'
            Add += '                <div class="col-xl-11 col-md-11 col-sm-10 col-10 FoldTexts">'
            Add +=                   '<span style="margin-left:3vmin;">'+ Setting[i].Title +'</span>'
            Add += '                </div>'
            Add += '                <div class="col-lg-1 col-md-1 col-sm-2 col-2" style="text-align: center;">'
            Add += '                    <button class="btn Foldbtn Foldbtn'+ stri +'" type="button" data-bs-toggle="collapse"'
            Add += '                        data-bs-target="#collapse'+ stri +'" aria-expanded="false" aria-controls="collapse'+ stri +'"'
            Add += '                        index="'+ stri +'">'
            Add += '                        <img src="img/x1.png">'
            Add += '                    </button>'
            Add += '                </div>'

            Add += '            </div>'
            Add += '        </div>'
            Add += '    </div>'
            Add += '  </div>'
          

            Add += '<div id="collapse'+ stri +'" class="collapse collapse'+ stri +' panel-heading">'
            Add += '  <div class="card-body">'
            for (var j in Setting[i].Items) {
                var TYID = Setting[i].Items[j].YT_ID;

                Add += '<div class="row RowContent">'
                Add += '  <div class="row">'
                Add += '    <div class="col-lg-12 divTitle">'
                Add +=         Setting[i].Items[j].Title
                Add += '    </div>'
                Add += '  </div>'
                Add += '  <div class="row">'    
                Add += '    <div class="col-lg-12 divText">'
                Add +=         Setting[i].Items[j].Text
                Add += '    </div>'  
                Add += '  </div>'  
                Add += '<div class="row">'   
                Add += '<div class="carousel-item  active">'
                Add += '    <div class="row justify-content-center">'
                      
                Add += '        <img class="col-xl-6  col-lg-12 col-md-12 col-12 divYT" src="'+ Setting[i].Items[j].TitleImg +'">'
                    
    
                Add += '       <div class="col-xl-6 col-lg-12 col-md-12 col-12 divYT">'
    
                Add += '               <div class="carousel-inner">'
                Add += '                    <div class="carousel-item ratio  ratio-16x9 active">'
                Add += '                        <iframe'
                Add += '                            src="https://www.youtube.com/embed/'+ TYID +'?enablejsapi=1"'
                Add += '                            srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>'
                Add += '                            <a href=https://www.youtube.com/embed/'+ TYID +'?autoplay=1 target=\'_blank\' ><img src=https://img.youtube.com/vi/'+ TYID +'/hqdefault.jpg ><span>▶</span></a>"'
                Add += '                            id="'+ TYID +'" title="YouTube video player"'
                Add += '                            frameborder="0" allowfullscreen></iframe>'
                Add += '                    </div>'              
                Add += '                </div>'
    
                Add += '            </div>'
                Add += '        </div>'
    
                Add += '        <div class="col-xl-12 col-lg-12 col-md-12 col-12 Line">'
                Add += '    </div>'
                Add += '</div>'
                Add += '</div>'
                Add += '</div>'
            }
            Add += '  </div>'
            Add += '</div>'
            Add += '</div>'
            

        //}

    }
    $(".divContent").append(Add);
    /*if (Tabs.length > 0) {
        for (var i in Tabs) {
            if (i == 0) {
                AddTabs += '<img class="col-4 Tabs"  Img="' + Tabs[i].TabImg + '" ActiveImg="' + Tabs[i].TabImg_Active + '"  src="' + Tabs[i].TabImg_Active + '" type="' + Tabs[i].TabType + '">';
            }
            else {
                AddTabs += '<img class="col-4 Tabs"  Img="' + Tabs[i].TabImg + '" ActiveImg="' + Tabs[i].TabImg_Active + '"  src="' + Tabs[i].TabImg + '" type="' + Tabs[i].TabType + '">';
            }
        }
        $(".ImgTabs").append(AddTabs);


        $(".RowContent[type='" + Tabs[0].TabType + "']").show();

        $(".Tabs").mouseup(function (event) {
            $(".RowContent").hide();
            $(".RowContent[type='" + $(this).attr("type") + "']").show();
            //先都不選
            $(".Tabs").each(function () {
                $(this).attr("src", $(this).attr("Img"));
            });
            $(this).attr("src", $(this).attr("ActiveImg"));
        });
    }
    else{
        $(".RowContent").show();
    }*/

    $(".card-header").mouseup(function (event) {
		var index = $(this).attr("index");
        console.log(index);
		if ($(".collapse" + index).hasClass("show")) {

			$(".Foldbtn" + index +" > img").attr("src","img/x1.png")//.removeClass("FoldbtnActive");		
            $(".Foldbtn" + index).removeClass("FoldbtnActive");		
			/*$($($(".Foldbtn" + index).parent().parent()).children(".FoldTexts")).css("opacity", 1);*/
		}
		else {
			/*$($($(".Foldbtn" + index).parent().parent()).children(".FoldTexts")).css("opacity", 0);*/
			//$(".Foldbtn" + index).addClass("FoldbtnActive");
            $(".Foldbtn" + index +" > img").attr("src","img/x2.png")

		}
	});

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
