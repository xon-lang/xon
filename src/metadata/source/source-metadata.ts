import { SourceTree } from '../../tree/source/source-tree';
import { getShadowSourceMetadata } from '../declaration/declaration-metadata-helper';
import { getStatementMetadata } from '../statement/statement-metadata-helper';

export class SourceMetadata {
  constructor(public tree: SourceTree) {
    getShadowSourceMetadata(tree);
    for (const statement of tree.statements) {
      statement.metadata = getStatementMetadata(statement);
    }
  }
}
