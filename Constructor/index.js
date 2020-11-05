const body = document.querySelector('body');
const app = document.querySelector('.app');

let title = document.querySelector('#title');
let description = document.querySelector('#description');
let logoType = document.querySelector('#logoConstructor');
let textArea = document.querySelector('#textArea');
let bgColor = document.querySelector('#bgColor');
let textColor = document.querySelector('#textColor');
let submit = document.querySelector('#submit');
let addPhotoBtn = document.querySelector('#addPhoto');
let inputNoText = document.querySelector('#textNo');
let inputYesText = document.querySelector('#textYes');
let inputSliderYes = document.querySelector('#sliderYes');
let inputSliderNo = document.querySelector('#sliderNo');
let arraySliders = [];
let enableSlider = false;
let swiperSliders = '';

const menuPositionClass = {
  vertical: 'nav-vertical',
  left: 'nav-left',
  right: 'nav-right',
};

if (inputNoText) {
  inputNoText.addEventListener('click', function () {
    enableSlider = false;
    textArea.setAttribute('disabled', true);
    inputNoText.setAttribute('disabled', true);
  });
}

if (inputYesText) {
  enableSlider = true;
  inputYesText.addEventListener('click', function () {
    enableSlider = true;
    if (textArea.getAttribute('disabled')) {
      textArea.removeAttribute('disabled');
    }
  });
}

if (inputSliderYes) {
  inputSliderYes.addEventListener('click', function () {
    enableSlider = true;
    if (addPhotoBtn.disabled) {
      addPhotoBtn.removeAttribute('disabled');
    }
  });
}

if (inputSliderNo) {
  inputSliderNo.addEventListener('click', function () {
    enableSlider = false;
    addPhotoBtn.setAttribute('disabled', true);
  });
}

function header(logo, slogan, desc) {
  const imgLogo = logo
    ? `<div class="logo-wrap"><img src="${logo}" alt="logotype"></div>`
    : '';
  return `
    <header class="header">
      ${imgLogo}
      <div class="header-content">
        <h1>${slogan}</h1>
        <p>${desc}</p>
      </div>
    </header>
  `;
}

function nav() {
  let createMenu = document.querySelectorAll('input[type="checkbox"]');
  let menuLinks = '';

  createMenu.forEach(function (item) {
    if (item.checked) {
      item.labels.forEach(function (test) {
        menuLinks += `<a href="#" class="nav">${test.textContent}</a>`;
      });
    }
  });
  return menuLinks ? `<nav>${menuLinks}</nav>` : '';
}

function getSliders() {
  let urlPhoto = document.querySelectorAll('.urlPhoto');
  urlPhoto?.forEach?.((item) => {
    if (item?.value) {
      arraySliders.push(item.value);
    }
  });
  for (let i = 0; i < arraySliders.length; i++) {
    swiperSliders += `<div class="swiper-slide" style="background-image: url(${arraySliders[i]})"></div>`;
  }

  return swiperSliders;
}

function swiperSection() {
  return enableSlider
    ? `<div class="swiper-container swiper-custom-wrap">
        <div class="swiper-wrapper">
          ${getSliders()}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>`
    : '';
}

function content() {
  const wrapRadio = document.querySelector('.wrap-radio');
  let inputsRadio = wrapRadio.querySelectorAll('input[name="mainText"]');
  let contentText = '';
  inputsRadio?.forEach(function (item) {
    if (item.checked) {
      contentText = textArea.value;
    }
  });

  return `
    <div class="content">
      <p>${contentText}</p>
      ${swiperSection()}
    </div>
  `;
}

function main() {
  let nameMenu = document.querySelectorAll('.input[name="menuPosition"]');
  let positionMenuValue = '';
  nameMenu.forEach(function (item) {
    if (item.checked) {
      positionMenuValue = item.value;
    }
  });
  let navClass = '';
  if (positionMenuValue === 'verticalLeft') {
    navClass = menuPositionClass.vertical + ' ' + menuPositionClass.left;
  } else if (positionMenuValue === 'verticalRight') {
    navClass = menuPositionClass.vertical + ' ' + menuPositionClass.right;
  }

  return `
    <main class="main ${navClass}">
      ${nav()}
      ${content()}
    </main>
  `;
}

function getData() {
  let htmlPage = '';

  let titleValue = title.value;
  let descriptionValue = description.value;
  let logoValue = logoType.value;

  if (title && description) {
    htmlPage = `
   ${header(logoValue, titleValue, descriptionValue)}
   ${main()}
   `;
    app.innerHTML = htmlPage;
  }
  let swiperContainer = document.querySelector('.swiper-container');

  if (swiperContainer) {
    let mySwiper = new Swiper('.swiper-container', {
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    setTimeout(function () {
      mySwiper.update();
    }, 1000);
  }
}

const sendForm = () => {
  if (inputYesText.checked) {
    if (textArea.value) {
      getData();
      body.style.backgroundColor = bgColor.value;
      body.style.color = textColor.value;
      return;
    } else {
      let wrapSelector = document.querySelector('.wrap');
      let p = document.createElement('p');
      p.style.color = 'red';
      p.innerHTML = 'Заполните текст';
      wrapSelector.appendChild(p);
      setInterval(function () {
        p.remove();
      }, 1000);
    }
  } else if (inputNoText.getAttribute('disabled')) {
    getData();
    body.style.backgroundColor = bgColor.value;
    body.style.color = textColor.value;
  }
};

const addInputToSlideImg = () => {
  let inputListSelector = document.querySelector('.input-list');

  let innerWrapPhotoEl = document.createElement('div');
  innerWrapPhotoEl.classList.add('input-wrap-photo');
  let labelEl = document.createElement('label');
  labelEl.innerHTML = '-';
  innerWrapPhotoEl.appendChild(labelEl);
  let inputEl = document.createElement('input');
  inputEl.classList.add('urlPhoto');
  inputEl.setAttribute('placeholder', 'Введите URL изображения');
  innerWrapPhotoEl.appendChild(inputEl);
  inputListSelector.appendChild(innerWrapPhotoEl);
};

addPhotoBtn?.addEventListener('click', addInputToSlideImg);

submit?.addEventListener('click', sendForm);
