// general
const Tetris = require('./components/Tetris');
const Storage = require('./components/main/storage/Storage');
const Controls = require('./components/main/controls/Controls');
const Events = require('./components/main/events/Events');
// drawing
const Canvas = require('./components/dom/canvas/Canvas');
const Elements = require('./components/dom/Elements');
const Overlay = require('./components/dom/Overlay');
// assets
const colors = require('./static/colors.json');

function main() {
  const elements = new Elements();

  const tetrisProps = {
    canvas: {
      game: new Canvas(elements.game, { colors }),
      preview: new Canvas(elements.preview, { colors }),
    },
    overlay: new Overlay(elements.overlay),
  };

  const tetris = new Tetris(tetrisProps);
  const controls = new Controls(tetris);
  const events = new Events(controls);

  events.register();
  tetris.run();
}

main();
