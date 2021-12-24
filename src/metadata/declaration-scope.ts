import { Issue } from '../issue-service/issue';
import { DeclarationMetadata } from './declaration/declaration-metadata';

export class DeclarationScope {
  declarations: DeclarationMetadata[] = [];

  constructor(public parent?: DeclarationScope) {}

  add(declaration: DeclarationMetadata) {
    this.declarations.push(declaration);
  }

  filterByName(name: string): DeclarationMetadata[] {
    const results: DeclarationMetadata[] = [
      ...this.declarations.filter((x) => x.name === name),
      ...(this.parent?.filterByName(name) || []),
    ];

    return results;
  }

  findByName<T extends DeclarationMetadata>(name: string): T {
    const results = this.filterByName(name);

    if (results.length > 1) {
      Issue.errorFromSourceReference(
        results[results.length - 1].sourceReference,
        `Too many '${name}' declarations found`,
      );
    }
    if (!results.length) {
      throw new Error(`Declaration '${name}' not found`);
    }

    return results[0] as T;
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
