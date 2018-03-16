
$(document).ready(function () {

    var id = localStorage.getItem("postId");

    var ajaxConfig = {
        method: "POST",
        url: "manage-posts.php",
        async: true,
        data: {
            action: "get",
            id: id
        },
        dataType: "json"
    };

    $.ajax(ajaxConfig).done(function (response) {

        $("#title").html(response[1]);
        $("#content").html(response[4]);

    });

});