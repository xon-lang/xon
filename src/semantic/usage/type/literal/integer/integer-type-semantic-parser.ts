import { Nothing, nothing } from '../../../../../lib/core';
import { $Node, Node, is } from '../../../../../parser/node/node';
import { IntegerNode } from '../../../../../parser/node/token/integer/integer-node';
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
