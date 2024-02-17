import { isGroupNode } from '../node/group/group-node';
import { invokeNode } from '../node/invoke/invoke-node';
import { $Node } from '../node/node';
import { OperatorNode } from '../node/operator/operator-node';
import { SyntaxContext } from '../syntax-context';
import { is } from './is';

export function collapseInvoke(context: SyntaxContext): void {
  for (let i = 0; i < context.nodes.length; i++) {
    const node = context.nodes[i];

    if (isGroupNode(node) && i > 0) {
      const prevNode = context.nodes[i - 1];

      if (!is<OperatorNode>(prevNode, $Node.OPERATOR)) {
        context.nodes.splice(i - 1, 2, invokeNode(prevNode, node));
        collapseInvoke(context);

        return;
      }
    }
  }
}
