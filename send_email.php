<?php
header("Content-Type: application/json");

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request method."
    ]);
    exit;
}

// Basic validation
$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

if ($name === "" || $email === "" || $message === "") {
    echo json_encode([
        "status" => "error",
        "message" => "All fields are required."
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid email address."
    ]);
    exit;
}

// Sanitize
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

// Email settings
$to = "RTSmith801@gmail.com";
$subject = "New Contact Form Message from $name";

$body = "This email was generated from the contact form at PixelTapestry.com\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

// IMPORTANT: Bluehost-friendly headers
$headers  = "From: Pixel Tapestry <no-reply@pixeltapestry.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send mail
if (mail($to, $subject, $body, $headers)) {
    echo json_encode([
        "status" => "success",
        "message" => "Thanks! Your message has been sent."
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Message failed to send. Please try again later."
    ]);
}
