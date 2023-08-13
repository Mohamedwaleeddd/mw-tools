window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 0) {
  document.querySelector(".cards").style.display ="flex";
  }
})