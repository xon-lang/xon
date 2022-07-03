import { Issue } from '../../../issue-service/issue';
import { IssueLevel } from '../../../issue-service/issue-level';
import { Boolean, none } from '../../../lib/core';
import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { DeclarationMetadata } from '../declaration-metadata';
import { CoreDeclarationScope } from './core/core-declaration-scope';

export class DeclarationScope {
  static _core: CoreDeclarationScope;
  get core() {
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
    const declaration = this.findOrNone(name, predicate);
    if (!declaration) {
      throw new Error(`Declaration '${name}' not found`);
    }

    return declaration;
  }

  findByDeclarationTree(tree: DefinitionTree | ParameterTree): DeclarationMetadata {
    return this.find(tree.name.text, (x) => x.sourceRange.equals(tree.sourceRange));
  }

  findOrNone(name: String, predicate?: (x: DeclarationMetadata) => Boolean): DeclarationMetadata {
    const results = this.filter(name, predicate);

    if (results.length > 1) {
      const issues = results.map((x) =>
        Issue.fromSourceRange(x.sourceRange, IssueLevel.error, '').toString(),
      );
      throw new Error(`Too many '${name}' declarations found:\n${issues.join('\n')}`);
    }
    if (!results.length) {
      return none;
    }

    return results[0];
  }

  // operators
  union(other: DeclarationScope): DeclarationScope {
    const left = this.all();
    const right = other.all();
    const scope = new DeclarationScope(this);
    scope.declarations = left.concat(right);
    return scope;
  }

  intersect(other: DeclarationScope): DeclarationScope {
    const left = this.all();
    const right = other.all();
    const scope = new DeclarationScope(this);
    const commons = left.filter((x) => right.some((z) => x.name === z.name));
    scope.declarations = left.concat(right).filter((x) => !commons.some((z) => x.name === z.name));
    return scope;
  }
}
