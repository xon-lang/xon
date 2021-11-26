import { TypeMetadata } from '../type/type-metadata';

export class HandlerScope {
  declarations = new Map<string, TypeMetadata>();

  constructor(public parent?: HandlerScope) {}

  set(name: string, type: TypeMetadata) {
    if (this.declarations.has(name)) throw new Error(`'${name}' already exists`);
    this.declarations.set(name, type);
  }

  get(name: string): TypeMetadata {
    if (this.declarations.has(name)) return this.declarations.get(name);
    if (this.parent) return this.parent.get(name);
    throw new Error(`'${name}' not found`);
  }
}
