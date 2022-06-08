import { none } from '../../../lib/core';
import { OperatorStatementTree } from '../../../tree/statement/operator/operator-statement-tree';
import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class OperatorStatementMetadata implements StatementMetadata {
  constructor(private tree: OperatorStatementTree, private scope: DeclarationScope) {
    const type = () => getTypeMetadata(tree.type, scope);
    const declaration = new ParameterMetadata(tree.sourceRange, tree.name.text, type, () => none);
    scope.add(declaration);
  }
}
