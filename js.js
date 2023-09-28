window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-EKDNBLWNTV');
</script>
<!--script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script-->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
/*document.addEventListener("DOMContentLoaded", function () {
const content = document.getElementById("fade-container");
const fadeLinks = document.querySelectorAll(".fade-link");

fadeLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    content.style.opacity = 0; // Start fading out

    // Wait for the transition to complete before following the link
    setTimeout(function () {
      window.location.href = link.href;
    }, 500); // Same duration as the transition in CSS
  });
});
});*/
$(document).ready(function() {
  $(".navi nav, .navi .back, #titlebar").css("display", "none"); // Ensure container is hidden initially
  $(window).on("load", function() { 
  setTimeout(function() {
      $(".fullscreen-div").addClass("loaded");
  }, 400);
  setTimeout(function() {
      $(".navi nav, .navi .back").fadeIn(800);
      $(".fullscreen-div").addClass("none"); 
  }, 1400);
  setTimeout(function() {
      $("#titlebar").fadeIn(800); 
  }, 2000);
  });


var stickyElement = $('.sticky-element');
var initialOffset = stickyElement.offset().top;
if (initialOffset === 0) {
  // Update the initial offset to 120
  initialOffset = 120;
}

$(window).on('scroll', function() {
  var scrollPosition = $(window).scrollTop();
  
  if (scrollPosition >= initialOffset) {
    stickyElement.addClass('sticky');
  } else {
    stickyElement.removeClass('sticky');
  }
});

/* NAVI *////////////////////////////////////////////
const navs = $('.navi nav');
const navLinks = $('.navi a');
const sections = $('.section');
const segments = $('.segment');
const offsetValue = 50; // Adjust this value as needed

$(window).scroll(function() {
  const scrollTop = $(window).scrollTop();

  sections.each(function() {
    var sectionTop = $(this).offset().top;

    if (scrollTop >= sectionTop - offsetValue) {
      var sectionId = $(this).attr('id');

     /* if (!navLinks.filter('[href="#' + sectionId + '"]').hasClass('selected')) {
        navLinks.removeClass('selected');
        navLinks.filter('[href="#' + sectionId + '"]').addClass('selected');
      }*/

      if (!navLinks.filter('[href="#' + sectionId + '"]').parent().hasClass('selected')) {
        navs.removeClass('selected');
        navLinks.filter('[href="#' + sectionId + '"]').parent().addClass('selected');
      }
    }
  });

  /*segments.each(function() {
    var segmentTop = $(this).offset().top;

    if (segmentTop >= 0 && scrollTop >= segmentTop - offsetValue) {
      var segmentId = $(this).attr('id');

      if (!navLinks.filter('[href="#' + segmentId + '"]').hasClass('selected')) {
        navLinks.removeClass('selected');
        navLinks.filter('[href="#' + segmentId + '"]').addClass('selected');
      }

      if (!navLinks.filter('[href="#' + segmentId + '"]').parent().hasClass('selected')) {
        navs.removeClass('selected');
        navLinks.filter('[href="#' + segmentId + '"]').parent().addClass('selected');
      }
    }
  });*/
});

navLinks.click(function(e) {
  e.preventDefault();
  const targetId = $(this).attr('href').slice(1);
  const targetElement = $('#' + targetId);
  if (targetElement.length) {
    $('html, body').animate({
      scrollTop: targetElement.offset().top
    }, 500);
  }
});

$( ".tab-menu a").on( "click", function() {
  var id = $(this).attr('href');
  var parent = $(this).parents('.tab-block').attr('id');
  $("#"+parent+" .tab-menu a").removeClass('selected');
  $(this).addClass('selected');
  $("#"+parent+" .tab-container").removeClass('tab-selected');
  $("#"+parent+" "+id+"").addClass('tab-selected');
  return false;
});


});