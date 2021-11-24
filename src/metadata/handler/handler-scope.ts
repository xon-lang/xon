import { IdToken } from '../../tree/id-token';
import { TypeParameterTree } from '../../tree/type-parameter/type-parameter.tree';
import { TypeMetadata } from '../type/type-metadata';

export class HandlerScope {
  private declarations = new Map<string, TypeMetadata>();

  constructor(public parent?: HandlerScope) {}

  addDeclaration({
    id,
    typeParameters = [],
    typeMetadata,
  }: {
    id: IdToken;
    typeParameters?: TypeParameterTree[];
    typeMetadata: TypeMetadata;
  }) {
    const name = `${id.text}<${typeParameters.length}>`;
    if (this.declarations.has(name)) throw new Error(`'${name}' already exists`);
    console.log(name, typeMetadata);

    this.declarations.set(name, typeMetadata);
  }

  findDeclaration(id: string, typeArgumentsCount: number = 0): TypeMetadata {
    const name = `${id}<${typeArgumentsCount}>`;
    if (this.declarations.has(name)) return this.declarations.get(name);
    if (this.parent) return this.parent.findDeclaration(id, typeArgumentsCount);
    throw new Error(`'${name}' not found`);
  }
}
