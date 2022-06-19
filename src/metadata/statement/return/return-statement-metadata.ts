import { ReturnStatementTree } from '../../../tree/statement/return/return-statement-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { getValueMetadata } from '../../value/value-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class ReturnStatementMetadata implements StatementMetadata {
  constructor(private tree: ReturnStatementTree, private scope: DeclarationScope) {
    if (tree.value) {
      tree.value.metadata = () => getValueMetadata(tree.value, scope);
    }
  }
}
