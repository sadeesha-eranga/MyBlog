
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

        $("#title").text(response[1]);
        $("#content").text(response[4]);

        // var html = createHTML({
        //     title: 'example',
        //     script: 'example.js',
        //     scriptAsync: true,
        //     css: 'example.css',
        //     lang: 'en',
        //     dir: 'rtl',
        //     head: '<meta name="description" content="example">',
        //     body: '<p>example</p>',
        //     favicon: 'favicon.png'
        // })

    });

});