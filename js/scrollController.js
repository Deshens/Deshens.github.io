var titleOpacity = 1;
var title_container = document.getElementById("title_container");
var header = document.getElementById("header");
var isVisible = true;
var fading = false;
var limit = 400;

$(document).scroll(function() {
    var actualScroll = $(window).scrollTop()

    if (!fading) {
        if (actualScroll > limit && isVisible) {
            fading = true;
            FadeOutTitle();
        } else if (actualScroll < limit && !isVisible) {
            fading = true;
            FadeInTitle();
        }
    }
});

function FadeOutTitle() {
    if (titleOpacity > 0) {
        titleOpacity -= 0.016;
        title_container.style.opacity = titleOpacity;
        header.style.opacity = titleOpacity;

        if ($(window).scrollTop() < limit) { //Si en alguna momento ya no es mayor a 1000
            FadeInTitle();
        } else { //Si sigue siendo mayor a 1000
            setTimeout("FadeOutTitle()", 16);
        }

    } else {
        fading = false;
        titleOpacity = 0;
        title_container.style.opacity = titleOpacity;
        header.style.opacity = titleOpacity;
        isVisible = false;
    }
}

function FadeInTitle() {
    if (titleOpacity < 1) {
        titleOpacity += 0.016;
        title_container.style.opacity = titleOpacity;
        header.style.opacity = titleOpacity;

        if ($(window).scrollTop() < limit) {
            setTimeout("FadeInTitle()", 16);
        } else {
            FadeOutTitle();
        }

    } else {
        fading = false;
        titleOpacity = 1;
        title_container.style.opacity = titleOpacity;
        header.style.opacity = titleOpacity;
        isVisible = true;
    }
}