import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {integerTypeSemanticTryParse} from '../../type/integer/integer-type-semantic-parser';
import {IntegerValueSemantic, integerValueSemantic} from './integer-value-semantic';

export function integerValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): IntegerValueSemantic | Nothing {
  const type = integerTypeSemanticTryParse(analyzer, node);

  if (!type) {
    return nothing;
  }

  return integerValueSemantic(analyzer.reference(node), type);
}
