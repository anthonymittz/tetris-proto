const Arena = require('./Arena');

let arena;

beforeEach(() => {
  arena = new Arena();
});

test('returns an object', () => {
  expect(typeof arena).toBe('object');
});
