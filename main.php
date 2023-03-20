<?php
require_once 'vendor/autoload.php'; // Make sure to include the Twilio PHP library
// Set your Twilio account details
$sid    = "ACb5259f7b3711b3724f7fd44500a579f1";
$token  = "8edead2fdd62e716e1ad8e0554bae74d";
$twilio = new Twilio\Rest\Client($sid, $token);
// Set your message details
$message_body = "SOS! I need immediate help!";
$from_number  = "+1 5073534760"; // Your Twilio phone number
$to_number    = "+91 9836578565"; // The phone number you want to send the message to
// Send the message
$message = $twilio->messages->create(
    $to_number,
    array(
        "from" => $from_number,
        "body" => $message_body
    )
);
echo "Message sent! SID: " . $message->sid;