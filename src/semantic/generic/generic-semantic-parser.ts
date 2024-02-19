import { Nothing, nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { MODEL_MODIFIER } from '../../syntax/syntax-config';
import { SemanticContext } from '../semantic-context';
import { GenericSemantic, genericShallowSemantic } from './generic-semantic';

export function genericsParse(
  context: SemanticContext,
  declarations: DeclarationNode[],
): (GenericSemantic | Nothing)[] {
  const semanticDeclarations = declarations.map((x) => genericShallowParse(context, x));

  for (const declaration of declarations) {
    genericDeepParse(context, declaration);
  }

  return semanticDeclarations;
}

function genericShallowParse(context: SemanticContext, node: DeclarationNode): GenericSemantic | Nothing {
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

function genericDeepParse(context: SemanticContext, node: DeclarationNode): GenericSemantic | Nothing {
  return nothing;
}
