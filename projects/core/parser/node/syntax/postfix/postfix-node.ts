import {Nothing} from '../../../../../lib/types';
import {formatChildNode} from '../../../../formatter/formatter';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface PostfixNode extends SyntaxNode {
  $: $Node.POSTFIX;
  value: ExpressionNode;
  operator: OperatorNode;
}

export function postfixNode(context: SyntaxContext, value: ExpressionNode, operator: OperatorNode): PostfixNode {
  const node = syntaxNode($Node.POSTFIX, {value, operator});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: PostfixNode): Nothing {
  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetter(0));
  formatChildNode(context, node.operator, keepSingleWhitespace);
}
