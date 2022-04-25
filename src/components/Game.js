const Player = require('./player/Player');

class Game {
  constructor(player) {
    this.score = 0;
    this.player = new Player();
    this.isPaused = true;
  }
}

module.exports = Game;
