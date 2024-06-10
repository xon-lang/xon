import {Nothing, nothing} from '../../../../../lib/types';
import {$Node, Node, is} from '../../../../analyzer/node/node';
import {InfixNode} from '../../../../analyzer/node/syntax/infix/infix-node';
import {INTERSECTION} from '../../../../analyzer/parser-config';
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
