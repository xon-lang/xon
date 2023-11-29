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
  ARRAY_NODE_OPEN_CODE,
  GROUP_NODE_OPEN_CODE,
  OBJECT_NODE_OPEN_CODE,
  OPEN_CLOSE_PAIR,
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
        (is<CloseNode>(node, NodeType.CLOSE) && node.text.charCodeAt(0) === OPEN_CLOSE_PAIR[open.text.charCodeAt(0)]),
    );

    context.index = groupContext.index;

    if (is<CommaNode>(groupContext.breakNode, NodeType.COMMA)) {
      context.hidden.push(groupContext.breakNode);

      if (groupContext.nodes.length > 0) {
        items.push(groupContext.root.children[0]);
      }

      continue;
    }

    if (is<CloseNode>(groupContext.breakNode, NodeType.CLOSE)) {
      if (groupContext.nodes.length > 0) {
        items.push(groupContext.root.children[0]);
      }

      return createGroupNode(open, groupContext.breakNode, items);
    }
  }

  return createGroupNode(open, null, items);
}

function createGroupNode(open: OpenNode, close: CloseNode | null, nodes: Node[]): GroupNode | ObjectNode | ArrayNode {
  const code = open.text.charCodeAt(0);

  if (code === GROUP_NODE_OPEN_CODE) {
    return groupNode(open, close, nodes);
  }

  if (code === OBJECT_NODE_OPEN_CODE) {
    return objectNode(open, close, nodes);
  }

  if (code === ARRAY_NODE_OPEN_CODE) {
    return arrayNode(open, close, nodes);
  }

  throw new Error('Not implemented');
}
