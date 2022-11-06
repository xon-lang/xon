import { fillDeclarationMetadata, StatementMetadata } from '~/metadata';
import { DeclarationStatementTree } from '~/tree';

export class DeclarationStatementMetadata implements StatementMetadata {
  constructor(public tree: DeclarationStatementTree) {
    fillDeclarationMetadata(tree.declaration);
  }
}
