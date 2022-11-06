import { fillValueMetadata, getSourceMetadata, StatementMetadata } from '~/metadata';
import { IfStatementTree } from '~/tree';

export class IfStatementMetadata implements StatementMetadata {
  constructor(private tree: IfStatementTree) {
    fillValueMetadata(tree.condition);

    tree.thenBody.metadata = getSourceMetadata(tree.thenBody);
    if (tree.elseBody) {
      tree.elseBody.metadata = getSourceMetadata(tree.elseBody);
    }
  }
}
