<?php
//file required for the connection to database class
include "connect/connect.php";

$db = new DatabaseConnect("localhost","root","");
$conn = $db->connect();

$db->createDatabase($conn, "myworld2");

// ERROR HANDLING IN PHP
function customError($no, $erstr) {
    echo "<br/>Error : ".$no ."  ".$erstr;
    die();
}
set_error_handler("customError");
echo $helloworld;