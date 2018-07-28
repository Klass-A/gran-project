
$(document).ready(function(){

  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;


    if ( this.hash !== "" ) {
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        window.location.hash = hash;
      });
    }
  });
  
  if ( $('.slideanim').length ) {
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  }    
})

// Iframe CSS
$(document).ready(function() {
    $('iframe').contents().find('.navbar').css('display','none');
});