import { DeclarationMetadata } from './declaration/declaration-metadata';

export class DeclarationScope {
  declarations = new Map<string, DeclarationMetadata>();

  constructor(public parent?: DeclarationScope) {}

  set(declaration: DeclarationMetadata) {
    if (this.declarations.has(declaration.name))
      throw new Error(`'${declaration.name}' already exists`);
    this.declarations.set(declaration.name, declaration);
  }

  get(name: string): DeclarationMetadata {
    if (this.declarations.has(name)) return this.declarations.get(name);
    if (this.parent) return this.parent.get(name);
    throw new Error(`'${name}' not found`);
  }
}
