var window_height;
var window_position = 0;
var target_y;
var current_screen = 0;

$(function() {
	positionContainer();
	$(window).resize(positionContainer);

	//external links
	$("a[rel='external']").attr("target", "_blank");

  $("#site-links ul li a").click(function() {
    // find out which window this should be linking to
    var target_index = $(this).parent().index();

    // calculate the amount to scroll
    $("html, body").animate({scrollTop: (window_height*target_index)}, 500, "swing");
    return false;
  });

  selectWindow();
  $(window).scroll(selectWindow);
  $(window).resize(selectWindow);
});

var positionContainer = function() {
  window_height = $(window).height();

  $("#container .page").height(window_height);
  $("#container .page.in-view").each(function(e, page) {
    var margin = ($(page).parent().height() - $(page).height()) / 2;
    $(page).css("top", margin);
  });
};

/** monitor the page scroll **/
var selectWindow = function() {
  $("#container .page").removeClass("in-view");
  $("#site-links ul li a").removeClass("selected");

  window_position = $(window).scrollTop();
  var selected_window = Math.round(window_position / window_height) + 1;
  current_screen = selected_window;

  // set selected state on mini-menu
  var selected_item = $("#site-links ul li:nth-child("+selected_window+")");
  selected_item.find("a").addClass("selected");

  $("#container .page:nth-child("+selected_window+")").addClass("in-view");
  $("#container .page.in-view .inner").css({'top': newPos($("#container .page.in-view .inner"), 2)});

};

var newPos = function(self, speed) {


  target_y = (window_height - self.height()) / 2;

  // work out the ratio required
  var ratio = target_y / window_height;

  var pos_y = (current_screen * window_height) - $(window).scrollTop();

  // work out distance from top of page for the in-view page
  var top_distance = pos_y * ratio;

  if (top_distance < 100) {
    var top_y = 100;
  } else if (top_distance > (window_height - 100)) {
    var top_y = (window_height - 100);
  } else {
    var top_y = top_distance * speed;
  }

  console.log(top_y);
  self.css("top", top_y);

  //return 50;
  //max_y = $(this);
  //return ((windowHeight + pos) - adjuster) * inertia  + "px";
};

