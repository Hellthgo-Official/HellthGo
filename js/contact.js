$(document).ready(function () {
  //Long description
  $("#wait").click(function () {
    var u_name = $("#u_name").val();
    var email = $("#email").val();

    if (u_name == null || u_name == "") {
      $("#msg").html("Kindly input your name");
    } else {
      if (email == null || email == "") {
        $("#msg").html("Kindly input your email");
      } else {
        $.ajax({
          type: "post",
          url: "../wait.php",
          data: { u_name: u_name, email: email },
          success: function (data) {
            $("#msg").html(data);
          },
        });
      }
    }
  });
});
