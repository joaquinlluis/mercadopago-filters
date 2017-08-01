$(document).ready(function(){

  $('.dd-button').click(function( event){
    event.stopPropagation();
    $('.ui-dropdown__content').fadeIn('300ms', 'swing');
  });

  $('body').click(function( event){
    event.stopPropagation();
    $('.ui-dropdown__content').fadeOut('300ms', 'swing');
  });
});
