const Game = require('./main/game/Game');

class Tetris {
  constructor(props = Tetris.#defaultProps) {
    this.isPaused = false;
    this.canvas = props.canvas;
    this.overlay = props.overlay;
    this.game = new Game();
    this.lastRendered = 0;
    this.stepCounter = 0;
    this.stepInterval = 1000; //ms
  }

  run() {
    this.update();
  }

  update(time = 0) {
    if (!this.isPaused) this.tryToStep(time);
    requestAnimationFrame(time => this.update(time));
  }

  tryToStep(time) {
    const deltaTime = time - this.lastRendered;
    this.lastRendered = time;
    this.stepCounter += deltaTime;
    if (this.stepCounter > this.stepInterval) this.step();
  }

  step() {
    console.log('[Tetris] step');
    this.stepCounter = 0;
  }

  pause() {}

  static #defaultProps = {
    canvas: { game: null, preview: null },
    overlay: null,
  };
}

module.exports = Tetris;
