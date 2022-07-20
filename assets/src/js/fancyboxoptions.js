// Fancibox

jQuery(document).ready(function($){
  // Fancibox - translate
  $.fancybox.defaults.i18n.ru = {
    CLOSE: "Закрыть",
    NEXT: "Следующий",
    PREV: "Предыдущий",
    ZOOM: "Приблизить"
  };

  $.fancybox.defaults.lang = 'ru';

  // Fancibox - options
  $('[data-fancybox="licenses"]').fancybox({
    buttons: [
      "close"
    ],
  });

  let scenePromo = document.getElementById('promo-img-parallax');
  let parallaxInstancePromo = new Parallax(scenePromo, {
    relativeInput: true,
    limitY: 70
  });
  let sceneNewsTop = document.getElementById('news-shapes-top');
  let parallaxInstanceNewsTop = new Parallax(sceneNewsTop, {
    relativeInput: true,
    limitY: 70
  });
  let sceneNewsBottom = document.getElementById('news-shapes-bottom');
  let parallaxInstanceNewsBottom = new Parallax(sceneNewsBottom, {
    relativeInput: true,
    limitY: 70
  });
});