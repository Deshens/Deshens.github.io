        <?php
            include "views/head.php";
        ?>
        <link rel="stylesheet" href="css/presupuestos_styles.css">
        <link rel="stylesheet" href="css/popUp_styles.css">
    </head>

    <?php
        include "views/header.php";
    ?>
    <div id="pres_main_container">
        <div id="pres_main_section">
            <div id="pres_title_container"><!--Cartel inicial-->
                <h1>Presupuestos</h1>
                <br>
                <p>Rellena nuestro formulario online para que podamos decidir el sitio o 
                    aplicación indicado para tí. No todos necesitan lo mismo, ni todos los proyectos 
                    cuestan lo mismo. <i><b>Paga solo lo que necesites</b></i> con nuestro formulario para presupuestos.
                </p>
                <br>
                <button id="start_btn">Comenzar</button>
            </div>

            <div id="pres_cards_container"><!--Contenedor de las cartas-->
                <div class="pres_relative_card_container"><!--Esto es una carta-->
                    <div class="generic_card">
                        <h2>Apartados<br>Adicionales</h2>
                    </div>

                    <div class="flipped_card">
                        <h2>Apartados adiciones</h2>
                        <br>
                        <p>Si quieres que las personas <b>encuentren tu sitio</b> cuando busquen 
                            en Google u otros motores de búsqueda, necesitarás del diseño e implementación
                            de las <b>palabras clave</b> más adecuadas por volumen de búsquedas y nivel de competencia,
                            tras un estudio exhaustivo de tu sector en internet.
                            Este estudio incluye hasta <i><b>X palabras clave</i></b> con un número suficiente de búsquedas y
                            una competencia asequible dentro del sector.</p>
                        <br>
                        <div class="slider_container">
                            <input type="range" class="slider" data-index = "apartados_adicionales" min = "0" max = "20" value = "0">
                            <p class="slider_text">0</p>
                        </div>
                    </div>
                </div><!--Card end-->


                <div class="pres_relative_card_container"><!--Esto es una carta-->
                    <div class="generic_card">
                        <h2>Apartados<br>Especiales</h2>
                    </div>

                    <div class="flipped_card">
                        <h2>Apartados especiales</h2>
                        <br>
                        <p>Además de las 3 secciones base, se pueden incluir apartados básicos adicionales de ser necesario,
                            como la presentación de la empresa, una guía de compra, un apartado de contacto, etc.</p>
                        <br>
                        <div class="slider_container">
                            <input type="range" class="slider" data-index = "apartados_especiales" min = "0" max = "12" value = "0">
                            <p class="slider_text">0</p>
                        </div>
                    </div>
                </div><!--Card end-->


                <div class="pres_relative_card_container"><!--Esto es una carta-->
                    <div class="generic_card">
                        <h2>Posicionamiento<br>SEO</h2>
                    </div>

                    <div class="flipped_card">
                        <h2>Posicionamiento Seo</h2>
                        <br>
                        <p>Si quieres que los usuarios encuentren tu sitio por encima de otros similares cuando busquen
                            en Google u otros motores de búsqueda, necesitarás el diseño e implementación de las palabras clave
                             más adecuadas por volumen de búsquedas y nivel de competencia.</p>
                        <br>
                        <div class="pres_card_btns">
                            <button class="pres_card_btn yes_btn" data-index = "posicionamiento">Si</button>
                            <button class="pres_card_btn no_btn">No</button>
                        </div>
                    </div>
                </div><!--Card end-->


                <div class="pres_relative_card_container"><!--Esto es una carta-->
                    <div class="generic_card">
                        <h2>Registro<br>de<br>Usuarios</h2>
                    </div>

                    <div class="flipped_card">
                        <h2>Registro de usuarios</h2>
                        <br>
                        <p>Esto es útil a la hora de guardar datos relacionados con el usuario, restringir el acceso a la página 
                            o secciones de esta o si tu sitio es un e-commerce; permitir al usuario hacer compras directas sin tener 
                            que introducir sus datos cada vez que vuelva a ingresar al sitio.</p>
                        <br>
                        <div class="pres_card_btns">
                            <button class="pres_card_btn yes_btn" data-index = "registro_de_usuarios">Si</button>
                            <button class="pres_card_btn no_btn">No</button>
                        </div>
                    </div>
                </div><!--Card end-->


                <div class="pres_relative_card_container"><!--Esto es una carta-->
                    <div class="generic_card">
                        <h2>Medios<br>de<br>Pago</h2>
                    </div>

                    <div class="flipped_card">
                        <h2>Medios de pago</h2>
                        <br>
                        <p>Si tu página ofrece la posibilidad de recibir dinero, ya sea en forma 
                        de donaciones o ventas, necesitarás que los visitantes de tu página tengan una forma 
                        de pagar en la misma a través de medios como paypal, mastercard u otras entidades bancarias.
                        </p>
                        <br>
                        <div class="slider_container">
                            <input type="range" class="slider" data-index = "medios_de_pago" min = "0" max = "5" value = "0">
                            <p class="slider_text">0</p>
                        </div>
                    </div>
                </div><!--Card end-->


                <div class="pres_relative_card_container"><!--Esto es una carta-->
                    <div class="generic_card">
                        <h2>Venta<br>Cruzada</h2>
                    </div>

                    <div class="flipped_card">
                        <h2>Venta cruzada</h2>
                        <br>
                        <p>Si se venden una gran cantidad de productos puede ser interesante la inclusión de productos relacionados con el que se está visualizando en 
                            la misma página o justo antes de hacer el pago, para incentivar su venta conjunta.
                            Esto también es interesante para mostrar información o secciones relacionadas a lo que el usuario está viendo y que quizás podría interesarle.
                        </p>
                        <br>
                        <div class="pres_card_btns">
                            <button class="pres_card_btn yes_btn" data-index = "venta_cruzada">Si</button>
                            <button class="pres_card_btn no_btn">No</button>
                            
                        </div>
                    </div>
                </div><!--Card end-->


                <div class="pres_relative_card_container"><!--Esto es una carta-->
                    <div class="generic_card">
                        <h2>Subida<br>de<br>Archivos</h2>
                    </div>

                    <div class="flipped_card">
                        <h2>Subida de archivos</h2>
                        <br>
                        <p>Si tu página contiene apartados en los que se deba subir un gran número de archivos, imágenes, 
                            videos o productos puede resultar una tarea tediosa y monotona.Es por eso que te ofrecemos la 
                            posibilidad de dejar que nosotros nos encarguemos de eso.</p>
                        <br>
                        <div class="slider_container">
                            <input type="range" class="slider" data-index = "subida_de_cosas" min = "0" max = "28" value = "0">
                            <p class="slider_text">0</p>
                        </div>
                    </div>
                </div><!--Card end-->


                <div class="pres_relative_card_container"><!--Esto es una carta-->
                    <div class="generic_card">
                        <h2>Importacion<br>de<br>Base</h2>
                    </div>

                    <div class="flipped_card">
                        <h2>Importacion de base de datos</h2>
                        <br>
                        <p>Si actualmente tienes una base de datos y quieres importarla a tu nueva página,
                             tendremos que hacer una exportación y volver a subir los datos de nuevo, además de redireccionar todas
                              las URLs en caso de que la base de datos esté alojada en una web.
                        </p>
                        <br>
                        <div class="pres_card_btns">
                            <button class="pres_card_btn yes_btn" data-index = "importacion_de_base">Si</button>
                            <button class="pres_card_btn no_btn">No</button>
                        </div>
                    </div>
                </div><!--Card end-->
            </div>

            <div id="pres_information_section">
                    <h2>¿Cuánto Costará?</h2><br>
                    <h1 id="precio_total">$300</h1>
                    <br><br>
                    <ul id="costs_list">

                        <li class="tooltip_1">
                            <i id="question_1" class="fa fa-question-circle" aria-hidden="true"></i> Estructura Base: $300
                            <span class="tooltip_1text">Incluye 3 apartados basicos a eleccion.</span>
                        </li>

                    </ul>
                    <br><br>
                    <div>
                        <button id="pres_send_btn" onclick="AbrirFormulario()">Enviar</button>
                    </div>
                    <br>
            </div>

           <div id="form_pres">
                <div id="form_pres_inputs">
                    <input class="pres_input1" style="font-family:FontAwesome;" id="nombre" required="required" type="text" placeholder=" Nombre">
                    <input class="pres_input1" style="font-family:FontAwesome;" id="wpp" required="required" type="text" placeholder=" Whats App">
                    <input class="pres_input1" style="font-family:FontAwesome;" id="mail" required="required" type="text" placeholder=" Mail">
                </div>
                <textarea id="pres_input2" style="font-family:FontAwesome;" placeholder=" Aclaraciones" cols="30" rows="10"></textarea>

                <div id="pres_btn_send_container">
                    <button onclick="EnviarPresupuesto()">Enviar</button>
                </div>
                <br>
                <p>*Ten en cuenta que los precios finales pueden variar dependiendo de lo solicitado.</p>
           </div>


           <div class="popup center">
                <div class="icon">
                    <i class="fa fa-check"></i>
                </div>

                <div class="title">
                    Mensaje enviado.
                </div>

                <div class="description">
                    Gracias por contactarnos, pronto nos pondremos en contacto.Si tienes alguna otra duda, siempre puedes usar nuestra pagina de
                    <a href="contacto.php" style="font-size:1em;color:orange;">contactos</a>.
                </div>
                <br>
                <div class="dismiss-btn">
                    <button id="dismiss-popup-btn" onclick="redirect()">Ok</button>
                </div>
            </div>    



        </div>
      
        <?php
            include "views/footer.php"; 
        ?>
    </div>
    <script src="js/popup_logic.js"></script>
    <script src="js/presupuestos_logic.js" OnLoad="CambiarPositionCardContainer()"></script>
    <script src="js/formulario_logic.js"></script>
    </body>
</html>
