<?php

if(isset($_POST['enviar'])){
    if(!empty($_POST['nombre']) && !empty($_POST['mail']) && !empty($_POST['telefono']) && !empty($_POST['asunto']) && !empty($_POST['mensaje'])){

        $nombre=$_POST['nombre'];
        $email=$_POST['mail'];
        $telefono=$_POST['telefono'];
        $asunto=$_POST['asunto'];
        $mensaje=$_POST['mensaje'];

        $my_mail="SunlessSoftware@gmail.com";

        $header = 'From: ' . $email . " \r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/plain";

        $mensaje_txt = "Este mensaje fue enviado por " . $nombre . ",\r\n";
        $mensaje_txt .= "Su e-mail es: " . $email . " \r\n";
        $mensaje_txt .= "Su telefono es: " . $telefono . " \r\n";
        $mensaje_txt .= "Mensaje: " . $mensaje . " \r\n";
        $mensaje_txt .= "Enviado el " . date('d/m/Y', time());

        $mail_to=mail($my_mail, $asunto, utf8_decode($mensaje_txt), $header);

            
        if($mail_to){
            echo "
            <script type='text/javascript'>
                document.getElementsByClassName('popup')[0].classList.add('active');
                document.getElementsByClassName('con_main_container')[0].classList.add('active');
            </script>";
        }

    }
}
?>