const menuButton = document.querySelector('.js-menu-btn');
const sideMenu = document.querySelector('menu');

menuButton.addEventListener('click',() => {
  if(sideMenu.style.display === 'block') {sideMenu.style.display = 'none'}
  else{sideMenu.style.display = 'block'}
});