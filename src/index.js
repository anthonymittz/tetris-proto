const elements = {
  stopwatchDisplay: document.getElementById('stopwatch_display'),
  stopButton: document.getElementById('stop_button'),
  scoreDisplay: document.getElementById('score_display'),
  nextTetrominoDisplay: document.getElementById('next_tetromino_display'),
  gameOverlay: document.getElementById('game_overlay'),
  gameDisplay: document.getElementById('game_display'),
};

const [CW, CCW] = [1, 0];

class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Throw {
  static error(caller, type, message) {
    throw new Error(`[${caller}] ${type} error: ${message}.`);
  }
}

class Matrix2D extends Array {
  #size;

  constructor(x, y) {
    Matrix2D.#CHECK_DIMENSIONS(x, y);
    super();
    for (let row = y; row > 0; row--) this.push(new Array(x).fill(0));
    this.#updateSize();
  }
  rotate(direction = 1) {
    this.#transpose();
    direction > 0 //
      ? this.forEach(row => row.reverse())
      : this.reverse();
    this.#updateSize();
  }
  overlay(matrix, offset = new Vec2()) {
    Matrix2D.#CHECK_MATRIX(matrix);

    let x, y;
    matrix.forEach((row, posY) => {
      row.forEach((cell, posX) => {
        y = posY + offset.y;
        x = posX + offset.x;
        if (cell !== 0 && this[y] && this[y][x] !== undefined)
          this[y][x] = cell;
      });
    });
  }
  #transpose() {
    const result = [];
    this[0].forEach((_, x) => {
      result.push([]);
      this.forEach((_, y) => {
        result[x].push(this[y][x]);
      });
    });
    this.length = 0;
    result.forEach(row => this.push(row));
  }
  static from(scheme) {
    this.#CHECK_SCHEME(scheme);
    const matrix = new Matrix2D(scheme[0].length, scheme.length);
    scheme.forEach((row, y) => row.forEach((cell, x) => (matrix[y][x] = cell)));
    return matrix;
  }
  #updateSize() {
    this.#size = new Vec2(this[0].length, this.length);
    this.#setSizeProperty();
  }
  #setSizeProperty() {
    Object.defineProperty(this, 'size', {
      value: this.#size,
      writable: true,
      enumerable: false,
    });
  }
  static #CHECK_MATRIX(matrix) {
    if (!matrix instanceof Matrix2D)
      Throw.error('Matrix', 'Matrix', 'not a matrix');
  }
  static #CHECK_DIMENSIONS(x, y) {
    if (x < 2) Throw.error('Matrix', 'Dimensions', 'X must be 2 or more');
    if (y < 2) Throw.error('Matrix', 'Dimensions', 'Y must be 2 or more');
  }
  static #CHECK_SCHEME(scheme) {
    if (!Array.isArray(scheme))
      Throw.error('Matrix', 'Scheme', 'must be an array type');
    if (scheme.length < 2)
      Throw.error('Matrix', 'Scheme', 'must contain at least 2 rows');

    const cellNumber = scheme[0].length;
    if (!cellNumber)
      Throw.error(
        'Matrix',
        'Scheme',
        'unable to determine the number of cells'
      );

    scheme.forEach((row, i) => {
      if (!Array.isArray(row))
        Throw.error('Matrix', 'Scheme', `[${i}] must must be an array`);
      if (row.length < 2)
        Throw.error('Matrix', 'Scheme', `[${i}] must contain at least 2 cells`);
      if (row.length !== cellNumber)
        Throw.error('Matrix', 'Scheme', `[${i}] cell number must be equal`);
    });
  }
}

class Canvas {
  constructor(element, params = Canvas.defaultParams) {
    Canvas.#CHECK_ELEMENT(element);

    this.element = element;
    this.context = element.getContext('2d');
    this.width = params.width;
    this.height = params.height;
    this.scale = params.scale;
    this.bgColor = params.bgColor;

    this.setScale(this.scale);
    this.clear();
  }

  clear() {
    this.context.fillStyle = this.bgColor;
    this.context.fillRect(0, 0, this.width, this.height);
  }

  setScale(scale = 1) {
    this.context.scale(scale, scale);
  }

  static defaultParams = {
    width: 20,
    height: 20,
    scale: 1,
    bgColor: '#252525',
  };

  static #CHECK_ELEMENT(element) {
    if (!element instanceof HTMLCanvasElement)
      Throw.error('Canvas', 'Element', 'Not a canvas HTML element');
  }
}

const gameCanvas = new Canvas(elements.gameDisplay, {
  width: 12,
  height: 20,
  scale: 20,
});

class Cell {
  constructor(size = new Vec2(2, 2), offset = new Vec2()) {
    this.randomColor();
    this.size = size;
    this.offset = offset;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.offset.x, this.offset.y, this.size.x, this.size.y);
    console.log('[cell] draw!');
  }

  randomColor() {
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}

let cell = new Cell();

cell.draw(gameCanvas.context);
