$(function(){

    $('nav a').click(function(){
        var href = $(this).attr('href'); //pegar o atributo href do link do menu que for clicado
        var offSetTop = $(href).offset().top;


        $('html,body').animate({'scrollTop':offSetTop});

        return false
    })

});