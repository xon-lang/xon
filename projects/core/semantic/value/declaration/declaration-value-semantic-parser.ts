import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {IdNode} from '../../../parser/node/token/id/id-node';
import {SemanticContext} from '../../semantic-context';
import {DeclarationValueSemantic, declarationValueSemantic} from './declaration-value-semantic';

export function declarationValueSemanticTryParse(
  context: SemanticContext,
  node: Node,
): DeclarationValueSemantic | Nothing {
  if (is<IdNode>(node, $Node.ID)) {
    return idNodeTryParse(context, node);
  }

  return nothing;
}

function idNodeTryParse(context: SemanticContext, node: IdNode): DeclarationValueSemantic | Nothing {
  const declaration = context.declarationManager.findSingle(node, 0);

  if (!declaration) {
    return nothing;
  }

  const reference = context.createReference(node);

  return declarationValueSemantic(reference, declaration);
}
