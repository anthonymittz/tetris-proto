const Game = require('./main/game/Game');

class Tetris {
  constructor(props = Tetris.#defaultProps) {
    this.isPaused = false;
    this.canvas = props.canvas;
    this.overlay = props.overlay;
    this.game = new Game();
    this.lastRendered = 0;
    this.stepCounter = 0;
    this.interval = 1000; //ms
  }

  run() {
    this.update();
  }

  update(time = 0) {
    this.isPaused || this.tryToStep(time);
    requestAnimationFrame(time => this.update(time));
  }

  tryToStep(time) {
    this.stepCounter += time - this.lastRendered;
    this.lastRendered = time;
    if (this.stepCounter > this.interval) this.step();
  }

  step() {
    // this.game.player.down();
    console.log('[Tetris] stop');
    this.stepCounter = 0;
  }

  pause() {}

  static #defaultProps = {
    canvas: { game: null, preview: null },
    overlay: null,
  };
}

module.exports = Tetris;
