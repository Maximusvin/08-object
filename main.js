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
reduceCountProduct(shoppingList, "bread", "bread", "bread", "tomato"); // Хліб вводимо 3 рази
console.table(shoppingList);

/*
4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. 
Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.
*/

const users = [
  {
    name: "Yura",
    age: 55,
    hobby: ["films", "games", "hiking", "IT"],
    type: "Admin",
  },
  {
    name: "Max",
    age: 35,
    hobby: ["genealogy", "games", "films", "IT"],
    type: "Admin",
  },
  {
    name: "Юля",
    age: 23,
    hobby: ["fishing", "games", "hiking", "singing"],
    type: "Moder",
  },
  {
    name: "Bond",
    age: 78,
    hobby: ["fishing", "games", "hiking", "murders"],
    type: "User",
  },
  {
    name: "Мари",
    age: 12,
    hobby: ["films", "games", "hiking", "swimming"],
    type: "User",
  },
  {
    name: "Ксю",
    age: 15,
    hobby: ["films", "games", "hiking", "travels"],
    type: "User",
  },
  {
    name: "Фу",
    age: 12,
    hobby: ["films", "games", "hiking", "IT"],
    type: "Moder",
  },
  {
    name: "Лина",
    age: 47,
    hobby: ["fishing", "games", "hiking", "sleep"],
    type: "User",
  },
];

const showAdmins = (usersList) => {
  const adminList = [];
  usersList.map((user) => {
    user.type === "Admin" ? adminList.push(user.name) : null;
  });
  console.log(`Список адмінів: ${adminList.join(", ")}`);
};

const showAverageAge = (usersList) => {
  let totalAgeOfUsers = null;
  let averageAge = null;

  usersList.map((user) => {
    totalAgeOfUsers += user.age;
  });

  averageAge = Math.floor(totalAgeOfUsers / usersList.length);
  console.log(`Середній вік усіх юзерів: ${averageAge} р.`);
};

const getAllHobbyUsers = (usersList) => {
  const usersHobby = [];
  usersList.map(({ hobby }) => {
    usersHobby.push(...hobby);
  });

  return usersHobby;
};

// В даній ф-ції можна було б відразу вивести унікальні хобі, але вирішив зробити її статистичною функцією
const getStatisticHobby = (usersList) => {
  return getAllHobbyUsers(usersList).reduce((acc, hobby) => {
    acc[hobby] = acc.hasOwnProperty(hobby) ? acc[hobby] + 1 : 1;
    return acc;
  }, {});
};

// Функція показує лише унікальні хобі, які зустрічаються не більше 1 разу серед усіх працівників
const showUniqueHobbies = (usersList) => {
  const uniqueHobbies = [];
  const statOfHobby = getStatisticHobby(usersList);

  for (key in statOfHobby) {
    if (statOfHobby[key] === 1) {
      uniqueHobbies.push(key);
    }
  }

  console.log(`Унікальні хобі працівників: ${uniqueHobbies.join(", ")}`);
};

// ====================================================================
// ТРОХИ ПОДУМАВ І ВИРІШИВ ТАСКУ З УНІКАЛЬНИМИ ЗНАЧЕННЯМИ ЗНАЧНО КОРОТШИМ СПОСОБОМ:
const showUniqueHobbies2 = (usersList) => {
  const usersHobby = getAllHobbyUsers(usersList);

  const uniqueHobby = usersHobby.filter(
    (item) => usersHobby.indexOf(item) === usersHobby.lastIndexOf(item)
  );

  console.log(
    `Унікальні хобі працівників (другий спосіб): ${uniqueHobby.join(", ")}`
  );
};

showAdmins(users);
showAverageAge(users);
showUniqueHobbies(users);
showUniqueHobbies2(users);
