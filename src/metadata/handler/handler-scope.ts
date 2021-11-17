import { IdToken } from '../../tree/id-token';
import { TypeMetadata } from '../type/type-metadata';

export class HandlerScope {
  parent?: HandlerScope;
  // private definitions = new Map<string, DefinitionTree>();
  private declarations = new Map<string, TypeMetadata>();

  constructor(parent: HandlerScope = null) {
    this.parent = parent;
  }

  addDeclaration(id: IdToken, typeMetadata: TypeMetadata) {
    if (this.declarations.has(id.text)) throw new Error(`'${id.text}' already exists`);
    this.declarations.set(id.text, typeMetadata);
  }

  findDeclaration(name: string): TypeMetadata {
    if (this.declarations.has(name)) return this.declarations.get(name);
    if (this.parent) return this.parent.findDeclaration(name);
    throw new Error(`'${name}' not found`);
  }
}
