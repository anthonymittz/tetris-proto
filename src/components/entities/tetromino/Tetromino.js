const Matrix = require('../matrix/Matrix');
const colors = require('../../../static/colors.json');

class Tetromino extends Matrix {
  constructor(shape = 'T', color = Tetromino.#randomColor()) {
    Tetromino.#checkType(shape);
    let blank = Tetromino.#color(Tetromino.shapes[shape], color);
    super(3, 3, blank);
  }

  static shapes = {
    I: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    J: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    L: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    O: [
      [1, 1],
      [1, 1],
    ],
    S: [
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ],
    T: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    Z: [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1],
    ],
  };

  static #checkType(shape) {
    const shapes = Object.keys(Tetromino.shapes);
    if (typeof shape !== 'string' || shape.length === 0) {
      throw new Error('You must provide the known type of Tetromino.');
    }
    if (!shapes.includes(shape))
      throw new Error(`Tetromino of the shape "${shape}" does not exist.`);
  }

  static #color(blank, color) {
    return blank.map(row => row.map(value => (value === 0 ? 0 : color)));
  }

  static #randomColor() {
    return Math.floor(Math.random() * colors.length);
  }
}

module.exports = Tetromino;
