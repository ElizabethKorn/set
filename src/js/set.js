/*Игрок может выбирать персонажей в команду на конкретный раунд исходя 
из их текущего состояния, уровня и стратегии игры. 
Нам необходимо не позволять ему добавлять в команду несколько раз одного и того же персонажа.

Описание
Создайте класс Team с методами add, addAll и toArray.
 Класс должен хранить данные о персонажах команды в поле типа Set:

class Team {
    constructor() {
        this.members = new Set();
    }
    ...
}
Метод add должен добавлять выбранного персонажа в команду (объект класса Character). 
При этом такой объект уже существует в команде - дублирования происходить не должно, 
должна генерироваться ошибка.

Метод addAll должен иметь возможность добавлять произвольное количество персонажей 
(используйте rest-parameters) в команду. При этом задвоения быть не должно, 
ошибка генерироваться не должна.

Метод toArray должен производить конвертацию Set в массив.*/
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error("Персонаж уже есть в команде!");
    }
    this.members.add(character);
  }

  addAll(...character) {
    character.forEach((person) => this.members.add(person));
  }

  toArray() {
    return Array.from(this.members);
  }
}
