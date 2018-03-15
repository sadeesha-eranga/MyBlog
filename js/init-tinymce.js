tinyMCE.init({
    selector: "#txtPost",

    theme: "modern",

    height: 600,

    plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak",
        "searchreplace visualblocks visualchars insertdatetime media nonbreaking",
        "table contextmenu directionality emoticons paste textcolor code"
    ],

    toolbar: "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect | responsivefilemanager | link unlink anchor | image media | forecolor backcolor  | preview code ",

    image_advtab: true ,

    images_upload_url: "upload.php",

    images_upload_handler: function (blobInfo, success, failure) {

        var xhr, formData;

        xhr = new XMLHttpRequest();

        xhr.withCredentials = false;

        xhr.open('POST', 'upload.php');

        xhr.onload = function (ev) {
            var json;

            if (xhr.status != 200) {
                failure('HTTP Error: ' +xhr.status);
                return;
            }

            json = JSON.parse(xhr.responseText);

            if (!json || typeof json.location != 'string') {
                failure('Invalid JSON: ' + xhr.responseText);
                return;
            }

            success(json.location);

            formData = new FormData();

            formData.append('file', blobInfo.blob(), blobInfo.filename());

            xhr.send(formData);
        }

    },

    automatic_uploads: true,

    file_picker_types: "image",

    file_picker_callback: function (cb, value, meta) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.onchange = function (ev) {
            var file = this.files[0];

            var reader = new FileReader();

            reader.onload = function () {
                var id = 'blobid' + (new Date()).getTime();
                var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                cb(blobInfo.blobUri(), {title: file.name});

            };
            reader.readAsDataURL(file);
        };

        input.click();

        },

    external_filemanager_path:"filemanager/",

    filemanager_title:"File Manager" ,

    external_plugins: { "filemanager" : "filemanager/plugin.min.js"}
});