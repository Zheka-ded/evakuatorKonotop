const navbar = document.querySelector('#navbarNav');

document.querySelector('.js-nav-bar-button').addEventListener('click', () => {
  navbar.classList.toggle('show')
});

document.querySelectorAll('.js-nav-link').forEach(elem => {
  elem.addEventListener('click', () => {
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show')
    }
  })
})
