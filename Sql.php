<!DOCTYPE html>
<html>
<head><style>
    table, th, td {
        border: 1px solid black;
    }    
</style></head>
<body>
<?php
phpinfo();
$servername = "localhost";
$username = "root";
$password = "NOsql!";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
  die("Connection failed: Return" . mysqli_connect_error());
}
echo "Connected successfully";
?>
</body>
</html>