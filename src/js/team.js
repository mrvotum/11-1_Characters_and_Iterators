export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  // сделаем объект Team итерируемым
  [Symbol.iterator]() {
    let current = 0;
    const last = this.characters.length;
    // метод должен вернуть объект с методом next()
    return {
      next: () => {
        if (current < last) {
          return {
            done: false,
            value: this.characters[current++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
