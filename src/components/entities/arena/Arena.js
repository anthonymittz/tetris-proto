const Matrix = require('../matrix/Matrix');

class Arena extends Matrix {
  constructor(width = 12, height = 20) {
    super(width, height);
  }

  sweep() {
    console.log('[arena] sweep');
  }

  reset() {
    console.log('[arena] reset');
  }
}

module.exports = Arena;
