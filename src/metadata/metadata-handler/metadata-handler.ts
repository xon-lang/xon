import { DefinitionMetadata } from '../definition/definition-metadata';

export abstract class MetadataHandler {
  public abstract definitions: Map<string, DefinitionMetadata>;

  findDefinition(name: string) {
    if (this.definitions.has(name)) return this.definitions.get(name);
    throw new Error(`Not found '${name}'`);
  }
}
