<?php
$con = mysqli_connect("localhost", "healthgo", "mypasswordissafe", "healthgo");
function row_count($result)
{

    global $con;

    return mysqli_num_rows($result);
}

//Wait List
if (isset($_POST['u_name']) && isset($_POST['email'])) {

    $u_name = $_POST['u_name'];
    $email = $_POST['email'];

    $user = $_SESSION['login'];
    $sql = "UPDATE waitlist SET `name` = '$u_name', `email` = '$email'";
    $result = mysqli_query($con, $sql);
    echo 'Thank you for joining our WaitList';
}
