const { arena } = require('../../../static/config.json');

class Player {
  constructor(tetromino) {
    this.tetromino = tetromino;
    this.pos = { x: Player.posX, y: 0 };
    this.rot = 0;
  }

  left() {
    this.pos.x--;
  }

  right() {
    this.pos.x++;
  }

  up() {
    this.pos.y--;
  }

  down() {
    this.pos.y++;
  }

  rotateCW() {
    this.rot++;
    if (this.rot > 3) this.rot = 0;
    this.tetromino.rotate();
  }

  rotateCCW() {
    this.rot--;
    if (this.rot < 0) this.rot = 3;
    this.tetromino.rotate(-1);
  }

  drop(collide = () => true) {
    while (!collide()) this.down();
    this.up();
  }

  reset(tetromino) {
    this.tetromino = tetromino;
    this.pos = { x: Player.posX, y: 0 };
    this.rot = 0;
  }

  static posX = (arena.width / 2) | 0;
}

module.exports = Player;
