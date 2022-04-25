class Player {
  constructor() {
    this.pos = { x: 0, y: 0 };
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
  }

  rotateCCW() {
    this.rot--;
    if (this.rot < 0) this.rot = 3;
  }

  drop(collide = () => true) {
    while (!collide()) this.down();
    this.up();
  }
}

module.exports = Player;
