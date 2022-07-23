import { DeclarationStatementTree } from '../../../tree/statement/declaration/declaration-statement-tree';
import { fillDeclarationMetadata } from '../../declaration/declaration-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class DeclarationStatementMetadata implements StatementMetadata {
  constructor(public tree: DeclarationStatementTree) {
    fillDeclarationMetadata(tree.declaration);
  }
}
