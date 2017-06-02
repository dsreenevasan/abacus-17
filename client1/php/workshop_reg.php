<?php
	include('db_connect.php');
	 $workshops=array("workshop","REACT WEB DEVELOPMENT ", "FITNESS TRACKER","ECOMMERCE WEB DEVELOPMENT","AUGMENTED REALITY", "LINUX", "MACHINE LEARNING");
	
	session_start();
	global $WORKSHOP_NAME, $EMAILID, $A_ID, $STATUS, $cost, $workshopcost;
	$WORKSHOP_NAME 		= $_POST['workshop'];
	$EMAILID 		= $_POST['emailId'];
	$A_ID 			= $_POST['a_id'];
	$STATUS			= "NOT PAID";
$cost=array("10","600", "3000", "600", "300","300","600");
	$workshopcost		= $cost[$WORKSHOP_NAME];
function paymentrequest(){
	include('db_connect.php');
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://www.instamojo.com/api/1.1/payment-requests/');
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
curl_setopt($ch, CURLOPT_HTTPHEADER,
            array("X-Api-Key:edb9b35399ff9858a2602861ff14d301",
                  "X-Auth-Token:16ddfecc26956b97490d55117c6dd58e"));
								$sql_all 	= "SELECT * FROM `personal_details` WHERE `A_ID`= '$A_ID' ";
								$query_all	= mysqli_query($connection, $sql_all);
								if(mysqli_num_rows($query_all) == 1){
								
								$all = mysqli_fetch_row($query_all);}
//fill payload after fetching from DB
$EMAILID=$all[0];
$payload = Array(
    'purpose' => $workshops[$WORKSHOP_NAME],
    'amount' => $workshopcost,
    'phone' => $all[3],
    'buyer_name' =>$all[1] ,
    'redirect_url' => 'http://abacus.org.in/php/payment_handler.php',
    'send_email' => false,
    'webhook' => 'http://www.example.com/webhook/',
    'send_sms' => false,
    'email' => $EMAILID,
    'allow_repeated_payments' => false
);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
$response = curl_exec($ch);
curl_close($ch); 
echo $reponse;
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
	
}	
//paymentrequest function ends
//Check for registration
	$sql_check= "select * from `CSEA`.`workshop_reg` where `EMAIL` like '$EMAILID' and `WORKSHOP_NAME` like '$workshops[$WORKSHOP_NAME]' ";
	
	$result 				= mysqli_query($connection, $sql_check);
	$num_of_rows			= mysqli_num_rows($result);
	if($num_of_rows == 0)
		{

			$sql_insert	 	= " INSERT INTO `CSEA`.`workshop_reg` (`EMAIL`,`A_ID`, `WORKSHOP_NAME`, `STATUS`) VALUES ('$EMAILID','$A_ID', '$workshops[$WORKSHOP_NAME]','$STATUS')";

	if(mysqli_query($connection, $sql_insert))
	{  		
		echo("SUCCESSFULLY REGISTERED");
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://www.instamojo.com/api/1.1/payment-requests/');
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
curl_setopt($ch, CURLOPT_HTTPHEADER,
            array("X-Api-Key:edb9b35399ff9858a2602861ff14d301",
                  "X-Auth-Token:16ddfecc26956b97490d55117c6dd58e"));
								$sql_all 	= "SELECT * FROM `personal_details` WHERE `A_ID`= '$A_ID' ";
								$query_all	= mysqli_query($connection, $sql_all);
								if(mysqli_num_rows($query_all) == 1){
								
								$all = mysqli_fetch_row($query_all);}
//fill payload after fetching from DB
$EMAILID=$all[0];
$payload = Array(
    'purpose' => $workshops[$WORKSHOP_NAME],
    'amount' => $workshopcost,
    'phone' => $all[3],
    'buyer_name' =>$all[1] ,
    'redirect_url' => 'http://abacus.org.in/php/payment_handler.php',
    'send_email' => false,
    'webhook' => 'http://www.example.com/webhook/',
    'send_sms' => false,
    'email' => $EMAILID,
    'allow_repeated_payments' => false
);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
$response = curl_exec($ch);
curl_close($ch); 
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
	
	}
	else{
		echo("Please contact 9655804033 for completing your registration");
	}
		}//not registered so far
		else{
			$statuscheck					= mysqli_fetch_row($result);
			if($statuscheck[3]=="NOT PAID"){
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://www.instamojo.com/api/1.1/payment-requests/');
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
curl_setopt($ch, CURLOPT_HTTPHEADER,
            array("X-Api-Key:edb9b35399ff9858a2602861ff14d301",
                  "X-Auth-Token:16ddfecc26956b97490d55117c6dd58e"));
								$sql_all 	= "SELECT * FROM `personal_details` WHERE `A_ID`= '$A_ID' ";
								$query_all	= mysqli_query($connection, $sql_all);
								if(mysqli_num_rows($query_all) == 1){
								
								$all = mysqli_fetch_row($query_all);}
//fill payload after fetching from DB
$EMAILID=$all[0];
$payload = Array(
    'purpose' => $workshops[$WORKSHOP_NAME],
    'amount' => $workshopcost,
    'phone' => $all[3],
    'buyer_name' =>$all[1] ,
    'redirect_url' => 'http://abacus.org.in/php/payment_handler.php',
    'send_email' => false,
    'webhook' => 'http://www.example.com/webhook/',
    'send_sms' => false,
    'email' => $EMAILID,
    'allow_repeated_payments' => false
);
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
	
			} else if($statuscheck[3]=="PAID"){
				echo "ALREADY PAID FOR WORKSHOP";
			}
			else {
		echo("Please contact 9655804033 for completing your registration");
			}
		} 
	mysqli_close($connection);
	
?>
