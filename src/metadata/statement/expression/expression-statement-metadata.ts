import { fillValueMetadata, StatementMetadata } from '~/metadata';
import { ExpressionStatementTree } from '~/tree';

export class ExpressionStatementMetadata implements StatementMetadata {
  constructor(private tree: ExpressionStatementTree) {
    fillValueMetadata(tree.expression);
  }
}
