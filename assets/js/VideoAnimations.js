const VideoAnimations = (function() {

  // Private
  function _OnBigScreen() {
    console.log("Big Screen setup!");
    $(".product_bl").hover(
        function() {
            $(this).children("video").get(0).play();
        },
        function() {
            $(this).children("video").get(0).pause();
            //video restart on hover again
            $(this).children("video").get(0).currentTime = 0;
        });
  }

function _OnMobileScreen() {
  console.log("Mobile setup!");
    $(window).scroll(function() {
        $('video').each(function() {
          if ($(this).is(":in-viewport")) {
              $(this)[0].play();
          } else {
              $(this)[0].pause();
          }
        })
    });
}

// Public
function init(){
  if (window.innerWidth > 600) {
    _OnBigScreen();
  } else {
    _OnMobileScreen();
  }
}

return {
  init
}

})();