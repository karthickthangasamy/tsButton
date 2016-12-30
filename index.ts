/// <reference path="Typings/jquery.d.ts" />
/// <reference path="Typings/ej.web.all.d.ts" />

module ButtonComponent {
    $(function () {
        var basicButton = new ej.Button($("#btn"), {
            size: "large",
            showRoundedCorner: true,
            contentType: "textandimage",
            prefixIcon: "e-icon e-uiLight e-handup",
            text: "Button"
        });
       
    });
}
    