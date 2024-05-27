import {Nothing, nothing} from '../../../../lib/types';
import {Node} from '../../../parser/node/node';
import {SemanticContext} from '../../semantic-context';
import {integerTypeSemanticTryParse} from '../../type/integer/integer-type-semantic-parser';
import {IntegerValueSemantic, integerValueSemantic} from './integer-value-semantic';

export function integerValueSemanticTryParse(context: SemanticContext, node: Node): IntegerValueSemantic | Nothing {
  const type = integerTypeSemanticTryParse(context, node);

  if (!type) {
    return nothing;
  }

  return integerValueSemantic(context.createReference(node), type);
}
