
window.onload = function () {

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

        var name = response[1];
        var email = response[2];
        var imagePath = response[5];

        $("#name").text(name);
        $("#email").text(email);
        $(".profileImage").attr("src", "images/uploads/"+imagePath);

    });

    ajaxConfig = {
        method: "POST",
        url: "manage-posts.php",
        async: true,
        data: {
            action: "load"
        },
        dataType: "json"
    };

    $.ajax(ajaxConfig).done(function (response) {

        if (response) {

            console.log(response);

            for (i = 0; i<response.length; i++){

                $("#sidebar").append("<li><a id=\"getAllPosts\" href=\"javascript://\"><i class=\"fa fa-th-list\"></i> <span>"+ response[i][1] +"</span></a></li>");

            }

            // tinyMCE.get('txtPost').setContent(response[6][4]);

        }

    });

};

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

    if ($('#txtTitle').val() === "") {
        e.preventDefault();
        alert("Please give a title to your post");
        $('#txtTitle').focus();
    } else if($('#txtDescription').val() === ""){
        e.preventDefault();
        alert("Please give a little description about your post");
        $('#txtDescription').focus();
    } else if( tinyMCE.get('txtPost').getContent() === ""){
        e.preventDefault();
        alert("Please make a awesome post before publish");
        $('#txtPost').focus();
    }

    var content = tinyMCE.get('txtPost').getContent();
    // alert(content);

    var ajaxConfig = {
        method: "POST",
        url: "manage-posts.php",
        async: true,
        data: {
            action: "save",
            title: $("#txtTitle").val(),
            description: $("#txtDescription").val(),
            content: content
        },
        dataType: "json"
    };

    $.ajax(ajaxConfig).done(function (response) {

        if (response) {
            swal("Successful!", "Your post has been published!", "success");
            clearFields();
        } else {
            swal("Failed!", "Failed to publish your post!", "error");
        }

    });

});

function clearFields() {

    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#txtContent").val("");
    tinyMCE.get('txtPost').setContent("");

}

// $("#getAllPosts").click(function () {
//
//     var ajaxConfig = {
//         method: "POST",
//         url: "manage-posts.php",
//         async: true,
//         data: {
//             action: "load"
//         },
//         dataType: "json"
//     };
//
//     $.ajax(ajaxConfig).done(function (response) {
//
//         if (response) {
//
//             console.log(response);
//
//             for (i = 0; i<response.length; i++){
//
//                 $("#sidebar").append("<li><a id=\"getAllPosts\" href=\"javascript://\"><i class=\"fa fa-th-list\"></i> <span>"+ response[i][1] +"</span></a></li>");
//
//             }
//         }
//
//     });
//
// });

