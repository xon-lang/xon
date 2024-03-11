import {Nothing} from '../../lib/core';
import {$Node, is} from '../node/node';
import {isGroupNode} from '../node/syntax/group/group-node';
import {invokeNode} from '../node/syntax/invoke/invoke-node';
import {OperatorNode} from '../node/token/operator/operator-node';
import {SyntaxContext} from '../syntax-context';

export function collapseInvoke(context: SyntaxContext): Nothing {
  for (let i = 0; i < context.nodes.length; i++) {
    const node = context.nodes[i];

    if (isGroupNode(node) && i > 0) {
      const prevNode = context.nodes[i - 1];

      if (!is<OperatorNode>(prevNode, $Node.OPERATOR)) {
        context.nodes.splice(i - 1, 2, invokeNode(context, prevNode, node));
        collapseInvoke(context);

        return;
      }
    }
  }
}
