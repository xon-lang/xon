import { DeclarationMetadata } from './declaration/declaration-metadata';

export class DeclarationScope {
  declarations: DeclarationMetadata[] = [];

  constructor(public parent?: DeclarationScope) {}

  add(declaration: DeclarationMetadata) {
    this.declarations.push(declaration);
  }

  find(predicate: (x: DeclarationMetadata) => boolean): DeclarationMetadata {
    const results: DeclarationMetadata[] = [];
    for (const declaration of this.declarations) {
      if (predicate(declaration)) results.push(declaration);
    }
    if (results.length > 1) {
      throw new Error(`Too many declarations found in the current scope`);
    }

    if (!results.length && this.parent) {
      return this.parent.find(predicate);
    }

    throw new Error(`Declaration not found`);
  }
}
