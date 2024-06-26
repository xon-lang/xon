import {formatChildNode} from '../../../../formatter/formatter';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, ExpressionNode} from '../../../node';
import {SyntaxContext} from '../../syntax-context';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type PostfixNode = SyntaxNode<$Node.POSTFIX> &
  ExpressionNode & {
    value: ExpressionNode;
    operator: OperatorNode;
  };

export function postfixNode(
  context: SyntaxContext,
  value: ExpressionNode,
  operator: OperatorNode,
): PostfixNode {
  const node = syntaxNode($Node.POSTFIX, {value, operator});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: PostfixNode): void {
  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetter(0));
  formatChildNode(context, node.operator, keepSingleWhitespace);
}
