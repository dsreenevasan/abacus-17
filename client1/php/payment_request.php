<?php
print_r($_POST);
	$entitybody=file_get_contents('php://input');
	$userDetails=json_decode($entitybody,TRUE);
	$workshopindex=$userDetails["index"];
	$incomingemail=$userDetails["email"];

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
											$workshopname = $workshops[$workshopindex];
											$mailhere= $incomingemail;
											
$cost=array("10","600", "3000", "600", "500","600","600");
$workshopcost = $cost[$index];
		
								$sql_all 	= "SELECT * FROM `personal_details` WHERE `EMAIL`= '$mailhere' ";
								$query_all	= mysqli_query($connection, $sql_all);
								if(mysqli_num_rows($query_all) == 1){
								
								$all = mysqli_fetch_row($query_all);}
								
$payload = Array(
    'purpose' => $workshopname,
    'amount' => $workshopcost,
    'phone' => $all[3],
    'buyer_name' =>$all[1] ,
    'redirect_url' => 'http://abacus.org.in/php/payment_handler.php',
    'send_email' => true,
    'webhook' => 'http://www.example.com/webhook/',
    'send_sms' => false,
    'email' => $mailhere,
    'allow_repeated_payments' => false
);
//echo $payload["purpose"];
//print_r($payload);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
$response = curl_exec($ch);
curl_close($ch); 

echo $response;
$dejson=json_decode($response,TRUE);
$address=$dejson['payment_request']['longurl'];


$payload0=$payload["purpose"];
$payload1=$payload["amount"];
$payload2=$payload["phone"];$payload3=$payload["buyer_name"];$payload4=$payload["redirect_url"];
$payload5="false";
$payload6=$payload["webhook"];$payload7="false";$payload8=$payload["email"];$payload9="false";
$idh=$dejson['payment_request']['id'];
$request="INSERT INTO `CSEA`.`request` (`id`, `purpose`, `amount`, `phone`, `buyer_name`, `redirect_url`, `send_email`, `webhook`, `send_sms`, `email`, `allow_repeated_payments`) VALUES ('$idh', '$payload0', '$payload1', '$payload2', '$payload3', '$payload4', '$payload5', '$payload6', '$payload7', '$payload8', '$payload9') ";

	if(mysqli_query($connection, $request))
	{  		echo("\n");
		header("Location:$address"); 
	}
	else {
		echo("Hello there, seems to be an issue with the Payment Gateway.please contact 9655804033 to complete your payment and Registration. Inconvenience regretted.");
	}
//echo(
//$dejsonfinal=json_decode($dejson['payment_request'],TRUE);
//echo ( $dejsonfinal['longurl']);



?>
