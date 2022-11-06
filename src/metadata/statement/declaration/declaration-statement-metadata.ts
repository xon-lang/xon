import { fillDeclarationMetadata } from '~/metadata/declaration/declaration-metadata-helper';
import { StatementMetadata } from '~/metadata/statement/statement-metadata';
import { DeclarationStatementTree } from '~/tree/statement/declaration/declaration-statement-tree';

export class DeclarationStatementMetadata implements StatementMetadata {
  constructor(public tree: DeclarationStatementTree) {
    fillDeclarationMetadata(tree.declaration);
  }
}
