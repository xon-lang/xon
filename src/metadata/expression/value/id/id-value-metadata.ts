import { Any2 } from '../../../../lib/core';
import { IdExpressionTree } from '../../../../tree/expression/id/id-expression-tree';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';

export class IdValueMetadata extends ValueMetadata {
  constructor(private tree: IdExpressionTree) {
    super();

    tree.name.metadata = this.declaration();
  }

  private declaration() {
    const declarations = this.tree.scope.filter(this.tree.name.text);
    if (declarations.length === 1) {
      return declarations[0];
    }
    if (declarations.length > 0) {
      this.tree.name.addError('Too many declarations');
    } else {
      this.tree.name.addError('No declarations found');
    }
  }

  type(): TypeMetadata | null {
    return this.tree.name.metadata?.type;
  }

  eval(): Any2 {
    throw new Error('Not implemented');
  }
}
