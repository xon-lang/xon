import { fillValueMetadata } from '@/metadata/expression/value/value-metadata-helper';
import { getSourceMetadata } from '@/metadata/source/source-metadata-helper';
import { StatementMetadata } from '@/metadata/statement/statement-metadata';
import { IfStatementTree } from '@/tree/statement/if/if-statement-tree';

export class IfStatementMetadata implements StatementMetadata {
  constructor(private tree: IfStatementTree) {
    fillValueMetadata(tree.condition);

    tree.thenBody.metadata = getSourceMetadata(tree.thenBody);
    if (tree.elseBody) {
      tree.elseBody.metadata = getSourceMetadata(tree.elseBody);
    }
  }
}
