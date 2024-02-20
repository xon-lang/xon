import { Nothing, nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { CONST_MODIFIER, MODEL_MODIFIER } from '../../syntax/syntax-config';
import { SemanticContext } from '../semantic-context';
import { ConstantSemantic, constantShallowSemantic } from './constant-semantic';

export function constantsParse(
  context: SemanticContext,
  declarations: DeclarationNode[],
): (ConstantSemantic | Nothing)[] {
  const semanticDeclarations = declarations.map((x) => constantShallowParse(context, x));

  for (const declaration of declarations) {
    constantDeepParse(context, declaration);
  }

  return semanticDeclarations;
}

function constantShallowParse(context: SemanticContext, node: DeclarationNode): ConstantSemantic | Nothing {
  if (node.modifier?.text === CONST_MODIFIER && node.id) {
    const reference = context.createReference(node);
    const name = node.id.text;

    const declaration = constantShallowSemantic(reference, name);
    node.semantic = declaration;
    context.addDeclaration(declaration);

    return declaration;
  }

  return nothing;
}

function constantDeepParse(context: SemanticContext, node: DeclarationNode): ConstantSemantic | Nothing {
  return nothing;
}
