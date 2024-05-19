import {Nothing} from '../../../../../lib/types';
import {formatChildNode} from '../../../../formatter/formatter';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface TypeNode extends SyntaxNode {
  $: $Node.TYPE;
  operator: OperatorNode;
  value: ExpressionNode;
}

export function typeNode(context: SyntaxContext, operator: OperatorNode, value: ExpressionNode): TypeNode {
  const node = syntaxNode($Node.TYPE, {operator, value});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: TypeNode): Nothing {
  formatChildNode(context, node.value, true);
}
