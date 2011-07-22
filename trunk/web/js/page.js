$(function() {
	positionContainer();
	$(window).resize(positionContainer);

	//external links
	$("a[rel='external']").attr("target", "_blank");
});

var positionContainer = function() {
	$("#container .page").height($(window).height());
};
