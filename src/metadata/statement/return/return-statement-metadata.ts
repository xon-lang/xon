import { ReturnStatementTree } from '../../../tree/statement/return/return-statement-tree';
import { fillValueMetadata } from '../../expression/value/value-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class ReturnStatementMetadata implements StatementMetadata {
  constructor(public tree: ReturnStatementTree) {
    if (tree.value) {
      fillValueMetadata(tree.value);
    }
  }
}
