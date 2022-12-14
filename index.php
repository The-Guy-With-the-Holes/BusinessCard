<?php
require __DIR__ . '/../Tasklist/Tasks.php';
    

$external = file_get_contents('index.html');
print $external;

    
?>

<html>
<head>
    <link rel="stylesheet" href="../Tasklist/Tasklist.css" type="text/css">
    
</head>
<body>
<hr id="hr2">
<script src="../Tasklist/Tasklist.js" type="text/javascript"></script>

</body>
</html>

<?php
$call = 'check';
    echo TaskList($call);
?>