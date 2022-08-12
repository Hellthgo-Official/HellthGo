<?php
$con = mysqli_connect("localhost", "hellthgo_website", "mypasswordis100%safe", "hellthgo_waitlist");
function row_count($result)
{

    global $con;

    return mysqli_num_rows($result);
}

//Wait List
if (isset($_POST['u_name']) && isset($_POST['email'])) {

    $u_name = $_POST['u_name'];
    $email = $_POST['email'];

    $sqlt = "INSERT INTO healthgo_waitlist(`name`, `email`)";
    $sqlt .= " VALUES('$u_name', '$email')";
    $result = mysqli_query($con, $sqlt);
    echo '<p style="text-align:center">Thank you for joining our WaitList</p>';
}
