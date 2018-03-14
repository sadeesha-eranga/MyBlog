<?php
/**
 * Created by IntelliJ IDEA.
 * User: SAdeesha ERanga
 * Date: 2018-03-14
 * Time: 9:10 AM
 */

function getConnection(){

    return mysqli_connect('localhost', 'root', '12345', 'myblog', '3306');

}


