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
        case "load" : getUserDetails(); break;
        case "save" : updateUserDetails();
    }
}

function getUserDetails() {

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

//        $image = addslashes(file_get_contents($_FILES['image']['tmp_name']));

        $name = $_POST["name"];
        $email = $_POST["email"];
        $username = $_POST["username"];
        $password = $_POST["password"];
//        $profilePicture = $_POST["profilePicture"];


        //File upload code starts from here

        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
        // Check if image file is a actual image or fake image
        if(isset($_POST["submit"])) {
            $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
            if($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }
        }




        $result = $connection->query("UPDATE `user` SET name='$name', email='$email', username='$username', password='$password', profilePicture='$image' WHERE id=1");

        if ($result) {
            echo "true";
            die;
        }
    }

    echo "false";

}


//$target_dir = "images/uploads/";
//$target_file = $target_dir . basename($_FILES["imageUpload"]["name"]);
//$uploadOk = 1;
//$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
//
//if (move_uploaded_file($_FILES["imageUpload"]["tmp_name"], $target_file)) {
//    echo "The file ". basename( $_FILES["imageUpload"]["name"]). " has been uploaded.";
//} else {
//    echo "Sorry, there was an error uploading your file.";
//}
//
//$image=basename( $_FILES["imageUpload"]["name"],".jpg"); // used to store the filename in a variable
//
////storind the data in your database
//$query= "INSERT INTO items VALUES ('$id','$title','$description','$price','$value','$contact','$image')";
//mysql_query($query);
