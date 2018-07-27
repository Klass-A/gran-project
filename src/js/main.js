
$(document).ready(function(){

  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    event.preventDefault();
      var hash = this.hash;


    if ( this.hash == "#menu-section" || this.hash == "#floor-guide" || this.hash == "#news" ) {
      $('html, body').animate({scrollTop: $(hash).offset().top - 215}, 900)
    }
      else if (this.hash == "#contact") {$('html, body').animate({scrollTop: $(hash).offset().top - 350}, 900)}
      else if (this.hash == "#message") {$('html, body').animate({scrollTop: $(hash).offset().top}, 900)}

    console.log(this.hash)

    window.location.hash = hash;
  });
  


  if ( $('.slideanim').length )
  {
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });

    // 2. Instance with object returned:
    // var nice = false;
    // $(function() {  
    //     nice = $(".news-section").niceScroll();
    // });
  }    
})