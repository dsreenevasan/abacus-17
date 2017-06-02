<?php 
    session_start();
	if(isset($_SESSION['email']))
    {
        header("location: main.html");
    }

							
										
											include('db_connect.php');
											$email 					= $_POST['email'];
											$password 				= $_POST['pass'];
											$pwd=$password;
											$password 				= md5($password);

											$sql_fetch_login	 	= "SELECT  `PASSWORD` FROM `personal_details` WHERE `EMAIL`='$email'";
											
											$result 				= mysqli_query($connection, $sql_fetch_login);
											$num_of_rows			= mysqli_num_rows($result);

											if($num_of_rows == 0)
											{
												echo '<h2>Problem Occured</h2>';
												echo "<p>Email Id not found  </p>";
												echo "<br>Please "; ?>
												<a href="register.html">Register</a> 
											<?php 
											}
											else
											{    echo($email);
												$login					= mysqli_fetch_row($result);
												$dpassword 				= $login[0];
												if($password == $dpassword)
												{
													$_SESSION["email"] = $email;
													echo "<p>  Password is correct</p>";

													header("Location: login.html");
												}
												
												else
												{	
													echo '<h2>  Problem Occured</h2>';
													
													echo "<p>  Password is incorrect</p>";
													mysqli_close($connection);
												}
											}
									
								
?>
							