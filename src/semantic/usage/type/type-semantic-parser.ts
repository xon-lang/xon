import { Nothing, nothing } from '../../../lib/core';
import { Node } from '../../../syntax/node/node';
import { SemanticContext } from '../../semantic-context';
import { declarationTypeSemanticParse } from './declaration/declaration-type-semantic-parser';
import { integerTypeSemanticParse } from './literal/integer/integer-type-semantic-parser';
import { TypeSemantic } from './type-semantic';

type TypeParserFn = (context: SemanticContext, node: Node) => TypeSemantic | Nothing;

const typeParsers: TypeParserFn[] = [integerTypeSemanticParse, declarationTypeSemanticParse];

export function typeSemanticParse(context: SemanticContext, node: Node | Nothing): TypeSemantic | Nothing {
  if (!node) {
    return nothing;
  }

  for (const parse of typeParsers) {
    const type = parse(context, node);

    if (type) {
      node.semantic = type;

      return type;
    }
  }

  return nothing;
}
