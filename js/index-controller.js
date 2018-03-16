
$(document).ready(function () {

    var ajaxConfig = {
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
            $("#post1").attr('postId', response[0][0]);
            $("#title1").text(response[0][1]);
            $("#desc1").text(response[0][2]);
            $("#info1").text(response[0][3] + " by Admin");
            $("#post2").attr('postId', response[1][0]);
            $("#title2").text(response[1][1]);
            $("#desc2").text(response[1][2]);
            $("#info2").text(response[1][3] + " by Admin");
            $("#post3").attr('postId', response[2][0]);
            $("#title3").text(response[2][1]);
            $("#desc3").text(response[2][2]);
            $("#info3").text(response[2][3] + " by Admin");
            $("#post4").attr('postId', response[3][0]);
            $("#title4").text(response[3][1]);
            $("#desc4").text(response[3][2]);
            $("#info4").text(response[3][3] + " by Admin");
            $("#post5").attr('postId', response[4][0]);
            $("#title5").text(response[4][1]);
            $("#desc5").text(response[4][2]);
            $("#info5").text(response[4][3] + " by Admin");
            $("#post6").attr('postId', response[5][0]);
            $("#title6").text(response[5][1]);
            $("#desc6").text(response[5][2]);
            $("#info6").text(response[5][3] + " by Admin");

        }

    });

});

$(".fh5co-project-item").click(function () {

    var id = $(this).attr("postId");

    localStorage.setItem("postId",id);

    window.location.href = "post.html";

});
