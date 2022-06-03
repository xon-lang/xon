import { Issue } from '../../../issue-service/issue';
import { None, none } from '../../../lib/core';
import { MultipleBodyTree } from '../../../tree/body/multiple/multiple-body-tree';
import { SingleBodyTree } from '../../../tree/body/single/single-body-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { ExpressionStatementTree } from '../../../tree/statement/expression/expression-statement-tree';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { getValueMetadata } from '../../value/value-metadata-helper';
import { ValueMetadata } from '../../value/value-metadata';
import { DeclarationScope } from '../scope/declaration-scope';
import { ParameterMetadata } from './parameter-metadata';

export function getParameterMetadata(
  tree: ParameterTree,
  scope: DeclarationScope,
): ParameterMetadata[] {
  try {
    if (tree instanceof ParameterTree && tree.name) {
      const type = () => getTypeMetadata(tree.type, scope);
      let value: () => ValueMetadata | None = () => none;
      if (
        tree.body instanceof SingleBodyTree &&
        tree.body.statement instanceof ExpressionStatementTree
      ) {
        value = () => getValueMetadata(tree.body['statement'].expression, scope);
      } else if (tree.body instanceof MultipleBodyTree) {
        throw new Error('Not implemented');
      }
      const metadata = new ParameterMetadata(tree.sourceRange, tree.name.text, type, value);
      return [metadata];
    } else if (tree.parameters.length > 0) {
      throw new Error('Not implemented');
    }

    throw `Parameter metadata not found'`;
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}
