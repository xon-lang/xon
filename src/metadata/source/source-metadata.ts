import { SourceTree } from '../../tree/source/source-tree';
import { fillShadowSourceMetadata } from '../declaration/declaration-metadata-helper';
import { DeclarationScope } from '../declaration/scope/declaration-scope';
import { getStatementMetadata } from '../statement/statement-metadata-helper';

export class SourceMetadata {
  constructor(public tree: SourceTree, public scope: DeclarationScope) {
    fillShadowSourceMetadata(tree, scope);
    for (const statement of tree.statements) {
      statement.metadata = getStatementMetadata(statement, scope.create());
    }
  }
}
