const colors = require('../../static/colors.json');

class Canvas {
  constructor(ref, options = Canvas.#defaultOptions) {
    this.element = ref;
    this.context = this.element.getContext('2d');
    this.colors = colors;
    this.width = this.element.width;
    this.height = this.element.height;
    this.scale = options.scale;
    this.context.scale(this.scale, this.scale);

    this.clear();
  }

  clear() {
    this.context.fillStyle = this.colors[0];
    this.context.fillRect(0, 0, this.width, this.height);
  }

  static #defaultOptions = {
    scale: 20,
  };
}

module.exports = Canvas;
