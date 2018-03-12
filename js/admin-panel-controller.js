$('#btnSignOut').click(function () {

    swal({
            title: "Are you sure?",
            text: "Do you want to sign out?",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-warning",
            confirmButtonText: "Yes!",
            closeOnConfirm: false
        },
        function () {
            window.location.href = "index.html";
        });

});