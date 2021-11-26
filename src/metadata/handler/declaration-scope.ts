import { IdToken } from '../../tree/id-token';
import { DeclarationMetadata } from '../declaration-metadata';
import { TypeMetadata } from '../type/type-metadata';

export class DeclarationScope {
  declarations = new Map<string, DeclarationMetadata>();

  constructor(public parent?: DeclarationScope) {}

  set(id: IdToken, type: TypeMetadata) {
    const name = id.text;
    if (this.declarations.has(name)) throw new Error(`'${name}' already exists`);
    this.declarations.set(name, new DeclarationMetadata(id, type));
  }

  get(name: string): DeclarationMetadata {
    if (this.declarations.has(name)) return this.declarations.get(name);
    if (this.parent) return this.parent.get(name);
    throw new Error(`'${name}' not found`);
  }
}
