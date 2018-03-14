$(document).ready(function () {

    var ajaxConfig = {
        method: "POST",
        url: "manage-user.php",
        async: true,
        data: $('#frmAdminDetails').serialize(),
        dataType: "json"
    };

    $.ajax(ajaxConfig).done(function (response) {

        $("#txtName").val(response[1]);
        $("#txtEmail").val(response[2]);
        $("#txtUsername").val(response[3]);
        $("#txtPassword").val(response[4]);

    });

});


$("#btnUpdate").click(function (event) {

    $("#action").val("save");

    var name = $('#txtName').val();
    var email = $('#txtEmail').val();
    var username = $('#txtUsername').val();
    var password = $('#txtPassword').val();
    var confirmPassword = $('#txtConfirmPassword').val();

    if (password == confirmPassword) {
        var ajaxConfig = {
            method: "POST",
            url: "manage-user.php",
            async: true,
            data: $('#frmAdminDetails').serialize(),
            dataType: "json"
        };

        $.ajax(ajaxConfig).done(function (response) {
            if (response == true) {
                swal("Successful!", "Details has been updated successfully!", "success");
            } else {
                swal("Failed!", "Failed to update the details!", "error");
            }
        });
    }

});

$("#changeProfilePic").click(function () {

    $("#fileSelector").click();

});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profilePicture').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#fileSelector").change(function () {
    readURL(this);
});
