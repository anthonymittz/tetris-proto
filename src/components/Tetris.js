const Game = require('./main/game/Game');

class Tetris {
  constructor(props = Tetris.#defaultProps) {
    this.isPaused = true;
    this.canvas = props.canvas;
    this.overlay = props.overlay;
    this.game = new Game();
  }

  run() {
    console.log('[Tetris] start');
  }

  #update() {
    console.log('[Tetris] update');
  }

  pause() {
    console.log('[Tetris] pause');
  }

  static #defaultProps = {
    canvas: { game: null, preview: null },
    overlay: null,
  };
}

module.exports = Tetris;
