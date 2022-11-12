

$(function(){

    var delay = 10000
    var curIndex = 0
    var amt

    initSlider();
    autoPlay();

    function initSlider(){
         amt = $('.sobre-autor').length;
        var sizeContainer = 100 * amt;
        var sizeBox = 100 / amt;
        $('.sobre-autor').css('width',sizeBox+'%')
        $('.scrollWraper').css('width',sizeContainer+'%')

        for(var i = 0; i < amt; i++){
            if(i == 0){
                $('.slider-bullets').append('<span  style="background-color: black;" ></span>')
            } else{
                $('.slider-bullets').append('<span></span>')
            }

            
        }

    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt)
                curIndex = 0
           goToSlider(curIndex)
            
        },delay);
    }

    function goToSlider(curIndex){
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scrollWraper').offset().left;
        $('.slider-bullets span').css('background-color','gray');
        $('.slider-bullets span').eq(curIndex).css('background-color','black');
        $('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});
    }



    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft':0})
    });

});