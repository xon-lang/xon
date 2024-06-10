import {Nothing} from '../../../../../lib/types';
import {formatChildNode} from '../../../../formatter/formatter';
import {RANGE} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type InfixNode = SyntaxNode<$Node.INFIX> &
  ExpressionNode & {
    left: ExpressionNode;
    operator: OperatorNode;
    right: ExpressionNode;
  };

export function infixNode(
  context: SyntaxContext,
  left: ExpressionNode,
  operator: OperatorNode,
  right: ExpressionNode,
): InfixNode {
  const node = syntaxNode($Node.INFIX, {left, operator, right});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: InfixNode): Nothing {
  const keepSingleWhitespace = node.operator.text !== RANGE;
  formatChildNode(context, node.operator, keepSingleWhitespace);
  formatChildNode(context, node.right, keepSingleWhitespace);
}
