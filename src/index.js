// general
const Game = require('./components/Game');
const Storage = require('./components/Storage');
const Controls = require('./components/Controls');
const Events = require('./components/Events');
// drawing
const Canvas = require('./components/dom/Canvas');
const Elements = require('./components/dom/Elements');
const Overlay = require('./components/dom/Overlay');
// mechanics
const Player = require('./components/player/Player');
// assets
const colors = require('./static/colors.json');

function main() {
  const elements = new Elements();
  const gameCanvas = new Canvas(elements.game, colors);
  const previewCanvas = new Canvas(elements.preview, colors);

  const game = new Game();
}

main();
