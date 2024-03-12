import {Nothing, nothing} from '../../lib/core';
import {Node} from '../../parser/node/node';
import {SemanticContext} from '../semantic-context';
import {idTypeSemanticParse} from './id/id-type-semantic-parser';
import {arrayTypeSemanticParse} from './literal/array/array-type-semantic-parser';
import {integerTypeSemanticParse} from './literal/integer/integer-type-semantic-parser';
import {rangeTypeSemanticParse} from './literal/range/range-type-semantic-parser';
import {unionTypeSemanticParse} from './operator/union/union-type-semantic-parser';
import {TypeSemantic} from './type-semantic';

type TypeParserFn = (context: SemanticContext, node: Node) => TypeSemantic | Nothing;

const typeParsers: TypeParserFn[] = [
  // literals
  integerTypeSemanticParse,
  rangeTypeSemanticParse,
  arrayTypeSemanticParse,
  // operators
  unionTypeSemanticParse,
  // declarations
  idTypeSemanticParse,
];

export function typeSemanticParse(context: SemanticContext, node: Node | Nothing): TypeSemantic | Nothing {
  if (!node) {
    return nothing;
  }

  return typeParsers.findMap((x) => x(context, node));
}
