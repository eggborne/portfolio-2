document.documentElement.style.setProperty('--actual-height', window.innerHeight + 'px');
document.body.classList.remove('hidden');

document.getElementById('hamburger').addEventListener('pointerdown', handleHamburgerClick);
document.getElementById('projects-button').addEventListener('pointerdown', handleNavItemClick);
document.getElementById('about-button').addEventListener('pointerdown', handleNavItemClick);
document.getElementById('contact-button').addEventListener('pointerdown', handleNavItemClick);

function handleHamburgerClick() {
  this.classList.toggle('open');
  document.getElementsByTagName('nav')[0].classList.toggle('open');
}

function handleNavItemClick() {
  document.getElementById('projects-button').classList.remove('selected');
  document.getElementById('about-button').classList.remove('selected');
  document.getElementById('contact-button').classList.remove('selected');
  this.classList.add('selected');
  document.getElementsByTagName('nav')[0].classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}