const Game = require('./Game');

let game = new Game();

beforeEach(() => (game = new Game()));

test('will generate a new set of tetrominoes if the existing set runs out', () => {
  let length = 7;
  while (length > 2) {
    expect(game.bag.length).toBe(length);
    game.step();
    length--;
  }
  expect(game.bag.length).toBe(9);
});
