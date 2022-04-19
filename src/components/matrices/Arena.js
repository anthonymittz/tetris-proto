function Arena(width = 12, height = 20) {
  const arena = new Matrix(width, height);
  Array.prototype.push.apply(this, arena);
}

Arena.prototype = Object.create(Matrix.prototype);
Arena.prototype.constructor = Matrix;

export default Arena;
