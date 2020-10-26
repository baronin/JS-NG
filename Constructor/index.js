const app = document.querySelector('.app');

let title = document.querySelector('#title');
let description = document.querySelector('#description');
let logoType = document.querySelector('#logoConstructor');
let textArea = document.querySelector('#textArea');

const menuPositionClass = {
  vertical: 'nav-vertical',
  left: 'nav-left',
  right: 'nav-right',
};

let submit = document.querySelector('#submit');
let inputNoText = document.querySelector('#textNo');
let inputYesText = document.querySelector('#textYes');
if (inputNoText) {
  inputNoText.addEventListener('click', function () {
    textArea.setAttribute('disabled', true);
  });
}
if (inputYesText) {
  inputYesText.addEventListener('click', function () {
    if (textArea.getAttribute('disabled')) {
      textArea.removeAttribute('disabled');
    }
  });
}

function header(logo, slogan, desc) {
  let imgLogo;

  if (logo) {
    imgLogo = `<div class="logo-wrap"><img src="${logo}" alt="logotype"></div>`;
  } else {
    imgLogo = ``;
  }
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
  if (menuLinks) {
    return `
    <nav>
      ${menuLinks}
    </nav>
  `;
  } else {
    return ' ';
  }
}

function content() {
  const wrapRadio = document.querySelector('.wrap-radio');
  let inputsRadio = wrapRadio.querySelectorAll('input[name="mainText"]');
  let contentText = '';
  inputsRadio.forEach(function (item) {
    if (item.checked) {
      contentText = textArea.value;
    }
  });
  return `
    <div class="content">
      <p>${contentText}</p>
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
}

if (submit) {
  submit.addEventListener('click', getData);
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
}
