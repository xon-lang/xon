import {$, is} from '../../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/types';
import {INTERSECTION} from '../../../../../lexical/lexical-analyzer-config';
import {Node} from '../../../../../node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {typeSemanticParse} from '../../type-semantic-parser';
import {IntersectionTypeSemantic, intersectionTypeSemantic} from './intersection-type-semantic';

export function intersectionTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): IntersectionTypeSemantic | Nothing {
  if (is(node, $.InfixNode) && node.operator.text === INTERSECTION) {
    const left = typeSemanticParse(analyzer, node.left);
    const right = typeSemanticParse(analyzer, node.right);

    if (!left || !right) {
      return nothing;
    }

    const reference = analyzer.createReference(node);
    const semantic = intersectionTypeSemantic(reference, left, right);

    return semantic;
  }

  return nothing;
}
