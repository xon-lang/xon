import { ReturnStatementTree } from '../../../tree/statement/return/return-statement-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { fillValueMetadata } from '../../expression/value/value-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class ReturnStatementMetadata implements StatementMetadata {
  constructor(private tree: ReturnStatementTree, private scope: DeclarationScope) {
    if (tree.value) {
      fillValueMetadata(tree.value, scope);
    }
  }
}
