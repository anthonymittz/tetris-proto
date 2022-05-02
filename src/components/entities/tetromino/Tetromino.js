const Matrix = require('../matrix/Matrix');
const colors = require('../../../static/colors.json');

class Tetromino extends Matrix {
  constructor(shape = 'T', color = Tetromino.#randomColor()) {
    Tetromino.#checkType(shape);

    let blank = Tetromino.#color(Tetromino.shapes[shape].scheme, color);
    super(blank[0].length, blank.length, blank);

    Object.defineProperty(this, 'center', {
      enumerable: false,
      writable: true,
    });
    this.center = { ...Tetromino.shapes[shape].center };
  }

  static shapes = {
    I: {
      scheme: [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
      ],
      center: {
        x: 0.7,
        y: 2,
      },
    },
    J: {
      scheme: [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
      ],
      center: {
        x: 0.2,
        y: 1.5,
      },
    },
    L: {
      scheme: [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
      ],
      center: {
        x: 1,
        y: 1.5,
      },
    },
    O: {
      scheme: [
        [1, 1],
        [1, 1],
      ],
      center: {
        x: 0.2,
        y: 1,
      },
    },
    S: {
      scheme: [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0],
      ],
      center: {
        x: 0.7,
        y: 2,
      },
    },
    T: {
      scheme: [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
      ],
      center: {
        x: 0.7,
        y: 2,
      },
    },
    Z: {
      scheme: [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1],
      ],
      center: {
        x: 0.7,
        y: 2,
      },
    },
  };

  static #checkType(shape) {
    const shapes = Object.keys(Tetromino.shapes);
    if (typeof shape !== 'string' || shape.length === 0) {
      throw new Error(`Unknown type of tetromino: ${shape}`);
    }
    if (!shapes.includes(shape))
      throw new Error(`Tetromino of the shape "${shape}" does not exist.`);
  }

  static #color(blank, color) {
    return blank.map(row => row.map(value => (value === 0 ? 0 : color)));
  }

  static #randomColor() {
    let color = (Math.random() * (colors.length - 1) + 1) | 0;
    return color;
  }
}

module.exports = Tetromino;
