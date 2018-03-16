
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
            $("#title1").text(response[0][1]);
            $("#desc1").text(response[0][2]);
            $("#info1").text(response[0][3] + " by Admin");
            $("#title2").text(response[1][1]);
            $("#desc2").text(response[1][2]);
            $("#info2").text(response[1][3] + " by Admin");
            $("#title3").text(response[2][1]);
            $("#desc3").text(response[2][2]);
            $("#info3").text(response[2][3] + " by Admin");
            $("#title4").text(response[3][1]);
            $("#desc4").text(response[3][2]);
            $("#info4").text(response[3][3] + " by Admin");
            $("#title5").text(response[4][1]);
            $("#desc5").text(response[4][2]);
            $("#info5").text(response[4][3] + " by Admin");
            $("#title6").text(response[5][1]);
            $("#desc6").text(response[5][2]);
            $("#info6").text(response[5][3] + " by Admin");

        }

    });

});

$("#post1").click(function () {

    alert("clicked");

});