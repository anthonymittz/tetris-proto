const Tetromino = require('../tetromino/Tetromino');

class Bag extends Array {
  constructor(template) {
    super();
    template ? this.#fromTemplate(template) : this.#generate();
  }

  shake() {
    this.#empty();
    this.#refill();
  }

  equals(bag) {
    if (bag.length !== this.length) return false;
    return bag.every((element, i) => element === this[i]);
  }

  pull() {
    this.shift();
    if (this.length < 3) this.#refill();
  }

  #refill() {
    const set = new Bag();
    set.forEach(item => this.push(item));
  }

  #random(length) {
    const result = [];
    while (result.length < length) {
      const num = Math.floor(Math.random() * length);
      if (!result.includes(num)) result.push(num);
    }
    return result;
  }

  #generate() {
    const sequence = this.#random(Bag.availableShapes.length);
    sequence.forEach(index => this.push(Bag.availableShapes[index]));
  }

  #fromTemplate(template) {
    this.#checkTemplate(template);
    template.split('').forEach(letter => this.push(letter));
  }

  #checkTemplate(template) {
    template.split('').forEach(letter => {
      if (!Bag.availableShapes.includes(letter))
        throw new Error(
          'You must provide a template that contains only the known types of Tetrominoes.'
        );
    });
  }

  #empty() {
    this.length = 0;
  }

  static availableShapes = Object.keys(Tetromino.shapes);

  static generate(template) {
    return new Bag(template);
  }
}

module.exports = Bag;
