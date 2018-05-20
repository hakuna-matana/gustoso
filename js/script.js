var button = document.querySelector('.navigation__toggle');
var list = document.querySelector('.navigation__list');
var nav = document.querySelector('.navigation');

if (!button.classList.contains('navigation__toggle--closed')) {
  button.classList.remove('navigation__toggle--opened');
  button.classList.add('navigation__toggle--closed');

  list.classList.add('navigation__list--closed');
  nav.classList.remove('navigation--opened');
}

button.onclick = function(event) {
  if (button.classList.contains('navigation__toggle--closed')) {
    button.classList.remove('navigation__toggle--closed');
    button.classList.add('navigation__toggle--opened');

    list.classList.remove('navigation__list--closed');
    nav.classList.add('navigation--opened');
    document.body.classList.add('no-scroll');
    return;
  };
  if (button.classList.contains('navigation__toggle--opened')) {
    button.classList.remove('navigation__toggle--opened');
    button.classList.add('navigation__toggle--closed');

    list.classList.add('navigation__list--closed');
    nav.classList.remove('navigation--opened');
    document.body.classList.remove('no-scroll');
  };
}