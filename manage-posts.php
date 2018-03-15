<?php
/**
 * Created by IntelliJ IDEA.
 * User: SAdeesha ERanga
 * Date: 2018-03-14
 * Time: 3:50 PM
 */

include "dbconnection.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $action = $_POST["action"];

    switch ($action) {
        case "save" : savePost(); break;
        case "load" : loadPost(); break;
    }

}

function savePost() {

    $title = $_POST["title"];
    $description = $_POST["description"];
    $content = $_POST["content"];
    $date = date('Y-m-d', time());

    $connection = getConnection();

    if ($connection) {

        $result = $connection->query("INSERT INTO post (title, description, `date`, content) VALUES ('$title', '$description', '$date', '$content')");

        if ($result) {

            echo "true";
            die;

        }
    }

    echo "false";

}

function loadPost() {

    $connection = getConnection();

    if ($connection) {

        $resultSet = $connection->query("SELECT * FROM post")->fetch_all();

        echo json_encode($resultSet);

    }

}