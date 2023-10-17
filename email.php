<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Set your email address where you want to receive the form submissions.
    $to = "deva984046@gmail.com";

    // Set the subject for the email.
    $subject = "Contact Form Submission from $name";

    // Compose the email message.
    $message_body = "Name: $name\n";
    $message_body .= "Email: $email\n";
    $message_body .= "Phone: $phone\n";
    $message_body .= "Message:\n$message\n";

    // Additional headers for the email.
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email.
    if (mail($to, $subject, $message_body, $headers)) {
        echo "sent";
    } else {
        echo "error";
    }
} else {
    // Not a POST request, so return an error.
    echo "error";
}
?>
