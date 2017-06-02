<?php 
    								
	

							
							
											
									$entitybody=file_get_contents('php://input');
									$dejson=json_decode($entitybody,TRUE);
	
								
 
include('db_connect.php'); session_start();
								
									$entitybody=file_get_contents('php://input');
									$dejson=json_decode($entitybody,TRUE);
	
											$email 					= $dejson['email'];
											$password 				= $dejson['pass'];
																	
											$password 				= md5($password);

											$sql_fetch_login	 	= "SELECT  * FROM `personal_details` WHERE `EMAIL`='$email'";
											
											$result 				= mysqli_query($connection, $sql_fetch_login);
											$num_of_rows			= mysqli_num_rows($result);

											if($num_of_rows == 0)
											{
												echo ("404");
												 
								
											}
											else
											{       
												$login					= mysqli_fetch_row($result);
												$dpassword 				= $login[7];

												if($password == $dpassword)
												{
													$_SESSION["email"] = $email;
													
													setcookie("LOGGED_IN", $email);
												
													$user->mail=$login[0];
													$user->name = $login[1];
													$user->dept = $login[2];
													$user->phno = $login[3];
													$user->college = $login[4];
													$user->year = $login[5];
													$user->a_id = $login[6];
													$userJSON = json_encode($user);

													echo $userJSON;
													//header("Location: main.html");
												}
												
												else
												{	
													echo ("404");
													
																									mysqli_close($connection);
												}
											}
									
?>
							