import * as glob from 'glob';
import * as path from 'path';
import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { IdToken } from '../../tree/id-token';
import { parseSourceFile } from '../../tree/parse';
import { TypeParameterTree } from '../../tree/type-parameter/type-parameter.tree';
import { ClassTypeMetadata } from '../type/id-type/class-type/class-type-metadata';
import { TypeMetadata } from '../type/type-metadata';
import { ParameterHandler } from './parameter/parameter-handler';
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
        if (definitionTree instanceof ClassDefinitionTree) {
          definitionTree.parameters.forEach((x) => new ParameterHandler(this).handle(x));
          definitionTree.typeMetadata = new ClassTypeMetadata(definitionTree);
          this.addDeclaration(definitionTree);
        } else throw new Error('Not implemented');
      }
    }
  }

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
