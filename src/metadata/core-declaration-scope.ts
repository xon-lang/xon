import { DeclarationScope } from './declaration-scope';
import { ModuleMetadata } from './module/module-metadata';

export class CoreDeclarationScope extends DeclarationScope {
  constructor() {
    super();
    this.declarations = new ModuleMetadata('lib/@xon/core', new DeclarationScope()).declarations;
    this.declarations.forEach((x) => (x.isCoreDeclaration = true));
  }
}
