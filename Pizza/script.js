jQuery(function ($) {
    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $("#recall-me-form"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
    });
});
var button = document.getElementById("recall");
button.addEventListener("click", showForm);

function showForm() {
    var form = document.getElementById("recall-me-form");
    form.style.display = "block";
    var closeButton = document.getElementById("close").addEventListener("click", function () {
        form.style.display = "none";
    });
}
var summerslides = document.querySelectorAll('#summerslides .summerslide');
var currentSummerSlide = 0;
var summerslideInterval = setInterval(nextSummerSlide, 3000);

function nextSummerSlide() {
    summerslides[currentSummerSlide].className = 'summerslide';
    currentSummerSlide = (currentSummerSlide + 1) % summerslides.length;
    summerslides[currentSummerSlide].className = 'summerslide summershowing';
}
var sslides = document.querySelectorAll('#sslides .sslide');
var currentSSlide = 0;
var sslideInterval = setInterval(nextSSlide, 3000);

function nextSSlide() {
    sslides[currentSSlide].className = 'sslide';
    currentSSlide = (currentSSlide + 1) % sslides.length;
    sslides[currentSSlide].className = 'sslide sshowing';
}
var slides = document.querySelectorAll('#slides .slide');
        var currentSlide = 0;
        var slideInterval = setInterval(nextSlide, 5000);

        function nextSlide() {
            slides[currentSlide].className = 'slide';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].className = 'slide showing';
        }
        $(document).ready(function () {
            "use strict";
            var $menuIcon = $(".menu-icon");

            $menuIcon.click(function () {
                $(this).toggleClass("animate");
            });
        });
        