import {Nothing, nothing} from '../../../../../lib/types';
import {$Node, Node, is} from '../../../../analyzer/node/node';
import {InfixNode} from '../../../../analyzer/node/syntax/infix/infix-node';
import {COMPLEMENT} from '../../../../analyzer/parser-config';
import {SemanticContext} from '../../../semantic-context';
import {typeSemanticParse} from '../../type-semantic-parser';
import {ComplementTypeSemantic, complementTypeSemantic} from './complement-type-semantic';

export function complementTypeSemanticTryParse(
  context: SemanticContext,
  node: Node,
): ComplementTypeSemantic | Nothing {
  if (is<InfixNode>(node, $Node.INFIX) && node.operator.text === COMPLEMENT) {
    const left = typeSemanticParse(context, node.left);
    const right = typeSemanticParse(context, node.right);

    if (!left || !right) {
      return nothing;
    }

    const reference = context.createReference(node);
    const semantic = complementTypeSemantic(reference, left, right);

    return semantic;
  }

  return nothing;
}
