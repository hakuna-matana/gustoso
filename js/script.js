
//-------------menu---------------

var button = document.querySelector('.navigation__toggle');
var list = document.querySelector('.navigation__list');
var nav = document.querySelector('.navigation');

if (!button.classList.contains('navigation__toggle--closed')) {
  button.classList.remove('navigation__toggle--opened');
  button.classList.add('navigation__toggle--closed');

  list.classList.add('navigation__list--closed');
  nav.classList.remove('navigation--opened');
  nav.classList.remove('navigation--nojs');
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

//------------stars--------------

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

//-------------links-------------

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++) {
  var link = links[i];
  link.onclick = function(event) {
    event.preventDefault();
  }
}

//-------------slider--------------

var btnPrev = document.querySelector('.tabs__arrow--prev');
var btnNext = document.querySelector('.tabs__arrow--next');
var list = document.querySelector('.tabs__list');
var items = list.querySelectorAll('.tabs__item');
var dishes = document.querySelectorAll('.dishes__item');

var position = 0;
var indexItem = 1; 
var numberElem = 1;


btnPrev.onclick = function(event) {
  if (btnPrev.classList.contains('tabs__arrow--disabled')) return;
  --indexItem;

  if (indexItem == 1) {
    btnPrev.classList.add('tabs__arrow--disabled');
  };
  if (((indexItem + 2) < items.length)&&(btnNext.classList.contains('tabs__arrow--disabled'))) {
    btnNext.classList.remove('tabs__arrow--disabled');
  };

  var width = items[0].clientWidth;
  position += width;
  list.style.transform = 'translateX(' + position + 'px)';
};


btnNext.onclick = function(event) {
  if (btnNext.classList.contains('tabs__arrow--disabled')) return;
  ++indexItem;

  if ((indexItem > 1)&&(btnPrev.classList.contains('tabs__arrow--disabled'))) {
    btnPrev.classList.remove('tabs__arrow--disabled');
  };
  if ((indexItem + 2) == items.length) {
    btnNext.classList.add('tabs__arrow--disabled');
  };

  var width = items[0].clientWidth;
  position -= width;
  list.style.transform = 'translateX(' + position + 'px)';
};




for(var i = 0; i < items.length; i++) {
  var item = items[i];
  let index = i;
  item.onclick = function(event) {
    var activeElem = document.querySelector('.tabs__item--active');
    var previousElem = document.querySelector('.dishes__item--active');
    var target = event.target;

    while(target != this) {
      if (target.tagName == 'LI') {
        break;
      }
      target = target.parentNode;
    }
    
    if (target.classList.contains('tabs__item--active')) return;
    target.classList.add('tabs__item--active');
    activeElem.classList.remove('tabs__item--active');
    
    previousElem.classList.remove('dishes__item--active');
    previousElem.classList.add('dishes__item--hidden');

    var dish = dishes[index];
    dish.classList.remove('dishes__item--hidden');
    dish.classList.add('dishes__item--active');
  };
};
