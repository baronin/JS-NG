const app = document.querySelector('.app');

let title = document.querySelector('#title');
let description = document.querySelector('#description');
let logoType = document.querySelector('#logoConstructor');

const menuPositionClass = {
  vertical: 'nav-vertical',
  left: 'nav-left',
  right: 'nav-right',
};

let submit = document.querySelector('#submit');

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
  let labelNameMenu = document.querySelectorAll('.labelNameMenu');
  let menu = '';
  labelNameMenu.forEach(function (item) {
    console.log('', item);
  });
  createMenu.forEach(function (item) {
    if (item.checked) {
      item.labels.forEach(function (test) {
        menu += `<a href="#" class="nav">${test.textContent}</a>`;
      });
    }
  });
  return `
    <nav>
      ${menu}
    </nav>
  `;
}

function main() {
  let nameMenu = document.querySelectorAll('.input[name="menuPosition"]');
  let positionMenuValue = '';
  nameMenu.forEach(function (item) {
    if (item.checked) {
      console.log(item.value);
      positionMenuValue = item.value;
    }
  });
  console.log(positionMenuValue);
  let navClass = '';
  if (positionMenuValue === 'verticalLeft') {
    navClass = menuPositionClass.vertical + ' ' + menuPositionClass.left;
  } else if (positionMenuValue === 'verticalRight') {
    navClass = menuPositionClass.vertical + ' ' + menuPositionClass.right;
  }

  return `
    <main class="main ${navClass}">
      ${nav()}
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
