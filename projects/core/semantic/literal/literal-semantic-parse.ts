import {Nothing, nothing} from '../../lib/core';
import {$Node, Node, is} from '../../parser/node/node';
import {IntegerLiteralNode} from '../../parser/node/token/literal/integer/integer-literal-node';
import {SemanticContext} from '../semantic-context';
import {integerLiteralSemanticParse} from './integer/integer-literal-semantic-parser';
import {LiteralSemantic} from './literal-semantic';

export function literalSemanticTryParse(context: SemanticContext, node: Node): LiteralSemantic | Nothing {
  if (is<IntegerLiteralNode>(node, $Node.ID)) {
    return integerLiteralSemanticParse(context, node);
  }

  return nothing;
}
