import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {InfixNode} from '../../../parser/node/syntax/infix/infix-node';
import {RANGE} from '../../../parser/parser-config';
import {IntegerLiteralSemantic} from '../../literal/integer/integer-literal-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {LiteralTypeSemantic} from '../literal/literal-type-semantic';
import {typeSemanticParse} from '../type-semantic-parser';
import {RangeTypeSemantic, rangeTypeSemantic} from './range-type-semantic';

export function rangeTypeSemanticTryParse(context: SemanticContext, node: Node): RangeTypeSemantic | Nothing {
  if (!is<InfixNode>(node, $Node.INFIX) || node.operator.text !== RANGE) {
    return nothing;
  }

  const from = typeSemanticParse(context, node.left);
  const to = typeSemanticParse(context, node.right);

  if (
    !semanticIs<LiteralTypeSemantic>(from, $Semantic.LITERAL_TYPE) ||
    !semanticIs<IntegerLiteralSemantic>(from.literal, $Semantic.INTEGER_LITERAL) ||
    !semanticIs<LiteralTypeSemantic>(to, $Semantic.LITERAL_TYPE) ||
    !semanticIs<IntegerLiteralSemantic>(to.literal, $Semantic.INTEGER_LITERAL)
  ) {
    return nothing;
  }

  const reference = context.createReference(node);
  const semantic = rangeTypeSemantic(reference, from.literal, to.literal);

  return semantic;
}
