const Bag = require('./Bag');

let bag;

beforeEach(() => (bag = new Bag()));

describe('returns a collection of Tetrominoes', () => {
  test('returns an array', () => {
    expect(Array.isArray(bag)).toBe(true);
  });
  test('returns an array of 7 letters that symbolize the tetrominoes', () => {
    expect(bag.length).toBe(7);
    bag.forEach(tetromino => {
      expect(typeof tetromino).toBe('string');
      expect(tetromino.length).toBe(1);
    });
  });
});

describe('supports templates', () => {
  const a = 'TLJOIZS';
  const b = 'LJITZSO';
  const unknown = 'OP±$28=>';

  test('accepts the string of letters as a template', () => {
    bag = new Bag(a);
    const result = a.split('');
    expect(bag).toEqual(result);
  });

  test('throws an error if the template contains unknown types', () => {
    expect(() => new Bag(unknown)).toThrow();
  });

  test('returns the same elements in the same order for the same template', () => {
    expect(new Bag(a)).toEqual(new Bag(a));
  });

  test('returns different collections for the different templates', () => {
    expect(new Bag(a)).not.toEqual(new Bag(b));
  });
});

test('can compare two bags', () => {
  const a = new Bag('TLJOIZS');
  const b = new Bag('LJITZSO');
  const c = new Bag('LJITZSO');
  expect(a.equals(b)).toBe(false);
  expect(b.equals(c)).toBe(true);
});
