import { LiteralExpressionTree } from '../../../../tree/expression/literal/literal-expression-tree';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { ValueMetadata } from '../value-metadata';

export class LiteralValueMetadata extends ValueMetadata {
  constructor(private tree: LiteralExpressionTree, private scope: DeclarationScope) {
    super();
  }

  type(): TypeMetadata {
    return getTypeMetadata(this.tree, this.scope);
  }

  eval() {
    return this.tree.literal.value;
  }
}
