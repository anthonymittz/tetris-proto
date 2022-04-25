const Player = require('./Player');

let player = new Player();

beforeEach(() => {
  player = new Player();
});

describe('The class', () => {
  test('returns an object', () => expect(typeof player).toBe('object'));

  test('returns an instance of itself', () =>
    expect(player).toBeInstanceOf(Player));
});

describe('The player can move', () => {
  test('to the left', () => {
    player.left();
    expect(player.pos.x).toBe(-1);
    player.left();
    expect(player.pos.x).toBe(-2);
  });

  test('to the right', () => {
    player.right();
    expect(player.pos.x).toBe(1);
    player.right();
    expect(player.pos.x).toBe(2);
  });

  test('down', () => {
    player.down();
    expect(player.pos.y).toBe(1);
    player.down();
    expect(player.pos.y).toBe(2);
  });

  test('up', () => {
    player.up();
    expect(player.pos.y).toBe(-1);
    player.up();
    expect(player.pos.y).toBe(-2);
  });
});

describe('The player can rotate in 4 directions', () => {
  test('clockwise', () => {
    player.rotateCW();
    expect(player.rot).toBe(1);
    player.rotateCW();
    expect(player.rot).toBe(2);
    player.rotateCW();
    expect(player.rot).toBe(3);
    player.rotateCW();
    expect(player.rot).toBe(0);
  });
  test('counter-clockwise', () => {
    player.rotateCCW();
    expect(player.rot).toBe(3);
    player.rotateCCW();
    expect(player.rot).toBe(2);
    player.rotateCCW();
    expect(player.rot).toBe(1);
    player.rotateCCW();
    expect(player.rot).toBe(0);
  });
});
