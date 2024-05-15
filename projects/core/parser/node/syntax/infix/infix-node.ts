import {formatChildNode} from '../../../../formatter/formatter';
import {Nothing} from '../../../../lib/core';
import {RANGE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface InfixNode extends SyntaxNode {
  $: $Node.INFIX;
  left: ExpressionNode;
  operator: OperatorNode;
  right: ExpressionNode;
}

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
