class Matrix extends Array {
  constructor(width, height) {
    super();
    while (height--) this.push(new Array(width).fill(0));
  }
}

module.exports = Matrix;
