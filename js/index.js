$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
$("#menu-toggle-2").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled-2");
  $('#menu ul').hide();
  $("[id^='contentli']").toggleClass("contentli contentli1");
  $("#menu-toggle-2").toggleClass("onoffclick");
  $("#homemenu").toggleClass("homemenuclick");
  $("#headernav").toggleClass("headernavclick");
  $("#notfi").toggleClass("notficlick");
  $("#sideimgsec").toggleClass("sideimgsecclick");
});

function initMenu() {
  $('#menu ul').hide();
  $('#menu ul').children('.current').parent().show();
  //$('#menu ul:first').show();
  $('#menu li a').click(
     function() {
        var checkElement = $(this).next();
        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
           return false;
        }
        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
           $('#menu ul:visible').slideUp('normal');
           checkElement.slideDown('normal');
           return false;
        }
     }
  );
}
$(document).ready(function() {
  initMenu();
});









//=======big progress bar=============//
$(".progress").each(function(){
  
  var $bar = $(this).find(".bar");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 1500,
   
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)",
        opacity:1
      });
      $val.text(p|0);
    }
  });
});




//=======4 card progress bar=============//
$(document).ready(function(){
  $('.progress-title > span').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      },{
          duration: 1000,
          easing: 'swing',
          step: function (now){
              $(this).text(Math.ceil(now));
          }
      });
  });
});