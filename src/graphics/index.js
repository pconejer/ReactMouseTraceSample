import { Renderer, Ticker } from 'pixi.js';
import { Cursor } from './cursor';
import { MinimalContainer } from './cursor/utils/minimal';

const DEFAULT_RENDERER_OPTIONS = {
  backgroundAlpha: 0,
  antialias: false,
  hello: false,
};

export class CursorGraphics {
  renderer;
  container = new MinimalContainer();
  ticker = new Ticker();
  cursor;

  constructor(container) {
    this.renderer = new Renderer({ ...DEFAULT_RENDERER_OPTIONS });
    this.cursor = new Cursor();
    this.container.addChild(this.cursor.container);
    this.ticker.add(this.render);

    if (this.renderer.view instanceof HTMLElement) {
      container.appendChild(this.renderer.view);
      this.renderer.view.style.pointerEvents = 'none';
    }

    this.ticker.start();
  }

  resize(width, height) {
    this.renderer.resize(width, height);
  }

  dispose() {
    this.cursor.dispose();
    this.ticker.stop();
    this.ticker.destroy();
    this.renderer.removeAllListeners();
    this.renderer.destroy(true);
  }

  pointerMove(x, y) {
    this.cursor.updatePointer(x, y);
  }
  render = (delta) => {
    this.cursor.emitter.update(delta / 60);
    this.renderer.render(this.container);
  };
}
