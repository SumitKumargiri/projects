<?php
  $servername = "localhost";
  $username = "root";
  $password = "Sumit@123";
  $dbname = "crudoperation";

  $conn = new mysqli($servername, $username, $password, $dbname);
  if($conn->connect_error){
    die ("Connection failed");
  }

  echo "Connection Successfully";
?>