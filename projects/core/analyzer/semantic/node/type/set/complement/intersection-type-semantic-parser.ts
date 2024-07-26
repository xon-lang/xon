import {$, is} from '../../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/types';
import {COMPLEMENT} from '../../../../../lexical/lexical-analyzer-config';
import {Node} from '../../../../../node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {typeSemanticParse} from '../../type-semantic-parser';
import {ComplementTypeSemantic, complementTypeSemantic} from './complement-type-semantic';

export function complementTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): ComplementTypeSemantic | Nothing {
  if (is(node, $.InfixNode) && node.operator.text.equals(COMPLEMENT)) {
    const left = typeSemanticParse(analyzer, node.left);
    const right = typeSemanticParse(analyzer, node.right);

    if (!left || !right) {
      return nothing;
    }

    const reference = analyzer.createReference(node);
    const semantic = complementTypeSemantic(reference, left, right);

    return semantic;
  }

  return nothing;
}
