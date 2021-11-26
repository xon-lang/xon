import { DeclarationScope } from './declaration-scope';
import { moduleHandler } from './module-handler';

export class TestHandlerScope extends DeclarationScope {
  constructor() {
    super();
    moduleHandler('ast.xon/lib/@xon/core');
  }
}
