class Events {
  constructor(controls) {
    this.controls = controls;
  }

  register() {
    window.addEventListener('keydown', e => this.keyDown(e));
    window.addEventListener('beforeunload', () => this.beforeUnload());
  }

  unregister() {
    window.removeEventListener('keydown', e => this.keyDown(e));
    window.addEventListener('beforeunload', () => this.beforeUnload());
  }

  keyDown(event) {
    this.controls.press(event);
  }

  beforeUnload() {}
}

module.exports = Events;
