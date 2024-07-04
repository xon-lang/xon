import {$, is} from '../../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/types';
import {NOT} from '../../../../../lexical/lexical-analyzer-config';
import {Node} from '../../../../../node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {typeSemanticParse} from '../../type-semantic-parser';
import {NotTypeSemantic, notTypeSemantic} from './not-type-semantic';

export function notTypeSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): NotTypeSemantic | Nothing {
  if (is(node, $.PrefixNode) && node.operator.text === NOT) {
    const value = typeSemanticParse(analyzer, node.value);

    if (!value) {
      return nothing;
    }

    const reference = analyzer.createReference(node);
    const semantic = notTypeSemantic(reference, value);

    return semantic;
  }

  return nothing;
}
