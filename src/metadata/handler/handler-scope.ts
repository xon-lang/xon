import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { IdToken } from '../../tree/id-token';
import { TypeMetadata } from '../type/type-metadata';
import { DeclarationMetadata } from './declaration-metadata';

export class HandlerScope {
  parent?: HandlerScope;
  private definitions = new Map<string, DefinitionTree>();
  private declarations = new Map<string, DeclarationMetadata>();

  constructor(parent: HandlerScope = null) {
    this.parent = parent;
  }

  addDeclaration(value: { id: IdToken; typeMetadata: TypeMetadata }) {
    const name = value.id.text;
    if (this.declarations.has(name)) throw new Error(`'${name}' already exists`);
    this.declarations.set(name, new DeclarationMetadata(value.id, value.typeMetadata));
  }

  findDeclaration(name: string): DeclarationMetadata {
    if (this.declarations.has(name)) return this.declarations.get(name);
    if (this.parent) return this.parent.findDeclaration(name);
    throw new Error(`'${name}' not found`);
  }
}
