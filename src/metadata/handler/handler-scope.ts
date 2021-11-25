import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { IdToken } from '../../tree/id-token';
import { TypeParameterTree } from '../../tree/type-parameter/type-parameter.tree';
import { TypeInfo } from '../type/type-info';

export class HandlerScope {
  private declarations = new Map<string, TypeInfo>();

  constructor(public parent?: HandlerScope) {}

  addDeclaration({
    id,
    typeParameters = [],
    typeMetadata,
  }: {
    id: IdToken;
    typeParameters?: TypeParameterTree[];
    typeMetadata: TypeInfo;
  }) {
    const name = `${id.text}<${typeParameters.length}>`;
    if (this.declarations.has(name)) throw new Error(`'${name}' already exists`);
    this.declarations.set(name, typeMetadata);
  }

  findDeclaration(id: string, typeArgumentsCount: number = 0): TypeInfo {
    const name = `${id}<${typeArgumentsCount}>`;
    console.log(name, Array.from(this.declarations.keys()));

    if (this.declarations.has(name)) return this.declarations.get(name);
    if (this.parent) return this.parent.findDeclaration(id, typeArgumentsCount);
    throw new Error(`'${name}' not found`);
  }
}
