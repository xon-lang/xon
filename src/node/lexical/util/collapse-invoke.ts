import { GroupNode } from '~/node/lexical/group/group-node';
import { invokeNode } from '~/node/lexical/invoke/invoke-node';
import { Node, NodeType, is } from '~/node/node';

export function collapseInvoke(nodes: Node[]): void {
  for (let i = 0; i < nodes.length; i++) {
    const element = nodes[i];

    if (is<GroupNode>(element, NodeType.GROUP) && i > 0) {
      const prev = nodes[i - 1];

      if (!is(prev, NodeType.OPERATOR)) {
        nodes[i] = invokeNode(prev, element);
        nodes.splice(i - 1, 1);
        collapseInvoke(nodes);

        return;
      }
    }
  }
}
