<?php
	session_start();
	if(session_destroy())
	{
		
		setcookie("LOGGED_IN", "", time() - 3600);
	}
?>