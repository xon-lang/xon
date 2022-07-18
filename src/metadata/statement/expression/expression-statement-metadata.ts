import { ExpressionStatementTree } from '../../../tree/statement/expression/expression-statement-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { fillValueMetadata } from '../../expression/value/value-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class ExpressionStatementMetadata implements StatementMetadata {
  constructor(private tree: ExpressionStatementTree, private scope: DeclarationScope) {
    fillValueMetadata(tree.expression, scope);
  }
}
