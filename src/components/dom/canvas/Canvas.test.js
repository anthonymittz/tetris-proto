const Canvas = require('./Canvas');

let canvasElement = document.createElement('canvas');
canvasElement.width = 10;
canvasElement.height = 10;

let canvas = new Canvas(canvasElement);
beforeEach(() => (canvas = new Canvas(canvasElement)));

describe('A Canvas class', () => {
  test('returns an object', () => expect(typeof canvas).toBe('object'));
  test('returns an instance', () => expect(canvas).toBeInstanceOf(Canvas));
});
