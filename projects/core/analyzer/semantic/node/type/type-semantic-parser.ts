import {$, is} from '../../../../$';
import {Array2, Nothing} from '../../../../../lib/types';
import {Node} from '../../../node';
import {TypeNode} from '../../../syntax/node/type/type-node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {arrayTypeSemanticTryParse} from './array/array-type-semantic-parser';
import {charTypeSemanticTryParse} from './char/char-type-semantic-parser';
import {functionTypeSemanticTryParse} from './function/function-type-semantic-parser';
import {idTypeSemanticTryParse} from './id/id-type-semantic-parser';
import {integerTypeSemanticTryParse} from './integer/integer-type-semantic-parser';
import {invokeTypeSemanticTryParse} from './invoke/invoke-type-semantic-parser';
import {complementTypeSemanticTryParse} from './set/complement/intersection-type-semantic-parser';
import {intersectionTypeSemanticTryParse} from './set/intersection/intersection-type-semantic-parser';
import {notTypeSemanticTryParse} from './set/not/not-type-semantic-parser';
import {rangeTypeSemanticTryParse} from './set/range/range-type-semantic-parser';
import {unionTypeSemanticTryParse} from './set/union/union-type-semantic-parser';
import {stringTypeSemanticTryParse} from './string/string-type-semantic-parser';
import {TypeSemantic} from './type-semantic';
import {unknownTypeFromNode} from './unknown/unknown-type-semantic';

type TypeSemanticTryParseFn = (analyzer: SemanticAnalyzer, node: Node) => TypeSemantic | Nothing;

const parsers: Array2<TypeSemanticTryParseFn> = [
  integerTypeSemanticTryParse,
  charTypeSemanticTryParse,
  stringTypeSemanticTryParse,
  rangeTypeSemanticTryParse,
  arrayTypeSemanticTryParse,
  idTypeSemanticTryParse,
  functionTypeSemanticTryParse,
  invokeTypeSemanticTryParse,
  intersectionTypeSemanticTryParse,
  unionTypeSemanticTryParse,
  complementTypeSemanticTryParse,
  notTypeSemanticTryParse,
];

export function typeSemanticParse(analyzer: SemanticAnalyzer, node: Node): TypeSemantic {
  if (!is(node, $.ExpressionNode)) {
    return unknownTypeFromNode(analyzer, node);
  }

  const semantic = parsers.findMap((parse) => parse(analyzer, node)) ?? unknownTypeFromNode(analyzer, node);
  node.semantic = semantic;

  return semantic;
}

// todo move or remove 'typeNodeType'
export function typeNodeType(analyzer: SemanticAnalyzer, node: TypeNode): TypeSemantic {
  if (node.value) {
    return typeSemanticParse(analyzer, node.value);
  }

  return unknownTypeFromNode(analyzer, node);
}
