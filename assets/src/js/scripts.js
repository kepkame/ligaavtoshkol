// Scripts

// Remove class .no-js, if JavaScript is running
let removeStylesNoJs = function() {
  let stylesNoJs = document.querySelectorAll('.no-js');
  for (let i = 0; i < stylesNoJs.length; i++) {
    stylesNoJs[i].classList.remove('no-js');
  }
}

if(document.querySelector('.no-js')) {
  removeStylesNoJs();
}

jQuery(document).ready(function($) {
  // Mask phone
  $(document).ready(function(n) {
    jQuery(".wpcf7-tel, #form-questions-phone").mask("+7 (999) 999-99-99");
  });
});
