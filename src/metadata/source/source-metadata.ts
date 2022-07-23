import { SourceTree } from '../../tree/source/source-tree';
import { fillShadowSourceMetadata } from '../declaration/declaration-metadata-helper';
import { getStatementMetadata } from '../statement/statement-metadata-helper';

export class SourceMetadata {
  constructor(public tree: SourceTree) {
    fillShadowSourceMetadata(tree);
    for (const statement of tree.statements) {
      statement.metadata = getStatementMetadata(statement);
    }
  }
}
