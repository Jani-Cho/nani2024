var MenuClose = [
  {
    "Type": "",
    "Sub": ""
  }
]
jQuery(document).ready(function ($) {

  for (var index = 0; index < MenuClose.length; index++) {
    $(".list-group-item").each(function () {
      console.log($(this).parent().parent().children(".card-header").attr("type") + "     " + $($(this).children("span")).text().replace('·', '').trim());

      if ($($(this).children("span")).text().replace('·', '').trim() == MenuClose[index].Sub && $(this).parent().parent().children(".card-header").attr("type") == MenuClose[index].Type) {
        $(this).addClass("StopMenu");

      }
    });
  }
  $(".MenuBtn").mouseup(function (event) {

    $("#sidebar").addClass("OpenMenu");
    $(".MenuBtn").hide();
  });
  $(".CloseMenu").mouseup(function (event) {
    $("#sidebar").removeClass("OpenMenu");
    $(".MenuBtn").show();
  });

  $(".MenuItem").mouseup(function (event) {
    if($(this).hasClass("StopMenu"))
      return;
    if ($(this).hasClass("MenuItemActive")) {
      $(".MenuItem").removeClass("MenuItemActive");
    }
    else {
      $(".MenuItem").removeClass("MenuItemActive");
      $(this).addClass("MenuItemActive");
    }


  });
})