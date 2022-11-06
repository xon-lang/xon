import { TypeMetadata } from '~/metadata/expression/type/type-metadata';
import { fillTypeMetadata } from '~/metadata/expression/type/type-metadata-helper';
import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { LiteralExpressionTree } from '~/tree/expression/literal/literal-expression-tree';
import { LiteralType } from '~/tree/literal/literal-type';

export class LiteralValueMetadata extends ValueMetadata {
  constructor(private tree: LiteralExpressionTree) {
    super();
  }

  type(): TypeMetadata | null {
    return fillTypeMetadata(this.tree);
  }

  eval(): LiteralType {
    return this.tree.literal.value;
  }
}
