<?php
  include("connection.php");
  $email=$_POST['email'];
  $password=$_POST['password'];
  $query = mysqli_query($conn,"select * from user where email='$email'");
  $res = mysqli_num_rows($query);
  if($res>0)
  {
    $query1 = mysqli_query($conn,"select * from user where email='$email' and password='$password'");
    $res1 = mysqli_num_rows($query1);
    if($res1>0)
    {
      $data = mysqli_fetch_assoc($query1);
      $text = $data["name"];
      echo "Welcome $text";
    }
    else
    {
      header("Location: login.html?$email?$password");
    }
  }
  else
  {
    header("Location: login.html?$email");
  }
?>