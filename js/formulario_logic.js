var yes_btns = document.getElementsByClassName("yes_btn");
var no_btns = document.getElementsByClassName("no_btn");
var items = document.getElementsByClassName("fa-times");
var slider = document.getElementsByClassName("slider");
var slider_text = document.getElementsByClassName("slider_text");

var yes_btn_boolean = [];
var slider_num_index = [];

var precio_anterior = [];
var precio = [];
//Precio mínimo que va a tener la página
var total = 300;

//Precio de los botones
precio["posicionamiento"] = 100;
precio["venta_cruzada"] = 300;
precio["registro_de_usuarios"] = 400;
precio["importacion_de_base"] = 500;

//Precio de los sliders
precio["apartados_adicionales"] = 10;
precio["apartados_especiales"] = 50;
precio["subida_de_cosas"] = 100;
precio["medios_de_pago"] = 200;

var nombre_categorias = [];

//Asigno un nombre a todas las categorías
nombre_categorias["posicionamiento"] = "Posicionamiento";
nombre_categorias["medios_de_pago"] = "Medios de Pago";
nombre_categorias["venta_cruzada"] = "Venta Cruzada";
nombre_categorias["registro_de_usuarios"] = "Registro de Usuarios";
nombre_categorias["apartados_adicionales"] = "Apartados Adicionales";
nombre_categorias["apartados_especiales"] = "Apartados Especiales";
nombre_categorias["subida_de_cosas"] = "Subida de Archivos";
nombre_categorias["importacion_de_base"] = "Importación de Base de Datos";

//Dejo todos los valores en falso o en 0
ResetValues();

function ResetValues() {
    yes_btn_boolean["posicionamiento"] = false;
    yes_btn_boolean["venta_cruzada"] = false;
    yes_btn_boolean["registro_de_usuarios"] = false;
    yes_btn_boolean["importacion_de_base"] = false;

    for (var i = 0; i < slider.length; i++) {
        slider[i].value = 0;
    }
}

//Cosas de rubick
var form = document.getElementById("form_pres"); //Formulario de envio segundo
var formOpen = false;

var AddToListButton = function() {
    var index = this.getAttribute("data-index");

    //Si este booleano es falso o nulo entonces lo vuelve verdadero
    //y crea un texto con el precio en la lista de precios.
    //Si el booleano es verdadero significa que ya se seleccionó el botón
    if (yes_btn_boolean[index] != true) {
        yes_btn_boolean[index] = true;

        CerrarCarta();
        document.getElementById("costs_list").innerHTML += "<li data-index=" + index + " id=" + index + "> <i id='removBtn' class='fa fa-times' aria-hidden='true' onclick='AddDeleteButton(this, 1)'></i>" +
            nombre_categorias[index] + ": $" + precio[index] + "<br></li>";

        total += precio[index];

        //Actualiza el texto del total.
        document.getElementById("precio_total").innerHTML = "$" + total;
    }
};

function RestarTotal(cantidad, index) {
    /*console.log("index: " + index + "<br>cantidad: " + cantidad + "<br>precio[index]: " + precio[index] + "<br> total pre-cuenta: " + total);*/

    //Calcula el total
    total -= precio[index] * cantidad;

    /*console.log("total post-cuenta:" + total);*/

    //si es un slider entoces resetea los valores del slider
    //sino, vuelve un booleano falso
    if (slider_num_index[index] != null && slider_num_index[index] != undefined) {
        slider[slider_num_index[index]].value = 0;
        slider_text[slider_num_index[index]].innerHTML = "0";
        precio_anterior[index] = 0;
    } else yes_btn_boolean[index] = false;

    //Actualiza el texto del total
    document.getElementById("precio_total").innerHTML = "$" + total;
}

//puede ser que esto funcione con un OnClick. Fijate mañana cerebro no funcion solo vicio
function AddDeleteButton(element, cantidad) {
    var index = element.parentNode.getAttribute("data-index");

    RestarTotal(cantidad, index);

    element.parentNode.parentNode.removeChild(element.parentNode);
}

//Añado un listener a todos los botones que digan sí para que cuando se les hagan click
//llamen a la función AddToListButton
for (var i = 0; i < yes_btns.length; i++) {
    yes_btns[i].addEventListener("click", AddToListButton, false);
}

//Listener para todos los botones que digan no
for (var i = 0; i < no_btns.length; i++) {
    no_btns[i].addEventListener("click", function() {
        CerrarCarta();

        var index = this.previousSibling.previousSibling.getAttribute("data-index");

        //Si existe el elemento entonces resta el total y lo elimina de la lista
        if (document.getElementById(index) != null) {

            RestarTotal(1, index);

            document.getElementById(index).parentNode.removeChild(document.getElementById(index));
        }

    }, false);
}

