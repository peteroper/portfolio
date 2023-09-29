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
    
$(document).ready(function() {
    


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

/* Article columns *////////////////////////////////////////////
// Get a reference to the article container
const articleContainer = document.querySelector('.article-container');

// Get all the articles within the container
const articles = articleContainer.querySelectorAll('.article');

// Define the number of columns (in this case, 3)
const numColumns = 3;

// Calculate the number of articles per column
const articlesPerColumn = Math.ceil(articles.length / numColumns);

// Create an array to hold the articles grouped by columns
const columns = [];

// Split the articles into columns
for (let i = 0; i < numColumns; i++) {
    columns.push(Array.from(articles).slice(i * articlesPerColumn, (i + 1) * articlesPerColumn));
}

// Create new div elements for the columns
for (let i = 0; i < numColumns; i++) {
    const columnDiv = document.createElement('div');
    columnDiv.className = 'column';
    
    // Append articles to the respective column div
    columns[i].forEach((article) => {
        columnDiv.appendChild(article);
    });

    // Append the column div to the article container
    articleContainer.appendChild(columnDiv);
}
/* DARK MODE *////////////////////////////////////////////
// Function to set the dark mode preference in a cookie
function setDarkModePreference(isDarkMode) {
            const expiryDate = new Date();
            expiryDate.setFullYear(expiryDate.getFullYear() + 1); // Cookie expires in 1 year
            const darkModeCookie = `darkMode=${isDarkMode}; expires=${expiryDate.toUTCString()}; path=/`;
            document.cookie = darkModeCookie;
        }

        // Function to toggle dark mode, update the UI, and change the button text
        function toggleDarkMode() {
            const isDarkMode = document.body.classList.toggle('dark-mode');
            setDarkModePreference(isDarkMode);
            
            // Change button text based on dark mode state
            const darkModeToggleBtn = document.getElementById('darkModeToggle');
            darkModeToggleBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        }

        // Check if the dark mode preference exists in cookies and apply it
        function checkDarkModePreference() {
            const cookies = document.cookie.split('; ');
            for (const cookie of cookies) {
                const [name, value] = cookie.split('=');
                if (name === 'darkMode') {
                    const isDarkMode = value === 'true';
                    if (isDarkMode) {
                        document.body.classList.add('dark-mode');
                    }
                    return;
                }
            }
        }

        // Event listener for the dark mode toggle button
        const darkModeToggleBtn = document.getElementById('darkModeToggle');
        darkModeToggleBtn.addEventListener('click', toggleDarkMode);

        // Check for dark mode preference on page load and apply immediately
        checkDarkModePreference();

});