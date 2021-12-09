import { DeclarationScope } from './declaration-scope';
import { ModuleMetadata } from './module/module-metadata';

export class TestDeclarationScope extends DeclarationScope {
  constructor() {
    super();
    this.declarations = new ModuleMetadata(
      'ast.xon/lib/@xon/core',
      new DeclarationScope(),
    ).definitions;
  }
}
