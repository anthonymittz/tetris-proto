function Matrix(width, height) {
  Array.prototype.push.apply(this, Matrix.create(width, height));
}

Matrix.create = function (w, h) {
  const matrix = [];
  while (h--) matrix.push(new Array(w).fill(0));
};

export default Matrix;
