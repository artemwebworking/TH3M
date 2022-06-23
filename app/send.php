<?php 
	if(isset($_POST['email'])){
		$to = "artemwebworkingpay@gmail.com"; // this is your Email address
		$name = trim($_POST["name"]);
		$email = trim($_POST["email"]);
		$text = trim($_POST["text"]);

		$subject = "Form submission";
		$message = "Name: $name, Email: $email, Text: $text";
		$headers = "TH3M";
			mail($to,$subject,$message,$headers);
		}
?>