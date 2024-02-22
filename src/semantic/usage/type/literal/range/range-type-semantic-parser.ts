import { Nothing, nothing } from '../../../../../lib/core';
import { InfixNode } from '../../../../../syntax/node/infix/infix-node';
import { $Node, Node } from '../../../../../syntax/node/node';
import { RANGE_TOKEN } from '../../../../../syntax/syntax-config';
import { is } from '../../../../../syntax/util/is';
import { $Semantic, semanticIs } from '../../../../semantic';
import { SemanticContext } from '../../../../semantic-context';
import { TypeSemantic } from '../../type-semantic';
import { typeSemanticParse } from '../../type-semantic-parser';
import { LiteralTypeSemantic } from '../literal-type-semantic';
import { rangeTypeSemantic } from './range-type-semantic';

export function rangeTypeSemanticParse(context: SemanticContext, node: Node): TypeSemantic | Nothing {
  if (is<InfixNode>(node, $Node.INFIX) && node.operator.text === RANGE_TOKEN) {
    const from = typeSemanticParse(context, node.left);
    const to = typeSemanticParse(context, node.right);

    if (
      !semanticIs<LiteralTypeSemantic>(from, $Semantic.LITERAL) ||
      !semanticIs<LiteralTypeSemantic>(to, $Semantic.LITERAL)
    ) {
      return nothing;
    }

    const reference = context.createReference(node);
    const semantic = rangeTypeSemantic(reference, from, to);

    return semantic;
  }

  return nothing;
}
