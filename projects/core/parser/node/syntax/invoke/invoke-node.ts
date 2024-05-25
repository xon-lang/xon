import {Nothing} from '../../../../../lib/types';
import {formatChildNode} from '../../../../formatter/formatter';
import {SyntaxContext} from '../../../syntax-context';
import {Group} from '../../group/group-node';
import {$Node, ExpressionNode, HasSemantic} from '../../node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type InvokeNode = SyntaxNode<$Node.INVOKE> &
  HasSemantic & {
    instance: ExpressionNode;
    group: Group;
  };

export function invokeNode(context: SyntaxContext, instance: ExpressionNode, group: Group): InvokeNode {
  const node = syntaxNode($Node.INVOKE, {instance, group});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: InvokeNode): Nothing {
  formatChildNode(context, node.group, false);
}
