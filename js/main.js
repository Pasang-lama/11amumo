$(document).ready(function () {
    $(".banner").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>',
        ],
    });
    $(".categories-slider").owlCarousel({
        items: 7,
        margin: 50,
    });
    $(".top-collection-slider").owlCarousel({
        items: 5,
        margin: 50,
    });
    $(".Best-Sellers-slider").owlCarousel({
        items: 4,
        margin: 50,
    });
    $(".deal-of-slider").owlCarousel({
        items: 4,
        margin: 20,
    });
    $(".blogs-slider").owlCarousel({
        items: 3,
        margin: 20,
    });
});