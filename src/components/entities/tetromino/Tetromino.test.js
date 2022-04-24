const Tetromino = require('./Tetromino');

let tetromino;

beforeEach(() => {
  tetromino = new Tetromino();
});

test('returns an object', () => {
  expect(typeof tetromino).toBe('object');
});

test('throws an error if provided with the unexisting type', () => {
  expect(() => new Tetromino('±')).toThrow();
});
