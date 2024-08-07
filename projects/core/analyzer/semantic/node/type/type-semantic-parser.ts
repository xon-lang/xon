import {$, is} from '../../../../$';
import {Array2, Nothing, nothing} from '../../../../../lib/types';
import {Node} from '../../../node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {arrayTypeSemanticTryParse} from './array/array-type-semantic-parser';
import {functionTypeSemanticTryParse} from './function/function-type-semantic-parser';
import {declarationTypeSemanticTryParse} from './id/id-type-semantic-parser';
import {integerTypeSemanticTryParse} from './integer/integer-type-semantic-parser';
import {complementTypeSemanticTryParse} from './set/complement/intersection-type-semantic-parser';
import {intersectionTypeSemanticTryParse} from './set/intersection/intersection-type-semantic-parser';
import {notTypeSemanticTryParse} from './set/not/not-type-semantic-parser';
import {rangeTypeSemanticTryParse} from './set/range/range-type-semantic-parser';
import {unionTypeSemanticTryParse} from './set/union/union-type-semantic-parser';
import {stringTypeSemanticTryParse} from './string/string-type-semantic-parser';
import {TypeSemantic} from './type-semantic';

type TypeSemanticTryParseFn = (analyzer: SemanticAnalyzer, node: Node) => TypeSemantic | Nothing;

const parsers: Array2<TypeSemanticTryParseFn> = [
  integerTypeSemanticTryParse,
  stringTypeSemanticTryParse,
  rangeTypeSemanticTryParse,
  arrayTypeSemanticTryParse,
  declarationTypeSemanticTryParse,
  functionTypeSemanticTryParse,
  intersectionTypeSemanticTryParse,
  unionTypeSemanticTryParse,
  complementTypeSemanticTryParse,
  notTypeSemanticTryParse,
];

export function typeSemanticParse(analyzer: SemanticAnalyzer, node: Node | Nothing): TypeSemantic | Nothing {
  if (!is(node, $.ExpressionNode)) {
    return nothing;
  }

  const semantic = parsers.findMap((parse) => parse(analyzer, node));
  node.semantic = semantic;

  return semantic;
}
