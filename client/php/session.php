<?php
	include('db_connect.php');
	session_start();

	$email_check	= $_SESSION["email"];
	
	if(!empty($_SESSION["email"])){
	$sql_fetch_login	 	= "SELECT  `EMAIL` FROM `personal_details` WHERE `EMAIL`='$email_check'";
	$result 				= mysqli_query($connection, $sql_fetch_login);
	$num_of_rows			= mysqli_num_rows($result);
		
	if($num_of_rows == 1)
	{
		$login_session		= $_SESSION["email"]; 
	}
	}
	
	
	if(!isset($login_session))
	{
		mysqli_close($connection); 
		header('Location: login.html');
	}
?>