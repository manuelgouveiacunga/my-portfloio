<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Seu email
    $to = "manuelgouveiacunga18@outlook.com";

    // Assunto do email
    $subject = "Nova mensagem de contato de $name";

    // Cabeçalhos do email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Corpo do email
    $email_body = "Você recebeu uma nova mensagem de contato:\n\n";
    $email_body .= "Nome: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Mensagem:\n$message\n";

    // Enviar o email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "<script>alert('Mensagem enviada com sucesso!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Erro ao enviar mensagem. Tente novamente.'); window.location.href = 'index.html';</script>";
    }
} else {
    echo "<script>alert('Acesso inválido.'); window.location.href = 'index.html';</script>";
}
?>
