const Actions = require('./Actions');
const Arena = require('../../entities/arena/Arena');
const Player = require('../../entities/player/Player');
const Bag = require('../../entities/bag/Bag');

class Game {
  constructor() {
    this.score = 0;
    this.arena = new Arena();

    this.bag = new Bag();
    const currentTetromino = this.bag.pull();
    this.nextTetromino = this.bag.next();

    console.log(this.nextTetromino);

    this.player = new Player(currentTetromino);

    this.actions = new Actions(this.arena, this.player, () => this.progress());
  }

  addScore() {
    this.score += 10;
  }

  progress() {
    this.player.reset(this.nextTetromino);
    this.nextTetromino = this.bag.pull();
    this.addScore();
  }

  resume() {
    console.log('[Game] resume');
  }

  finish() {
    console.log('[Game] Finished', this.score);
    this.summarize();
  }

  summarize() {
    console.log('[Game] summarize');
  }
}

module.exports = Game;
