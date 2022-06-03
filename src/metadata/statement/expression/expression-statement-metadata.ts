import { ExpressionStatementTree } from '../../../tree/statement/expression/expression-statement-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { getValueExpressionMetadata } from '../../expression/value/value-expression-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class ExpressionStatementMetadata implements StatementMetadata {
  constructor(private tree: ExpressionStatementTree, private scope: DeclarationScope) {
    tree.expression.metadata = getValueExpressionMetadata(tree.expression, scope);
  }
}