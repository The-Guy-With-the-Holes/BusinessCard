<?php

setcookie("name","defaultName", time() + 365 * 24 * 60 * 60); 
echo phpinfo();
?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP Test</title>
    </head>
    <body>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>



<?php
$mysqli = mysqli_connect("127.0.0.1", "webmaster", "NOsql!", "business");

$result = mysqli_query($mysqli, "SELECT * AS _msg FROM users");
$row = mysqli_fetch_assoc($result);
echo $row['_msg'];

$mysqli = new mysqli("example.com", "user", "password", "database");

$result = $mysqli->query("SELECT 'choices to please everybody.' AS _msg FROM DUAL");
$row = $result->fetch_assoc();
echo $row['_msg'];


if(isset($_COOKIE["name"]))
    {echo "Username is: ".$_COOKIE["name"];}
$servername = "127.0.0.1";
$username = "webmaster";
$password = "NOsql!";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

// $_COOKIE = "John";
    echo '<h1>My first PHP</h1><hr>'; 
    echo '<p> Hello World </p>';
    echo "COOKIE IS $_COOKIE ";
        
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $name = $_REQUEST['fname'];
  if (empty($name)) {
    echo( "<p>Name is empty</p>");
  } else {
    echo $name;
  }
}

       ?>
    </body>
</html>