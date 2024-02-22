import { Nothing, nothing } from '../../../../../lib/core';
import { IntegerNode } from '../../../../../syntax/node/integer/integer-node';
import { $Node, Node } from '../../../../../syntax/node/node';
import { is } from '../../../../../syntax/util/is';
import { SemanticContext } from '../../../../semantic-context';
import { IntegerTypeSemantic, integerTypeSemantic } from './integer-type-semantic';

export function integerTypeSemanticParse(context: SemanticContext, node: Node): IntegerTypeSemantic | Nothing {
  if (is<IntegerNode>(node, $Node.INTEGER)) {
    const value = Number(node.text);
    const reference = context.createReference(node);
    const semantic = integerTypeSemantic(reference, value);

    return semantic;
  }

  return nothing;
}
