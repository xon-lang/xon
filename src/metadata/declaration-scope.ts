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

  findByName(name: string): DeclarationMetadata {
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

    return results[0];
  }

  find(predicate: (x: DeclarationMetadata) => boolean): DeclarationMetadata {
    const results = this.filter(predicate);

    if (results.length === 1) return results[0];
    if (results.length > 1) {
      throw new Error(`Too many declarations found`);
    }
    throw new Error(`Declaration not found`);
  }

  filter(predicate: (x: DeclarationMetadata) => boolean): DeclarationMetadata[] {
    const declarations: DeclarationMetadata[] = [];
    for (const declaration of this.declarations) {
      if (predicate(declaration)) declarations.push(declaration);
    }
    const parentDeclarations = this.parent.filter(predicate);
    return [...declarations, ...parentDeclarations];
  }
}
