import { ArrayNode } from '~/parser/node/array/array-node';
import { GroupNode } from '~/parser/node/group/group-node';
import { invokeNode } from '~/parser/node/invoke/invoke-node';
import { Node } from '~/parser/node/node';
import { ObjectNode } from '~/parser/node/object/object-node';
import { NodeType } from '../node/node-type';
import { is } from './is';

export function collapseInvoke(nodes: Node[]): void {
  for (let i = 0; i < nodes.length; i++) {
    const element = nodes[i];

    if (
      (is<GroupNode>(element, NodeType.GROUP) ||
        is<ObjectNode>(element, NodeType.OBJECT) ||
        is<ArrayNode>(element, NodeType.ARRAY)) &&
      i > 0
    ) {
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
