import { DeclarationScope } from './scope';

export class TestHandlerScope extends DeclarationScope {
  constructor() {
    super();
    this.loadModule('ast.xon/lib/@xon/core');
  }
}
