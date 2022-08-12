<?php
$con = mysqli_connect("localhost", "healthgo_website", "mypasswordis100%safe", "healthgo_waitlist");
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
    echo '<p style="text-align:center">Thank you for joining our WaitList</p>';
}
