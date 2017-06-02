<?php

					include('db_connect.php');
											
$id=$_GET['payment_request_id'];
$paymentid=$_GET['payment_id'];
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://www.instamojo.com/api/1.1/payment-requests/'.$id.'/'.$paymentid.'/');

//d66cb29dd059482e8072999f995c4eef/MOJO5a06005J21512197/');
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
curl_setopt($ch, CURLOPT_HTTPHEADER,
            array("X-Api-Key:edb9b35399ff9858a2602861ff14d301",
                  "X-Auth-Token:16ddfecc26956b97490d55117c6dd58e"));

				  $sql_all 	= "SELECT * FROM `CSEA`.`request` WHERE `id` like '$id' ";

								if(mysqli_query($connection, $sql_all)){
								
									
								$all = mysqli_fetch_row($query_all);}
								else {
											echo("Please call 9655804033 to conform the status of your payment. If you receive an SMS acknowledging payment, you have registered successfully");

								}
								
				  
	$payload = Array(
    'purpose' => $all[1],
    'amount' => $all['amount'],
    'phone' => $all['phone'],
    'buyer_name' => $all['buyer_name'],
    'redirect_url' => $all['redirect_url'],
    'send_email' => false,
    'webhook' => $all['webhook'],
    'send_sms' => false,
    'email' => $all['email'],
    'allow_repeated_payments' => false
);

//0000000echo $payload["purpose"];
$response = curl_exec($ch);
curl_close($ch); 

$dejson=json_decode($response,TRUE);
$status=$dejson['payment_request']['payment']['status'];

$stst="PAID";
if($status == "Credit"){ 
	$val1=$dejson['payment_request']['email'];
	$val2=$dejson['payment_request']['purpose'];
	//echo($all['purpose']);
	  $sql_update	= "UPDATE `CSEA`.`workshop_reg` SET `STATUS` = '$stst' WHERE `EMAIL` like '$val1' and `WORKSHOP_NAME` like '$val2' ";
		if(mysqli_query($connection, $sql_update)){
			echo "High-five!!! You've registered successfully. Redirecting you to home page in few seconds :) ";
			header('Refresh: 5;url="http://abacus.org.in"');
		}
	else { 
	echo("Please call 9655804033 to conform the status of your payment. If you receive an SMS acknowledging payment, you have registered successfully");

	 }
}
else 
{	echo("Please call 9655804033 to conform the status of your payment. If you receive an SMS acknowledging payment, you have registered successfully");}

?>
