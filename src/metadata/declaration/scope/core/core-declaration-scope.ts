import { ImportProvider } from '../../../import-provider';
import { DefinitionMetadata } from '../../definition/definition-metadata';
import { DeclarationScope } from '../declaration-scope';

export class CoreDeclarationScope extends DeclarationScope {
  get any(): DefinitionMetadata {
    return this.findDefinitionByName('Any');
  }
  get boolean(): DefinitionMetadata {
    return this.findDefinitionByName('Boolean');
  }
  get integer(): DefinitionMetadata {
    return this.findDefinitionByName('Integer');
  }
  get float(): DefinitionMetadata {
    return this.findDefinitionByName('Float');
  }
  get number(): DefinitionMetadata {
    return this.findDefinitionByName('Number');
  }
  get none(): DefinitionMetadata {
    return this.findDefinitionByName('None');
  }
  get char(): DefinitionMetadata {
    return this.findDefinitionByName('Char');
  }
  get string(): DefinitionMetadata {
    return this.findDefinitionByName('String');
  }
  get array(): DefinitionMetadata {
    return this.findDefinitionByName('Array');
  }

  constructor() {
    super();

    const corePath = 'src/lib/@xon/core';
    const { definitions, parameters } = new ImportProvider(corePath).scope();
    this.definitions = definitions;
    this.parameters = parameters;
  }
}
