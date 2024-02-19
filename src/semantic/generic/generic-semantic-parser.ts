import { Nothing, nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { MODEL_MODIFIER } from '../../syntax/syntax-config';
import { SemanticContext } from '../semantic-context';
import { GenericDeclarationSemantic, genericShallowDeclarationSemantic } from './generic-semantic';

export function genericDeclarationsHandle(
  context: SemanticContext,
  declarations: DeclarationNode[],
): (GenericDeclarationSemantic | Nothing)[] {
  const semanticDeclarations = declarations.map((x) => genericDeclarationShallowHandle(context, x));

  for (const declaration of declarations) {
    genericDeclarationDeepHandle(context, declaration);
  }

  return semanticDeclarations;
}

export function genericDeclarationShallowHandle(
  context: SemanticContext,
  node: DeclarationNode,
): GenericDeclarationSemantic | Nothing {
  if (node.modifier?.text === MODEL_MODIFIER && node.id) {
    const reference = context.createReference(node);
    const name = node.id.text;

    const declaration = genericShallowDeclarationSemantic(reference, name);
    node.semantic = declaration;
    context.addDeclaration(declaration);

    return declaration;
  }

  return nothing;
}

export function genericDeclarationDeepHandle(
  context: SemanticContext,
  node: DeclarationNode,
): GenericDeclarationSemantic | Nothing {
  return nothing;
}
