<?php
	include('db_connect.php');
	$entitybody=file_get_contents('php://input');
	$dejson = json_decode($entitybody,TRUE);
	$college = $dejson['user_college'];
	$dept = $dejson['user_dept'];
	$aid = $dejson['aid'];
	$sqlupdate = "UPDATE `personal_details` SET `DEPARTMENT` = '$dept', `COLLEGE` = '$college' WHERE `personal_details`.`A_ID` = '$aid'";
	if(mysqli_query($connection, $sqlupdate))
	{
		echo "SUCCESS";
	}
	else
		echo "ERROR";
?>
