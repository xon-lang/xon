import { InfixExpressionTree } from '../../../tree/expression/infix-expression/infix-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class InfixExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: InfixExpressionTree, scope: DeclarationScope) {
    super();

    // this.type = ;
  }
}
