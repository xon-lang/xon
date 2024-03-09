import {Nothing, nothing} from '../../../../lib/core';
import {$Node, Node, is} from '../../../../parser/node/node';
import {InfixNode} from '../../../../parser/node/syntax/infix/infix-node';
import {RANGE} from '../../../../parser/syntax-config';
import {$Semantic, semanticIs} from '../../../semantic';
import {SemanticContext} from '../../../semantic-context';
import {typeSemanticParse} from '../../type-semantic-parser';
import {IntegerTypeSemantic} from '../integer/integer-type-semantic';
import {RangeTypeSemantic, rangeTypeSemantic} from './range-type-semantic';

export function rangeTypeSemanticParse(context: SemanticContext, node: Node): RangeTypeSemantic | Nothing {
  if (is<InfixNode>(node, $Node.INFIX) && node.operator.text === RANGE) {
    const from = typeSemanticParse(context, node.left);
    const to = typeSemanticParse(context, node.right);

    if (
      !semanticIs<IntegerTypeSemantic>(from, $Semantic.INTEGER_TYPE) ||
      !semanticIs<IntegerTypeSemantic>(to, $Semantic.INTEGER_TYPE)
    ) {
      return nothing;
    }

    const reference = context.createReference(node);
    const semantic = rangeTypeSemantic(reference, from, to);

    return semantic;
  }

  return nothing;
}
