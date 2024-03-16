import {Nothing, nothing} from '../../lib/core';
import {Node} from '../../parser/node/node';
import {SemanticContext} from '../semantic-context';
import {declarationTypeSemanticTryParse} from './declaration/declaration-type-semantic-parser';
import {literalTypeSemanticTryParse} from './literal/literal-type-semantic-parser';
import {unionTypeSemanticTryParse} from './operator/union/union-type-semantic-parser';
import {rangeTypeSemanticTryParse} from './range/range-type-semantic-parser';
import {TypeSemantic} from './type-semantic';

type TypeSemanticTryParseFn = (context: SemanticContext, node: Node) => TypeSemantic | Nothing;

const parsers: TypeSemanticTryParseFn[] = [
  literalTypeSemanticTryParse,
  declarationTypeSemanticTryParse,
  rangeTypeSemanticTryParse,
  unionTypeSemanticTryParse,
];

export function typeSemanticParse(context: SemanticContext, node: Node | Nothing): TypeSemantic | Nothing {
  if (!node) {
    return nothing;
  }

  const semantic = parsers.findMap((x) => x(context, node));
  node.semantic = semantic;

  return semantic;
}
