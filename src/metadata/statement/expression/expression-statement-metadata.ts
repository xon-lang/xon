import { ExpressionStatementTree } from '../../../tree/statement/expression/expression-statement-tree';
import { getExpressionMetadata } from '../../expression/expression-metadata-helper';
import { DeclarationScope } from '../../scope/declaration-scope';
import { StatementMetadata } from '../statement-metadata';

export class ExpressionStatementMetadata implements StatementMetadata {
  constructor(private tree: ExpressionStatementTree, private scope: DeclarationScope) {
    tree.expression.metadata = getExpressionMetadata(tree.expression, scope);
  }
}
