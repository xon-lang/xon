import { Integer } from '~/lib/core';
import { ExpressionMetadata } from '~/metadata/expression/expression-metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';
import { getTypeMetadata } from '~/metadata/type/type-metadata-helper';
import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';

export class IntegerExpressionMetadata extends ExpressionMetadata {
  constructor(private tree: IntegerExpressionTree) {
    super();
  }

  type(): TypeMetadata {
    return getTypeMetadata(this.tree);
  }

  eval(): Integer {
    return this.tree.value;
  }
}
