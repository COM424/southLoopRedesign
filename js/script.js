jQuery(document).ready(function() {

  var navOffset = jQuery(".navbar").offset().top;
  //alert(navOffset);

  jQuery(window).scroll(function(){
    var scrollPos = jQuery(window).scrollTop();

    if (scrollPos >= navOffset) {
      jQuery(".navbar").addClass("fixed");
	  jQuery(".dropdown-content").addClass("fixedDrop");
    } else {
      jQuery(".navbar").removeClass("fixed");
	  jQuery(".dropdown-content").removeClass("fixedDrop");
    }
  });

});
