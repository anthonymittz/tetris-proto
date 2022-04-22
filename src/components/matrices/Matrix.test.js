const Matrix = require('./Matrix');

let matrix;
const width = 3;
const height = 5;

beforeAll(() => {
  matrix = new Matrix(width, height);
});

test('returns an object', () => {
  expect(typeof matrix).toBe('object');
});

test('has `Array` in prototype chain', () => {
  expect(Array.prototype.isPrototypeOf(matrix)).toBeTruthy();
});

test('has the structure of a 2D matrix filled with zeros', () => {
  expect(matrix.length).toBe(height);
  matrix.forEach(element => {
    expect(element.length).toBe(width);
    element.forEach(value => {
      expect(value).toBe(0);
    });
  });
});
