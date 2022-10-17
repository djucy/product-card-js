import './sass/main.scss';
import pizzaList from './menu.json';

let sizePizza = 25;
let namePizza = 'meat';

// const iconItems = document.querySelectorAll('.icon_item');
const buttonSizePizza = document.querySelectorAll('.size_button');
const price = document.querySelector('.pizza_price');
const imagesPizza = document.querySelectorAll('.pizza_img');
const pizzaTitle = document.querySelector('.pizza_title');
const iconBtn = document.querySelectorAll('.icon_btn');

console.log(iconBtn);
//перебираем кнопки с размером пиццы и при нажатии выбираем цену
buttonSizePizza.forEach(item => {
  item.addEventListener('click', () => {
    sizePizza = item.textContent;

    choosePrice();
    //проверка на наличие класса active и его удаление у других элементов
    removeActiveClass(buttonSizePizza);

    item.classList.add('active');
  });
});

//перебираем кнопки с иконками пиццы и при нажатии выбираем цену
iconBtn.forEach(item => {
  item.addEventListener('click', choosePizza);

  function choosePizza() {
    namePizza = item.dataset.pizza;
    choosePrice();
    removeActiveClass(iconBtn);

    item.classList.add('active');
    imagesPizza.forEach(image => {
      if (namePizza === image.dataset.picture) {
        image.classList.remove('hidden');
      } else {
        image.classList.add('hidden');
      }
    });
  }
});

function choosePrice() {
  pizzaList.map(pizzaItem => {
    if (pizzaItem.data === namePizza && pizzaItem.size === parseInt(sizePizza)) {
      price.textContent = `Price: ${pizzaItem.price}$`;
      pizzaTitle.textContent = pizzaItem.pizza;
    }
  });
}

function removeActiveClass(array) {
  array.forEach(item => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
}
