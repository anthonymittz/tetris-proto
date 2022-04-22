class Matrix extends Array {
  constructor(width, height) {
    Array.prototype.push.apply(this, Matrix.create(width, height));
  }

  static create(w, h) {
    const matrix = [];
    while (h--) matrix.push(new Array(w).fill(0));
  }
}

export default Matrix;
