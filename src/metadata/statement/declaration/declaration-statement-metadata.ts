import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { DeclarationStatementTree } from '../../../tree/statement/declaration/declaration-statement-tree';
import { fillDefinitionMetadata } from '../../declaration/definition/definition-metadata-helper';
import { fillParameterMetadata } from '../../declaration/parameter/parameter-metadata-helper';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { StatementMetadata } from '../statement-metadata';

export class DeclarationStatementMetadata implements StatementMetadata {
  constructor(public tree: DeclarationStatementTree, public scope: DeclarationScope) {
    if (tree.declaration instanceof DefinitionTree) {
      fillDefinitionMetadata(tree.declaration);
    } else if (tree.declaration instanceof ParameterTree) {
      fillParameterMetadata(tree.declaration);
    }
  }
}
