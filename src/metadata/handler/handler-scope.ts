import * as glob from 'glob';
import * as path from 'path';
import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { IdToken } from '../../tree/id-token';
import { parseSourceFile } from '../../tree/parse';
import { TypeMetadata } from '../type/type-metadata';
import { DeclarationMetadata } from './declaration-metadata';

export class HandlerScope {
  parent?: HandlerScope;
  private definitions = new Map<string, DefinitionTree>();
  private declarations = new Map<string, DeclarationMetadata>();

  constructor(parent: HandlerScope = null) {
    this.parent = parent;
    // temp solution
    if (!parent) {
      const globPath = path.resolve('ast.xon/lib/@xon/core', '**/*.xon');
      const sourceTrees = glob.sync(globPath).map((x) => parseSourceFile(x));
      for (const sourceTree of sourceTrees) {
        for (const definitionTree of sourceTree.definitions) {
          this.addDefinition(definitionTree);
        }
      }
    }
  }

  findDefinition(name: string, genericsCount = 0): DefinitionTree {
    const compoundName = `${name}<${genericsCount}>`;
    if (this.definitions.has(compoundName)) return this.definitions.get(compoundName);
    if (this.parent) return this.parent.findDefinition(name, genericsCount);
    throw new Error(`'${name}' with ${genericsCount} generics not found`);
  }

  addDefinition(value: DefinitionTree) {
    // console.log(`'${value.id.text}' added to scope`);

    const genericsCount = value instanceof ClassDefinitionTree ? value.genericParameters.length : 0;
    const compoundName = `${value.id.text}<${genericsCount}>`;
    if (this.definitions.has(compoundName))
      throw new Error(`'${compoundName}' with ${genericsCount} generics already exists`);
    this.definitions.set(compoundName, value);
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
