const Matrix = require('./Matrix');

let matrix;
const width = 3;
const height = 5;

beforeEach(() => {
  matrix = new Matrix(width, height);
});

test('returns an object', () => {
  expect(typeof matrix).toBe('object');
});

test('has `Array` as a parent class in the prototype chain', () => {
  expect(Array.prototype.isPrototypeOf(matrix)).toBeTruthy();
});

describe('has a structure of a 2D matrix', () => {
  const errorMessage = 'Cannot be smaller than 2x2.';

  test('has the specified width', () => {
    matrix.forEach(row => expect(row.length).toBe(width));
  });
  test('has the specified height', () => {
    expect(matrix.length).toBe(height);
  });
  test('returns a 2x2 matrix by default', () => {
    matrix = new Matrix();
    expect(matrix.length).toBe(2);
    matrix.forEach(row => expect(row.length).toBe(2));
  });
  test('throws an error if the width or height are smaller than 2', () => {
    expect(() => new Matrix(1, 1)).toThrow(errorMessage);
  });
  test("doesn't throw an error if the width or height are 2 or greater", () => {
    expect(() => new Matrix(2, 2)).not.toThrow(errorMessage);
    expect(() => new Matrix(10, 15)).not.toThrow(errorMessage);
  });
  test('is filled with zeros', () => {
    expect(matrix.length).toBe(height);
    matrix.forEach(element => {
      expect(element.length).toBe(width);
      element.forEach(value => {
        expect(value).toBe(0);
      });
    });
  });
});

describe('can compare the instance with another matrix', () => {
  test('throws an error if the argument not a Matrix instance', () => {
    expect(() => matrix.equals('string')).toThrow(
      'You must provide an instance of Matrix.'
    );
  });

  test("doesn't throw an error if the argument is a Matrix instance", () => {
    expect(() => matrix.equals(new Matrix(2, 4))).not.toThrow(
      'You must provide an instance of Matrix'
    );
  });

  test('returns true if they are equal', () => {
    const anotherMatrix = new Matrix(3, 5);
    expect(matrix.equals(anotherMatrix)).toBe(true);
  });

  test('returns false if they are not equal', () => {
    const anotherMatrix = new Matrix(2, 6);
    expect(matrix.equals(anotherMatrix)).toBe(false);
  });
});

describe('can create the instance from an array', () => {
  const array = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  test('throws an error if the argument is not an Array instance', () => {
    expect(() => Matrix.fromArray('string')).toThrow(
      'You must provide an array.'
    );
  });
  test("doesn't throw an error if the argument is an Array instance", () => {
    expect(() => Matrix.fromArray(array)).not.toThrow(
      'You must provide an array.'
    );
  });
  test('throws an error if the lengths of all rows are not identical', () => {
    const irregularArray = [
      [0, 0],
      [0, 0, 0],
    ];
    expect(() => Matrix.fromArray(irregularArray)).toThrow(
      'All rows must have the same length.'
    );
  });
  test('returns an instance', () => {
    expect(Matrix.fromArray(array)).toBeInstanceOf(Matrix);
  });
});

describe('can rotate the matrix CW and CCW', () => {
  test('throws an error if the direction is in wrong format', () => {
    expect(() => matrix.rotate(0)).toThrow(
      'You must provide any positive or negative number except 0.'
    );
    expect(() => matrix.rotate('2')).toThrow(
      'You must provide any positive or negative number except 0.'
    );
  });

  test('can rotate 3x3 matrix CW', () => {
    const initial = [
      [1, 2, 3],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const rotated = [
      [0, 0, 1],
      [0, 0, 2],
      [0, 0, 3],
    ];

    matrix = Matrix.fromArray(initial);
    const result = Matrix.fromArray(rotated);

    matrix.rotate();

    expect(matrix.equals(result)).toBe(true);
  });

  test('can rotate 3x3 matrix CW twice', () => {
    const initial = [
      [1, 2, 3],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const rotated = [
      [0, 0, 0],
      [0, 0, 0],
      [3, 2, 1],
    ];

    matrix = Matrix.fromArray(initial);
    const result = Matrix.fromArray(rotated);

    matrix.rotate();
    matrix.rotate();

    expect(matrix.equals(result)).toBe(true);
  });

  test('can rotate 2x5 matrix CW', () => {
    const initial = [
      [1, 2],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    const rotated = [
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 2],
    ];

    matrix = Matrix.fromArray(initial);
    const result = Matrix.fromArray(rotated);

    matrix.rotate();

    expect(matrix.equals(result)).toBe(true);
  });

  test('can rotate 2x5 matrix CW twice', () => {
    const initial = [
      [1, 2],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    const rotated = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [2, 1],
    ];

    matrix = Matrix.fromArray(initial);
    const result = Matrix.fromArray(rotated);

    matrix.rotate();
    matrix.rotate();

    expect(matrix.equals(result)).toBe(true);
  });

  test('can rotate 2x5 matrix CCW', () => {
    const initial = [
      [1, 2],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    const rotated = [
      [2, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
    ];

    matrix = Matrix.fromArray(initial);
    const result = Matrix.fromArray(rotated);

    matrix.rotate(-1);

    expect(matrix.equals(result)).toBe(true);
  });

  test('can rotate 2x5 matrix CCW twice', () => {
    const initial = [
      [1, 2],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    const rotated = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [2, 1],
    ];

    matrix = Matrix.fromArray(initial);
    const result = Matrix.fromArray(rotated);

    matrix.rotate(-1);
    matrix.rotate(-1);

    expect(matrix.equals(result)).toBe(true);
  });
});
