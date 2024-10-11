 <?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

 if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
        echo "All fields are required.";
        exit;
    }

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "zixifiyorg@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Invalid request.";
}
?>
