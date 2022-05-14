import { Issue } from '../../issue-service/issue';
import { IssueLevel } from '../../issue-service/issue-level';
import { String } from '../../lib/core';
import { DeclarationMetadata } from '../declaration/declaration-metadata';
import { DefinitionDeclarationMetadata } from '../declaration/definition/definition-declaration-metadata';
import { CoreDeclarationScope } from './core-declaration-scope';

export class DeclarationScope {
  declarations: DeclarationMetadata[] = [];
  static _core: DeclarationScope;
  get core(): CoreDeclarationScope {
    return DeclarationScope._core as CoreDeclarationScope;
  }

  constructor(public parent?: DeclarationScope) {}

  create() {
    return new DeclarationScope(this);
  }

  add(declaration: DeclarationMetadata) {
    this.declarations.push(declaration);
  }

  filter(predicate: (x: DeclarationMetadata) => boolean): DeclarationMetadata[] {
    const declarations = this.declarations.filter(predicate);
    const parentDeclarations = this.parent?.filter(predicate) || [];
    return [...declarations, ...parentDeclarations];
  }

  filterByName(
    name: String,
    predicate?: (x: DeclarationMetadata) => boolean,
  ): DeclarationMetadata[] {
    return this.filter((x) => x.name === name && (!predicate || predicate(x)));
  }

  findByName(name: String, predicate?: (x: DeclarationMetadata) => boolean): DeclarationMetadata {
    const results = this.filterByName(name, predicate);

    if (results.length > 1) {
      const issues = results.map((x) =>
        Issue.fromSourceRange(x.sourceRange, IssueLevel.error, '').toString(),
      );
      throw new Error(`Too many '${name}' declarations found:\n${issues.join('\n')}`);
    }
    if (!results.length) {
      throw new Error(`Declaration '${name}' not found`);
    }

    return results[0];
  }

  findModel(name: String): DefinitionDeclarationMetadata {
    const results = this.filterByName(name).filter(
      (x) => x instanceof DefinitionDeclarationMetadata,
    );
    if (results.length > 1) {
      const issues = results.map((x) =>
        Issue.fromSourceRange(x.sourceRange, IssueLevel.error, '').toString(),
      );
      throw new Error(`Too many '${name}' declarations found:\n${issues.join('\n')}`);
    }
    if (!results.length) {
      throw new Error(`Declaration '${name}' not found`);
    }
    return results[0] as DefinitionDeclarationMetadata;
  }
}
