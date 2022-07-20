// Yandex Map

let YaMapsShown = false;

// Resize map
let widthResizeMap = 950;
let waitForFinalEvent = (function () {
  let timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

jQuery(document).ready(function($) {
  $(window).scroll(function() {
    if (!YaMapsShown){
      if ($(window).height() + $(window).scrollTop() > $("#api-yandex-map").offset().top - 1100) {  
        ymaps.ready(init);
        YaMapsShown = true;
      }
    }
  });
});

function init() {
  // Defining screen width
  let widthWindow = screen.width;
  let myMapY = '';
  if (widthWindow >= 850) {
    myMapY = '55.64668617699836';
  } else {
    myMapY = '55.64668617699836';
  }

  // Create map
  let myMap = new ymaps.Map("api-yandex-map", {
    // Map center coordinates.
      // Default order: "latitude, longitude".
      // In order not to determine the coordinates of the map center manually, 
      // use the Find Coordinates tool.
    center: [myMapY,37.74602564418023],
    // Zoom level. Valid values are 0 (worldwide) to 19.
    zoom: 14,
    controls: ['zoomControl'],
    behaviors: ['drag'],
  });

  let placemark = new ymaps.Placemark([55.64458617699836,37.74802564418023], {
    balloonContent: "<b>Лига Автошкол</b><br>г. Москва, ул. Люблинская, д. 179/1",
  },
  {
    iconLayout: 'default#image',
    iconImageHref: '/assets/build/img/icons/icon-placeholder.svg',
    iconImageSize: [37, 44.6],
    iconImageOffset: [-19,-42],
  });

  myMap.geoObjects.add(placemark);

  jQuery(document).ready(function($) {
    $(function() {
      let $width = $("#width"),
          $height = $("#height"),
          $window = $(window);
      $width.html($window.width());
      $height.html($window.height());
      $window.resize(function () {
        waitForFinalEvent(function () {
            if (widthWindow >= widthResizeMap && $(window).width() < widthResizeMap) {
              widthWindow = $(window).width();
              myMap.container.fitToViewport();
            } else if (widthWindow < widthResizeMap && $(window).width() > widthResizeMap) {
              widthWindow = $(window).width();
              myMap.container.fitToViewport();
            }
        }, 500, "some unique id");
      });
    });
  });
}
