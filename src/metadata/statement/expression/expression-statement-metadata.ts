import { ExpressionStatementTree } from '../../../tree/statement/expression/expression-statement-tree';
import { fillValueMetadata } from '../../expression/value/value-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class ExpressionStatementMetadata implements StatementMetadata {
  constructor(private tree: ExpressionStatementTree) {
    fillValueMetadata(tree.expression);
  }
}
