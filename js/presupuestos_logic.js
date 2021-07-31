var startBtn = document.getElementById("start_btn");
var titleContainer = document.getElementById('pres_title_container');
var mainContainer = document.getElementById("pres_main_container");
var cardsContainer = document.getElementById("pres_cards_container");
var test = getComputedStyle(mainContainer).getPropertyValue('--background-filter-intesity');
var mainSection = document.getElementById("pres_main_section");
var informationSection = document.getElementById("pres_information_section");
var actualCardIndex = null;
var actualFrontCard = null;
var actualBackCard = null;
var openTime;

startBtn.addEventListener("click", function() {
    //Cambio los estilos para hacer que el cartel inicial desaparezca y sacar el blur del fondo
    titleContainer.style.transform = "translate(-250%,-50%)";
    titleContainer.style.opacity = 0;
    titleContainer.style.visibility = "hidden";
    titleContainer.style.transitionDuration = "2s";
    document.documentElement.style.setProperty('--background-filter-intesity', 'blur(0px)');
    //El cartel tarda 2s en irse asi que llamo a esta funciona tras 2 segundos
    setTimeout("MostrarBaraja()", 2000);
});

function MostrarBaraja() {
    var cardContainer = document.getElementById("pres_cards_container");
    cardsContainer.style.position = "relative";
    cardContainer.style.left = 0;
    cardContainer.style.opacity = 1;
    setTimeout(() => {
        informationSection.style.opacity = 1;
    }, 1600);

}

function onCardClick(thisCard, index) {
    if (actualFrontCard == null) { //Si no hay ninguna carta abierta ya 
        openTime = performance.now();

        actualFrontCard = thisCard;
        actualBackCard = document.getElementsByClassName("flipped_card")[index];
        var container = document.getElementById("pres_cards_container");
        var restOfCards = document.getElementsByClassName("generic_card");
        //Blurreo el fondo
        document.documentElement.style.setProperty('--background-filter-intesity', "blur(10px)");
        //Desaparezo el cartel de informacion para que no ocupe mas espacio en pantalla
        informationSection.style.opacity = 0;
        informationSection.style.width = "0px";
        informationSection.style.height = "0px";
        informationSection.style.whiteSpace = "nowrap";

        //Roto las dos cartas y translado su pivote para centrarlas, dependiendo del tamaño de pantalla
        if (screen.width >= 768) {
            actualFrontCard.style.transform = "rotateY(180deg) translate(-50%,-40%)";
            actualBackCard.style.transform = "rotateY(0deg) translate(-50%,-40%)";

            actualFrontCard.style.width = "600px";
            actualBackCard.style.width = "600px";
            actualFrontCard.style.minHeight = "700px";
            actualBackCard.style.minHeight = "700px";
        } else { //En dispositivos moviles tengo que centrar diferente

            mainSection.style.alignItems = "flex-start";
            mainSection.style.flexDirection = "row";
            informationSection.style.position = "absolute"

            if (screen.width > 600) { //Si la pantalla tiene mas de 600px 
                actualFrontCard.style.width = "600px";
                actualBackCard.style.width = "600px";
                actualFrontCard.style.minHeight = "900px";
                actualBackCard.style.minHeight = "900px";
            } else {
                actualFrontCard.style.width = "300px";
                actualBackCard.style.width = "300px";
            }

            actualFrontCard.style.transform = "rotateY(180deg) translate(-50%,0%)";
            actualBackCard.style.transform = "rotateY(0deg) translate(-50%,0%)";
            actualFrontCard.style.height = "auto";
            actualBackCard.style.height = "auto";

        }
        //Centro las cartas haciendo su contenedor muy pequeño y obligandolas al centro
        container.style.width = "50px";
        container.style.height = "50px";
        container.style.margin = "0 0";
        actualBackCard.style.zIndex = "20";

        //Agrando el tamaño de la pantalla para cubrir el nuevo height de la carta ya que al ser position absolute no cubre
        //ningun espacio por si misma asi que si no hago esto puede llegar a superponerse con otros elementos o quedar mal
        var extraWidth = 0;
        if (screen.height > 800) {
            extraWidth = screen.height - 800;
        } else {
            extraWidth = 100;
        }
        mainSection.style.minHeight = (actualBackCard.clientHeight + extraWidth) + "px";


        // This prevents the page from scrolling down to where it was previously.
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
        window.scrollTo(0, 0);


        //Vuelvo inivisible todas las partes de adelante de las cartas
        for (var f = 0; f < restOfCards.length; f++) {
            restOfCards[f].style.opacity = 0;
        }

        //Vuelvo invisible el header
        document.getElementById("header").style.opacity = 0;


    }


}


var card1 = document.getElementsByClassName("generic_card")[0].addEventListener("click", function() {
    var index = 0;
    onCardClick(this, index);
});

var card2 = document.getElementsByClassName("generic_card")[1].addEventListener("click", function() {
    var index = 1;
    onCardClick(this, index);
});
var card3 = document.getElementsByClassName("generic_card")[2].addEventListener("click", function() {
    var index = 2;
    onCardClick(this, index);
});
var card4 = document.getElementsByClassName("generic_card")[3].addEventListener("click", function() {
    var index = 3;
    onCardClick(this, index);
});
var card5 = document.getElementsByClassName("generic_card")[4].addEventListener("click", function() {
    var index = 4;
    onCardClick(this, index);
});
var card6 = document.getElementsByClassName("generic_card")[5].addEventListener("click", function() {
    var index = 5;
    onCardClick(this, index);
});
var card7 = document.getElementsByClassName("generic_card")[6].addEventListener("click", function() {
    var index = 6;
    onCardClick(this, index);
});
var card8 = document.getElementsByClassName("generic_card")[7].addEventListener("click", function() {
    var index = 7;
    onCardClick(this, index);
});

document.addEventListener("click", function(event) {
    //Si de hecho hay una carta abierta y se abrio hace mas de un segundo y el click fue fuera de la carta
    if (actualBackCard != null && (performance.now() - openTime) > 1000 && !actualBackCard.contains(event.target)) {
        CerrarCarta();
    }

});

function CerrarCarta() {
    var restOfCards = document.getElementsByClassName("generic_card");
    document.documentElement.style.setProperty('--background-filter-intesity', "blur(0px)");

    actualFrontCard.removeAttribute("style");
    actualBackCard.removeAttribute("style");
    var cardsContainer = document.getElementById("pres_cards_container");
    cardsContainer.removeAttribute("style");
    cardsContainer.style.left = "0%";
    cardsContainer.style.opacity = 1;

    //Vuelvo todas las cartas frontales visibles
    for (var f = 0; f < restOfCards.length; f++) {
        restOfCards[f].style.opacity = 1;
    }

    document.getElementById("header").removeAttribute("style");
    mainSection.removeAttribute("style");
    informationSection.removeAttribute("style");
    informationSection.style.opacity = 1;

    actualFrontCard = null;
    actualBackCard = null;
}

function CambiarPositionCardContainer() {
    cardsContainer.style.position = "absolute";
}

//Header opacity controller
$(document).scroll(function() {
    if (actualFrontCard == null) { //Solo funciona si no hay ninguna carta abierta
        var actualScroll = $(window).scrollTop()
        if (actualScroll > 5) {
            header.style.opacity = 0;
        } else {
            header.style.opacity = 1;
        }
    }

});