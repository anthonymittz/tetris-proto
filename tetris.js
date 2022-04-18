/* State */

const colors = [
  '#252525',
  '#e65e5e',
  '#db7944',
  '#c5923a',
  '#a9a848',
  '#8ab968',
  '#6ac792',
  '#4dd1bd',
];

/* Entities: Tetris */
function Tetris() {
  this.lastTime = 0;
  this.dropCounter = 0;
  this.dropInterval = 1000; //ms
  this.paused = true;
}
Tetris.prototype.update = function (time = 0) {
  if (!this.paused) {
    let deltaTime = time - this.lastTime;
    this.lastTime = time;
    this.dropCounter += deltaTime;
    if (this.dropCounter > this.dropInterval) player.drop();

    canvas.draw();
  }
  requestAnimationFrame(time => this.update(time));
};
Tetris.prototype.reset = function () {
  arena.clear();
  player.resetScore();
  player.reset();
};
Tetris.prototype.pause = function () {
  this.paused = !this.paused;
};

/* Entities: Player */
function Player() {
  this.score = 0;
  this.shape = new Tetromino();
  this.pos = {
    x: 0,
    y: 0,
  };
}
Player.prototype.reset = function () {
  this.shape = new Tetromino();
  this.pos = { x: ((arena[0].length / 2) | 0) - ((this.shape[0].length / 2) | 0), y: 0 };
  if (arena.collide(this)) tetris.reset();
};
Player.prototype.drop = function () {
  this.pos.y++;
  if (arena.collide(this)) {
    this.pos.y--;
    arena.merge(this);
    arena.sweep();
    this.reset();
  }
  tetris.dropCounter = 0;
};
Player.prototype.skip = function () {
  while (!arena.collide(this)) this.pos.y++;
  this.pos.y--;
  arena.merge(this);
  arena.sweep();
  this.reset();
};
Player.prototype.move = function (dir) {
  this.pos.x += dir;
  if (arena.collide(this)) this.pos.x -= dir;
};
Player.prototype.rotate = function (dir) {
  const initialX = this.pos.x;
  let offset = 1;
  const reverseOffset = () => (offset = -(offset + (offset > 0 ? 1 : -1)));

  this.shape.rotate(dir);

  while (arena.collide(this)) {
    this.pos.x += offset;
    reverseOffset();
    if (offset > this.shape[0].length) {
      this.shape.rotate(-dir);
      player.pos.x = initialX;
      return;
    }
  }
};
Player.prototype.addScore = function (amount) {
  this.score += amount * 10;
  this.updateScore();
};
Player.prototype.resetScore = function () {
  this.score = 0;
  this.updateScore();
};
Player.prototype.updateScore = function () {
  score.innerText = this.score;
};

/* Entities: Matrix */
function Matrix(w, h) {
  const matrix = [];
  while (h--) matrix.push(new Array(w).fill(0));
  Array.prototype.push.apply(this, matrix);
}
Matrix.prototype = Object.create(Array.prototype);
Matrix.prototype.constructor = Array;
Matrix.prototype.draw = function (offset) {
  this.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        canvas.context.fillStyle = colors[value];
        canvas.context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
};
Matrix.prototype.collide = function (player) {
  const [m, o] = [player.shape, player.pos];
  for (let y = 0; y < m.length; y++) {
    for (let x = 0; x < m[y].length; x++) {
      if (m[y][x] !== 0 && (this[y + o.y] && this[y + o.y][x + o.x]) !== 0) return true;
    }
  }
  return false;
};
Matrix.prototype.merge = function (player) {
  player.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        this[y + player.pos.y][x + player.pos.x] = value;
      }
    });
  });
};
Matrix.prototype.clear = function () {
  this.forEach(row => row.fill(0));
};
Matrix.prototype.sweep = function () {
  let rowCount = 1;

  outer: for (let y = this.length - 1; y > 0; --y) {
    for (let x = 0; x < this[y].length; ++x) {
      if (this[y][x] === 0) continue outer;
    }

    const row = this.splice(y, 1)[0].fill(0);
    this.unshift(row);
    ++y;
    player.addScore(rowCount);
    rowCount *= 2;
  }
};

/* Entities: Tetromino */
function Tetromino(type) {
  const tetromino = this.check(type) ? this.get(type) : this.random();
  Array.prototype.push.apply(this, tetromino);
}
Tetromino.prototype = Object.create(Matrix.prototype);
Tetromino.prototype.constructor = Matrix;
Tetromino.prototype.types = 'ILJOTSZ';
Tetromino.prototype.check = function (type) {
  return this.types.includes(type);
};
Tetromino.prototype.get = function (type) {
  switch (type) {
    case 'I':
      return [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
      ];
    case 'L':
      return [
        [0, 2, 0],
        [0, 2, 0],
        [0, 2, 2],
      ];
    case 'J':
      return [
        [0, 3, 0],
        [0, 3, 0],
        [3, 3, 0],
      ];
    case 'O':
      return [
        [4, 4],
        [4, 4],
      ];
    case 'T':
      return [
        [0, 0, 0],
        [5, 5, 5],
        [0, 5, 0],
      ];
    case 'S':
      return [
        [0, 6, 6],
        [6, 6, 0],
        [0, 0, 0],
      ];
    case 'Z':
      return [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0],
      ];
    default:
      throw new Error(`Tetromino of type '${type}' doesn't exist.`);
  }
};
Tetromino.prototype.random = function () {
  const type = this.types[(this.types.length * Math.random()) | 0];
  return this.get(type);
};
Tetromino.prototype.rotate = function (dir) {
  const rotated = this[0].map((_, index) => this.map(row => row[index]));
  dir > 0 ? rotated.forEach(row => row.reverse()) : rotated.reverse();
  this.splice(0, this.length, ...rotated);
};

/* Entities: Canvas */
function Canvas(element) {
  this.canvas = element;
  this.context = this.canvas.getContext('2d');
  this.scale = 20;

  this.context.scale(this.scale, this.scale);
  this.clear();
}
Canvas.prototype.clear = function () {
  this.context.fillStyle = colors[0];
  this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
};
Canvas.prototype.draw = function () {
  this.clear();
  arena.draw({ x: 0, y: 0 });
  player.shape.draw(player.pos);
};

/* Event Handlers */
document.addEventListener('keydown', e => {
  switch (e.code) {
    case 'ArrowLeft':
    case 'KeyA':
      !tetris.paused && player.move(-1);
      break;
    case 'ArrowRight':
    case 'KeyD':
      !tetris.paused && player.move(1);
      break;
    case 'ArrowDown':
    case 'KeyS':
      !tetris.paused && player.drop();
      break;
    case 'KeyQ':
      !tetris.paused && player.rotate(-1);
      break;
    case 'ArrowUp':
    case 'KeyE':
      !tetris.paused && player.rotate(1);
      break;
    case 'Space':
      !tetris.paused && player.skip();
      break;
    case 'Escape':
    case 'Enter':
      tetris.pause();
      break;
  }
});

/* Instantiation & Execution */
const tetris = new Tetris();
const canvas = new Canvas(document.getElementById('tetris'));
const player = new Player();
const arena = new Matrix(12, 20);
const score = document.getElementById('score');

player.reset();
tetris.update();
