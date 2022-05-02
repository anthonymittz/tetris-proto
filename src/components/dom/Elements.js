const colors = require('../../static/colors.json');
const Canvas = require('./Canvas');

class Elements {
  constructor() {
    this.score = document.getElementById('score');
    this.stopwatch = document.getElementById('stopwatch');
    this.overlay = document.getElementById('overlay');
    this.pause = document.getElementById('pause');
    this.controls = document.getElementById('controls');

    this.gameCanvas = new Canvas(document.getElementById('game'), {
      colors,
      scale: 20,
    });

    this.previewCanvas = new Canvas(document.getElementById('preview'), {
      colors,
      scale: 5,
    });
  }
}

const elements = new Elements();

module.exports = elements;
