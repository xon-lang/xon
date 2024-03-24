import {Nothing, nothing} from '../../lib/core';
import {$Node, Node, is} from '../../parser/node/node';
import {ArrayNode} from '../../parser/node/syntax/array/array-node';
import {RangeNode} from '../../parser/node/syntax/range/range-node';
import {StringLiteralNode} from '../../parser/node/token/literal/string/string-literal-node';
import {SemanticContext} from '../semantic-context';
import {arrayLiteralSemanticParse} from './array/array-literal-semantic-parser';
import {LiteralSemantic} from './literal-semantic';
import {rangeLiteralSemanticParse} from './range/range-literal-semantic-parser';
import {stringLiteralSemanticParse} from './string/string-literal-semantic-parser';

export function literalSemanticTryParse(context: SemanticContext, node: Node): LiteralSemantic | Nothing {
  if (is<StringLiteralNode>(node, $Node.STRING)) {
    return stringLiteralSemanticParse(context, node);
  }

  if (is<RangeNode>(node, $Node.RANGE)) {
    return rangeLiteralSemanticParse(context, node);
  }

  if (is<ArrayNode>(node, $Node.ARRAY)) {
    return arrayLiteralSemanticParse(context, node);
  }

  return nothing;
}
