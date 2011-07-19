$(function() {
	positionContainer();
	$(window).resize(positionContainer);

	//external links
	$("a[rel='external']").attr("target", "_blank");
});

var positionContainer = function() {
  $("#container").height($(document).height());

	var container_height = $("#container .inner").height();
	var window_height = $(window).height();

	var margin = (window_height - container_height) / 2;
	$("#container .inner").css({ "padding-top" : margin });
};
