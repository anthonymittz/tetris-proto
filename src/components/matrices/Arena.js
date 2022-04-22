import Matrix from './Matrix';

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

export default Arena;
