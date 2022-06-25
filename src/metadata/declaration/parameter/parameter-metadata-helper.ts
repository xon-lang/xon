import { Issue } from '../../../issue-service/issue';
import { None } from '../../../lib/core';
import { ExpressionTree } from '../../../tree/expression/expression-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { SourceTree } from '../../../tree/source/source-tree';
import { getSourceMetadata } from '../../source/source-metadata-helper';
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

  if (tree.body instanceof ExpressionTree) {
    tree.body.metadata = getValueMetadata(tree.body, scope);
  } else if (tree.body instanceof SourceTree) {
    tree.body.metadata = getSourceMetadata(tree.body, scope);
  }

  if (tree.name) {
    let type: TypeMetadata;
    if (tree.type) {
      type = getTypeMetadata(tree.type, scope);
    } else if (tree.body?.metadata instanceof ValueMetadata) {
      type = tree.body.metadata.type();
    } else {
      type = scope.core.any.type;
    }
    const metadata = makeParameterMetadata(tree, type, scope);
    if (tree.body instanceof ExpressionTree) {
      metadata.value = tree.body.metadata as ValueMetadata;
    }
    return [metadata];
  }

  const parametersMetadata: ParameterMetadata[] = [];
  for (const [index, parameter] of tree.parameters.entries()) {
    let type: TypeMetadata;
    if (parameter.type) {
      type = getTypeMetadata(parameter.type, scope);
      parameter.type.metadata = type;
    } else {
      const bodyType = (tree.body.metadata as ValueMetadata).type();
      if (bodyType instanceof ObjectTypeMetadata) {
        type = bodyType.attributesScope().find(parameter.name.text).type;
      } else if (bodyType instanceof ArrayTypeMetadata) {
        const commonType = bodyType.commonType;
        const items = bodyType.items;
        type = (items.length && items[index]) || commonType;
      }
    }

    const metadata = makeParameterMetadata(parameter, type, scope);

    parametersMetadata.push(metadata);
  }
  return parametersMetadata;
}

function makeParameterMetadata(
  tree: ParameterTree,
  type: TypeMetadata | None,
  scope: DeclarationScope,
): ParameterMetadata {
  if (!tree.name) Issue.errorFromTree(tree, "Name doesn't exists");

  if (tree.type) {
    tree.type.metadata = type;
  }

  const metadata = scope.find(tree.name.text, (x) =>
    x.sourceRange.equals(tree.sourceRange),
  ) as ParameterMetadata;
  metadata.type = type;
  return metadata;
}
