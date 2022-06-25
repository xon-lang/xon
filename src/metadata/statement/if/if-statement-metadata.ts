import { IfStatementTree } from '../../../tree/statement/if/if-statement-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { getValueMetadata } from '../../value/value-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class IfStatementMetadata implements StatementMetadata {
  constructor(private tree: IfStatementTree, private scope: DeclarationScope) {
    tree.condition.metadata = getValueMetadata(tree.condition, scope);

    tree.thenBody.metadata = getSourceMetadata(tree.thenBody, scope);
    if (tree.elseBody) {
      tree.elseBody.metadata = getSourceMetadata(tree.elseBody, scope);
    }
  }
}
