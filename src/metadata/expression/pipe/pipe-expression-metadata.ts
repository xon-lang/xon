import { PipeExpressionTree } from '../../../tree/expression/pipe-expression/pipe-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class PipeExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: PipeExpressionTree, scope: DeclarationScope) {
    super();

    // this.type = ;
  }
}
