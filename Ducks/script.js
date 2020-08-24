
$(document).ready(function () {
    "use strict";
    var $menuIcon = $(".menu-icon");

    $menuIcon.click(function () {
        $(this).toggleClass("animate");
    });
});
function openbox(mobilemenu) {
    display = document.getElementById('mobilemenu').style.display;
    if (display == 'none') {
        document.getElementById('mobilemenu').style.display = 'block';
    } else {
        document.getElementById('mobilemenu').style.display = 'none';
    }
}