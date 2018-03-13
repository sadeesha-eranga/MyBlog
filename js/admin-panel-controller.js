
$(document).ajaxStart(function() { Pace.restart(); });

$('#btnSignOut').click(function () {

    swal({
            title: "Are you sure?",
            text: "Do you want to sign out?",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-warning",
            confirmButtonText: "Yes, Go to main site.",
            closeOnConfirm: false
        },
        function () {
            window.location.href = "index.html";
        });

});

$('#btnProfile').click(function () {

    window.location.href = "edit-profile.html";

});