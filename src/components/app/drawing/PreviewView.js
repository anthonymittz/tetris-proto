class PreviewView {
  constructor(nextTetromino, context, scale, colors) {
    this.tetromino = nextTetromino;
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
      this.tetromino[0].length,
      this.tetromino.length
    );

    this.tetromino.forEach((row, y) =>
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

  #offset(height, width) {
    return {
      x: this.center.x - ((width / 2) | 0),
      y: this.center.y - ((height / 2) | 0),
    };
  }
}

module.exports = PreviewView;
