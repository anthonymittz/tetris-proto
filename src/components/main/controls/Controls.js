class Controls {
  constructor(tetris) {
    this.tetris = tetris;
    this.player = this.tetris.game.player;
    this.bindingList = Object.keys(this.bindings);
  }

  press(keyCode) {
    this.bindingList.forEach(
      binding =>
        this.bindings[binding].keys.includes(keyCode) &&
        this.bindings[binding].action()
    );
  }

  bindings = {
    left: {
      keys: ['KeyA', 'ArrowLeft'],
      action: () => this.player.left(),
    },
    right: {
      keys: ['KeyD', 'ArrowRight'],
      action: () => this.player.right(),
    },
    down: {
      keys: ['KeyS', 'ArrowDown'],
      action: () => this.player.down(),
    },
    rotateCW: {
      keys: ['KeyE', 'ArrowUp'],
      action: () => this.player.rotateCW(),
    },
    rotateCCW: {
      keys: ['KeyQ'],
      action: () => this.player.rotateCCW(),
    },
    skip: {
      keys: ['Space'],
      action: () => this.player.drop(),
    },
    pause: {
      keys: ['Escape', 'Enter'],
      action: () => this.tetris.pause(),
    },
  };
}

module.exports = Controls;
