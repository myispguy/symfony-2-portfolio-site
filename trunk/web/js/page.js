$(function() {
	positionContainer();
	$(window).resize(positionContainer);

	//external links
	$("a[rel='external']").attr("target", "_blank");
});

var positionContainer = function() {
  $("#container").height($(window).height());

	var container_height = $("#container .inner").height();
	var window_height = $(window).height();

	var margin = (window_height - container_height) / 2;
	$("#container").css("paddingTop", margin);
};
