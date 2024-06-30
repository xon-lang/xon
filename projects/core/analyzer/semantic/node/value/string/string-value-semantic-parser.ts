import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {stringTypeSemanticTryParse} from '../../type/string/string-type-semantic-parser';
import {StringValueSemantic, stringValueSemantic} from './string-value-semantic';

export function stringValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): StringValueSemantic | Nothing {
  const type = stringTypeSemanticTryParse(analyzer, node);

  if (!type) {
    return nothing;
  }

  return stringValueSemantic(analyzer.createReference(node), type);
}
