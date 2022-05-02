class ArenaView {
  constructor(arena, context, colors) {
    this.arena = arena;
    this.context = context;
    this.colors = colors;
  }

  draw() {
    this.clear();
    this.arena.forEach((row, y) =>
      row.forEach((value, x) => {
        if (value !== 0) {
          this.context.fillStyle = this.colors[value];
          this.context.fillRect(x, y, 1, 1);
        }
      })
    );
  }

  clear() {
    this.context.fillStyle = this.colors[0];
    this.context.fillRect(0, 0, this.arena[0].length, this.arena.length);
  }
}

module.exports = ArenaView;
