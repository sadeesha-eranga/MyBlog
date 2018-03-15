var username = "";
var password = "";

window.onload = function () {

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

        var imagePath = response[0];

        $("#profilePicture").attr("src", "images/uploads/"+imagePath);

    });

};

$(document).ready(function () {

    var ajaxConfig = {
        method: "POST",
        url: "manage-user.php",
        async: true,
        data: $('#frmAdminDetails').serialize(),
        dataType: "json"
    };

    $.ajax(ajaxConfig).done(function (response) {

        if (response) {

            username = response[3];
            password = response[4];

            $("#txtName").val(response[1]);
            $("#txtEmail").val(response[2]);
            $("#txtUsername").val(response[3]);
        };

    });

});


$("#btnUpdate").click(function (event) {

    $("#action").val("save");

    var pass = $('#txtPassword').val();
    var confirmPass = $('#txtConfirmPassword').val();

    if (pass !== "" && pass === confirmPass) {

        var ajaxConfig = {
            method: "POST",
            url: "manage-user.php",
            async: true,
            data: new FormData($('#frmAdminDetails')[0]),
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false
        };

        $.ajax(ajaxConfig).done(function (response) {

            if (response) {
                swal({
                        title: "Successful!",
                        text: "Profile details has been updated successfully!",
                        type: "success",
                    },
                    function(){
                        window.location.href = "admin-panel.html";
                    });
            }

        });

    }

    swal("Failed!", "Please enter valid inputs!", "error");

});

$("#changeProfilePic").click(function () {

    $("#file").click();

});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profilePicture').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#file").change(function () {
    readURL(this);
});
