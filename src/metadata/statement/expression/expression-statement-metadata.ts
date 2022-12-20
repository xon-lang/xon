import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { StatementMetadata } from '~/metadata/statement/statement-metadata';
import { ExpressionStatementTree } from '~/tree/statement/expression/expression-statement-tree';

export class ExpressionStatementMetadata implements StatementMetadata {
  constructor(private tree: ExpressionStatementTree) {
    getExpressionMetadata(tree.expression);
  }
}
