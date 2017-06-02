<?php 
	include('db_connect.php'); 			
		$entitybody=file_get_contents('php://input');
		$dejson=json_decode($entitybody,TRUE);

						$abacusid 				= $dejson['a_id'];
					$sql_insert = "INSERT INTO `sa` (`aid`) VALUES (\"$abacusid\");";
						if(mysqli_query($connection, $sql_insert))
						{
							echo "done";
						}
						else
						echo ("error".mysqli_error($connection));
		mysqli_close($connection);
									
?>
							
