import { ISSUE_MESSAGE } from '../../../issue/issue-message';
import { clonePosition } from '../../../source/source-position';
import { rangeFromNodes } from '../../../source/source-range';
import '../../../util/extension';
import { parseUntil } from '../../syntax';
import {
  ARRAY_NODE_OPEN_CODE,
  GROUP_NODE_OPEN_CODE,
  OBJECT_NODE_OPEN_CODE,
  OPEN_CLOSE_PAIR,
} from '../../syntax-config';
import { SyntaxContext } from '../../syntax-context';
import { is } from '../../util/is';
import { ArrayNode, arrayNode } from '../array/array-node';
import { CloseNode } from '../close/close-node';
import { CommaNode } from '../comma/comma-node';
import { $Node, Node, SyntaxNode, addNodeParent } from '../node';
import { ObjectNode, objectNode } from '../object/object-node';
import { OpenNode, scanOpenNode } from '../open/open-node';

export type Group = GroupNode | ArrayNode | ObjectNode;

export interface GroupNode extends SyntaxNode {
  $: $Node.GROUP;
  open: OpenNode;
  close: CloseNode | null;
  items: Node[];
}

export function groupNode(context: SyntaxContext, open: OpenNode, close: CloseNode | null, items: Node[]): GroupNode {
  const last = items.lastOrNull();

  const node: GroupNode = {
    $: $Node.GROUP,
    range: rangeFromNodes(open, close ?? last ?? open),
    children: [],
    open,
    close,
    items,
  };

  validateGroupNode(context, node);
  addNodeParent(node, open, ...items, close);

  return node;
}

export function validateGroupNode(context: SyntaxContext, node: GroupNode): void {
  if (!node.close) {
    context.addErrorIssue(
      node.open,
      ISSUE_MESSAGE.expectCloseToken(
        node.open.text,
        String.fromCharCode(OPEN_CLOSE_PAIR[node.open.text.charCodeAt(0)]),
      ),
    );
  }
}

export function scanGroupNode(context: SyntaxContext): Group | null {
  const open = scanOpenNode(context);

  if (!is<OpenNode>(open, $Node.OPEN)) {
    return null;
  }

  context.position.column = open.range.stop.column + 1;
  context.position.index = open.range.stop.index + 1;

  const items: Node[] = [];

  while (context.position.index < context.source.text.length) {
    const { syntaxContext: groupContext } = parseUntil(
      context.source,
      context.position,
      (node) =>
        is<CommaNode>(node, $Node.COMMA) ||
        (is<CloseNode>(node, $Node.CLOSE) && node.text.charCodeAt(0) === OPEN_CLOSE_PAIR[open.text.charCodeAt(0)]),
    );

    context.position = clonePosition(groupContext.position);

    if (is<CommaNode>(groupContext.breakNode, $Node.COMMA)) {
      context.hidden.push(groupContext.breakNode);

      if (groupContext.nodes.length > 0) {
        items.push(groupContext.root.children[0]);
      }

      continue;
    }

    if (is<CloseNode>(groupContext.breakNode, $Node.CLOSE)) {
      if (groupContext.nodes.length > 0) {
        items.push(groupContext.root.children[0]);
      }

      return createGroupNode(context, open, groupContext.breakNode, items);
    }
  }

  return createGroupNode(context, open, null, items);
}

function createGroupNode(context: SyntaxContext, open: OpenNode, close: CloseNode | null, nodes: Node[]): Group {
  const code = open.text.charCodeAt(0);

  if (code === GROUP_NODE_OPEN_CODE) {
    return groupNode(context, open, close, nodes);
  }

  if (code === OBJECT_NODE_OPEN_CODE) {
    return objectNode(open, close, nodes);
  }

  if (code === ARRAY_NODE_OPEN_CODE) {
    return arrayNode(open, close, nodes);
  }

  throw new Error('Not implemented');
}

export function isGroupNode(node: Node): node is Group {
  return is<GroupNode>(node, $Node.GROUP) || is<ArrayNode>(node, $Node.ARRAY) || is<ObjectNode>(node, $Node.OBJECT);
}
