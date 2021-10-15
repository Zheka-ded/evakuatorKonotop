const navbar = document.querySelector('#navbarNav');

document.querySelector('.js-nav-bar-button').addEventListener('click', () => {
  navbar.classList.toggle('show')
  // navLinkBody(navbar.clientHeight)
});

document.querySelectorAll('.js-nav-link').forEach(elem => {
  elem.addEventListener('click', () => {
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show')
      // navLinkBody(navbar.clientHeight)
    }
  })
})

//
//
// function navLinkBody(bodySize) {
//   const step = 200;
//
//   // navbar.style.height
//
//
//   if (bodySize === 0) {
//     // navbar.style.height = bodySize
//     console.log('bodySize === 0', bodySize)
//
//     // setInterval(() => {
//     //   navbar.style.height = bodySize
//     //   console.log(bodySize)
//     // }, step)
//
//     // const intervalAnimation = setInterval(() => {
//     //
//     //   bodySize -= 20
//     //
//     //   console.log(bodySize)
//     //   if (bodySize <= 0) clearInterval(intervalAnimation)
//     //
//     // }, step)
//
//   }
//
//   if (bodySize > 0) {
//     console.log('bodySize > 0', bodySize)
//   }
// }
//
//
//

