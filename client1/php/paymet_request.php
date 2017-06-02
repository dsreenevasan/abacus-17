<?php

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://www.instamojo.com/api/1.1/payment-requests/');
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
curl_setopt($ch, CURLOPT_HTTPHEADER,
            array("X-Api-Key:edb9b35399ff9858a2602861ff14d301",
                  "X-Auth-Token:16ddfecc26956b97490d55117c6dd58e"));
include('db_connect.php');
session_start();
$workshops=array("workshop","REACT WEB DEVELOPMENT ", "FITNESS TRACKER","ECOMMERCE WEB DEVELOPMENT","AUGMENTED REALITY", "LINUX", "MACHINE LEARNING");
								$sql_all 	= "SELECT * FROM `personal_details` WHERE `EMAIL`='$login_session'";
								$query_all	= mysqli_query($connection, $sql_all);
								if(mysqli_num_rows($query_all) == 1)
									$all = mysqli_fetch_assoc($query_all);
$payload = Array(
    'purpose' => '$workshops[$_SESSION['wrkname']]',
    'amount' => '$workshopmoney[$_SESSION['wrkname']]',
    'phone' => '$all["PHONE_NUMBER"]',
    'buyer_name' =>'$all["NAME"]' ,
    'redirect_url' => 'http://abacus.org.in/php/payment_handler.php',
    'send_email' => true,
    'webhook' => 'http://www.example.com/webhook/',
    'send_sms' => true,
    'email' => '$login_session',
    'allow_repeated_payments' => false
);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
$response = curl_exec($ch);
curl_close($ch); 

echo $response;

?>