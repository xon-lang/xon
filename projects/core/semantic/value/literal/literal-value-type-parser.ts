import {Nothing, nothing} from '../../../lib/core';
import {Node} from '../../../parser/node/node';
import {literalSemanticTryParse} from '../../literal/literal-semantic-parse';
import {SemanticContext} from '../../semantic-context';
import {LiteralTypeSemantic, literalTypeSemantic} from '../../type/literal/literal-type-semantic';

export function literalValueTypeTryParse(context: SemanticContext, node: Node): LiteralTypeSemantic | Nothing {
  const semantic = literalSemanticTryParse(context, node);

  if (semantic) {
    return literalTypeSemantic(semantic);
  }

  return nothing;
}
