const Matrix = require('../matrix/Matrix');

class Tetromino extends Matrix {
  constructor(type = 'T') {
    Tetromino.#checkType(type);
    super(3, 3, Tetromino.shapes[type]);
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
  static #checkType(type) {
    const shapes = Object.keys(Tetromino.shapes);
    if (typeof type !== 'string' || type.length === 0) {
      throw new Error('You must provide the known type of Tetromino.');
    }
    if (!shapes.includes(type))
      throw new Error(`Tetromino of type "${type}" does not exist.`);
  }
}

module.exports = Tetromino;
