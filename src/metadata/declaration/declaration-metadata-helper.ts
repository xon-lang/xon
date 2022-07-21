import { none } from '../../lib/core';
import { DeclarationTree } from '../../tree/declaration/declaration-tree';
import { IdExpressionTree } from '../../tree/expression/id/id-expression-tree';
import { SourceTree } from '../../tree/source/source-tree';
import { DeclarationStatementTree } from '../../tree/statement/declaration/declaration-statement-tree';
import { ArrayTypeMetadata } from '../expression/type/array/array-type-metadata';
import { MethodTypeMetadata } from '../expression/type/method/method-type-metadata';
import { ObjectTypeMetadata } from '../expression/type/object/object-type-metadata';
import { TypeMetadata } from '../expression/type/type-metadata';
import { fillTypeMetadata } from '../expression/type/type-metadata-helper';
import { fillValueMetadata } from '../expression/value/value-metadata-helper';
import { DeclarationMetadata } from './declaration-metadata';
import { DefinitionMetadata } from './definition/definition-metadata';
import { OperatorMetadata } from './operator/operator-metadata';
import { ParameterMetadata } from './parameter/parameter-metadata';
import { DeclarationScope } from './scope/declaration-scope';

export function fillShadowDeclarationMetadata(tree: DeclarationTree, scope: DeclarationScope) {
  if (tree.modifier?.text === 'operator') {
    tree.metadata = getShadowOperatorMetadata(tree, scope);
    tree.name.metadata = tree.metadata;
    scope.add(tree.metadata);
  } else if (tree.modifier?.text === 'model' || tree.modifier?.text === 'object') {
    tree.metadata = getShadowDefinitionMetadata(tree, scope);
    tree.name.metadata = tree.metadata;
    scope.add(tree.metadata);
  } else {
    tree.metadata = getShadowParameterMetadata(tree, scope);
    if (tree.name) {
      tree.name.metadata = tree.metadata;
    }
    if (tree.metadata.name) {
      scope.add(tree.metadata);
    }
  }
}

export function fillDeclarationMetadata(tree: DeclarationTree) {
  if (tree.modifier?.text === 'operator') {
    fillOperatorMetadata(tree);
  } else if (tree.modifier?.text === 'model' || tree.modifier?.text === 'object') {
    fillDefinitionMetadata(tree);
  } else {
    fillParameterMetadata(tree);
  }
}

export function getShadowDefinitionMetadata(
  tree: DeclarationTree,
  scope: DeclarationScope,
): DefinitionMetadata {
  const metadata = new DefinitionMetadata(tree, scope);
  const innerScope = scope.create();

  for (const parameter of tree.parameters) {
    parameter.metadata = getShadowParameterMetadata(parameter, innerScope);
    if (parameter.name) {
      parameter.name.metadata = parameter.metadata;
    }
    innerScope.add(parameter.metadata);
  }

  if (tree.body) {
    fillShadowSourceMetadata(tree.body, innerScope);
  }

  metadata.attributes = innerScope.declarations
    .filter((x) => x instanceof ParameterMetadata)
    .map((x) => x as ParameterMetadata);

  return metadata;
}

export function fillDefinitionMetadata(tree: DeclarationTree) {
  for (const parameter of tree.parameters) {
    fillParameterMetadata(parameter);
  }

  // todo fix base type should be TypeMetadata
  if (tree.type instanceof IdExpressionTree) {
    const declarations = tree.metadata.scope.filter(tree.type.name.text);
    if (declarations.length === 1) {
      tree.type.metadata = declarations[0];
      if (tree.metadata instanceof DefinitionMetadata) {
        tree.metadata.base = declarations[0] as DefinitionMetadata;
      }
    } else if (declarations.length > 0) {
      tree.type.addError('Too many declarations');
    } else {
      tree.type.addError('No declarations found');
    }
  } else if (tree.type) {
    tree.type.addError('Base class should be an IdExpression');
  }

  for (const parameter of tree.body?.statements
    .filter(
      (x) => x instanceof DeclarationStatementTree && x.declaration instanceof DeclarationTree,
    )
    .map((x) => (x as DeclarationStatementTree).declaration as DeclarationTree) || []) {
    fillParameterMetadata(parameter);
  }
}

export function getShadowOperatorMetadata(
  tree: DeclarationTree,
  scope: DeclarationScope,
): ParameterMetadata {
  const metadata = new OperatorMetadata(tree, scope);
  const innerScope = scope.create();

  for (const parameter of tree.parameters) {
    parameter.metadata = getShadowParameterMetadata(parameter, innerScope);
    if (parameter.name) {
      parameter.name.metadata = parameter.metadata;
    }
    innerScope.add(parameter.metadata);
  }
  metadata.parameters = tree.parameters.map((x) => x.metadata as ParameterMetadata);

  if (tree.body) {
    fillShadowSourceMetadata(tree.body, innerScope);
  }

  return metadata;
}

export function fillOperatorMetadata(tree: DeclarationTree, alternativeType?: TypeMetadata) {
  tree.parameters.forEach((x) => fillParameterMetadata(x));

  if (tree.value) {
    tree.metadata.value = fillValueMetadata(tree.value, tree.metadata.scope);
  }

  if (tree.type) {
    tree.metadata.type = fillTypeMetadata(tree.type, tree.metadata.scope);
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
}

export function getShadowParameterMetadata(
  tree: DeclarationTree,
  scope: DeclarationScope,
): ParameterMetadata {
  const metadata = new ParameterMetadata(tree, scope);
  const innerScope = scope.create();

  if (tree.destructure.length) {
    for (const parameter of tree.destructure) {
      parameter.metadata = new ParameterMetadata(parameter, scope);
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
    fillShadowSourceMetadata(tree.body, innerScope);
  }

  metadata.modifier = tree.modifier?.text;
  return metadata;
}

export function fillParameterMetadata(tree: DeclarationTree, alternativeType?: TypeMetadata) {
  tree.parameters.forEach((x) => fillParameterMetadata(x));

  if (tree.value && tree.metadata instanceof ParameterMetadata) {
    tree.metadata.value = fillValueMetadata(tree.value, tree.metadata.scope);
  }

  if (tree.type) {
    tree.metadata.type = fillTypeMetadata(tree.type, tree.metadata.scope);
  } else if (alternativeType) {
    tree.metadata.type = alternativeType;
  } else if (tree.value && tree.metadata instanceof ParameterMetadata) {
    tree.metadata.type = tree.metadata.value.type();
  } else {
    tree.metadata.type = tree.metadata.scope.core?.any.type || none;
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

export function fillDestructureParameterMetadata(tree: DeclarationTree) {
  for (const [index, parameter] of tree.destructure.entries()) {
    let type: TypeMetadata;
    if (tree.metadata.type instanceof ObjectTypeMetadata) {
      const declarations = tree.metadata.type.attributesScope()?.filter(parameter.name.text) || [];
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

export function fillShadowSourceMetadata(
  tree: SourceTree,
  scope: DeclarationScope,
): DeclarationMetadata[] {
  const declarations: DeclarationMetadata[] = [];
  for (const statement of tree.statements) {
    if (statement instanceof DeclarationStatementTree) {
      if (!statement.declaration.metadata) {
        fillShadowDeclarationMetadata(statement.declaration, scope);
      }

      const declaration = statement.declaration.metadata;
      if (declaration instanceof DefinitionMetadata || declaration instanceof OperatorMetadata) {
        declarations.push(declaration);
      }
    }
  }
  return declarations;
}
