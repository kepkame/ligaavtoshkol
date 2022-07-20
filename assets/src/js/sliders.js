// Sliders

jQuery(document).ready(function($) {
  // Slick sliders
  $('.slider-simple').slick({
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow:
      '<span class="slider-arrow slider-arrow--next"><button class="slider-arrow__button"><svg class="slider-arrow__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 26.7" width="15" height="26.7"><path class="slider-arrow__path" d="M.4 26.3c-.5-.5-.5-1.2-.1-1.8l.1-.2 11.2-11L.4 2.3C-.1 1.8-.1 1.1.3.5L.4.3C.9-.2 1.7-.2 2.2.2l.2.1 12.2 12c.5.5.5 1.2.1 1.8l-.1.2-12.2 12c-.6.5-1.4.5-2 0z"/></svg></button></span>',
    prevArrow:
      '<span class="slider-arrow slider-arrow--prew"><button class="slider-arrow__button"><svg class="slider-arrow__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 26.7" width="15" height="26.7"><path class="slider-arrow__path" d="M.4 26.3c-.5-.5-.5-1.2-.1-1.8l.1-.2 11.2-11L.4 2.3C-.1 1.8-.1 1.1.3.5L.4.3C.9-.2 1.7-.2 2.2.2l.2.1 12.2 12c.5.5.5 1.2.1 1.8l-.1.2-12.2 12c-.6.5-1.4.5-2 0z"/></svg></button></span>',
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.slider-fullwidth').slick({
    infinite: true,
    arrows: true,
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<span class="slider-arrow slider-arrow--next"><button class="slider-arrow__button"><svg class="slider-arrow__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 26.7" width="15" height="26.7"><path class="slider-arrow__path" d="M.4 26.3c-.5-.5-.5-1.2-.1-1.8l.1-.2 11.2-11L.4 2.3C-.1 1.8-.1 1.1.3.5L.4.3C.9-.2 1.7-.2 2.2.2l.2.1 12.2 12c.5.5.5 1.2.1 1.8l-.1.2-12.2 12c-.6.5-1.4.5-2 0z"/></svg></button></span>',
    prevArrow:
      '<span class="slider-arrow slider-arrow--prew"><button class="slider-arrow__button"><svg class="slider-arrow__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 26.7" width="15" height="26.7"><path class="slider-arrow__path" d="M.4 26.3c-.5-.5-.5-1.2-.1-1.8l.1-.2 11.2-11L.4 2.3C-.1 1.8-.1 1.1.3.5L.4.3C.9-.2 1.7-.2 2.2.2l.2.1 12.2 12c.5.5.5 1.2.1 1.8l-.1.2-12.2 12c-.6.5-1.4.5-2 0z"/></svg></button></span>',
    responsive: [

    ]
  });

  $('.slider-news').slick({
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<span class="slider-arrow slider-arrow--circle slider-arrow--next"><button class="slider-arrow__button"><svg class="slider-arrow__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 26.7" width="15" height="26.7"><path class="slider-arrow__path" d="M.4 26.3c-.5-.5-.5-1.2-.1-1.8l.1-.2 11.2-11L.4 2.3C-.1 1.8-.1 1.1.3.5L.4.3C.9-.2 1.7-.2 2.2.2l.2.1 12.2 12c.5.5.5 1.2.1 1.8l-.1.2-12.2 12c-.6.5-1.4.5-2 0z"/></svg></button></span>',
    prevArrow:
      '<span class="slider-arrow slider-arrow--circle slider-arrow--prew"><button class="slider-arrow__button"><svg class="slider-arrow__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 26.7" width="15" height="26.7"><path class="slider-arrow__path" d="M.4 26.3c-.5-.5-.5-1.2-.1-1.8l.1-.2 11.2-11L.4 2.3C-.1 1.8-.1 1.1.3.5L.4.3C.9-.2 1.7-.2 2.2.2l.2.1 12.2 12c.5.5.5 1.2.1 1.8l-.1.2-12.2 12c-.6.5-1.4.5-2 0z"/></svg></button></span>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 949,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1329,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          variableWidth: true,
        },
      },
    ],
    mobileFirst:true
  });
});
