import { DeclarationStatementTree } from '../../../tree/statement/declaration/declaration-statement-tree';
import { fillDeclarationMetadata } from '../../declaration/declaration-metadata-helper';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { StatementMetadata } from '../statement-metadata';

export class DeclarationStatementMetadata implements StatementMetadata {
  constructor(public tree: DeclarationStatementTree, public scope: DeclarationScope) {
    fillDeclarationMetadata(tree.declaration);
  }
}
