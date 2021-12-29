$(function() {
    "use strict";
    $(".toggle-sidebar").on("click", function() {
        $(".content-area, .sidebar").toggleClass("no-sidebar");
    });
    $('.toggle-submenu').on("click", function() {
        $(this).toggleClass("fa-angle-right fa-angle-down");
        $(this).parent('a').next('.child-links').slideToggle();
    })

    // open/close fullscreen
    $(".toggle-fullscreen").on("click", function() {
        $(this).toggleClass("full-screen");
        if ($(this).hasClass("full-screen")) {
            openFullscreen();
        }else closeFullscreen();
    })
})

var elem = document.documentElement;
/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  
  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }