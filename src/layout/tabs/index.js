$(".tab").on("click", function(e) {
  e.preventDefault();

  $(".tab").removeClass("tab--active");
  $(".tabs-content").removeClass("tabs-content--active");

  $(this).addClass("tab--active");
  $($(this).attr("href")).addClass("tabs-content--active");
});