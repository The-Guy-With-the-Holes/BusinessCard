
<?php
require __DIR__ . '/../Tasklist/Tasks.php';

$external = file_get_contents('index.html');
print $external;
echo Tasklist($tasklist='tasklist',$call='check');

?>

<html>
<head>
    <link rel="stylesheet" href="../../Tasklist/Tasklist.css" type="text/css">
    
</head>
<body>
<hr id="hr2">

</body>
</html>
