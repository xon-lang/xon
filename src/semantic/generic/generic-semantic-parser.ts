import { Nothing, nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { MODEL_MODIFIER } from '../../syntax/syntax-config';
import { SemanticContext } from '../semantic-context';
import { GenericSemantic, genericShallowSemantic } from './generic-semantic';

export function genericsHandle(
  context: SemanticContext,
  declarations: DeclarationNode[],
): (GenericSemantic | Nothing)[] {
  const semanticDeclarations = declarations.map((x) => genericShallowHandle(context, x));

  for (const declaration of declarations) {
    genericDeepHandle(context, declaration);
  }

  return semanticDeclarations;
}

export function genericShallowHandle(context: SemanticContext, node: DeclarationNode): GenericSemantic | Nothing {
  if (node.modifier?.text === MODEL_MODIFIER && node.id) {
    const reference = context.createReference(node);
    const name = node.id.text;

    const declaration = genericShallowSemantic(reference, name);
    node.semantic = declaration;
    context.addDeclaration(declaration);

    return declaration;
  }

  return nothing;
}

export function genericDeepHandle(context: SemanticContext, node: DeclarationNode): GenericSemantic | Nothing {
  return nothing;
}
