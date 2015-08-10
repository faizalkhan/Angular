<?php
header ("Content-type: application/json");
//the example of inserting data with variable from HTML form
//input.php
mysql_connect("localhost", "root", "");//database connection
mysql_select_db("employees");


//inserting data order
$order = "SELECT address FROM `data_employees`";
//declare in the order variable
$result = mysql_query($order); //order executes

while ($results[] = mysql_fetch_array($result, MYSQL_ASSOC));


echo json_encode($results);

?>