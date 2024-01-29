<?php
  include("connection.php");
  $email = $password = "";
  $email=$_POST['email'];
  $name=$_POST['name'];
  $password=$_POST['password'];
  $query = mysqli_query($conn,"select * from user where email='$email'");
  $res = mysqli_num_rows($query);
  if($res>0)
  {
    header("Location: register.html?" . $email);
  }
  else
  {
    $query = mysqli_query($conn,"insert into user(email, name, password) values ('$email', '$name', '$password')");
    echo "Welcome $name";
  }
?>