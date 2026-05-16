$(function(){
     $(".navbar-toggler").blur(function(event){
        var screenWidth = Window.innerWidth;
        if(screenWidth < 768){
            $("#navbarSupportedContent").collapse('hide');
        }
     });
});