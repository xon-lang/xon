import { DeclarationScope } from './scope';

export class TestScope extends DeclarationScope {
  constructor() {
    super();
    this.loadModule('ast.xon/lib/@xon/core');
  }
}
