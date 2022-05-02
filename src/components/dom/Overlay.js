class Overlay {
  constructor(ref, close) {
    this.element = ref;
    this.state = Overlay.state.start;
    this.visible = true;

    this.element.addEventListener('click', () => close());
  }

  hide() {
    this.#hide();
    this.state = Overlay.state.hidden;
  }

  showNewGameScreen() {
    this.#show();
    this.state = Overlay.state.start;
    this.#setText('start');
  }

  showPreviousGameScreen() {
    this.#show();
    this.state = Overlay.state.choose;
    this.#setText('choose');
  }

  showPauseScreen() {
    this.#show();
    this.state = Overlay.state.pause;
    this.#setText('pause');
  }

  showOptionsScreen() {
    this.state = Overlay.state.options;
    this.#setText('options');
  }

  showControlScreen() {
    this.state = Overlay.state.controls;
    this.#setText('controls');
  }

  showChartScreen() {
    this.state = Overlay.state.chart;
    this.#setText('chart');
  }

  showFinishScreen() {
    this.#show();
    this.state = Overlay.state.pause;
    this.#setText('finish');
  }

  #setText(text) {
    this.element.innerText = `[Overlay] ${text}.`;
  }

  #hide() {
    this.element.classList.add('hidden');
  }

  #show() {
    this.element.classList.remove('hidden');
  }

  static state = {
    hidden: 'hidden',
    start: 'start',
    finish: 'finish',
    choose: 'choose',
    pause: 'pause',
    options: 'options',
    controls: 'controls',
    chart: 'chart',
  };
}

module.exports = Overlay;
