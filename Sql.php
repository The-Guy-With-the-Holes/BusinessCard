<!DOCTYPE html>
<html>
<head><style>
    table, th, td {
        border: 1px solid black;
    }    
</style></head>
<body>
    <?php
$host="127.0.0.1";
$port="3306";
$socket="MySQL";
$user="webmaster";
$password="NOsql!";
$dbname="business";

$conn =   mysqli_connect($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id,name,email,password FROM users;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  echo "<table><tr><th>ID</th><th>Name</th><th>Email</th><th>password</th></tr>";
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<tr><td>".$row["id"]."</td><td>".$row["name"]."</td><td>".$row["email"]."</td><td>".$row['password']."</td></tr>";
  }
  echo "</table>";
} else {
  echo "0 results";
}
$conn->close();
?>
</body>
</html>