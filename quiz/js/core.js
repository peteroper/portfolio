$(document).ready(function(){
    let counterInterval;

    $(".start-card .btn").click(function(){
      $(".start-card").fadeOut(function(){
        $(".quiz").fadeIn();
        setTimeout(function() {
            $("html, body").animate({
              scrollTop: $(".quiz").offset().top
            }, 1000);
        }, 800);
        startCountdown();
      });
    });

    $(".answers li a").click(function(event){
      event.preventDefault(); // Prevent the default behavior of the anchor element
      clearInterval(counterInterval); // Stop the counter bar
      // Check the class of the selected answer
      let selectedAnswer = $(this).parent();
      $('.answers').addClass('selection');
      $(this).addClass("selected");
      if (selectedAnswer.hasClass("correct")) {
        $('.quiz').addClass("correct");
      } else {
        selectedAnswer.addClass("selected");
        $('.quiz').addClass("incorrect");
      }
      $(".description").fadeIn(function() {
        // After fading in, wait for 3 seconds and then scroll to .description
        setTimeout(function() {
          $("html, body").animate({
            scrollTop: $(".answers").offset().top
          }, 400);
        }, 2000);
      });
    });

    function startCountdown() {
      let seconds = 10;
      let interval = 1000;

      function updateCountdown() {
        if (seconds > 0) {
          seconds--;
          let percentage = (seconds / 10) * 100;
          $(".counter .bar").css("width", percentage + "%");
          // Update the displayed time value
          $(".time").text(seconds + "秒");
        } else {
          clearInterval(counterInterval); // Stop the counter when time is up
          $(".quiz").addClass("timesup");
          $(".description").fadeIn(function() {
            // After fading in, wait for 3 seconds and then scroll to .description
            setTimeout(function() {
              $("html, body").animate({
                scrollTop: $(".answers").offset().top
              }, 400);
            }, 2000);
          });
        }
      }

      counterInterval = setInterval(updateCountdown, interval);
    }
  });