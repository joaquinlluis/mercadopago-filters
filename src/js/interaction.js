$(document).ready(function(){

  $('.dd-button').click(function( event){
    sectionId = $(this).data('trigger');
    $('.ui-dropdown__content').removeClass('active');
    $(sectionId).toggleClass('active');
  });

  // $('body').click(function( event){
  //   event.stopPropagation();
  //   $('.ui-dropdown__content').fadeOut('300ms', 'swing');
  // });

});
