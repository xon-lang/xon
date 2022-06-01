import { ImportProvider } from "../../import-provider";
import { DefinitionMetadata } from "../definition/definition-metadata";
import { DeclarationScope } from "../scope/declaration-scope";

export class CoreDeclarationScope extends DeclarationScope {
  get boolean(): DefinitionMetadata {
    return this.findByName('Boolean');
  }
  get integer(): DefinitionMetadata {
    return this.findByName('Integer');
  }
  get float(): DefinitionMetadata {
    return this.findByName('Float');
  }
  get number(): DefinitionMetadata {
    return this.findByName('Number');
  }
  get none(): DefinitionMetadata {
    return this.findByName('None');
  }
  get string(): DefinitionMetadata {
    return this.findByName('String');
  }

  constructor() {
    super();

    const corePath = 'src/lib/@xon/core';
    const importProvider = new ImportProvider(corePath);
    this.parameters = importProvider.scope().parameters;
  }
}
