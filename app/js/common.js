
$(".best-feature").waypoint(function(){
    $({blurRadius: 5}).animate({blurRadius: 0}, {
        duration: 1300,
        easing: 'swing',
        step: function() {
            $(".best-feature .feature span").css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
            });
        }
    });
    
    $(".best-feature .feature span").each(function() {
        var tcount = $(this).data("count");
        $(this).animateNumber({ number: tcount,
            easing: 'easeInQuad',
            "font-size": "60px",            
        },
            1300);
    });
}, {
    offset: '60%'
})


$(document).ready(function() {   
    $(".accordion_head").click(function() {
      $(this).removeClass('coll-back');
      if ($('.accordion_body').is(':visible')) {
        $(".accordion_body").slideUp(300);
        $(".plusminus").text('+');
        $(this).removeClass('coll-back');
        $('.rmv-cls').removeClass('coll-back');
      }

      if($(this).next(".accordion_body").is(':visible')) {
        $(this).next(".accordion_body").slideUp(300);
        $(this).children(".plusminus").text('+');
        $(this).removeClass('coll-back');
      }else {
        $(this).next(".accordion_body").slideDown(300);
        $(this).children(".plusminus").text('');
        $(this).children(".plusminus").append('<hr class="hr-clc">');
        $(this).toggleClass('coll-back');
        $(this).addClass('rmv-cls');
      }
    })
  });