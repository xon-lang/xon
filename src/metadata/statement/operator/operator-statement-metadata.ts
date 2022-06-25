import { none } from '../../../lib/core';
import { OperatorStatementTree } from '../../../tree/statement/operator/operator-statement-tree';
import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { StatementMetadata } from '../statement-metadata';

export class OperatorStatementMetadata implements StatementMetadata {
  constructor(private tree: OperatorStatementTree, private scope: DeclarationScope) {
    tree.type.metadata = getTypeMetadata(tree.type, scope);
    const metadata = scope.find(tree.name.text, (x) =>
      x.sourceRange.equals(tree.sourceRange),
    ) as ParameterMetadata;
    metadata.type = tree.type.metadata as TypeMetadata;
    metadata.value = none;

    if (tree.body) {
      tree.body.metadata = getSourceMetadata(tree.body, scope);
    }
  }
}
