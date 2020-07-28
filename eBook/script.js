/*анимация для иконки меню*/
$(document).ready(function () {
    "use strict";
    var $menuIcon = $(".menu-icon");

    $menuIcon.click(function () {
        $(this).toggleClass("animate");
    });
});