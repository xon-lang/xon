import { fillValueMetadata } from '~/metadata/expression/value/value-metadata-helper';
import { StatementMetadata } from '~/metadata/statement/statement-metadata';
import { ExpressionStatementTree } from '~/tree/statement/expression/expression-statement-tree';

export class ExpressionStatementMetadata implements StatementMetadata {
  constructor(private tree: ExpressionStatementTree) {
    fillValueMetadata(tree.expression);
  }
}
