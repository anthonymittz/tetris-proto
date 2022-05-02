class Controls {
  constructor(tetris) {
    this.tetris = tetris;
    this.actions = tetris.game.actions;
    this.bindingList = Object.keys(this.bindings);
  }

  press(event) {
    this.bindingList.forEach(
      binding =>
        this.bindings[binding].keys.includes(event.code) &&
        this.bindings[binding].action(event)
    );
  }

  bindings = {
    left: {
      keys: ['KeyA', 'ArrowLeft'],
      action: () => this.tetris.isPaused || this.actions.move(-1),
    },
    right: {
      keys: ['KeyD', 'ArrowRight'],
      action: () => this.tetris.isPaused || this.actions.move(1),
    },
    drop: {
      keys: ['KeyS', 'ArrowDown'],
      action: () => this.tetris.isPaused || this.actions.drop(),
    },
    rotateCW: {
      keys: ['KeyE', 'ArrowUp'],
      action: () => this.tetris.isPaused || this.actions.rotate(-1),
    },
    rotateCCW: {
      keys: ['KeyQ'],
      action: () => this.tetris.isPaused || this.actions.rotate(1),
    },
    skip: {
      keys: ['Space'],
      action: () => this.tetris.isPaused || this.actions.skip(),
    },
    pause: {
      keys: ['Escape', 'Enter'],
      action: e => {
        e.preventDefault();
        this.tetris.pause();
      },
    },
    restart: {
      keys: ['KeyR'],
      action: () => this.tetris.restart(),
    },
  };
}

module.exports = Controls;
