const hb = document.querySelector('#hamburgerBtn');
const pn = document.querySelector('#primaryNav');

hb.addEventListener('click', () => {
  hb.classList.toggle('open');
  pn.classList.toggle('open');
});


// Places just the current year into footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();