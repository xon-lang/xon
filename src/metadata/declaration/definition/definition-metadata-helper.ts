import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { DeclarationStatementTree } from '../../../tree/statement/declaration/declaration-statement-tree';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { ParameterMetadata } from '../parameter/parameter-metadata';
import {
  fillParameterMetadata,
  getShadowParameterMetadata,
} from '../parameter/parameter-metadata-helper';
import { DeclarationScope } from '../scope/declaration-scope';
import { DefinitionMetadata } from './definition-metadata';

export function getShadowDefinitionMetadata(
  tree: ParameterTree,
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
    getSourceMetadata(tree.body, innerScope, true);
  }

  metadata.attributes = innerScope.declarations
    .filter((x) => x instanceof ParameterMetadata)
    .map((x) => x as ParameterMetadata);

  return metadata;
}

export function fillDefinitionMetadata(tree: ParameterTree) {
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
    .filter((x) => x instanceof DeclarationStatementTree && x.declaration instanceof ParameterTree)
    .map((x) => (x as DeclarationStatementTree).declaration as ParameterTree) || []) {
    fillParameterMetadata(parameter);
  }
}
