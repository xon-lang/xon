import { IdToken } from '../../tree/id-token';
import { TypeParameterTree } from '../../tree/type-parameter/type-parameter.tree';
import { TypeTree } from '../../tree/type/type.tree';
import { TypeMetadata } from '../type/type-metadata';

export class HandlerScope {
  parent?: HandlerScope;
  private declarations = new Map<string, TypeMetadata>();

  constructor(parent: HandlerScope = null) {
    this.parent = parent;
  }

  addDeclaration({
    id,
    typeMetadata,
    typeParameters = [],
  }: {
    id: IdToken;
    typeMetadata: TypeMetadata;
    typeParameters?: TypeParameterTree[];
  }) {
    const name = `${id.text}<${typeParameters.length}>`;
    if (this.declarations.has(name)) throw new Error(`'${name}' already exists`);
    this.declarations.set(name, typeMetadata);
  }

  findDeclaration({
    id,
    typeArguments = [],
  }: {
    id: IdToken;
    typeArguments?: TypeTree[];
  }): TypeMetadata {
    const name = `${id.text}<${typeArguments.length}>`;
    if (this.declarations.has(name)) return this.declarations.get(name);
    if (this.parent) return this.parent.findDeclaration({ id, typeArguments });
    throw new Error(`'${name}' not found`);
  }
}
