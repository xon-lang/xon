import { Nothing, nothing } from '../../../lib/core';
import { DeclarationNode } from '../../../parser/node/syntax/declaration/declaration-node';
import { CONSTANT_MODIFIER } from '../../../parser/syntax-config';
import { $Semantic, semanticIs } from '../../semantic';
import { SemanticContext } from '../../semantic-context';
import { typeSemanticParse } from '../../usage/type/type-semantic-parser';
import { genericsParse } from '../generic/generic-semantic-parser';
import { parametersParse } from '../parameter/parameter-semantic-parser';
import { ConstantSemantic, constantShallowSemantic } from './constant-semantic';

export function constantShallowParse(context: SemanticContext, node: DeclarationNode): ConstantSemantic | Nothing {
  if (node.modifier?.text !== CONSTANT_MODIFIER) {
    return nothing;
  }

  const reference = context.createReference(node);
  const name = node.id.text;

  const declaration = constantShallowSemantic(reference, name);
  node.id.semantic = declaration;
  context.addDeclaration(declaration);

  return declaration;
}

export function constantDeepParse(context: SemanticContext, node: DeclarationNode): void {
  if (semanticIs<ConstantSemantic>(node.id.semantic, $Semantic.CONSTANT)) {
    const childContext = context.createChildContext();

    if (node.generics) {
      node.id.semantic.generics = genericsParse(childContext, node.generics.items);
    }

    if (node.parameters) {
      node.id.semantic.generics = parametersParse(childContext, node.parameters.items);
    }

    if (node.type?.value) {
      node.id.semantic.type = typeSemanticParse(childContext, node.type.value);
    }

    if (node.attributes.length > 0) {
      // todo
    }
  }
}