for (var i = 0; i < slider.length; i++) {

    //Me aseguro de que no haya un precio anterior al empezar 
    //para evitar que esta variable se llene de basura
    precio_anterior[slider[i].getAttribute("data-index")] = 0;

    slider_num_index[slider[i].getAttribute("data-index")] = i;

    slider[i].oninput = function() {

        var index = this.getAttribute("data-index");

        //Actualiza el texto del slider
        for (var j = 0; j < slider_text.length; j++) {
            slider_text[j].innerHTML = slider[j].value;
        }

        //Me aseguro de borrar el precio anterior del total, y luego sumo el total con el precio actual
        total -= precio_anterior[index];
        total += precio[index] * this.value;
        precio_anterior[index] = precio[index] * this.value;

        //Actualiza el texto del item de la lista. Sino existe el item entonces lo crea
        if (document.getElementById(index) != null) {
            document.getElementById(index).innerHTML = "<i id='removBtn' class='fa fa-times' aria-hidden='true' onclick='AddDeleteButton(this, " + this.value + ")'></i>" +
                nombre_categorias[index] + " (" + this.value + "): $" + precio_anterior[index];
        } else {
            document.getElementById("costs_list").innerHTML += "<li data-index=" + index + " id=" + index + "> <i id='removBtn' class='fa fa-times' aria-hidden='true' onclick='AddDeleteButton(this, " + this.value + ")'></i>" +
                nombre_categorias[index] + " (" + this.value + "): $" + precio_anterior[index] + "<br></li>";
        }

        //Remueve el item de la lista si el slider llega a 0
        if (this.value == 0)
            document.getElementById(index).parentNode.removeChild(document.getElementById(index));

        //Actualiza el texto del total.
        document.getElementById("precio_total").innerHTML = "$" + total;
    }
}

//Cosas de envio
function AbrirFormulario() {
    form.style.left = "50%";
    form.style.visibility = "visible";
    form.style.transform = "translate(-50%,0)";
    document.getElementById("header").style.opacity = 0;
    document.getElementById("pres_information_section").style.opacity = 0;
    document.getElementById("pres_cards_container").style.opacity = 0;
    document.getElementById("pres_cards_container").style.left = "-200%";
    document.getElementById("pres_main_section").style.height = "100vh";
    document.documentElement.style.setProperty('--background-filter-intesity', 'blur(10px)');
    window.scrollTo(0, 0);
    setTimeout(() => {
        formOpen = true;
        document.getElementById("header").style.visibility = "hidden";
    }, 1000);
}

function redirect() {
    window.location.href = 'index.php';
}

document.addEventListener("click", function(event) { //Si se detecta un click
    //Si el click fue fuera del formulario y el formulario esta abierto
    if (!form.contains(event.target) && formOpen) {
        form.removeAttribute("style");
        document.getElementById("pres_main_section").removeAttribute("style");
        document.getElementById("header").removeAttribute("style");
        document.getElementById("pres_information_section").style.opacity = 1;
        document.getElementById("pres_cards_container").style.left = 0;
        document.getElementById("pres_cards_container").style.opacity = 1;
        document.documentElement.style.setProperty('--background-filter-intesity', 'blur(0px)');
        formOpen = false;
    }
});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function EnviarPresupuesto() {

    var nombre = document.getElementById("nombre").value;
    var celular = document.getElementById("wpp").value;
    var userMail = document.getElementById("mail").value;
    var aclaracion = document.getElementById("pres_input2").value;

    if (nombre != "" && (celular != "" || mail != "")) {
        formOpen = false;
        //Envio con ajax
        $.ajax({
            url: 'php/sendPresupuesto.php',
            data: {
                name: nombre,
                cel: celular,
                mail: userMail,
                aclaration: aclaracion,
                posicionamiento: yes_btn_boolean["posicionamiento"],
                venta_cruzada: yes_btn_boolean["venta_cruzada"],
                registro_de_usuarios: yes_btn_boolean["registro_de_usuarios"],
                importacion_de_base: yes_btn_boolean["importacion_de_base"],
                apartados_adicionales: slider[0].value,
                apartados_especiales: slider[1].value,
                medios_de_pago: slider[2].value,
                subida_de_archivos: slider[3].value,
                precio: total,
            },
            type: 'post',
            success: function(output) {
                document.getElementById("form_pres").removeAttribute("style");
                AbrirPopUp();
            }
        })

    } else {
        alert("Debes completar el formulario con tu nombre y al menos un medio de contacto.")
    }



}