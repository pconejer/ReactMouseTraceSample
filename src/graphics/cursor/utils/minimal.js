import {Container} from 'pixi.js';

export class MinimalContainer extends Container {
  constructor() {
    super();
    this.interactive = false;
    this.accessible = false;
    this.interactiveChildren = false;
    this.accessibleChildren = false;
  }
}
