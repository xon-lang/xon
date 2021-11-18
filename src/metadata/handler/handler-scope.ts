import * as glob from 'glob';
import * as path from 'path';
import { IdToken } from '../../tree/id-token';
import { parseSourceFile } from '../../tree/parse';
import { TypeParameterTree } from '../../tree/type-parameter/type-parameter.tree';
import { TypeMetadata } from '../type/type-metadata';
export class HandlerScope {
  parent?: HandlerScope;
  private declarations = new Map<string, TypeMetadata>();

  constructor(parent: HandlerScope = null) {
    this.parent = parent;

    // temp solution
    const globPath = path.resolve('ast.xon/lib/@xon/core', '**/*.xon');
    const sourceTrees = glob.sync(globPath).map((x) => parseSourceFile(x));
    for (const sourceTree of sourceTrees) {
      for (const definitionTree of sourceTree.definitions) {
        this.addDeclaration(definitionTree);
      }
    }
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

  findDeclaration(id: string, typeArgumentsCount: number = 0): TypeMetadata {
    const name = `${id}<${typeArgumentsCount}>`;
    if (this.declarations.has(name)) return this.declarations.get(name);
    if (this.parent) return this.parent.findDeclaration(id, typeArgumentsCount);
    throw new Error(`'${name}' not found`);
  }
}
