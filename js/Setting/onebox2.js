var Setting =
    [
        // { //3.2移除
        //     "Title": "資源下載到安裝　步步引導好安心",
        //     "Items":
        //     [
        //         {
        //             "YT_ID": "u3KO5_Utmec",
        //             "Title":"▶每個步驟都有提示不迷路",
        //             "Text": "於「光碟資源」下載光碟，會跳出提示至「下載記錄」點選安裝，安裝完成後，至我的光碟盒即可使用",
        //             "TitleImg":"img/resource/6OneBox2.0/1.png"
        //         }
        //     ]
        // },
        // {
        //     "Title": "我的光碟盒 打造新版線上書櫃",
        //     "Items":
        //     [
        //         {
        //             "YT_ID": "EXtMI3QAEDk",
        //             "Title":"▶安裝後在桌面自動產生捷徑",
        //             "Text": "安裝的光碟全都收納在我的光碟盒，一目了然點開啟即可使用。同時會在桌面建立捷徑，方便使用",
        //             "TitleImg":"img/resource/6OneBox2.0/2.png"
        //         },
        //         {
        //             "YT_ID": "lGJ6sB-hYWU",
        //             "Title":"▶資源包也有專屬分類",
        //             "Text": "除電子書、題庫外，其他資源包也有分類喔！我的光碟盒新增篩選資源功能，下載多種資源也很好找！",
        //             "TitleImg":"img/resource/6OneBox2.0/3.png"
        //         }
        //     ]
        // },
        // {
        //     "Title": "豐富網路資源大集合",
        //     "Items":
        //     [
        //         {
        //             "YT_ID": "iB0t2lqd5FM",
        //             "Title":"▶教學相關網站一次看",
        //             "Text": "可快速取得所有南一數位相關網站，雲端出題系統也新增按鈕，方便快速進入",
        //             "TitleImg":"img/resource/6OneBox2.0/4.png"
        //         },
        //         {
        //             "YT_ID": "R4wvnuf7Jpo",
        //             "Title":"▶線上平台入口全收錄",
        //             "Text": "各大線上評量題目皆備，APP載點、影音資源、各科好用數位教學小工具都應有盡有",
        //             "TitleImg":"img/resource/6OneBox2.0/5.png"
        //         }
        //     ]
        // },
        {
            "Title": "【特色】上架資訊跑馬燈",
            "Items":
            [
                {
                    "YT_ID": "",
                    "Title":"▶即時掌握資源訊息",
                    "Text": "上架資訊、更新消息….跑馬燈通知，讓您掌握第一手南一數位資源訊息",
                    "TitleImg":"img/resource/6OneBox2.0/NaniBox6.png"
                }
            ]
        },
        {
            "Title": "【NEW】獨家AI助教神助攻",
            "Items":
            [
                {
                    "YT_ID": "",
                    "Title":"▶自動偵測教學進度",
                    "Text": "NaniBox3.0 AI助教，貼心推播適合您的教學資原。",
                    "TitleImg":"img/resource/6OneBox2.0/NaniBox3.png",
                    "TitleImg2":"img/resource/6OneBox2.0/NaniBox4.png",
                }
            ]
        },
        {
            "Title": "【NEW】介面改版五星升級",
            "Items":
            [
                {
                    "YT_ID": "",
                    "Title":"▶資源全展開尋找資源不迷路",
                    "Text": "符合教師使用習慣，查找資源便利又方便。",
                    "TitleImg":"img/resource/6OneBox2.0/NaniBox1.png"
                }
            ]
        },
        {
            "Title": "【NEW】電子書下載安裝二合一",
            "Items":
            [
                {
                    "YT_ID": "",
                    "Title":"▶安裝電子書步驟更簡便",
                    "Text": "一次完成下載與安裝，載完立即使用五告讚。",
                    "TitleImg":"img/resource/6OneBox2.0/NaniBox5.png"
                }
            ]
        },
        
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
                if (Setting[i].Items[j].TitleImg2) {

                Add += '        <img class="col-xl-6  col-lg-12 col-md-12 col-12 divYT" src="'+ Setting[i].Items[j].TitleImg2 +'">'
                }
                if (TYID) {

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
                }
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
