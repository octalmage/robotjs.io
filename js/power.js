/*====================================
=            DOM IS READY            =
====================================*/
$(function() {
    $('.pagination .active a').click(function() {
        return false;
    });

    anchors.options = {
        placement: 'left',
        icon: '#'
    };

    anchors.add('.category-docs .container h1, .category-docs .container h2, .category-docs .container h3, .category-docs .container h4, .category-docs .container h5');
});


/*========================================
=            WINDOW IS LOADED            =
========================================*/
$(window).load(function() {

});


/*=========================================
=            WINDOW IS RESIZED            =
=========================================*/
$(window).resize(function() {

});


/*==========================================
=            WINDOW IS SCROLLED            =
==========================================*/
$(window).scroll(function() {

});
