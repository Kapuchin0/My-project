// $('.flowing-scroll').on('click', function() {
//     var el = $(this);
//     var dest = el.attr('href'); 
//     if (dest !== undefined && dest !== '') { 
//       $('html').animate({scrollTop: $(dest).offset().top }, 1500);
//     }
//     return false;
//   });


 
  $(document).ready(function(){
    $('.flowing-scroll').on("click", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
  
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
  
      //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
      
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500, linear);
    });
  });