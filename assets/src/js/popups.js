// Popups

// Popup Callback
if(document.querySelector('.btn--popup')) {
  let btnPopupRegistration = document.querySelectorAll('.btn--popup');

  let popupRegistration = document.getElementById("popup-liga-registration");
  let popupRegistrationWrap = popupRegistration.querySelector('.popup-liga__wrapper');
  let popupRegistrationBg = popupRegistration.querySelector('#popup-liga-registration__bg');
  let popupRegistrationBtnClose = popupRegistration.querySelector('#popup-liga-registration__close');

  let popupSubtitle = popupRegistration.querySelector('.popup-liga__subtitle');
  let popupSubtitleJs = popupRegistration.querySelector('.popup-liga__subtitle-js');
  let popupHiddenTariff = popupRegistration.querySelector('#form-simple__hidden-tariff');

  Array.prototype.forEach.call(btnPopupRegistration, function(item){
    item.addEventListener('click', function(event) {
      event.preventDefault();
      if(this.classList.contains('cards-price__btn')) {
        replacePopupSubtitle(this);
      }
      popupRegistration.classList.add('popup-liga--show');
      popupRegistrationBg.classList.add('popup-liga__bg--show');
      popupRegistrationWrap.classList.add('popup-liga__wrapper--show');
      document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
      document.body.style.overflow = 'hidden';
    });
  });

  popupRegistrationBtnClose.addEventListener('click', function() {
    if(this.parentElement.classList.contains('popup-liga--show')) {
      closePopup();
    }
  });

  popupRegistrationBg.addEventListener('click', function() {
    if(this.parentElement.classList.contains('popup-liga--show')) {
      closePopup();
    }
  });

  document.addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;
    if (keyCode === 27) {
      if(popupRegistration.classList.contains('popup-liga--show')) {
        closePopup();
      }
    }
  });

  let closePopup = function () {
    popupRegistrationWrap.classList.add('popup-liga__wrapper--hidden');
    popupRegistrationBg.classList.add('popup-liga__bg--hidden');

    document.body.removeAttribute('style');
  
    setTimeout(function() {
      popupRegistration.classList.remove('popup-liga--show');
      popupRegistrationWrap.classList.remove('popup-liga__wrapper--show');
      popupRegistrationWrap.classList.remove('popup-liga__wrapper--hidden');
  
      popupRegistrationBg.classList.remove('popup-liga__bg--show');
      popupRegistrationBg.classList.remove('popup-liga__bg--hidden');
    }, 700);

    if(popupSubtitleJs.innerText != "") {
      setTimeout(function() {
        returnPopupSubtitle();
      }, 750);
    }
  };

  // Add rate to popup
  let replacePopupSubtitle = function(item) {
    let cardTitle = item.parentNode.querySelector('.cards-price__title').innerText;
    let cardPrice = item.parentNode.querySelector('.cards-price__price').innerText.replace(/[\r\n]+/g, '');

    popupSubtitle.style.display = 'none';
    popupSubtitleJs.style.display = 'block';
    popupSubtitleJs.innerText = "По тарифу «" + cardTitle + "» – " + cardPrice;
    popupHiddenTariff.setAttribute("value", cardTitle + " – " + cardPrice);
  };

  // Remove rate in popup
  let returnPopupSubtitle = function() {
    popupSubtitle.style.display = 'block';
    popupSubtitleJs.removeAttribute('style');
    popupSubtitleJs.innerText = "";
    popupHiddenTariff.setAttribute("value", "");
  };
}