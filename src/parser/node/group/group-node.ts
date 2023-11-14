import '~/extensions';
import { ARRAY_NODE_CLOSE, ARRAY_NODE_OPEN, ArrayNode, arrayNode } from '~/parser/node/array/array-node';
import { CloseNode } from '~/parser/node/close/close-node';
import { CommaNode } from '~/parser/node/comma/comma-node';
import { clonePosition } from '~/parser/node/node-position';
import { OBJECT_NODE_CLOSE, OBJECT_NODE_OPEN, ObjectNode, objectNode } from '~/parser/node/object/object-node';
import { OpenNode, scanOpenNode } from '~/parser/node/open/open-node';
import { Parser } from '~/parser/parser';
import { is } from '~/parser/util/is';
import { Node } from '../node';
import { NodeType } from '../node-type';

export const GROUP_NODE_OPEN = '(';
export const GROUP_NODE_CLOSE = ')';

export interface GroupNode extends Node {
  $: NodeType.GROUP;
  open: OpenNode;
  close: CloseNode | null;
  items: Node[];
}

export function groupNode(open: OpenNode, close: CloseNode | null, items: Node[]): GroupNode {
  const last = items.lastOrNull();

  return {
    $: NodeType.GROUP,
    start: clonePosition(open.start),
    stop: clonePosition((close ?? last ?? open).stop),
    open,
    close,
    items,
  };
}

const OPEN_CLOSE = {
  [GROUP_NODE_OPEN]: GROUP_NODE_CLOSE,
  [ARRAY_NODE_OPEN]: ARRAY_NODE_CLOSE,
  [OBJECT_NODE_OPEN]: OBJECT_NODE_CLOSE,
} as const;

export function scanGroupNode(parser: Parser): GroupNode | ObjectNode | ArrayNode | null {
  const { text } = parser;
  const open = scanOpenNode(parser);

  if (!is<OpenNode>(open, NodeType.OPEN)) {
    return null;
  }

  const items: Node[] = [];

  parser.index += open.text.length;

  while (parser.index < text.length) {
    const nodes = parser.parseUntil(
      (node) =>
        is<CommaNode>(node, NodeType.COMMA) ||
        (is<CloseNode>(node, NodeType.CLOSE) && node.text === OPEN_CLOSE[open.text]),
    );

    const { breakNode } = parser;

    if (is<CommaNode>(breakNode, NodeType.COMMA)) {
      parser.hidden.push(breakNode);

      if (nodes.length > 0) {
        items.push(nodes[0]);
      }

      // throw new Error('Not implemented');
      continue;
    }

    if (is<CloseNode>(breakNode, NodeType.CLOSE)) {
      if (nodes.length > 0) {
        items.push(nodes[0]);
      }

      // throw new Error('Not implemented');
      return createGroupNode(open, breakNode, items);
    }
  }

  return createGroupNode(open, null, items);
}

function createGroupNode(open: OpenNode, close: CloseNode | null, nodes: Node[]): GroupNode | ObjectNode | ArrayNode {
  if (open.text === GROUP_NODE_OPEN) {
    return groupNode(open, close, nodes);
  }

  if (open.text === OBJECT_NODE_OPEN) {
    return objectNode(open, close, nodes);
  }

  if (open.text === ARRAY_NODE_OPEN) {
    return arrayNode(open, close, nodes);
  }

  throw new Error('Not implemented');
}
