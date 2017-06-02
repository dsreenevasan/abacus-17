<?php
		echo "hi";
	 include('db_connect.php');


								$emailexist=0; 
								$mobexist=0;
									
									
										
										$email 					= $_POST['user_email'];
										$mobno					= $_POST['user_phone'];
										$sql_check1		= "SELECT * FROM `personal_details` WHERE `EMAIL`=$email LIMIT 1";
										$query1     	= mysqli_query($connection, $sql_check1);
										$reg_check1		= mysqli_num_rows($query1);
										$sql_check2		= "SELECT * FROM `personal_details` WHERE `PHONE_NUMBER`=$mobno LIMIT 1";
										$query2     	= mysqli_query($connection, $sql_check2);
										$mob_check		= mysqli_num_rows($query2);

								if($reg_check1 < 1)
								{
									if($mob_check<1)
									{             
										
											$password 				= $_POST['user_phone'];
											$college				=$_POST['user_college'];
											$year					=$_POST['user_year'];
											$dept					=$_POST['user_dept'];
											$check=1;
											while($check){
											$aid = rand(1000, 9999);
											$concat="AB";
											$aid=$concat."_".$aid;
											$sql_checkid	= "SELECT * FROM `personal_details` WHERE `A_ID` like $aid LIMIT 1";
											$query_id     	= mysqli_query($connection, $sql_checkid);
											$id_check		= mysqli_num_rows($query_id);
											if($id_check<1) $check=0;
											else $check=1;
											}
										
											$name				= $_POST['user_name'];
											$pass 				= md5($password);
											$sql_insert	 	= " INSERT INTO `CSEA`.`personal_details` (`EMAIL`, `NAME`, `DEPARTMENT`, `PHONE_NUMBER`, `COLLEGE`, `YEAR`, `A_ID`, `PASSWORD`) VALUES ('$email', '$name', '$dept', '$mobno', '$college', '$year', '$aid', '$pass')";
											
											if(mysqli_query($connection, $sql_insert))
											{  		
													//echo("REGISTERED SUCCESSFULLY");
													//echo("WAIT FOR 5 SECONDS");
													//echo("REDIRECTING TO MAIN PAGE");
													$_SESSION["email"] = $email;
													
													setcookie("LOGGED_IN", $email);
													setcookie("REGISTERED_SUCCESS","YES");
													//echo $_COOKIE["LOGGED_IN"];

													$user->name = $name;
													$user->dept = $dept;
													$user->phno = $mobno;
													$user->college = $college;
													$user->year = $year;
													$user->a_id = $aid;
													$userJSON = json_encode($user);
													$output = "<script>console.log( 'Debug Objects: " . "INSERTED" . "' );</script>";
    echo $output;
													echo $userJSON;
												//header("location: main.html");
											}
									}
										else{
											echo 'MOBILE NUMBER ALREADY EXISTS' ;
											setcookie("REGISTERED_SUCCESS","NO");
											//header("location: register.html");
											$mobexist=1;
										}
								}
								else{
										echo 'EMAIL ID ALREADY EXISTS' ;
										setcookie("REGISTERED_SUCCESS","NO");
										$emailexist=1;
										//header("location: register.html");
									}
								
								
							?>