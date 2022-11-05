import { TypeMetadata } from '@/metadata/expression/type/type-metadata';
import { fillTypeMetadata } from '@/metadata/expression/type/type-metadata-helper';
import { ValueMetadata } from '@/metadata/expression/value/value-metadata';
import { LiteralExpressionTree } from '@/tree/expression/literal/literal-expression-tree';

export class LiteralValueMetadata extends ValueMetadata {
  constructor(private tree: LiteralExpressionTree) {
    super();
  }

  type(): TypeMetadata | null {
    return fillTypeMetadata(this.tree);
  }

  eval() {
    return this.tree.literal.value;
  }
}
