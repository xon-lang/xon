import { DefinitionDeclarationMetadata } from '../declaration/definition/definition-declaration-metadata';
import { ModuleMetadata } from '../module/module-metadata';
import { DeclarationScope } from './declaration-scope';

export class CoreDeclarationScope extends DeclarationScope {
  get boolean(): DefinitionDeclarationMetadata {
    return this.findByName('Boolean') as DefinitionDeclarationMetadata;
  }
  get integer(): DefinitionDeclarationMetadata {
    return this.findByName('Integer') as DefinitionDeclarationMetadata;
  }
  get float(): DefinitionDeclarationMetadata {
    return this.findByName('Float') as DefinitionDeclarationMetadata;
  }
  get number(): DefinitionDeclarationMetadata {
    return this.findByName('Number') as DefinitionDeclarationMetadata;
  }
  get none(): DefinitionDeclarationMetadata {
    return this.findByName('None') as DefinitionDeclarationMetadata;
  }

  constructor() {
    super();
    this.declarations = new ModuleMetadata(
      'src/lib/@xon/core',
      new DeclarationScope(),
    ).declarations;
  }
}
