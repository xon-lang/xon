import {Nothing} from '../../../../../lib/types';
import {formatChildNode} from '../../../../formatter/formatter';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type TypeNode = SyntaxNode<$Node.TYPE> & {
  semantic: Nothing;
  operator: OperatorNode;
  value: ExpressionNode;
};

export function typeNode(context: SyntaxContext, operator: OperatorNode, value: ExpressionNode): TypeNode {
  const node = syntaxNode($Node.TYPE, {operator, value});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: TypeNode): Nothing {
  formatChildNode(context, node.value, true);
}
