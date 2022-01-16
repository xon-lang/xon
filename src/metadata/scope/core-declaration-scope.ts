import { DeclarationMetadata } from '../declaration/declaration-metadata';
import { ModuleMetadata } from '../module/module-metadata';
import { DeclarationScope } from './declaration-scope';

export class CoreDeclarationScope extends DeclarationScope {
  get boolean(): DeclarationMetadata {
    return this.findByName('Boolean');
  }
  get integer(): DeclarationMetadata {
    return this.findByName('Integer');
  }
  get float(): DeclarationMetadata {
    return this.findByName('Float');
  }
  get number(): DeclarationMetadata {
    return this.findByName('Number');
  }

  constructor() {
    super();
    this.declarations = new ModuleMetadata('lib/@xon/core', new DeclarationScope()).declarations;
  }
}
