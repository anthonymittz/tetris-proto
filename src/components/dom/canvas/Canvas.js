class Canvas {
  constructor(ref, options = Canvas.#defaultOptions) {
    this.element = ref;
    this.context = this.element.getContext('2d');
    this.colors = options.colors;
    this.width = this.element.width;
    this.height = this.element.height;
    this.scale = options.scale;

    this.clear();
  }

  clear() {
    this.context.fillStyle = this.colors[0];
    this.context.fillRect(0, 0, this.width, this.height);
  }

  static #defaultOptions = {
    colors: ['#F5CA7B'],
    scale: 20,
  };
}

module.exports = Canvas;
