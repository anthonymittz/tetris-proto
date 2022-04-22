class Player {
  constructor() {
    this.pos = { x: 0, y: 0 };
    this.rot = 0;
  }

  move(direction) {
    if (direction > 0) {
      console.log('[player] Move right');
    } else {
      console.log('[player] Move left');
    }
  }

  rotate(direction) {
    if (direction > 0) {
      console.log('[player] Rotate CW');
    } else {
      console.log('[player] Rotate CCW');
    }
  }

  drop() {
    console.log('[player] Drop');
  }

  skip() {
    console.log('[player] Skip');
  }
}

export default Player;
