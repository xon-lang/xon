import {Nothing, nothing} from '../../../../../../../lib/src/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {charTypeSemanticTryParse} from '../../type/char/char-type-semantic-parser';
import {CharValueSemantic, charValueSemantic} from './char-value-semantic';

export function charValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): CharValueSemantic | Nothing {
  const type = charTypeSemanticTryParse(analyzer, node);

  if (!type) {
    return nothing;
  }

  return charValueSemantic(node, type);
}
