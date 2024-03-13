import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {IdNode} from '../../../parser/node/token/id/id-node';
import {CONSTANT_MODIFIER, MODEL_MODIFIER} from '../../../parser/syntax-config';
import {SemanticContext} from '../../semantic-context';
import {TypeSemantic} from '../../type/type-semantic';

export function declarationValueTypeTryParse(context: SemanticContext, node: Node): TypeSemantic | Nothing {
  if (is<IdNode>(node, $Node.ID)) {
    return idNodeTryParse(context, node);
  }

  return nothing;
}

function idNodeTryParse(context: SemanticContext, node: IdNode): TypeSemantic | Nothing {
  const declaration = context.declarationManager.findSingle(node, 0);

  if (!declaration) {
    return nothing;
  }

  if (declaration.modifier === CONSTANT_MODIFIER) {
    return declaration.type;
  }

  if (declaration.modifier === MODEL_MODIFIER) {
    throw new Error('Not implemented');
  }

  return nothing;
}
