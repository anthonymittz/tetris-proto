class Overlay {
  constructor(ref) {
    this.element = ref;
    this.state = 'new'; // 'resume', 'options', 'controls', 'stats'
  }
}

module.exports = Overlay;
