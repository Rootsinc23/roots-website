<?php 

 $servername = "localhost";
 $username = "root";
 $password = "password";
 $dbname = "roots_newsletter";
 
 $conn = mysqli_connect($servername, $root, $password, $dbname);
 if(!$conn){
    die("Error connecting to database" . mysqli_connect_error());
 }

 if($_SERVER["REQUEST_METHOD"]== "POST"){
    $u_name = mysqli_real_escape_string($conn, $_POST['name']);
    $u_email = mysqli_real_escape_string($conn, $_POST['email']);
    $u_message = mysqli_real_escape_string($conn, $_POST['message']);

    $sql = "INSERT INTO roots_newsletter(u_name, email, u_message ) VALUES (?,?,?)";
 }
 
?>