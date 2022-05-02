const PlayerView = require('./PlayerView');
const ArenaView = require('./ArenaView');
const PreviewView = require('./PreviewView');

const elements = require('../../dom/elements');
const colors = require('../../../static/colors.json');

class Renderer {
  constructor(game) {
    this.arenaDrawer = new ArenaView(
      game.arena,
      elements.gameCanvas.context,
      colors
    );
    this.playerDrawer = new PlayerView(
      game.player,
      elements.gameCanvas.context,
      colors
    );
    this.previewDrawer = new PreviewView(
      game.nextTetromino,
      elements.previewCanvas.context,
      elements.previewCanvas.scale,
      colors
    );
  }

  draw() {
    this.arenaDrawer.draw();
    this.playerDrawer.draw();
    this.previewDrawer.draw();
  }
}

module.exports = Renderer;
