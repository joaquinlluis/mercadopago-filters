$(document).ready(function(){
  $('.close-button').click(function(event){
    event.stopPropagation()
    CloseId = $(this).data('trigger');
    $(CloseId).removeClass('active');
    $('.background-fixer').removeClass('modal-active');
    $('.swap-paper').removeClass('disappear');
  });

  $('.modal-trigger').click(function(){
    sectionId = $(this).data('trigger');
    $('.modal').removeClass('active');
    $(sectionId).toggleClass('active');
    $('.background-fixer').addClass('modal-active');
  });

  $('.menu-trigger').click(function(){
    $('.navigation-content').toggleClass('active');
    $('.menu-trigger').toggleClass('active');
    $('.menu-background').fadeToggle('3000');
  });

  $('.menu-background').click(function(){
    $('.navigation-content').toggleClass('active');
    $('.menu-trigger').toggleClass('active');
    $('.menu-background').fadeToggle('3000');
  });

  $('.swap-paper').click(function(){
    swapactive = $('.swap-paper').hasClass('active');
    $('.swap-paper').addClass('disappear');
    if(swapactive) {
      console.log('algo');
    } else {
      $(this).addClass('active');
    }
  });

});
