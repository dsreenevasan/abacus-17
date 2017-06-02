<?php
											include('db_connect.php');
											session_start();

											$workshops=array("workshop","REACT WEB DEVELOPMENT ", "FITNESS TRACKER","ECOMMERCE WEB DEVELOPMENT","AUGMENTED REALITY", "LINUX", "MACHINE LEARNING");
											$email=$_SESSION["email"];
											$sql_fetch_login	 	= "SELECT  * FROM `personal_details` WHERE `EMAIL`='$email'";
											$result 				= mysqli_query($connection, $sql_fetch_login);
											$num_of_rows			= mysqli_num_rows($result);

											if($num_of_rows != 0)
											{
													$login					= mysqli_fetch_row($result);
												
													$user->mail=$login[0];
													$user->name = $login[1];
													$user->dept = $login[2];
													$user->phno = $login[3];
													$user->college = $login[4];
													$user->year = $login[5];
													$user->a_id = $login[6];
													
													
													$EMAILID=$email;
														$sql_check= "select * from `CSEA`.`workshop_reg` where `EMAIL` like '$email' and `WORKSHOP_NAME` like '$workshops[0]' ";
														
														$result 				= mysqli_query($connection, $sql_check);
														$num_of_rows			= mysqli_num_rows($result);
														if($num_of_rows == 0){
															$user->wrsp0="NOT REGISTERED";
															$user->wrsp0st="NOT PAID";
														} else{
															$statuscheck					= mysqli_fetch_row($result);
															$user->wrsp0="REGISTERED";
															$user->wrsp0st=$statuscheck[3];
														}
														
														$sql_check= "select * from `CSEA`.`workshop_reg` where `EMAIL` like '$EMAILID' and `WORKSHOP_NAME` like '$workshops[1]' ";
														
														$result 				= mysqli_query($connection, $sql_check);
														$num_of_rows			= mysqli_num_rows($result);
														if($num_of_rows == 0){
															$user->wrsp1="NOT REGISTERED";
															$user->wrsp1st="NOT PAID";
														} else{
															$statuscheck					= mysqli_fetch_row($result);
															$user->wrsp1="REGISTERED";
															$user->wrsp1st=$statuscheck[3];
														}
														
														$sql_check= "select * from `CSEA`.`workshop_reg` where `EMAIL` like '$EMAILID' and `WORKSHOP_NAME` like '$workshops[2]' ";
														
														$result 				= mysqli_query($connection, $sql_check);
														$num_of_rows			= mysqli_num_rows($result);
														if($num_of_rows == 0){
															$user->wrsp2="NOT REGISTERED";
															$user->wrsp2st="NOT PAID";
														} else{
															$statuscheck					= mysqli_fetch_row($result);
															$user->wrsp2="REGISTERED";
															$user->wrsp2st=$statuscheck[3];
														}
														
														$sql_check= "select * from `CSEA`.`workshop_reg` where `EMAIL` like '$EMAILID' and `WORKSHOP_NAME` like '$workshops[3]' ";
														
														$result 				= mysqli_query($connection, $sql_check);
														$num_of_rows			= mysqli_num_rows($result);
														if($num_of_rows == 0){
															$user->wrsp3="NOT REGISTERED";
															$user->wrsp3st="NOT PAID";
														} else{
															$statuscheck					= mysqli_fetch_row($result);
															$user->wrsp3="REGISTERED";
															$user->wrsp3st=$statuscheck[3];
														}
														
														$sql_check= "select * from `CSEA`.`workshop_reg` where `EMAIL` like '$EMAILID' and `WORKSHOP_NAME` like '$workshops[4]' ";
														
														$result 				= mysqli_query($connection, $sql_check);
														$num_of_rows			= mysqli_num_rows($result);
														if($num_of_rows == 0){
															$user->wrsp4="NOT REGISTERED";
															$user->wrsp4st="NOT PAID";
														} else{
															$statuscheck					= mysqli_fetch_row($result);
															$user->wrsp4="REGISTERED";
															$user->wrsp4st=$statuscheck[3];
														}
														
														$sql_check= "select * from `CSEA`.`workshop_reg` where `EMAIL` like '$EMAILID' and `WORKSHOP_NAME` like '$workshops[5]' ";
														
														$result 				= mysqli_query($connection, $sql_check);
														$num_of_rows			= mysqli_num_rows($result);
														if($num_of_rows == 0){
															$user->wrsp5="NOT REGISTERED";
															$user->wrsp5st="NOT PAID";
														} else{
															$statuscheck					= mysqli_fetch_row($result);
															$user->wrsp5="REGISTERED";
															$user->wrsp5st=$statuscheck[3];
														}
																									//header("Location: main.html");
														$userJSON = json_encode($user);
														echo($userJSON);
											}
														?>