import {formatChildNode} from '../../../../formatter/formatter';
import {$Node, ExpressionNode} from '../../../node';
import {Group} from '../../group/group-node';
import {SyntaxContext} from '../../syntax-context';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type InvokeNode = SyntaxNode<$Node.INVOKE> &
  ExpressionNode & {
    instance: ExpressionNode;
    group: Group;
  };

export function invokeNode(context: SyntaxContext, instance: ExpressionNode, group: Group): InvokeNode {
  const node = syntaxNode($Node.INVOKE, {instance, group});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: InvokeNode): void {
  formatChildNode(context, node.group, false);
}
