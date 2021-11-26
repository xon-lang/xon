import { DeclarationScope } from './declaration-scope';
import { ModuleMetadata } from './module/module-metadata';

export class TestDeclarationScope extends DeclarationScope {
  constructor() {
    super();
    const metadata = new ModuleMetadata('ast.xon/lib/@xon/core');
    for (const declaration of metadata.declarations) {
      this.set(declaration);
    }
  }
}
