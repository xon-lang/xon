import {Nothing, nothing} from '../../../../../../lib/types';
import {COMPLEMENT} from '../../../../lexical/lexical-analyzer-config';
import {$Node, Node, is} from '../../../../syntax/node';
import {InfixNode} from '../../../../syntax/node/infix/infix-node';
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
