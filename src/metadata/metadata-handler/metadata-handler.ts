import { DefinitionTree } from '../../tree/definition/definition-tree';
import { VariableDeclarationStatementTree } from '../../tree/statement/variable-declaration-statement/variable-declaration-statement.tree';

export abstract class MetadataHandler {
  public constructor(public scope: Scope) {}
}

export class Scope {
  private variables = new Map<string, VariableDeclarationStatementTree>();
  private definitions = new Map<string, DefinitionTree>();

  constructor(public parent?: Scope) {}

  findDefinition(name: string, genericCount = 0): DefinitionTree {
    if (this.definitions.has(name)) return this.definitions.get(name);
    if (this.parent) return this.parent.findDefinition(name, genericCount);
    throw new Error(`'${name}' not found`);
  }

  findVariable(name: string): VariableDeclarationStatementTree {
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
}
