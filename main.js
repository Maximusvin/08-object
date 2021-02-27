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
