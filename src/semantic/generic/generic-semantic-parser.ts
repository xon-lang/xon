import { Nothing, nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { MODEL_MODIFIER } from '../../syntax/syntax-config';
import { SemanticContext } from '../semantic-context';
import { GenericSemantic, genericShallowSemantic } from './generic-semantic';

export function genericsParse(
  context: SemanticContext,
  nodes: (DeclarationNode | Nothing)[],
): (GenericSemantic | Nothing)[] {
  const semanticDeclarations = nodes.map((x) => genericShallowParse(context, x));

  for (const node of nodes) {
    if (node) {
      genericDeepParse(context, node);
    }
  }

  return semanticDeclarations;
}

function genericShallowParse(context: SemanticContext, node: DeclarationNode | Nothing): GenericSemantic | Nothing {
  if (node?.modifier?.text === MODEL_MODIFIER) {
    const reference = context.createReference(node);
    const name = node.id.text;

    const declaration = genericShallowSemantic(reference, name);
    node.semantic = declaration;
    context.addDeclaration(declaration);

    return declaration;
  }

  return nothing;
}

function genericDeepParse(context: SemanticContext, node: DeclarationNode): void {}
