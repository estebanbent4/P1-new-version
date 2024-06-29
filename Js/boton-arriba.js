const btn = document.querySelector('.Btn');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});