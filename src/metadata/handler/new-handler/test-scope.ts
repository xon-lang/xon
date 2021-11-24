import { Scope } from './scope';

export class TestScope extends Scope {
  constructor() {
    super();
    this.loadModule('ast.xon/lib/@xon/core');
  }
}
