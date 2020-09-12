$(function () {

    $burgerBtn = $('.burger-btn');
    $navPanel = $('.nav-panel');
    $greatShadow = $('.great-shadow');
    $closeMenuBtn = $('.close-menu-btn');
    $body = $('body');


    function showMenu() {
        $navPanel.addClass('active');
        $greatShadow.fadeIn(200);
        $body.addClass('fixed');
    }

    function hideMenu() {
        $navPanel.removeClass('active');
        $greatShadow.fadeOut(200);
        $body.removeClass('fixed');
    }


    $burgerBtn.bind('click', function(e){
        e.preventDefault();
        showMenu();
    });
    $closeMenuBtn.bind('click', hideMenu);
    $greatShadow.bind('click', hideMenu);

//    add fancybox
    $('.fancybox').fancybox({});

});
