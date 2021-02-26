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
