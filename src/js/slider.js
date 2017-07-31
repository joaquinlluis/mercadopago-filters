$(document).ready(function(){
  var step = 0;
  var classes = ["intro", "ui", "ux", "illus", "teach", "front", "music"];

  $('.section-menu li').click(function(){
    step = $('.section-menu li').index(this);
    change(step);
  });
  $('.next').click(function(){
    if(step == classes.length - 1 ) {
      step = 0;
    } else {
      step++;
    }
    change(step);
  });
  $('.prev').click(function(){
    if(step == 0) {
      step = classes.length - 1;
    } else {
      step--;
    }
    change(step);
  });

  function change(step) {
    $('#body , #slider , .section-menu li').removeClass("intro");
    $('#body , #slider , .section-menu li').removeClass("ui");
    $('#body , #slider , .section-menu li').removeClass("ux");
    $('#body , #slider , .section-menu li').removeClass("illus");
    $('#body , #slider , .section-menu li').removeClass("teach");
    $('#body , #slider , .section-menu li').removeClass("front");
    $('#body , #slider , .section-menu li').removeClass("music");
    $('#body , #slider , .section-menu li').removeClass("active");
    $('#body , #slider').addClass( classes[step] );
    $('.section-menu li:eq(' + step + ')').addClass('active');
  }


});
