import { PrefixExpressionTree } from '../../../tree/expression/prefix-expression/prefix-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class PrefixExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: PrefixExpressionTree, scope: DeclarationScope) {
    super();

    // this.type = ;
  }
}
