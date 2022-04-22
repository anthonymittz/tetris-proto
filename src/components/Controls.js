class Controls {
  constructor() {
    this.bindings = {
      left: {
        keys: ['KeyA', 'ArrowLeft'],
        action: () => console.log('left'),
      },
      right: {
        keys: ['KeyD', 'ArrowRight'],
        action: () => console.log('right'),
      },
      down: {
        keys: ['KeyS', 'ArrowDown'],
        action: () => console.log('down'),
      },
      rotateCW: {
        keys: ['KeyE', 'ArrowUp'],
        action: () => console.log('cw'),
      },
      rotateCCW: {
        keys: ['KeyQ'],
        action: () => console.log('ccw'),
      },
      skip: {
        keys: ['Space'],
        action: () => console.log('skip'),
      },
      pause: {
        keys: ['Escape', 'Enter'],
        action: () => console.log('pause'),
      },
    };
  }
}

export default Controls;
