import {Nothing, nothing} from '../../../lib/core';
import {Node} from '../../../parser/node/node';
import {literalSemanticTryParse} from '../../literal/literal-semantic-parse';
import {SemanticContext} from '../../semantic-context';
import {LiteralValueSemantic, literalValueSemantic} from './literal-value-semantic';

export function literalValueSemanticTryParse(context: SemanticContext, node: Node): LiteralValueSemantic | Nothing {
  const semantic = literalSemanticTryParse(context, node);

  if (semantic) {
    return literalValueSemantic(semantic);
  }

  return nothing;
}
