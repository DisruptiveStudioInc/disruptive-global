<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

if (!isset($_SESSION['form_time'])) {
    $_SESSION['form_time'] = time();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($_POST['honeypot'])) {
        die('<p class="warning">' . $Alert_08 . '</p>');
    }

    if (time() - $_SESSION['form_time'] < 5) { 
        die('<p class="warning">' . $Alert_08 . '</p>');
    }

    $data = [
        'nombre' => strip_tags(htmlspecialchars($_POST['nombre'] ?? '', ENT_QUOTES, 'UTF-8')),
        'email' => strip_tags(htmlspecialchars($_POST['email'] ?? '', ENT_QUOTES, 'UTF-8')),
        'telefono' => strip_tags(htmlspecialchars($_POST['telefono'] ?? '', ENT_QUOTES, 'UTF-8')),
        'comentario' => strip_tags(htmlspecialchars($_POST['comentario'] ?? '', ENT_QUOTES, 'UTF-8'))
    ];

    $_SESSION = array_merge($_SESSION, $data);
    $errores = validarFormulario($data);

    if (empty($errores)) {
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host = 'mail.disruptivetest.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'test@disruptivetest.com';
            $mail->Password = 'QM4NZDCTCCWCSGJQ';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;

            $mail->setFrom('test@disruptivetest.com', 'Disruptive Global');
            $mail->addAddress('socialmedia@disruptive.com', 'Destinatario');
            $mail->addReplyTo($data['email'], $data['nombre']);

            $mail->isHTML(true);
            $mail->Subject = 'Nuevo correo desde el sitio web de DISRUPTIVE GLOBAL';

            // Eliminar enlaces sospechosos en comentarios
            $data['comentario'] = preg_replace('/(https?:\/\/|www\.)/i', '', $data['comentario']);

            $mail->Body = "
                <p><strong>Nombre:</strong> {$data['nombre']}</p>
                <p><strong>Email:</strong> {$data['email']}</p>
                <p><strong>Teléfono:</strong> {$data['telefono']}</p>
                <p><strong>Comentarios:</strong><br>{$data['comentario']}</p>";

            $mail->send();
            echo '<p class="success t-c">' . $Alert_06 . '</p>';
            session_unset();
            $_SESSION['form_time'] = time();
            echo '<script>
                setTimeout(() => {
                    document.getElementById("form").scrollIntoView({ behavior: "smooth", block: "start" });
                }, 500);
            </script>';
        } catch (Exception $e) {
            echo "<p class='warning'>" . $Alert_07 . " Error: " . $mail->ErrorInfo . "</p>";
        }
    } else {
        echo '<div class="errors-container">';
        foreach ($errores as $error) {
            echo $error;
        }
        echo '</div>';
        echo '<script>
                setTimeout(() => {
                    document.getElementById("form").scrollIntoView({ behavior: "smooth", block: "start" });
                }, 500);
            </script>';
    }
}

function validarFormulario($data) {
    global $Alert_01, $Alert_02, $Alert_03, $Alert_04, $Alert_05;

    $errores = [];

    if (empty($data['nombre'])) 
        $errores[] = '<p class="warning">' . $Alert_01 . '</p>';

    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) 
        $errores[] = '<p class="warning">' . $Alert_02 . '</p>';

    if (empty($data['telefono']) || !preg_match('/^\+?[0-9\s-]{10,15}$/', $data['telefono']))
        $errores[] = '<p class="warning">' . $Alert_03 . '</p>';

    if (empty($data['comentario'])) 
        $errores[] = '<p class="warning">' . $Alert_04 . '</p>';

    // Bloquear si hay enlaces en el comentario
    if (preg_match('/https?:\/\/|www\./i', $data['comentario'])) {
        $errores[] = '<p class="warning">' . $Alert_05 . '</p>';
    }

    return $errores;
}
?>