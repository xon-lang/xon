import { ModelDeclarationMetadata } from '../declaration/model/model-declaration-metadata';
import { ModuleMetadata } from '../module/module-metadata';
import { DeclarationScope } from './declaration-scope';

export class CoreDeclarationScope extends DeclarationScope {
  get boolean(): ModelDeclarationMetadata {
    return this.findByName('Boolean') as ModelDeclarationMetadata;
  }
  get integer(): ModelDeclarationMetadata {
    return this.findByName('Integer') as ModelDeclarationMetadata;
  }
  get float(): ModelDeclarationMetadata {
    return this.findByName('Float') as ModelDeclarationMetadata;
  }
  get number(): ModelDeclarationMetadata {
    return this.findByName('Number') as ModelDeclarationMetadata;
  }

  constructor() {
    super();
    this.declarations = new ModuleMetadata('lib/@xon/core', new DeclarationScope()).declarations;
  }
}
