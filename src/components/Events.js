//

class Events {
  constructor() {}

  register() {
    window.addEventListener('keydown', this.#keyDown);
    window.addEventListener('beforeunload', this.#beforeUnload);
  }

  unregister() {
    window.removeEventListener('keydown', this.#keyDown);
    window.addEventListener('beforeunload', this.#beforeUnload);
  }

  #keyDown(event) {
    for (var type in controls)
      controls[type].keys.forEach(
        key => event.code === key && controls[type].action()
      );
  }

  #beforeUnload() {
    console.log('[Events] unload');
  }
}

module.exports = Events;
