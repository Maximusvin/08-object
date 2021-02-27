/* 
1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км.
 (врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка зможе змінити назву тварини на більш детальну. 
*/
const DISTANCE = 1000;

const animal = {
  name: null,
  weight: null,
  age: null,
  speedAverage: null,

  getInfo() {
    console.log(
      `Назва тварини: ${this.name}, вага: ${this.weight} кг, вік: ${this.age} років, середня швидкість: ${this.speedAverage} км/год`
    );
  },

  calculateTime() {
    const maxTimeInMotion = 12;
    const time = DISTANCE / this.speedAverage;
    let day = Math.floor(time / maxTimeInMotion);
    let resultTime = time > maxTimeInMotion ? `${day} дн` : `${time} год`;
    console.log(`${this.name} подолає 1000км за ${resultTime}`);
  },

  changeName(name) {
    this.name = name;
  },

  changeAnimal(name, weight, age, speedAverage) {
    this.name = name;
    this.weight = weight;
    this.age = age;
    this.speedAverage = speedAverage;
  },
};

animal.changeAnimal("Тигр", 230, 15, 10);
animal.getInfo();
animal.calculateTime();
animal.changeName("Сова");
animal.getInfo();

/*
2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - 
рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.
*/

const figure = {
  height: null,
  width: null,

  getSquare() {
    console.log(this.height * this.width);
  },

  getPerimeter() {
    console.log(this.height + this.width);
  },

  transform3d(depth) {
    this.depth = depth;
    console.log(`x: ${this.width}, y: ${this.height}, z: ${this.depth}`);
  },

  createNewFigure(height, width) {
    this.height = height;
    this.width = width;
  },

  setName(name) {
    this.name = name;
    console.log(this.name);
  },

  convert() {
    this.height /= 100;
    this.width /= 100;
    console.log(`Висота: ${this.height} m, Ширина ${this.width} m`);
  },
};

figure.createNewFigure(20, 30);
figure.getSquare();
figure.getPerimeter();
figure.transform3d(15);
figure.setName("Квадрат");
figure.convert();

/*
3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 
Виводимо список покупок які ми купили.
Додаємо функцію яка дозволить купити продукт.
Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
Додаємо можливість збільшувати кількість товару.
Додаємо можливість зменшувати кількість товару(менше 0 бути не може).
*/

const shoppingList = {
  tomato: { count: 5, price: 50, buy: false, outOfstore: true },
  bananas: { count: 1, price: 20, buy: false, outOfstore: false },
  pineapple: { count: 2, price: 30, buy: true, outOfstore: true },
  kiwi: { count: 7, price: 7, buy: false, outOfstore: false },
  tangerines: { count: 3, price: 5, buy: true, outOfstore: true },
  sweets: { count: 10, price: 45, buy: false, outOfstore: true },
  bread: { count: 1, price: 4, buy: true, outOfstore: true },
};

const showStatistic = (orderList) => {
  const inStockList = [];
  const outStockList = [];
  const purchasedList = [];

  for (key in orderList) {
    orderList[key].outOfstore ? inStockList.push(key) : outStockList.push(key);
    orderList[key].buy ? purchasedList.push(key) : null;
  }

  console.log(`1. Список продуктів в наявності: ${inStockList.join(", ")}`);
  console.log(
    `2. Список продуктів, які відсутні в магазині: ${outStockList.join(", ")}`
  );
  console.log(
    `3. Список продуктів, які ми купили: ${purchasedList.join(", ")}`
  );
};

// вирішив зібрати одразу декілька продуктів, яким потрібно змінити статус покупки.
// Також вирішив мутувати обєкт, а не створювати новий список у вигляді нового обєкта.
// Беру кожен продукт і порівнюю його з списком псевдомасиву arg через вложений цикл
// Але тут питання стосовно .arg - якщо ми передамо інший обєкт з іншою структурою - то код зламається. Як краще? Чи взагалі зробити привязку через контекст?
const changeBuyProduct = (orderList, ...arg) => {
  for (key in orderList) {
    for (let i = 0; i < arg.length; i++) {
      key === arg[i] ? (orderList[key].buy = true) : null;
    }
  }
};

const showCostOfProducts = (orderList) => {
  let totalSum = 0;
  for (key in orderList) {
    orderList[key].buy
      ? (totalSum += orderList[key].price * orderList[key].count)
      : null;
  }
  console.log(`Загальна вартість куплених продуктів склала: ${totalSum} грн`);
};

// Дана функція буде збільшувати конкретний товар на одиницю. Щоб збільшити до конкретної цифри - потрібно ввести продукт декілька разів
const increaseCountProduct = (orderList, ...arg) => {
  for (key in orderList) {
    for (let i = 0; i < arg.length; i++) {
      key === arg[i] ? (orderList[key].count += 1) : null;
    }
  }
};

const reduceCountProduct = (orderList, ...arg) => {
  for (key in orderList) {
    for (let i = 0; i < arg.length; i++) {
      if (key === arg[i] && orderList[key].count) {
        orderList[key].count -= 1;
      }
    }
  }
};

showStatistic(shoppingList); // перший визов статистики
changeBuyProduct(shoppingList, "tomato", "sweets"); // передаэм список та продукти, якы потрібно купити
showStatistic(shoppingList); // просто для порівняння з першим визовом статистики
showCostOfProducts(shoppingList);

increaseCountProduct(shoppingList, "bread", "sweets", "bananas", "bananas"); // Банан вводимо 2 рази
console.table(shoppingList);
reduceCountProduct(shoppingList, "bread", "bread", "bread", "tomato");
console.table(shoppingList);
