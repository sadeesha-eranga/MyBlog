<?php

include "dbconnection.php";

$connection = getConnection();

if ($connection) {

	$post = $connection->query("SELECT * FROM post WHERE id=1")->fetch_row();

}

?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title></title>
</head>
<body>

<div id="contentDiv">



</div>


<script src="js/jquery.min.js"></script>
</body>
</html>