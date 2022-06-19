import { Issue } from '../../../issue-service/issue';
import { None, none } from '../../../lib/core';
import { MultipleBodyTree } from '../../../tree/body/multiple/multiple-body-tree';
import { SingleBodyTree } from '../../../tree/body/single/single-body-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { ExpressionStatementTree } from '../../../tree/statement/expression/expression-statement-tree';
import { DefinitionTypeMetadata } from '../../type/definition/definition-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { ValueMetadata } from '../../value/value-metadata';
import { getValueMetadata } from '../../value/value-metadata-helper';
import { DeclarationScope } from '../scope/declaration-scope';
import { ParameterMetadata } from './parameter-metadata';

export function getParameterMetadata(
  tree: ParameterTree,
  scope: DeclarationScope,
): ParameterMetadata[] {
  if (tree instanceof ParameterTree && tree.name) {
    let value: () => ValueMetadata | None = () => none;
    if (
      tree.body instanceof SingleBodyTree &&
      tree.body.statement instanceof ExpressionStatementTree
    ) {
      tree.body.statement.expression.metadata = () =>
        getValueMetadata(tree.body['statement'].expression, scope);
      value = () => getValueMetadata(tree.body['statement'].expression, scope);
    } else if (tree.body instanceof MultipleBodyTree) {
      throw new Error('Not implemented');
    }
    let type: () => TypeMetadata;
    if (tree.type) {
      tree.type.metadata = () => getTypeMetadata(tree.type, scope);
      type = () => getTypeMetadata(tree.type, scope);
    } else if (value()) {
      type = () => value().type();
    } else {
      type = () => new DefinitionTypeMetadata(() => scope.core.any);
    }

    const metadata = new ParameterMetadata(tree.sourceRange, tree.name.text, type, value);
    return [metadata];
  } else if (tree.parameters.length > 0) {
    throw new Error('Not implemented');
  }

  Issue.errorFromTree(tree, 'Parameter metadata not found');
}
