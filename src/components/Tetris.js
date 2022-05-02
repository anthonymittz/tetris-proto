const Game = require('./app/game/Game');
const Overlay = require('./dom/Overlay');
const Renderer = require('./app/drawing/Renderer');
const elements = require('./dom/elements');

class Tetris {
  constructor() {
    this.overlay = new Overlay(elements.overlay, () => this.pause());

    this.game = new Game();
    this.renderer = new Renderer(this.game);

    this.isPaused = true;
    this.lastRendered = 0; //ms
    this.stepCounter = 0; //ms
    this.interval = 1000; //ms

    this.restart();
  }

  run(time = 0) {
    this.isPaused || this.#tryToStep(time);
    this.renderer.draw();

    requestAnimationFrame(time => this.run(time));
  }

  pause() {
    if (this.isPaused) {
      this.isPaused = false;
      this.overlay.hide();
    } else {
      this.isPaused = true;
      this.overlay.showPauseScreen();
    }
  }

  restart() {
    this.isPaused = true;
    this.lastRendered = 0; //ms
    this.stepCounter = 0; //ms
    this.interval = 1000; //ms

    this.game = new Game();
    this.overlay.showNewGameScreen();
  }

  finish() {
    this.isPaused = true;
    this.game.finish();
    this.overlay.showFinishScreen();
  }

  #tryToStep(time) {
    this.stepCounter += time - this.lastRendered;
    this.lastRendered = time;
    this.stepCounter > this.interval && this.#step();
  }

  #step() {
    this.game.actions.drop();
    this.stepCounter = 0;
    elements.score.innerText = this.game.player.pos.y;
  }
}

module.exports = Tetris;
