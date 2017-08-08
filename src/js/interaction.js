$(document).ready(function(){

  // $('.dd-button').click(function( event){
  //   sectionId = $(this).data('trigger');
  //   $('.ui-dropdown__content').removeClass('active');
  //   $(sectionId).toggleClass('active');
  // });

  
  $('.ui-dropdown').click(function(){
    $('.ui-dropdown__content').removeClass('active');
    $('.ui-dropdown__content', this).addClass('active');
  });

  $('.filters-toggle').click(function(){
    $('.filters-toggle').toggleClass('is-open');
    $('.filters-bar').fadeToggle();
    $('.filters-toggle__text').toggle();
  });

  $('.activity-row-toggle__button').click(function(){
    $('.activity-row-toggle__icon').toggleClass('active');
  });

  $('.ui-list__item').click(function( event){

    event.stopPropagation();
    var item_text = $(".ui-list__item-text", this).html();
    // console.log(item_text);

    buttonId = $(this).data('trigger');
    // console.log(buttonId);
    $(buttonId).html(item_text);
    $(buttonId).parent('.dd-button').addClass('selected');
    $('.ui-dropdown__content').removeClass('active');

    // $('this').text(function(){
    //   console.log( "You clicked a list item!" );
    // });
  });

  $('.ui-list__item').click(function( event){

    event.stopPropagation();
    $('.ui-list__item').removeClass('selected');
    $(this).addClass('selected');

  });

  // $('body').click(function( event){
  //   event.stopPropagation();
  //   $('.ui-dropdown__content').fadeOut('300ms', 'swing');
  // });

});
