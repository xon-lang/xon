import {Nothing, nothing} from '../../../../../../lib/types';
import {UNION} from '../../../../lexical/lexical-analyzer-config';
import {$Node, Node, is} from '../../../../syntax/node';
import {InfixNode} from '../../../../syntax/node/infix/infix-node';
import {SemanticAnalyzerContext} from '../../../semantic-analyzer-context';
import {typeSemanticParse} from '../../type-semantic-parser';
import {UnionTypeSemantic, unionTypeSemantic} from './union-type-semantic';

export function unionTypeSemanticTryParse(
  context: SemanticAnalyzerContext,
  node: Node,
): UnionTypeSemantic | Nothing {
  if (is<InfixNode>(node, $Node.INFIX) && node.operator.text === UNION) {
    const left = typeSemanticParse(context, node.left);
    const right = typeSemanticParse(context, node.right);

    if (!left || !right) {
      return nothing;
    }

    const reference = context.createReference(node);
    const semantic = unionTypeSemantic(reference, left, right);

    return semantic;
  }

  return nothing;
}
