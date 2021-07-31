<?php
if(isset($_POST['name'])){

    $nombre=$_POST['name'];
    $email=$_POST['mail'];
    if($email==null){ $email="Ninguno";}
    $telefono=$_POST['cel'];
    if($telefono==null){$telefono="Ninguno";}
    $asunto="Pedido Sunless Software";
    $mensaje="Hola amo y señor, soy el humilde intento de bot de su pagina Sunless software, escribo este mensaje para informarle que tiene un nuevo pedido con las siguientes caracteristicas:
    \r\nPosicionamiento ceo: ".$_POST['posicionamiento'].
    "\r\nMedios de pago: ".$_POST['medios_de_pago'].
    "\r\nVenta cruzada: ".$_POST['venta_cruzada'].
    "\r\nRegistro de usuarios: ".$_POST['registro_de_usuarios'].
    "\r\nImportacion de base: ".$_POST['importacion_de_base'].
    "\r\nApartados adicionales: ".$_POST['apartados_adicionales'].
    "\r\nApartados especiales: ".$_POST['apartados_especiales'].
    "\r\nSubida de archivos: ".$_POST['subida_de_archivos'].
    "\r\nEl precio total del pedido es: $".$_POST['precio'];

    if($_POST['aclaration']!=null){
        $mensaje.=".\r\nEl usuario tambien ha dejado las siguientes aclaraciones: \r\n".$_POST['aclaration'];
    }

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

    echo "Succes";

}
?>