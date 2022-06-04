import { ImportProvider } from '../../../import-provider';
import { DefinitionMetadata } from '../../definition/definition-metadata';
import { DeclarationScope } from '../declaration-scope';

export class CoreDeclarationScope extends DeclarationScope {
  get any(): DefinitionMetadata {
    return this.find('Any') as DefinitionMetadata;
  }
  get boolean(): DefinitionMetadata {
    return this.find('Boolean') as DefinitionMetadata;
  }
  get integer(): DefinitionMetadata {
    return this.find('Integer') as DefinitionMetadata;
  }
  get float(): DefinitionMetadata {
    return this.find('Float') as DefinitionMetadata;
  }
  get number(): DefinitionMetadata {
    return this.find('Number') as DefinitionMetadata;
  }
  get none(): DefinitionMetadata {
    return this.find('None') as DefinitionMetadata;
  }
  get char(): DefinitionMetadata {
    return this.find('Char') as DefinitionMetadata;
  }
  get string(): DefinitionMetadata {
    return this.find('String') as DefinitionMetadata;
  }
  get array(): DefinitionMetadata {
    return this.find('Array') as DefinitionMetadata;
  }

  constructor() {
    super();

    const corePath = 'src/lib/@xon/core';
    const scope = new ImportProvider(corePath).scope();
    this.declarations = scope.declarations;
  }
}
