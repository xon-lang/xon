import { Issue } from '../issue-service/issue';
import { IssueLevel } from '../issue-service/issue-level';
import { DeclarationMetadata } from './declaration/declaration-metadata';
import { ModelDeclarationMetadata } from './declaration/model/model-declaration-metadata';

export class DeclarationScope {
  declarations: DeclarationMetadata[] = [];

  constructor(public parent?: DeclarationScope) {}

  add(declaration: DeclarationMetadata) {
    this.declarations.push(declaration);
  }

  filter(predicate: (x: DeclarationMetadata) => boolean): DeclarationMetadata[] {
    const declarations = this.declarations.filter(predicate);
    const parentDeclarations = this.parent?.filter(predicate) || [];
    return [...declarations, ...parentDeclarations];
  }

  find(predicate: (x: DeclarationMetadata) => boolean): DeclarationMetadata {
    const results = this.filter(predicate);

    if (results.length > 1) {
      const issues = results.map((x) =>
        Issue.fromSourceReference(x.sourceReference, IssueLevel.Error, '').toString(),
      );
      throw new Error(`Too many declarations found:\n${issues.join('\n')}`);
    }
    if (!results.length) {
      throw new Error(`Declaration not found: ${predicate}`);
    }

    return results[0];
  }

  filterByName(name: string): DeclarationMetadata[] {
    return this.filter((x) => x.name === name);
  }

  findByName(name: string): DeclarationMetadata {
    const results = this.filterByName(name);

    if (results.length > 1) {
      const issues = results.map((x) =>
        Issue.fromSourceReference(x.sourceReference, IssueLevel.Error, '').toString(),
      );
      throw new Error(`Too many '${name}' declarations found:\n${issues.join('\n')}`);
    }
    if (!results.length) {
      throw new Error(`Declaration '${name}' not found`);
    }

    return results[0];
  }

  findModel(name: string): ModelDeclarationMetadata {
    const results = this.filterByName(name).filter((x) => x instanceof ModelDeclarationMetadata);
    if (results.length > 1) {
      const issues = results.map((x) =>
        Issue.fromSourceReference(x.sourceReference, IssueLevel.Error, '').toString(),
      );
      throw new Error(`Too many '${name}' declarations found:\n${issues.join('\n')}`);
    }
    if (!results.length) {
      throw new Error(`Declaration '${name}' not found`);
    }
    return results[0] as ModelDeclarationMetadata;
  }
}
