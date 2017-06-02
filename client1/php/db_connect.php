<?php
	$DB_URL			= "localhost";
	$DB_USERNAME	= "root";
	$DB_PASSWORD	= "";
	$DB_NAME 		= "abacus";

	$connection 	= mysqli_connect($DB_URL, $DB_USERNAME, $DB_PASSWORD, $DB_NAME);

	if(mysqli_connect_errno()) 
	{
		echo "Connection failed: " . mysqli_connect_error();
	}
?>