let title = document.querySelector('#title');
let description = document.querySelector('#description');
let logoType = document.querySelector('#logoConstructor');

let submit = document.querySelector('#submit');

const mainContainer = document.querySelector('.main__container');

function header(logo, slogan, desc) {

  let imgLogo = null;

  if(logo) {
    imgLogo = `<img src="${logo}" alt="logotype">`;
  } else {
    imgLogo = `<img src="test" alt="logotype">`;
  }
  return `
    <header class="header">
      <div class="logo-wrap">
        ${imgLogo}
      </div>
      <div class="header-content">
        <h1>${slogan}</h1>
        <p>${desc}</p>
      </div>
    </header>
  `;
}

function getData () {
  let htmlPage = '';

  let titleValue = title.value;
  let descriptionValue = description.value;
  let logoValue = logoType.value;

  if (title && description) {
   htmlPage = `
   ${header(logoValue, titleValue, descriptionValue)}
   `;
   mainContainer.innerHTML = htmlPage;
  }
}


submit.addEventListener('click', getData);
