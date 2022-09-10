import { SourceTree } from '../../tree/source/source-tree';
import { getShadowSourceMetadata } from '../declaration/declaration-metadata-helper';
import { Metadata } from '../metadata';
import { getStatementMetadata } from '../statement/statement-metadata-helper';

export class SourceMetadata extends Metadata {
  constructor(public tree: SourceTree) {
    super();
    getShadowSourceMetadata(tree);
    for (const statement of tree.statements) {
      statement.metadata = getStatementMetadata(statement);
    }
  }
}
