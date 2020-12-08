const hamburger = document.querySelector('.hamburger');



const handleHamburgerClick = () => {
    document.querySelector('.mobile__nav').classList.toggle('move-up')
    hamburger.classList.toggle('times-on')
}


hamburger.addEventListener('click', handleHamburgerClick )


var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);