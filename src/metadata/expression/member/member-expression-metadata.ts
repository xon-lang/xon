import { MemberExpressionTree } from '../../../tree/expression/member-expression/member-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class MemberExpressionMetadata extends ExpressionMetadata {
  type: FunctionTypeMetadata;

  constructor(tree: MemberExpressionTree, scope: DeclarationScope) {
    super();

    // this.type = ;
  }
}
