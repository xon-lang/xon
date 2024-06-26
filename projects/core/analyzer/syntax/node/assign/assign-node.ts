import {Nothing} from '../../../../../lib/types';
import {formatChildNode} from '../../../../formatter/formatter';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, ExpressionNode} from '../../../node';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type AssignNode = SyntaxNode<$Node.ASSIGN> & {
  semantic: Nothing;
  operator: OperatorNode;
  value: ExpressionNode;
};

export function assignNode(
  context: SyntaxContext,
  operator: OperatorNode,
  value: ExpressionNode,
): AssignNode {
  const node = syntaxNode($Node.ASSIGN, {operator, value});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: AssignNode): void {
  formatChildNode(context, node.value, true);
}
