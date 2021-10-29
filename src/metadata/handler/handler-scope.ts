import * as glob from 'glob';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { parseSourceFile } from '../../tree/parse';
import { DeclarationMetadata } from '../declaration-metadata';
import { TypeMetadata } from '../type/type-metadata';
import { getDefinitionMetadata } from '../type/type-metadata-helper';

export class HandlerScope {
  private definitions = new Map<string, TypeMetadata>();
  private declarations = new Map<string, DeclarationMetadata>();

  constructor(public parent?: HandlerScope) {}

  findDefinition(name: string, genericsCount = 0): TypeMetadata {
    if (this.definitions.has(name)) return this.definitions.get(name);
    if (this.parent) return this.parent.findDefinition(name, genericsCount);
    throw new Error(`'${name}' not found`);
  }

  findDeclaration(name: string): DeclarationMetadata {
    if (this.declarations.has(name)) return this.declarations.get(name);
    if (this.parent) return this.parent.findDeclaration(name);
    throw new Error(`'${name}' not found`);
  }

  addDefinition(value: DefinitionTree) {
    const name = value.id.text;
    if (this.declarations.has(name)) throw new Error(`'${name}' already exists`);
    this.definitions.set(name, getDefinitionMetadata(value));
  }

  addDeclaration(value: DeclarationMetadata) {
    const name = value.id.text;
    if (this.declarations.has(name)) throw new Error(`'${name}' already exists`);
    this.declarations.set(name, value);
  }

  static fromGlobPath(globPath: string): HandlerScope {
    const sourceTrees = glob.sync(globPath).map((x) => parseSourceFile(x));
    const scope = new HandlerScope();
    for (const sourceTree of sourceTrees) {
      for (const definitionTree of sourceTree.definitions) {
        scope.addDefinition(definitionTree);
      }
    }

    return scope;
  }
}
