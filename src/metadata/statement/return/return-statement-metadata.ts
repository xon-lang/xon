import { fillValueMetadata, StatementMetadata } from '~/metadata';
import { ReturnStatementTree } from '~/tree';

export class ReturnStatementMetadata implements StatementMetadata {
  constructor(public tree: ReturnStatementTree) {
    if (tree.value) {
      fillValueMetadata(tree.value);
    }
  }
}
