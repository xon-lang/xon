import {Nothing, nothing} from '../../../lib/core';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {MODEL_MODIFIER} from '../../../parser/syntax-config';
import {SemanticContext} from '../../semantic-context';
import {GenericSemantic, genericShallowSemantic} from './generic-semantic';

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
  if (node?.modifier?.text !== MODEL_MODIFIER) {
    return nothing;
  }

  const reference = context.createReference(node.id);
  const name = node.id.text;

  const declaration = genericShallowSemantic(reference, name);
  node.id.semantic = declaration;
  context.addDeclaration(declaration);

  return declaration;
}

function genericDeepParse(context: SemanticContext, node: DeclarationNode): void {}
