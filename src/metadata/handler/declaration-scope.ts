import { DeclarationMetadata } from './declaration/declaration-metadata';

export class DeclarationScope {
  declarations = new Map<string, DeclarationMetadata>();

  constructor(public parent?: DeclarationScope) {}

  set(declaration: DeclarationMetadata) {
    const name = declaration.id.text;
    if (this.declarations.has(name)) throw new Error(`'${name}' already exists`);
    this.declarations.set(name, declaration);
  }

  get(name: string): DeclarationMetadata {
    if (this.declarations.has(name)) return this.declarations.get(name);
    if (this.parent) return this.parent.get(name);
    throw new Error(`'${name}' not found`);
  }

  merge(declarations: Map<string, DeclarationMetadata>) {
    this.declarations = new Map([...this.declarations.entries(), ...declarations.entries()]);
  }
}
