import {$, is} from '../../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/types';
import {UNION} from '../../../../../lexical/lexical-analyzer-config';
import {Node} from '../../../../../node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {typeSemanticParse} from '../../type-semantic-parser';
import {UnionTypeSemantic, unionTypeSemantic} from './union-type-semantic';

export function unionTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): UnionTypeSemantic | Nothing {
  if (is(node, $.InfixNode) && node.operator.text.equals(UNION)) {
    const left = typeSemanticParse(analyzer, node.left);
    const right = typeSemanticParse(analyzer, node.right);

    if (!left || !right) {
      return nothing;
    }

    const reference = analyzer.reference(node);
    const semantic = unionTypeSemantic(reference, left, right);

    return semantic;
  }

  return nothing;
}
