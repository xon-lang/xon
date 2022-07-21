import { Boolean, none } from '../../../lib/core';
import { DeclarationMetadata } from '../declaration-metadata';
import { CoreDeclarationScope } from './core/core-declaration-scope';

export class DeclarationScope {
  static _core: CoreDeclarationScope = none;
  get core() {
    return DeclarationScope._core;
  }

  declarations: DeclarationMetadata[] = [];
  children: DeclarationScope[] = [];

  constructor(public parent?: DeclarationScope) {}

  create() {
    const scope = new DeclarationScope(this);
    this.children.push(scope);
    return scope;
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
    if (declarations.length) {
      return declarations;
    }
    return this.parent?.filter(name, predicate) || [];
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
