const Player = require('../../entities/player/Player');

class Game {
  constructor() {
    this.score = 0;
    this.player = new Player();
  }
}

module.exports = Game;
