<?php
/**
 * Created by IntelliJ IDEA.
 * User: SAdeesha ERanga
 * Date: 2018-03-14
 * Time: 3:50 PM
 */

if ( isset($_POST['content']) ){

    //This is what you want - HTML content from tinyMCE
    //just treat this a string

    if ( save_html_to_file($_POST['content'], '/some_file.html') ){
        //Print 1 and exit script
        die(1);
    } else {
        die("Couldn't write to stream");
    }
}

function save_html_to_file($content, $path){
    return (bool) file_put_contents($path, $content);
}