class PreviewView {
  constructor(game, context, scale, colors) {
    this.game = game;
    this.context = context;
    this.colors = colors;

    this.width = this.context.canvas.clientWidth;
    this.height = this.context.canvas.clientHeight;
    this.scale = scale;

    this.center = {
      x: (this.width / this.scale / 2) | 0,
      y: (this.height / this.scale / 2) | 0,
    };
  }

  draw() {
    this.clear();
    const offset = this.#offset(
      this.game.nextTetromino.center.x,
      this.game.nextTetromino.center.y
    );

    this.game.nextTetromino.forEach((row, y) =>
      row.forEach((value, x) => {
        if (value !== 0) {
          this.context.fillStyle = this.colors[value];
          this.context.fillRect(x + offset.x, y + offset.y, 1, 1);
        }
      })
    );
  }

  clear() {
    this.context.fillStyle = this.colors[0];
    this.context.fillRect(0, 0, this.width, this.height);
  }

  #offset(x, y) {
    return {
      x: this.center.x - x,
      y: this.center.y - y,
    };
  }
}

module.exports = PreviewView;
