const Tetromino = require('../tetromino/Tetromino');

class Bag extends Array {
  constructor(template) {
    super();
    if (template) {
      this.#generateFromTemplate(template);
    } else {
      this.#generate();
    }
  }

  shake() {
    this.splice(0, this.length);
    this.#generate();
  }

  equals(bag) {
    if (bag.length !== this.length) return false;
    return bag.every((element, i) => element === this[i]);
  }

  #generate() {
    const sequence = this.#random(Bag.availableShapes.length);
    sequence.forEach(index => {
      this.push(Bag.availableShapes[index]);
    });
  }

  #generateFromTemplate(template) {
    this.#checkTemplate(template);
    template.split('').forEach(letter => this.push(letter));
  }

  #random(length) {
    const result = [];
    while (result.length < length) {
      const num = Math.floor(Math.random() * length);
      if (!result.includes(num)) result.push(num);
    }
    return result;
  }

  #checkTemplate(template) {
    template.split('').forEach(letter => {
      if (!Bag.availableShapes.includes(letter))
        throw new Error(
          'You must provide a template that contains only the known types of Tetrominoes.'
        );
    });
  }

  static availableShapes = Object.keys(Tetromino.shapes);

  static generate(template) {
    return new Bag(template);
  }
}

module.exports = Bag;
