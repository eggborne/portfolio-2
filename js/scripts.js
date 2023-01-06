document.documentElement.style.setProperty('--actual-height', window.innerHeight + 'px');
document.body.classList.remove('hidden');

document.getElementById('hamburger').addEventListener('pointerdown', handleHamburgerClick);

function handleHamburgerClick() {
  this.classList.toggle('open');
  document.getElementsByTagName('menu')[0].classList.toggle('open');
}