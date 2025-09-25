<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libs/PHPMailer/src/Exception.php';
require 'libs/PHPMailer/src/PHPMailer.php';
require 'libs/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = getenv('SMTP_USER') ?: "jonathamarielson@gmail.com";
        $mail->Password = getenv('SMTP_PASS'); // cria no Render
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress("jonathamarielson@gmail.com");

        $mail->isHTML(true);
        $mail->Subject = "Nova mensagem de contato de $name";
        $mail->Body = "
            <h3>Nova mensagem recebida:</h3>
            <p><strong>Nome:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Mensagem:</strong><br>$message</p>
        ";
        $mail->AltBody = "Nome: $name\nEmail: $email\nMensagem:\n$message";

        $mail->send();
        echo "<script>alert('Mensagem enviada com sucesso por email!'); window.location.href = 'index.html';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Erro ao enviar: {$mail->ErrorInfo}'); window.location.href = 'index.html';</script>";
    }
} else {
    echo "<script>alert('Acesso inválido.'); window.location.href = 'index.html';</script>";
}
