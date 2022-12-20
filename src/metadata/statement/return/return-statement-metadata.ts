import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { StatementMetadata } from '~/metadata/statement/statement-metadata';
import { ReturnStatementTree } from '~/tree/statement/return/return-statement-tree';

export class ReturnStatementMetadata implements StatementMetadata {
  constructor(public tree: ReturnStatementTree) {
    if (tree.value) {
      getExpressionMetadata(tree.value);
    }
  }
}
