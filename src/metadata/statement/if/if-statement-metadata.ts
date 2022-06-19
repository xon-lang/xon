import { MultipleBodyTree } from '../../../tree/body/multiple/multiple-body-tree';
import { IfStatementTree } from '../../../tree/statement/if/if-statement-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { getValueMetadata } from '../../value/value-metadata-helper';
import { StatementMetadata } from '../statement-metadata';
import { getStatementMetadata } from '../statement-metadata-helper';

export class IfStatementMetadata implements StatementMetadata {
  constructor(private tree: IfStatementTree, private scope: DeclarationScope) {
    tree.condition.metadata = () => getValueMetadata(tree.condition, scope);

    if (tree.thenBody instanceof MultipleBodyTree)
      tree.thenBody.statements.forEach((x) => (x.metadata = getStatementMetadata(x, scope)));
    else throw new Error('Not implemented');

    if (tree.elseBody instanceof MultipleBodyTree)
      tree.elseBody.statements.forEach((x) => (x.metadata = getStatementMetadata(x, scope)));
    else if (tree.elseBody) throw new Error('Not implemented');
  }
}
