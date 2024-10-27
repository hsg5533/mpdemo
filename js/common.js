(window.onload = function () {
  var o = $(".share"),
    a = $(".close"),
    n = $(".dimm"),
    c = $(".modal");
  o.click(function () {
    n.show(), c.show();
  }),
    a.click(function () {
      n.hide(), c.hide();
    });
}),
  $(function () {
    $("ul.tab li").click(function () {
      var o = $(this).attr("data-tab");
      $("ul.tab li").removeClass("on"),
        $(".tabcont").removeClass("on"),
        $(this).addClass("on"),
        $("#" + o).addClass("on");
    });
  }),
  $(document).ready(function () {
    $(".sub_close").click(function () {
      window.history.back();
    });
  });
