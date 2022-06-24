import { SourceTree } from '../../tree/source/source-tree';
import { DeclarationScope } from '../declaration/scope/declaration-scope';
import { getStatementMetadata } from '../statement/statement-metadata-helper';

export class SourceMetadata {
  constructor(tree: SourceTree, scope: DeclarationScope) {
    // const innerScope = scope.create();

    for (const statement of tree.statements) {
      statement.metadata = getStatementMetadata(statement, scope);
    }
  }
}
