import { Scope } from './scope';

export class HandlerAll {
  scope = new Scope();

  constructor() {
    this.scope.loadModule('ast.xon/lib/@xon/core');
  }
}
