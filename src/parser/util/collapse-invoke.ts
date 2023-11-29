import { ArrayNode } from '~/parser/node/array/array-node';
import { GroupNode } from '~/parser/node/group/group-node';
import { invokeNode } from '~/parser/node/invoke/invoke-node';
import { ObjectNode } from '~/parser/node/object/object-node';
import { ParserContext } from '~/parser/parser-context';
import { NodeType } from '../node/node-type';
import { is } from './is';

export function collapseInvoke(context: ParserContext): void {
  for (let i = 0; i < context.nodes.length; i++) {
    const element = context.nodes[i];

    if (
      (is<GroupNode>(element, NodeType.GROUP) ||
        is<ObjectNode>(element, NodeType.OBJECT) ||
        is<ArrayNode>(element, NodeType.ARRAY)) &&
      i > 0
    ) {
      const prev = context.nodes[i - 1];

      if (!is(prev, NodeType.OPERATOR)) {
        context.nodes[i] = invokeNode(prev, element);
        context.nodes.splice(i - 1, 1);
        collapseInvoke(context);

        return;
      }
    }
  }
}
