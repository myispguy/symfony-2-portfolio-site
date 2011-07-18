$(function() {
	positionContainer();
	$(window).resize(positionContainer);

	//external links
	$("a[rel='external']").attr("target", "_blank");
});

var positionContainer = function() {
	var container_height = $("#container").outerHeight();
	var window_height = $(document).height();

	var margin = (window_height - container_height) / 2;
	$("#container").css("marginTop", margin);
};
