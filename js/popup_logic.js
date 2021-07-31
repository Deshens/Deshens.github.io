function AbrirPopUp() {
    document.getElementsByClassName("popup")[0].classList.add("active");
    document.getElementsByClassName("con_main_container")[0].classList.add("active");
}


document.getElementById("dismiss-popup-btn").
addEventListener("click", function() {
    document.getElementsByClassName("popup")[0].classList.remove("active");
    document.getElementsByClassName("con_main_container")[0].classList.remove("active");
});