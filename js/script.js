jQuery(document).ready(function() {

  var navOffset = jQuery(".navbar").offset().top;
  //alert(navOffset);

  jQuery(window).scroll(function(){
    var scrollPos = jQuery(window).scrollTop();

    if (scrollPos >= navOffset) {
      jQuery(".navbar").addClass("fixed");
    } else {
      jQuery(".navbar").removeClass("fixed");
    }
  });

});
