import { Metadata } from '~/metadata/metadata';
import { SourceNode } from '~/tree/expression/source/source-tree';

export class SourceMetadata extends Metadata {
  constructor(public tree: SourceNode) {
    super();
    // getShadowSourceMetadata(tree);
    // for (const statement of tree.statements) {
    //   statement.metadata = getStatementMetadata(statement);
    // }
  }
}
