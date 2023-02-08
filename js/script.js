function onClickMenu(){
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");

  document.getElementById("menu-bg").classList.toggle("change-bg");
  }


  $(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
      

//animate burger icon
$(document).ready(function() {
  $(".burger").on("click",function() {
    $(".burger").toggleClass("active");
    
  });
});

//slide menu list
$(document).ready(function(){
  $(".burger").click(function(){
    $("ul").slideToggle("ul");
    
  });
});

$(document).ready(function(){
  $(".filter-button").click(function(){
  var value = $(this).attr('data-filter');
  if(value == "all")
  {
    $('.filter').show('1000');
  }
  else
  {
    $(".filter").not('.'+value).hide('3000');
    $('.filter').filter('.'+value).show('3000');
  }
  });

  if ($(".filter-button").removeClass("active")) {
  $(this).removeClass("active");
  }
  $(this).addClass("active");
  });

  

  // slider 
  $('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });
  

  // new slide show 



///////menu button///////////////////////


$("#toggle").click(function () {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
  
  

  $('#overlay').on('scroll touchmove mousewheel', function(e){
    e.preventDefault();
    e.stopPropagation();
    return false;
  })
  
});



///////menu button end///////////////////////

///////////////Header animation/////////////

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header').removeClass('nav-up').addClass('nav-down');
          }
      }
      
      lastScrollTop = st;
  }
  var navbar = document.querySelector('header')

  window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 250) {
  navbar.classList.add('scrolled')
  } else {
  navbar.classList.remove('scrolled')
  }
  }
///////////////Header animation end/////////////

/////Javascript reveal animation////////////////
window.addEventListener('scroll' , reveal);
function reveal()
{
  var reveals = document.querySelectorAll('.reveal')
  for(var i = 0; i < reveals.length; i++)
  {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if(revealtop < windowheight - revealpoint)
      {
        reveals[i].classList.add('active');
      }
      
      else
      {
        reveals[i].classList.remove('active');
      }
  }
}
/////Javascript reveal animation end////////////////


//Backtotop button

jQuery("#backtotop").click(function()
{
  jQuery("body,html").animate
  ({scrollTop:0 },600);
});
jQuery(window).scroll(function()
{
  if(jQuery(window).scrollTop()>220)
  {
    jQuery("#backtotop").addClass("visible");
  }
  else
  {
    jQuery("#backtotop").removeClass("visible")
  }
})
//Backtotop button
  
  

