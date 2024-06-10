import {Nothing, nothing} from '../../../../../lib/types';
import {Node} from '../../../node/node';
import {SemanticContext} from '../../semantic-context';
import {stringTypeSemanticTryParse} from '../../type/string/string-type-semantic-parser';
import {StringValueSemantic, stringValueSemantic} from './string-value-semantic';

export function stringValueSemanticTryParse(
  context: SemanticContext,
  node: Node,
): StringValueSemantic | Nothing {
  const type = stringTypeSemanticTryParse(context, node);

  if (!type) {
    return nothing;
  }

  return stringValueSemantic(context.createReference(node), type);
}
