tinyMCE.init({
    selector: "textarea",

    theme: "modern",

    height: 600,

    plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak",
        "searchreplace visualblocks visualchars insertdatetime media nonbreaking",
        "table contextmenu directionality emoticons paste textcolor code"
    ],

    toolbar: "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect | responsivefilemanager | link unlink anchor | image media | forecolor backcolor  | preview code ",

    image_advtab: true ,

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