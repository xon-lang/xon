import { Issue } from '../../../issue-service/issue';
import { IssueLevel } from '../../../issue-service/issue-level';
import { Boolean } from '../../../lib/core';
import { DefinitionMetadata } from '../definition/definition-metadata';
import { ParameterMetadata } from '../parameter/parameter-metadata';
import { CoreDeclarationScope } from './core/core-declaration-scope';

type DeclarationMetadata = ParameterMetadata | DefinitionMetadata;

export class DeclarationScope {
  static _core: CoreDeclarationScope;
  get core(): CoreDeclarationScope {
    return DeclarationScope._core;
  }

  declarations: DeclarationMetadata[] = [];

  constructor(public parent?: DeclarationScope) {}

  create() {
    return new DeclarationScope(this);
  }

  add(metadata: DeclarationMetadata) {
    this.declarations.push(metadata);
  }

  all(): DeclarationMetadata[] {
    const parentDeclarations = this.parent?.all() || [];
    return [...this.declarations, ...parentDeclarations];
  }

  filter(name: String, predicate?: (x: DeclarationMetadata) => Boolean): DeclarationMetadata[] {
    const declarations = this.declarations.filter(
      (x) => x.name === name && (!predicate || predicate(x)),
    );
    if (declarations.length) return declarations;
    return this.parent?.filter(name, predicate) || [];
  }

  find(name: String, predicate?: (x: DeclarationMetadata) => Boolean): DeclarationMetadata {
    const results = this.filter(name, predicate);

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

  // operators
  union(other: DeclarationScope): DeclarationScope {
    const left = this.all();
    const right = other.all();
    const scope = new DeclarationScope(this.core);
    scope.declarations = left.concat(right);
    return scope;
  }

  intersect(other: DeclarationScope): DeclarationScope {
    const left = this.all();
    const right = other.all();
    const scope = new DeclarationScope(this.core);
    const commons = left.filter((x) => right.some((z) => x.name === z.name));
    scope.declarations = left.concat(right).filter((x) => !commons.some((z) => x.name === z.name));
    return scope;
  }
}
