import { CoreDeclarationScope } from '../core/core-declaration-metadata';
import { DeclarationScope } from './declaration-scope';

export class TestDeclarationScope extends DeclarationScope {
  constructor() {
    DeclarationScope._core = new CoreDeclarationScope();
    super(DeclarationScope._core);
  }
}
