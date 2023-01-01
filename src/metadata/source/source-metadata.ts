import { Metadata } from '~/metadata/metadata';
import { getStatementMetadata } from '~/metadata/statement/statement-metadata-helper';
import { SourceTree } from '~/tree/source/source-tree';

export class SourceMetadata extends Metadata {
  constructor(public tree: SourceTree) {
    super();
    // getShadowSourceMetadata(tree);
    // for (const statement of tree.statements) {
    //   statement.metadata = getStatementMetadata(statement);
    // }
  }
}
