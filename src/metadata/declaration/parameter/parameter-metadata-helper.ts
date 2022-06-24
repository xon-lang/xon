import { Issue } from '../../../issue-service/issue';
import { None, none } from '../../../lib/core';
import { ExpressionTree } from '../../../tree/expression/expression-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { ArrayTypeMetadata } from '../../type/array/array-type-metadata';
import { ObjectTypeMetadata } from '../../type/object/object-type-metadata';
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
  if (!tree) return [];

  if (!(tree instanceof ParameterTree)) {
    Issue.errorFromTree(tree, 'Parameter metadata not found');
  }

  let value: () => ValueMetadata | None = () => none;
  if (tree.body instanceof ExpressionTree) {
    tree.body.metadata = () => getValueMetadata(tree.body['statement'].expression, scope);
    value = () => getValueMetadata(tree.body as ExpressionTree, scope);
  }

  if (tree.name) {
    let type: () => TypeMetadata;
    if (tree.type) {
      tree.type.metadata = () => getTypeMetadata(tree.type, scope);
      type = () => getTypeMetadata(tree.type, scope);
    } else {
      type = () => value()?.type() || scope.core.any.type();
    }

    const metadata = new ParameterMetadata(tree.sourceRange, tree.name.text, type, value);
    return [metadata];
  }

  const parametersMetadata: ParameterMetadata[] = [];
  for (const [index, parameter] of tree.parameters.entries()) {
    let type: () => TypeMetadata;
    if (parameter.type) {
      parameter.type.metadata = () => getTypeMetadata(parameter.type, scope);
      type = () => getTypeMetadata(parameter.type, scope);
    } else {
      type = () => {
        const type = value().type();
        if (type instanceof ObjectTypeMetadata) {
          return type.attributesScope().find(parameter.name.text).type();
        } else if (type instanceof ArrayTypeMetadata) {
          const commonType = type.commonType();
          const items = type.items();
          return (items.length && items[index]) || commonType;
        }
      };
    }
    const metadata = new ParameterMetadata(tree.sourceRange, parameter.name.text, type, value);
    parametersMetadata.push(metadata);
  }
  return parametersMetadata;
}
