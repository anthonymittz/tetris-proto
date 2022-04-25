const Player = require('../../entities/player/Player');
const Bag = require('../../entities/bag/Bag');

class Game {
  constructor() {
    this.score = 0;
    this.player = new Player();
    this.bag = new Bag();
  }

  step() {
    this.bag.pull();
  }
}

module.exports = Game;
