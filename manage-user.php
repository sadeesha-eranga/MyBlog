<?php
/**
 * Created by IntelliJ IDEA.
 * User: SAdeesha ERanga
 * Date: 2018-03-14
 * Time: 9:38 AM
 */

include "dbconnection.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $action = $_POST["action"];

    switch ($action) {
        case "load" : getAllUserDetails(); break;
        case "save" : updateUserDetails(); break;
        case "imagePath" : getImagePath(); break;
    }
}

function getImagePath() {

    $connection = getConnection();

    if ($connection) {

        $imagePath = $connection->query("SELECT imagePath FROM `user` WHERE id=1")->fetch_row();

        echo json_encode($imagePath);

    }

    mysqli_close($connection);

}

function getAllUserDetails() {

    $connection = getConnection();

    if ($connection) {

        $user = $connection->query("SELECT * FROM `user` WHERE id=1")->fetch_row();

        echo json_encode($user);

    }

    mysqli_close($connection);

}

function updateUserDetails(){

    $connection = getConnection();

    if ($connection) {

        $fileName = $_FILES['file']['name'];

        $fileTmpName = $_FILES['file']['tmp_name'];
        $fileError = $_FILES['file']['error'];

        $fileExt = explode('.', $fileName);
        $fileActualExt = strtolower(end($fileExt));

        $allowed = array('jpg', 'jpeg', 'png', 'pdf', 'gif');

        $fileNameNew = "";

        if (in_array($fileActualExt, $allowed)) {

            if ($fileError === 0) {

                $fileNameNew = uniqid('', true).".".$fileActualExt;

                $fileDestination = 'images/uploads/'.$fileNameNew;

                move_uploaded_file($fileTmpName, $fileDestination);

            }

        }

        $name = $_POST["name"];
        $email = $_POST["email"];
        $username = $_POST["username"];
        $password = $_POST["password"];


        $result = $connection->query("UPDATE `user` SET name='$name', email='$email', username='$username', password='$password', imagePath='$fileNameNew' WHERE id=1");

        if ($result) {
            echo "true";
            die;
        }
    }

//    echo "false";

}


function uploadFile(){
    $file = $_FILES['file'];

    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tnp_name'];
    $fileSize = $_FILES['file']['size'];
    $fileError = $_FILES['file']['error'];

    $fileExt = explode('.', $fileName);
    $fileActualExt = strtolower(end($fileExt));

    $allowed = array('jpg', 'jpeg', 'png', 'pdf', 'gif');

    if (in_array($fileActualExt, $allowed)) {

        if ($fileError === 0) {

            $fileNameNew = uniqid('', true).".".$fileActualExt;

            $fileDestination = 'images/uploads/'.$fileNameNew;

            move_uploaded_file($fileTmpName, $fileDestination);

            echo "true";
            die;

        }

    }

    echo "false";

}
