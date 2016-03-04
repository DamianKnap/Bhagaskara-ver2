$(document).ready(function() {


///////////////////////////////////STICKY MENU////////////////////////////////////////////////////////////////////////////
$(function () {
    var menu = $(".MainMenusticky");
    var lastPositionTop = 0;

    $(window).scroll(function () {

        if (menu.hasClass("sticky") == false &&
            $(this).scrollTop() > menu.offset().top) {

            lastPositionTop = menu.offset().top;
            menu.addClass("sticky");
        }
        if (menu.hasClass("sticky") &&
            $(this).scrollTop() < lastPositionTop) {

            menu.removeClass("sticky");
        }
    });
////////////////////////////////////////////////////OUR TEAM GALLERY/////////////////////////////////////////////////////////
    var leftArrow = $(".leftArrow");
    var rightArrow = $(".rightArrow");
    var gallery =  $(".trippleGalery");

    rightArrow.on('click', function () {

            gallery.append($(".galeryBox:first").clone());
            $(".galeryBox:first").remove();

            var personActive = gallery.find('.active');
            $(personActive[0]).removeClass('active');
            var middlePerson = gallery.children().eq(1);
            middlePerson.addClass('active');
            skiller();
        }
    );
    leftArrow.on('click', function () {

            gallery.prepend($(".galeryBox:last").clone());
            $(".galeryBox:last").remove();

            var personActive = gallery.find('.active');
            $(personActive[0]).removeClass('active');
            var middlePerson = gallery.children().eq(1);
            middlePerson.addClass('active');
            skiller();
        }
    );


    function skiller() {//funkcja kt�ra ustawia fioletowe paski na szerokosc pobran� z atrybut�w data dla osoby w srodku
        var activePerson = $('.active');

        var skillweb = $(activePerson[0]).data('web');
        var skillui = $(activePerson[0]).data('ui');
        var skillgraphic = $(activePerson[0]).data('graphic');
        var skillhtml = $(activePerson[0]).data('html');

        var percentlineweb = $('.web').find('.percent');
        var percentlineui = $('.ui').find('.percent');
        var percentlinegraphic = $('.graphic').find('.percent');
        var percentlinehtml = $('.html').find('.percent');

        var valueskillweb = $('.web').find('.valueskill');

        valueskillweb.val(skillweb);
        percentlineweb.css('width', skillweb + '%');
        percentlineui.css('width', skillui + '%');
        percentlinegraphic.css('width', skillgraphic + '%');
        percentlinehtml.css('width', skillhtml + '%');

        var skillwebtext  = $(".webPercent");
        var skilluitex = $(".uiPercent");
        var skillgraphictext = $(".graphicPercent");
        var skillhtmltext = $(".htmlPercent");

        skillwebtext.text(skillweb + '%');
        skilluitex.text(skillui + '%');
        skillgraphictext.text(skillgraphic + '%');
        skillhtmltext.text(skillhtml + '%');

    }

    skiller();//wywo�anie funkcji aby procenty na paskach wskazywa�y srodkowa osobe


    var current = 0,
        imgs = $('.sliderauto .pixellorem');
    imgAmount = imgs.length;

    imgs.addClass('place-icon').hide().eq(0).show();


    window.setInterval(swapImages, 1500);


    function swapImages() {
        var currentImg = $(imgs[current]);
        if (current == imgAmount - 1) current = -1;
        var nextImg = $(imgs[++current]),
            speed = 0;
        currentImg.fadeOut(speed);
        nextImg.fadeIn(speed);
    }

});

});
