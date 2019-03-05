window.onscroll = (e) => {
  const scroll = window.scrollY;

  const header = document.querySelector('.barra')
  if (scroll > 40) {
    header.classList.add('fondo-scroll');
  }else {
    header.classList.remove('fondo-scroll');
  }

}
