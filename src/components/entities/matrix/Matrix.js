class Matrix extends Array {
  constructor(width = 2, height = 2, array) {
    super();
    if (!array) {
      Matrix.#checkWidthAndHeight(width, height);
      while (height--) this.push(new Array(width).fill(0));
    } else {
      height = array.length;
      let matrix = Matrix.fromArray(array);
      matrix.forEach(row => this.push(row));
    }
  }

  equals(matrix) {
    Matrix.#checkIfMatrix(matrix);
    if (matrix.length !== this.length) return false;
    matrix.every((row, h) => {
      row.every((value, w) => {
        if (!this[h][w] || this[h][w] !== value) return false;
      });
    });
    return true;
  }

  rotate(direction = 1) {
    Matrix.#checkDirection(direction);
    direction > 0 ? this.#rotateCW() : this.#rotateCCW();
  }

  width() {
    return this[0].length;
  }

  height() {
    return this.length;
  }

  #rotateCW() {
    const transposed = this.#transpose();
    transposed.forEach((_, h) => (this[h] = transposed[h].reverse()));

    this.#truncate(transposed.length);
  }

  #rotateCCW() {
    const transposed = this.#transpose();
    transposed.forEach((_, h) => (this[h] = transposed[h]));

    this.#truncate(transposed.length);
    this.reverse();
  }

  #transpose() {
    return this[0].map((_, index) => this.map(row => row[index]));
  }

  #truncate(length) {
    if (length < this.length) {
      const amount = this.length - length;
      this.splice(length, amount);
    }
  }

  static fromArray(array) {
    this.#checkIfArray(array);
    this.#checkArrayShape(array);

    const height = array.length;
    const width = array[0].length;
    const matrix = new Matrix(width, height);

    array.forEach((row, h) => {
      row.forEach((value, w) => {
        matrix[h][w] = value;
      });
    });
    return matrix;
  }
  static #checkIfArray(data) {
    if (data === undefined || Array.isArray(data) === false)
      throw new Error('You must provide an array.');
  }
  static #checkIfMatrix(data) {
    if (data === undefined || !(data instanceof Matrix))
      throw new Error('You must provide an instance of Matrix.');
  }
  static #checkWidthAndHeight(w, h) {
    if (w < 2 || h < 2) throw new Error('Cannot be smaller than 2x2.');
  }
  static #checkArrayShape(array) {
    let length = array[0].length;
    array.forEach(row => {
      if (row.length !== length)
        throw new Error('All rows must have the same length.');
    });
  }
  static #checkDirection(direction) {
    if (!direction || typeof direction !== 'number' || direction === 0)
      throw new Error(
        'You must provide any positive or negative number except 0.'
      );
  }
}

module.exports = Matrix;
