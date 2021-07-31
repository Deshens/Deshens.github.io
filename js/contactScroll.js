var actualScroll = $(window).scrollTop();
var header = document.getElementById("header");
var fading = false;
var isVisible = true;
var headerOpacity = 1;

$(document).scroll(function() {
    var actualScroll = $(window).scrollTop()

    if (actualScroll > 5) {
        header.style.opacity = 0;
    } else {
        header.style.opacity = 1;
    }

});