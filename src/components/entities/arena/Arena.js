const Matrix = require('../matrix/Matrix');
const { arena } = require('../../../static/config.json');

class Arena extends Matrix {
  constructor(width = arena.width, height = arena.height) {
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
