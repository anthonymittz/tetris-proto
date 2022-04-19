function Tetromino(type) {
  const tetromino = [];
  Array.prototype.push().apply(this, tetromino);
}

Tetromino.prototype = Object.create(Matrix.prototype);
Tetromino.prototype.constructor = Matrix;

export default Tetromino;
