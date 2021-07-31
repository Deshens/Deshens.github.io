        <?php
            include "views/head.php";
        ?>
        <link rel="stylesheet" href="css/contacto_styles.css">
        <link rel="stylesheet" href="css/popUp_styles.css">
    </head>

    <?php
        include "views/header.php";
    ?>
        <div class="con_main_container">
            <div id="con_central_container">

                <div id="con_title_section">
                    <h1>Somos
                        <br>
                        todo
                        <br>
                        oidos
                    </h1>
                    <br><br>
                    <p class="con_semi-white">Estamos disponibles para atenderte en todo lo que necesites.<br>
                    Envianos tus consultas, dudas o solicita presupuesto rellenando este formulario.</p>
                    <br><br>
                    <p class="con_semi-white">Gracias por contar con nosotros!</p>
                    <br><br>
                    <h5 class="con_semi-white">Otros medios de contacto</h5>
                    <br>
                    <ul class="con_semi-white">
                        <li class="con_p2">
                            <i class="fa fa-envelope-o" aria-hidden="true" style="font-weight:bolder;color:white;"></i> SunlessSoftware@gmail.com
                        </li>
                    </ul>
                </div>


                <div id="con_form_section">
                    <form method="post">
                        <div id="con_form_section1">
                            <input class="con_input1" style="font-family:FontAwesome;" name="nombre" required="required" type="text" placeholder=" Nombre">
                            <input class="con_input1" style="font-family:FontAwesome;" name="mail" required="required" type="text" placeholder=" Mail">
                        </div>

                        <div id="con_form_section2">
                        <input class="con_input2" style="font-family:FontAwesome;" name="telefono" required="required" type="text" placeholder=" Telefono">
                        <input class="con_input2" style="font-family:FontAwesome;" name="asunto" required="required" type="text" placeholder=" Asunto">
                        </div>
                        <textarea name="mensaje" id="con_input3" style="font-family:FontAwesome;" required="required" placeholder=" Escribe tu mensaje" cols="30" rows="10"></textarea>

                        <div id="submit_container">
                            <button type="submit" name="enviar" style="width:50%;">Enviar</button>
                        </div>  
                    </form>
                </div>
            </div>

        </div>
        <div class="popup center">
                <div class="icon">
                    <i class="fa fa-check"></i>
                </div>

                <div class="title">
                    Mensaje enviado.
                </div>

                <div class="description">
                    Gracias por contactarnos, te responderemos en breve.
                </div>

                <div class="dismiss-btn">
                    <button id="dismiss-popup-btn">Ok</button>
                </div>
            </div>    
         
        <br><br><br><br><br><br>
        <?php
            include "views/footer.php"; 
        ?>
        </div>
        <script src="js/popup_logic.js"></script>
        <script src="js/contactScroll.js"></script>
        <?php include "php/correo.php"?>
    </body>
</html>