// Создание объекта
// 3 способа создания объекта

// 1. Используя функцию и ключевое слово new
export function User(name, age) {
  this.name = name;
  this.age = age;
}

export const user1 = new User('John', 30);

// 2. Используя литеральную нотацию
export const user2 = {
  name: 'John',
  age: 30,
};

// 3. Используя объектно-ориентированное программирование (классы)
export class User3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 4. Используя функцию Object.create
export const user4 = Object.create({ name: 'John', age: 30 });
