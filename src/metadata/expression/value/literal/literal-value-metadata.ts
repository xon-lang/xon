import { fillTypeMetadata, TypeMetadata, ValueMetadata } from '~/metadata';
import { LiteralExpressionTree } from '~/tree';

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
