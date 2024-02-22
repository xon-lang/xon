import { Nothing, nothing } from '../../../lib/core';
import { IdNode } from '../../../syntax/node/id/id-node';
import { $Node, Node } from '../../../syntax/node/node';
import { is } from '../../../syntax/util/is';
import { SemanticContext } from '../../semantic-context';
import { idTypeSemanticParse } from './id/id-type-parser';
import { TypeSemantic } from './type-semantic';

export function typeSemanticParse(context: SemanticContext, node: Node | Nothing): TypeSemantic | Nothing {
  if (!node) {
    return nothing;
  }

  if (is<IdNode>(node, $Node.ID)) {
    return idTypeSemanticParse(context, node);
  }

  return nothing;
}
