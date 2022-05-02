const Tetris = require('./components/Tetris');
const Storage = require('./components/app/storage/Storage');
const Controls = require('./components/app/controls/Controls');
const Events = require('./components/app/events/Events');

function main() {
  const tetris = new Tetris();
  const controls = new Controls(tetris);
  const events = new Events(controls);

  events.register();
  tetris.run();
}

main();
