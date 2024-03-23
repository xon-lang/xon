import {Nothing, nothing} from '../../../../lib/core';
import {$Node, Node, is} from '../../../../parser/node/node';
import {InfixNode} from '../../../../parser/node/syntax/infix/infix-node';
import {INTERSECTION} from '../../../../parser/parser-config';
import {SemanticContext} from '../../../semantic-context';
import {typeSemanticParse} from '../../type-semantic-parser';
import {IntersectionOperatorTypeSemantic, intersectionTypeSemantic} from './intersection-operator-type-semantic';

export function intersectionTypeSemanticTryParse(
  context: SemanticContext,
  node: Node,
): IntersectionOperatorTypeSemantic | Nothing {
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
