import { getShadowSourceMetadata, getStatementMetadata, Metadata } from '~/metadata';
import { SourceTree } from '~/tree';

export class SourceMetadata extends Metadata {
  constructor(public tree: SourceTree) {
    super();
    getShadowSourceMetadata(tree);
    for (const statement of tree.statements) {
      statement.metadata = getStatementMetadata(statement);
    }
  }
}
