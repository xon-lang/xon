import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { ArrayTypeMetadata } from '../../expression/type/array/array-type-metadata';
import { MethodTypeMetadata } from '../../expression/type/method/method-type-metadata';
import { ObjectTypeMetadata } from '../../expression/type/object/object-type-metadata';
import { TypeMetadata } from '../../expression/type/type-metadata';
import { getTypeMetadata } from '../../expression/type/type-metadata-helper';
import { getValueMetadata } from '../../expression/value/value-metadata-helper';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { DeclarationScope } from '../scope/declaration-scope';
import { ParameterMetadata } from './parameter-metadata';

export function getShadowParameterMetadata(
  tree: ParameterTree,
  scope: DeclarationScope,
): ParameterMetadata {
  const metadata = new ParameterMetadata(tree.name || tree, scope);
  const innerScope = scope.create();

  if (tree.destructure.length) {
    for (const parameter of tree.destructure) {
      parameter.metadata = new ParameterMetadata(parameter.name, scope);
      if (parameter.name) {
        parameter.name.metadata = parameter.metadata;
      }
      scope.add(parameter.metadata);
    }
  } else {
    for (const parameter of tree.parameters) {
      parameter.metadata = getShadowParameterMetadata(parameter, innerScope);
      if (parameter.name) {
        parameter.name.metadata = parameter.metadata;
      }
      innerScope.add(parameter.metadata);
    }
    metadata.parameters = tree.parameters.map((x) => x.metadata as ParameterMetadata);
  }

  if (tree.body) {
    getSourceMetadata(tree.body, innerScope, true);
  }

  return metadata;
}

export function fillParameterMetadata(tree: ParameterTree, alternativeType?: TypeMetadata) {
  tree.parameters.forEach((x) => fillParameterMetadata(x));

  if (tree.value && tree.metadata instanceof ParameterMetadata) {
    tree.metadata.value = getValueMetadata(tree.value, tree.metadata.scope);
    tree.value.metadata = tree.metadata.value;
  }

  if (tree.type) {
    tree.metadata.type = getTypeMetadata(tree.type, tree.metadata.scope);
    tree.type.metadata = tree.metadata.type;
  } else if (alternativeType) {
    tree.metadata.type = alternativeType;
  } else if (tree.value && tree.metadata instanceof ParameterMetadata) {
    tree.metadata.type = tree.metadata.value.type();
  } else {
    tree.metadata.type = tree.metadata.scope.core.any.type;
  }

  if (tree.hasParameters) {
    tree.metadata.type = new MethodTypeMetadata(
      tree.parameters.map((x) => x.metadata as ParameterMetadata),
      tree.metadata.type,
    );
  }

  if (tree.destructure.length) {
    fillDestructureParameterMetadata(tree);
  }
}

export function fillDestructureParameterMetadata(tree: ParameterTree) {
  for (const [index, parameter] of tree.destructure.entries()) {
    let type: TypeMetadata;
    if (tree.metadata.type instanceof ObjectTypeMetadata) {
      const declarations = tree.metadata.type.attributesScope().filter(parameter.name.text);
      if (declarations.length === 1) {
        type = declarations[0].type;
        // todo think about it, we already set sourceRange this is second time
        parameter.metadata.sourceRange = declarations[0].sourceRange;
      } else if (declarations.length > 0) {
        parameter.name.addError('Too many declarations');
      } else {
        parameter.name.addError('No declarations found');
      }
    } else if (tree.metadata.type instanceof ArrayTypeMetadata) {
      const commonType = tree.metadata.type.commonType;
      const items = tree.metadata.type.items;
      type = (items.length && items[index]) || commonType;
    }
    fillParameterMetadata(parameter, type);
  }
}
