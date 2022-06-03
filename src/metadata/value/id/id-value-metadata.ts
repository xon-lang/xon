import { Any, Boolean } from '../../../lib/core';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';

export class IdValueMetadata extends ValueMetadata {
  constructor(private tree: IdExpressionTree, private scope: DeclarationScope) {
    super();
  }

  parameter() {
    return this.scope.findByName(this.tree.name.text);
  }

  type(): TypeMetadata {
    return this.parameter().type();
  }

  is(metadata: TypeMetadata): Boolean {
    return this.type().is(metadata);
  }

  eval(): Any {
    return this.parameter().value()?.eval();
  }
}
