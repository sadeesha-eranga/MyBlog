/* Simple VanillaJS to toggle class */

window.onload = function () {

    var imagePath = "";

    var ajaxConfig = {
        method: "POST",
        url: "manage-user.php",
        async: true,
        data: {
            action: "imagePath"
        },
        dataType: "json"
    };

    $.ajax(ajaxConfig).done(function (response) {

        console.log(response[0]);
        imagePath = response[0];

    });

    $("#imgProfile").attr("src", "images/uploads/"+imagePath);

});

$("#btnlogin").click(function () {

    var uname = $("#fieldUser").val();
    var pword = $("#fieldPassword").val();
    var username = "";
    var password = "";

    var ajaxConfig = {
        method: "POST",
        url: "manage-user.php",
        async: true,
        data: {
             action: "load"
        },
        dataType: "json"
    };

    $.ajax(ajaxConfig).done(function (response) {

        if (response) {

            username = response[3];
            password = response[4];

            // console.log(response[3]);
            // console.log(response[4]);

            $("#txtName").val(response[1]);
            $("#txtEmail").val(response[2]);
            $("#txtUsername").val(response[3]);
        }

    });


    if (uname === username & pword === password) {
        window.location.href = "admin-panel.html";
    }else{
        swal("Failed!", "Invalid username or password", "error")
    }

});