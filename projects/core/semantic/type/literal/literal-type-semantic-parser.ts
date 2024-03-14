import {Nothing} from '../../../lib/core';
import {Node} from '../../../parser/node/node';
import {literalSemanticTryParse} from '../../literal/literal-semantic-parse';
import {SemanticContext} from '../../semantic-context';
import {LiteralTypeSemantic, literalTypeSemantic} from './literal-type-semantic';

export function literalTypeSemanticTryParse(context: SemanticContext, node: Node): LiteralTypeSemantic | Nothing {
  const literal = literalSemanticTryParse(context, node);

  if (literal) {
    const semantic = literalTypeSemantic(context, literal);

    return semantic;
  }
}
