class Canvas {
  constructor(ref, colors = ['#f1f1f1']) {
    this.element = ref;
    this.context = this.element.getContext('2d');
    this.colors = colors;
    this.width = this.element.width;
    this.height = this.element.height;

    this.clear();
  }

  clear() {
    this.context.fillStyle = this.colors[0];
    this.context.fillRect(0, 0, this.width, this.height);
  }
}

module.exports = Canvas;
