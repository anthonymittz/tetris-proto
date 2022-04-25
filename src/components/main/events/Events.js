class Events {
  constructor(controls) {
    this.controls = controls;
  }

  register() {
    window.addEventListener('keydown', e => this.keyDown(e.code));
    window.addEventListener('beforeunload', () => this.beforeUnload());
  }

  unregister() {
    window.removeEventListener('keydown', e => this.keyDown(e.code));
    window.addEventListener('beforeunload', () => this.beforeUnload());
  }

  keyDown(code) {
    this.controls.press(code);
  }

  beforeUnload() {}
}

module.exports = Events;
