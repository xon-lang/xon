import { IfStatementTree } from '../../../tree/statement/if/if-statement-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { fillValueMetadata } from '../../expression/value/value-metadata-helper';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class IfStatementMetadata implements StatementMetadata {
  constructor(private tree: IfStatementTree, private scope: DeclarationScope) {
    fillValueMetadata(tree.condition, scope);

    tree.thenBody.metadata = getSourceMetadata(tree.thenBody, scope);
    if (tree.elseBody) {
      tree.elseBody.metadata = getSourceMetadata(tree.elseBody, scope);
    }
  }
}
