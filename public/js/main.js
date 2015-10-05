$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('scrollin');
  } else {
    $('nav').removeClass('scrollin');
  }
});
