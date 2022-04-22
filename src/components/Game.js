class Game {
  constructor() {
    this.score = 0;
    this.tetrominos = {
      current: 1,
      next: 5,
    };
    this.player = {
      pos: { x: 0, y: 0 },
      rot: 0,
    };
    this.isPaused = true;
  }
}

export default Game;
