import { Nothing, nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { CONST_MODIFIER } from '../../syntax/syntax-config';
import { genericsParse } from '../generic/generic-semantic-parser';
import { parametersParse } from '../parameter/parameter-semantic-parser';
import { $Semantic, semanticIs } from '../semantic';
import { SemanticContext } from '../semantic-context';
import { parseUsageSemantic } from '../usage/usage-semantic-parser';
import { ConstantSemantic, constantShallowSemantic } from './constant-semantic';

export function constantShallowParse(context: SemanticContext, node: DeclarationNode): ConstantSemantic | Nothing {
  if (node.modifier?.text !== CONST_MODIFIER) {
    return nothing;
  }

  const reference = context.createReference(node);
  const name = node.id.text;

  const declaration = constantShallowSemantic(reference, name);
  node.semantic = declaration;
  context.addDeclaration(declaration);

  return declaration;
}

export function constantDeepParse(context: SemanticContext, node: DeclarationNode): void {
  if (semanticIs<ConstantSemantic>(node.semantic, $Semantic.CONST)) {
    const childContext = context.createChildContext();

    if (node.generics) {
      node.semantic.generics = genericsParse(childContext, node.generics.items);
    }

    if (node.parameters) {
      node.semantic.generics = parametersParse(childContext, node.parameters.items);
    }

    if (node.type?.value) {
      node.semantic.type = parseUsageSemantic(childContext, node.type.value);
    }

    if (node.attributes.length > 0) {
      // todo
    }
  }
}
