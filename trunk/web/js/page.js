var window_height;
var window_position = 0;
var target_y;
var current_screen = 0;

// set the limits of the gap above the content before we can scroll
var upper_x = 100;

$(function() {
	positionContainer();
	$(window).resize(positionContainer);
	
	$("#content").height(window_height).jScrollPane({
        showArrows: true,
        scrollbarWidth: 10,
        arrowSize: 10,
        animateDuration: 500,
        animateScroll: true,
        autoReinitialise: true
  });

	//external links
	$("a[rel='external']").attr("target", "_blank");

  $("#site-links ul li a").click(function() {
    // find out which window this should be linking to
    var target_index = $(this).parent().index();

    // calculate the amount to scroll
    $("html, body").animate({scrollTop: (window_height*target_index)}, 600, "swing");
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
  
  var lower_window = Math.floor($(window).scrollTop() / window_height);
  var upper_window = Math.ceil($(window).scrollTop() / window_height);
 
  $("#container .page").each(function(p, page) {
    var window_scroll = -($(window).scrollTop() - $(page).offset().top);
    if ($(page).index() == lower_window || $(page).index() == upper_window) {
      $(page).addClass("in-view");
      $(page).children(".inner:first").css("top", newPos($(page), window_scroll, 1.1));
    } else {
      $(page).removeClass("in-view");
      $(page).children(".inner:first").css("top", window_height);
    }
  });
  
};

var newPos = function(self, scroll, speed) {
  var inner = self.children(".inner:first");
  var upper_x = (window_height - inner.height()) / 2 / speed;
  var page_scroll = $(window).scrollTop() - self.offset().top;


  if (page_scroll <= upper_x) {
    return upper_x * speed;
  }
  return page_scroll * speed;
  
  

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

  var distance_from_top = window_height - $(window).scrollTop();
  
  

  //self.css("top", top_y);

  //return 50;
  //max_y = $(this);
  //return ((windowHeight + pos) - adjuster) * inertia  + "px";
};

