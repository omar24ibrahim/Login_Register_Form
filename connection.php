<?php
$servername = "localhost";
$username = "root";
$pass = "";

// Create connection
$conn = new mysqli($servername, $username, $pass);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
else
{
    mysqli_select_db($conn,"registration");
}
?>