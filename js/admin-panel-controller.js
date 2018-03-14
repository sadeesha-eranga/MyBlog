
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

$('#btnPublish').click(function (e) {

    if ($('#txtTitle').val() == "") {
        e.preventDefault();
        alert("Please give a title to your post");
        $('#txtTitle').focus();
    } else if($('#txtDescription').val() == ""){
        e.preventDefault();
        alert("Please give a little description about your post");
        $('#txtDescription').focus();
    } else if( tinyMCE.get('txtPost').getContent() == ""){
        e.preventDefault();
        alert("Please make a awesome post before publish");
        $('#txtPost').focus();
    }

    var content = tinyMCE.get('txtPost').getContent();
    console.log(content);

    var ajaxConfig = {
        method: "POST",
        url: "manage-posts.php",
        async: true,
        data : {
            content: content
        },
        dataType: "json"
    };

    $.ajax(ajaxConfig).done(function (response) {

        alert(response);

    });


});