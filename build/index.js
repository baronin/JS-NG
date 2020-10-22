let title = document.querySelector('#title');
let description = document.querySelector('#description');

let btn = document.querySelector('#btnSubmit');

function getData () {
  let htmlPage = '';
  if (title && description) {
   let titleValue = title.value;
   let descriptionValue = description.value;
   htmlPage = `<h1> ${titleValue} </h1> <p> ${descriptionValue}</p>`;
   document.body.innerHTML = htmlPage;
  }
}


btn.addEventListener('click', getData);
