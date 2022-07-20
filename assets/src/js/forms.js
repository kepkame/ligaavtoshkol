'use strict';
// Forms

/**
 * Form Agree - Simple AntiSpam
 */
if(document.querySelector("input.agree")) {
  setTimeout(function() {
    let inputAgreeInvert = document.querySelectorAll("input.agree");

    Array.prototype.forEach.call(inputAgreeInvert, function(item) {
      item.checked = false;
      item.removeAttribute('checked');
    });
  }, 100);
}

/**
 * Entry form
 */
if (document.querySelector('form.form-simple')) {
  let entryForm = document.querySelectorAll('form.form-simple');

  Array.prototype.forEach.call(entryForm, function(item) {
    item.addEventListener('submit', function(event) {
      // Successful form submission
      event.preventDefault();

      let entryFormResponse = item.querySelector('.form-simple__row--response-output');
      let entryFormInputs = item.querySelectorAll('.form-simple__input');
      let textResponce = 'Форма успешно отправлена!';
      
      // Show notice
      item.classList.add('sent');
      entryFormResponse.innerText = textResponce;

      // Clear form fields
      entryFormInputs.forEach(function(item) {
        item.value = "";
      });

      // Hide notice
      setTimeout(function() {
        item.classList.remove('sent');
        entryFormResponse.innerText = '';
      }, 5000);
    });
  });
}
