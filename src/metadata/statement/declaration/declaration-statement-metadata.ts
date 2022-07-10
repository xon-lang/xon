import { DeclarationStatementTree } from '../../../tree/statement/declaration/declaration-statement-tree';
import { fillDefinitionMetadata } from '../../declaration/definition/definition-metadata-helper';
import { fillParameterMetadata } from '../../declaration/parameter/parameter-metadata-helper';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { StatementMetadata } from '../statement-metadata';

export class DeclarationStatementMetadata implements StatementMetadata {
  constructor(public tree: DeclarationStatementTree, public scope: DeclarationScope) {
    if (tree.declaration.modifier) {
      fillDefinitionMetadata(tree.declaration);
    } else {
      fillParameterMetadata(tree.declaration);
    }
  }
}
