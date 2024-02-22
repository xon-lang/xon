import { Nothing, nothing } from '../../../lib/core';
import { DeclarationNode } from '../../../syntax/node/declaration/declaration-node';
import { MODEL_MODIFIER } from '../../../syntax/syntax-config';
import { $Semantic, semanticIs } from '../../semantic';
import { SemanticContext } from '../../semantic-context';
import { typeSemanticParse } from '../../usage/type/type-semantic-parser';
import { genericsParse } from '../generic/generic-semantic-parser';
import { ModelSemantic, modelShallowSemantic } from './model-semantic';

export function modelShallowParse(context: SemanticContext, node: DeclarationNode): ModelSemantic | Nothing {
  if (node.modifier?.text !== MODEL_MODIFIER) {
    return nothing;
  }

  const reference = context.createReference(node);
  const name = node.id.text;

  const declaration = modelShallowSemantic(reference, name);
  node.id.semantic = declaration;
  context.addDeclaration(declaration);

  return declaration;
}

export function modelDeepParse(context: SemanticContext, node: DeclarationNode): void {
  if (semanticIs<ModelSemantic>(node.id.semantic, $Semantic.MODEL)) {
    const childContext = context.createChildContext();

    if (node.generics) {
      node.id.semantic.generics = genericsParse(childContext, node.generics.items);
    }

    if (node.type?.value) {
      node.id.semantic.base = typeSemanticParse(childContext, node.type.value);
    }

    if (node.attributes.length > 0) {
      // todo
    }
  }
}
