import { None } from '../../../../lib/core';
import { LiteralExpressionTree } from '../../../../tree/expression/literal/literal-expression-tree';
import { TypeMetadata } from '../../type/type-metadata';
import { fillTypeMetadata } from '../../type/type-metadata-helper';
import { ValueMetadata } from '../value-metadata';

export class LiteralValueMetadata extends ValueMetadata {
  constructor(private tree: LiteralExpressionTree) {
    super();
  }

  type(): TypeMetadata | None {
    return fillTypeMetadata(this.tree);
  }

  eval() {
    return this.tree.literal.value;
  }
}
