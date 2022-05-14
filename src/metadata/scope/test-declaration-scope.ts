import { CoreDeclarationScope } from './core-declaration-scope';
import { DeclarationScope } from './declaration-scope';

export class TestDeclarationScope extends DeclarationScope {
  constructor() {
    DeclarationScope._core = new CoreDeclarationScope();
    super(DeclarationScope._core);
  }
}
