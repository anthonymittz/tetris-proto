class Events {
  constructor(controls) {
    this.controls = controls;
  }

  register() {
    window.addEventListener('keydown', e => this.keyDown(e.code));
    window.addEventListener('beforeunload', () => this.beforeUnload);
  }

  unregister() {
    window.removeEventListener('keydown', this.keyDown);
    window.addEventListener('beforeunload', this.beforeUnload);
  }

  keyDown(code) {
    this.controls.press(code);
  }

  beforeUnload() {
    console.log('[Events] unload');
  }
}

module.exports = Events;
