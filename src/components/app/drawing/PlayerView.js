class PlayerView {
  constructor(player, context, colors) {
    this.player = player;
    this.context = context;
    this.colors = colors;
  }

  draw() {
    this.player.tetromino.forEach((row, y) =>
      row.forEach((value, x) => {
        if (value !== 0) {
          this.context.fillStyle = this.colors[value];
          this.context.fillRect(
            x + this.player.pos.x,
            y + this.player.pos.y,
            1,
            1
          );
        }
      })
    );
  }
}

module.exports = PlayerView;
