<?php 
	if(isset($_POST['email'])){
		$to = "pawtod22@gmail.com"; // this is your Email address
		$email = $_POST['email']; // this is input
		$subject = "Form submission";
		$message = "New subscribe: " .$email.;
		$headers = "TH3M";
			mail($to,$subject,$message,$headers);
		}
?>