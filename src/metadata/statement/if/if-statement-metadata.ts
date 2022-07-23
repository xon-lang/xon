import { IfStatementTree } from '../../../tree/statement/if/if-statement-tree';
import { fillValueMetadata } from '../../expression/value/value-metadata-helper';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class IfStatementMetadata implements StatementMetadata {
  constructor(private tree: IfStatementTree) {
    fillValueMetadata(tree.condition);

    tree.thenBody.metadata = getSourceMetadata(tree.thenBody);
    if (tree.elseBody) {
      tree.elseBody.metadata = getSourceMetadata(tree.elseBody);
    }
  }
}
