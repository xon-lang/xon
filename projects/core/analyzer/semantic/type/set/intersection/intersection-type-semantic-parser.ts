import {Nothing, nothing} from '../../../../../../lib/types';
import {INTERSECTION} from '../../../../lexical/lexical-config';
import {$Node, Node, is} from '../../../../syntax/node';
import {InfixNode} from '../../../../syntax/node/infix/infix-node';
import {SemanticContext} from '../../../semantic-context';
import {typeSemanticParse} from '../../type-semantic-parser';
import {IntersectionTypeSemantic, intersectionTypeSemantic} from './intersection-type-semantic';

export function intersectionTypeSemanticTryParse(
  context: SemanticContext,
  node: Node,
): IntersectionTypeSemantic | Nothing {
  if (is<InfixNode>(node, $Node.INFIX) && node.operator.text === INTERSECTION) {
    const left = typeSemanticParse(context, node.left);
    const right = typeSemanticParse(context, node.right);

    if (!left || !right) {
      return nothing;
    }

    const reference = context.createReference(node);
    const semantic = intersectionTypeSemantic(reference, left, right);

    return semantic;
  }

  return nothing;
}
