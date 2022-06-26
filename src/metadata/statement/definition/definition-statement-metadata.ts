import { DefinitionStatementTree } from '../../../tree/statement/definition/definition-statement-tree';
import { getDefinitionMetadata } from '../../declaration/definition/definition-metadata-helper';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { StatementMetadata } from '../statement-metadata';

export class DefinitionStatementMetadata implements StatementMetadata {
  constructor(private tree: DefinitionStatementTree, private scope: DeclarationScope) {
    tree.definition.metadata = getDefinitionMetadata(tree.definition, scope);
  }
}
