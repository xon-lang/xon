import {Nothing, nothing} from '../../../../../../../lib/types';
import {COMPLEMENT} from '../../../../../lexical/lexical-analyzer-config';
import {$Node, Node, is} from '../../../../../node';
import {InfixNode} from '../../../../../syntax/node/infix/infix-node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {typeSemanticParse} from '../../type-semantic-parser';
import {ComplementTypeSemantic, complementTypeSemantic} from './complement-type-semantic';

export function complementTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): ComplementTypeSemantic | Nothing {
  if (is<InfixNode>(node, $Node.INFIX) && node.operator.text === COMPLEMENT) {
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
