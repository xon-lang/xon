import * as glob from 'glob';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { ParameterTree } from '../../tree/parameter/parameter.tree';
import { parseSourceFile } from '../../tree/parse';
import { VariableDeclarationStatementTree } from '../../tree/statement/variable-declaration-statement/variable-declaration-statement.tree';

export class HandlerScope {
  private variables = new Map<string, VariableDeclarationStatementTree | ParameterTree>();
  private definitions = new Map<string, DefinitionTree>();

  constructor(public parent?: HandlerScope) {}

  findDefinition(name: string, genericCount = 0): DefinitionTree {
    if (this.definitions.has(name)) return this.definitions.get(name);
    if (this.parent) return this.parent.findDefinition(name, genericCount);
    throw new Error(`'${name}' not found`);
  }

  findVariable(name: string): VariableDeclarationStatementTree | ParameterTree {
    if (this.variables.has(name)) return this.variables.get(name);
    if (this.parent) return this.parent.findVariable(name);
    throw new Error(`'${name}' not found`);
  }

  addDefinition(value: DefinitionTree) {
    const name = value.id.text;
    if (this.variables.has(name)) throw new Error(`'${name}' already exists`);
    this.definitions.set(name, value);
  }

  addVariable(value: VariableDeclarationStatementTree) {
    const name = value.id.text;
    if (this.variables.has(name)) throw new Error(`'${name}' already exists`);
    this.variables.set(name, value);
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
