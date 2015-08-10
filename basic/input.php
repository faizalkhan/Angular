<?php
//the example of inserting data with variable from HTML form
//input.php
mysql_connect("localhost", "root", "");//database connection
mysql_select_db("employees");

$name = $_POST['name'];
$address = $_POST['address'];
//inserting data order
$order = "INSERT INTO data_employees (name, address) VALUES ('$name', '$address')";
//declare in the order variable
$result = mysql_query($order); //order executes
if($result){
 echo "Input data is succeed";
} else{
 echo "Input data is fail";
}


?>