import '~/extensions';
import { ArrayNode, arrayNode } from '~/parser/node/array/array-node';
import { CloseNode } from '~/parser/node/close/close-node';
import { CommaNode } from '~/parser/node/comma/comma-node';
import { ObjectNode, objectNode } from '~/parser/node/object/object-node';
import { OpenNode, scanOpenNode } from '~/parser/node/open/open-node';
import { parseUntil } from '~/parser/parser';
import { ParserContext } from '~/parser/parser-context';
import { is } from '~/parser/util/is';
import {
  ARRAY_NODE_CLOSE,
  ARRAY_NODE_OPEN,
  GROUP_NODE_CLOSE,
  GROUP_NODE_OPEN,
  OBJECT_NODE_CLOSE,
  OBJECT_NODE_OPEN,
} from '~/parser/util/operators';
import { sourcePosition } from '../../../source/source-position';
import { rangeFromNodes, sourceRange } from '../../../source/source-range';
import { Node } from '../node';
import { NodeType } from '../node-type';

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
    range: rangeFromNodes(open, close ?? last ?? open),
    open,
    close,
    items,
  };
}

const OPEN_CLOSE_PAIR = {
  [GROUP_NODE_OPEN]: GROUP_NODE_CLOSE,
  [ARRAY_NODE_OPEN]: ARRAY_NODE_CLOSE,
  [OBJECT_NODE_OPEN]: OBJECT_NODE_CLOSE,
} as const;

export function scanGroupNode(context: ParserContext): GroupNode | ObjectNode | ArrayNode | null {
  const { source, index, line, column } = context;
  const open = scanOpenNode(context);

  if (!is<OpenNode>(open, NodeType.OPEN)) {
    return null;
  }

  open.range = sourceRange(sourcePosition(index, line, column), sourcePosition(index, line, column));

  const items: Node[] = [];

  context.index += open.text.length;

  while (context.index < source.text.length) {
    const groupContext = parseUntil(
      context.source,
      context.index,
      (node) =>
        is<CommaNode>(node, NodeType.COMMA) ||
        (is<CloseNode>(node, NodeType.CLOSE) && node.text === OPEN_CLOSE_PAIR[open.text]),
    );

    context.index = groupContext.index;

    if (is<CommaNode>(groupContext.breakNode, NodeType.COMMA)) {
      context.hidden.push(groupContext.breakNode);

      if (groupContext.lastStatementNodes.length > 0) {
        items.push(groupContext.root.children[0]);
      }

      continue;
    }

    if (is<CloseNode>(groupContext.breakNode, NodeType.CLOSE)) {
      if (groupContext.lastStatementNodes.length > 0) {
        items.push(groupContext.root.children[0]);
      }

      return createGroupNode(open, groupContext.breakNode, items);
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
