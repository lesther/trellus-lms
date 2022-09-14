//Menu Toggle Script
$(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menu-active");
});

$(".side-panel-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("side-panel-active");
});