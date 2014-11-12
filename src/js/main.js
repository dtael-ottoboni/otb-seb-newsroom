var setScreenWitdhClass = function setScreenWitdhClassFunction() {
    var windowwidth = $(window).width();
    $('body').removeClass('xxs xs s m l');
    if (windowwidth > 1025){
        $('body').addClass('l');
    } else if (windowwidth > 640){
        $('body').addClass('m');
    } else if (windowwidth > 480){
        $('body').addClass('s');
    } else if (windowwidth > 320){
        $('body').addClass('xs');
    } else {
        $('body').addClass('xxs');
    }
}; 

var centerContent = function centerContentFunction(val) {
    var wrapper         = $(".wrapper")
    ,   wrapperHeight   = wrapper.height()
    ,   docHeight       = window.innerHeight
    ,   topMargin       = parseInt(((docHeight - wrapperHeight) / 2) -150 );

    if (topMargin < 40){
        topMargin = 40;
        if ($("body").hasClass("xs") || $("body").hasClass("s")) {
            topMargin = 10;
        }
    }

    topMargin += "px";
    //wrapper.css({ 'margin-top': topMargin});

};


$(function() {
    setScreenWitdhClass();
    centerContent();
});

$(window).resize(function() {
    setScreenWitdhClass();
    centerContent();
});
