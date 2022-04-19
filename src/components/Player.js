function Player() {
  this.pos = { x: 0, y: 0 };
  this.rot = 0;
}

Player.prototype.move = function (direction) {
  if (direction > 0) {
    console.log('[player] Move right');
  } else {
    console.log('[player] Move left');
  }
};

Player.prototype.rotate = function (direction) {
  if (direction > 0) {
    console.log('[player] Rotate CW');
  } else {
    console.log('[player] Rotate CCW');
  }
};

Player.prototype.drop = function () {
  console.log('[player] Drop');
};

Player.prototype.skip = function () {
  console.log('[player] Skip');
};

export default Player;
