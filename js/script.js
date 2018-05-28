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

//stars

var stars = document.body.querySelectorAll('.dishes__stars');

for(var i = 0; i < stars.length; i++) {
  var value = +stars[i].innerHTML;
  stars[i].innerHTML = '';
  setStar(value, stars[i]);
}

function setStar(count, parent) {
  for(var i = 0; i < count; i++) {
    var star = document.createElement('i');
    star.classList.add('dishes__icon-star');
    parent.appendChild(star);
  }
  if (count < 5) {
    for (var i = count; i < 5; i++) {
      var star = document.createElement('i');
    star.classList.add('dishes__icon-star-outline');
    parent.appendChild(star);
    } 
  }
}