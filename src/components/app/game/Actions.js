class Actions {
  constructor(arena, player, progress) {
    this.arena = arena;
    this.player = player;
    this.progress = progress;
  }

  drop() {
    this.player.down();
    if (this.arena.collide(this.player.tetromino, this.player.pos)) {
      this.player.up();
      this.progress();
    }
  }

  rotate(direction) {
    direction > 0 ? this.player.rotateCW() : this.player.rotateCCW();
    console.log('[Actions] rotate', direction > 0 ? 'cw' : 'ccw');
  }

  move(direction) {
    direction > 0 ? this.player.right() : this.player.left();
    if (this.arena.collide(this.player.tetromino, this.player.pos)) {
      direction > 0 ? this.player.left() : this.player.right();
    }
  }

  skip() {
    console.log('[Actions] skip');
  }
}

module.exports = Actions;
