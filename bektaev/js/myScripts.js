$(document).ready(function(){
  //Main page, correct the height of main central block
  $(function(){
    var rh = $('.main-con').height();
    $('.main-con .wrap .center-con').css({'min-height':rh});
  });

  $(function(){
    $('.right-slider .slider-con').vTicker('init', { 
        animation: 'fade',
        mousePause: true,
        showItems: 2,
         startPaused: true
        });
    });


  $('.slider.container .slider-go-con .slider-wrap').diyslider({width: 790, height: 68, display: 3});

  $('.main.container .wrap .center-con .right-slider .buttons .button.left').click(function(){
  	$('.right-slider .slider-con').vTicker('prev', {animate:true});
  });
  $('.main.container .wrap .center-con .right-slider .buttons .button.right').click(function(){
  	$('.right-slider .slider-con').vTicker('next', {animate:true});
  });


  $(".main.container .wrap .foto-con .foto-wrap").diyslider({width: 1200, height: 190, display: 4});
  $('.main.container .wrap .foto-con .buttons .button.left').click(function(){
  	 $(".main.container .wrap .foto-con .foto-wrap").diyslider("move", "back");
  });
  $('.main.container .wrap .foto-con .buttons .button.right').click(function(){
  	 $(".main.container .wrap .foto-con .foto-wrap").diyslider("move", "forth");
  });

  $(window).load(function(){
  	var pgwSlider = $('.pgwSlider').pgwSlider({intervalDuration: 5000});
      $('.slider.container').click(function(){
        pgwSlider.nextSlide()
    });
  });

});