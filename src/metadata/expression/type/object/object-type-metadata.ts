import { Boolean2 } from '../../../../lib/core';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../type-metadata';

export class ObjectTypeMetadata extends TypeMetadata {
  constructor(public scope: DeclarationScope) {
    super();
  }

  attributesScope(): DeclarationScope {
    return this.scope;
  }

  is(other: TypeMetadata): Boolean2 {
    if (other instanceof ObjectTypeMetadata) {
      const currentScope = this.scope;
      const otherScope = other.scope;
      if (currentScope.declarations.length !== otherScope.declarations.length) return false;
      if (
        currentScope.declarations.some(
          (x, i) =>
            otherScope.declarations[i].name !== x.name ||
            !otherScope.declarations[i].type.is(x.type),
        )
      )
        return false;
      return true;
    }
    throw new Error('Not implemented');
  }

  equals(other: TypeMetadata): Boolean2 {
    if (other instanceof ObjectTypeMetadata) {
      const otherScope = other.attributesScope();
      return this.attributesScope().declarations.every((x, i) =>
        otherScope.declarations[i].type.equals(x.type),
      );
    }
    return false;
  }
}
