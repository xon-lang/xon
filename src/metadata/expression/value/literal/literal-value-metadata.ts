import { fillTypeMetadata, TypeMetadata, ValueMetadata } from '~/metadata';
import { LiteralExpressionTree, LiteralType } from '~/tree';

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
