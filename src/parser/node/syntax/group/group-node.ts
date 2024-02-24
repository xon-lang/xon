import { ISSUE_MESSAGE } from '../../../../issue/issue-message';
import { Nothing, nothing } from '../../../../lib/core';
import '../../../../util/extension';
import { parseSyntaxUntil } from '../../../syntax';
import {
  ARRAY_NODE_OPEN_CODE,
  COMMA,
  GROUP_NODE_OPEN_CODE,
  OBJECT_NODE_OPEN_CODE,
  OPEN_CLOSE_PAIR,
} from '../../../syntax-config';
import { SyntaxContext } from '../../../syntax-context';
import { $Node, Node, is } from '../../node';
import { CloseNode } from '../../token/close/close-node';
import { OpenNode, scanOpenNode } from '../../token/open/open-node';
import { OperatorNode } from '../../token/operator/operator-node';
import { ArrayNode, arrayNode } from '../array/array-node';
import { ObjectNode, objectNode } from '../object/object-node';
import { SyntaxNode, getRangeAndChildren } from '../syntax-node';

export type Group = GroupNode | ArrayNode | ObjectNode;

export interface GroupNode extends SyntaxNode {
  $: $Node.GROUP;
  open: OpenNode;
  close: CloseNode | null;
  // todo make items as Statement[][] or as body
  items: (Node | Nothing)[];
}

export function groupNode(context: SyntaxContext, open: OpenNode, close: CloseNode | null, items: Node[]): GroupNode {
  const node: GroupNode = {
    $: $Node.GROUP,
    ...getRangeAndChildren(open, ...items, close),
    open,
    close,
    items,
  };

  validateGroupNode(context, node);

  return node;
}

export function validateGroupNode(context: SyntaxContext, node: GroupNode): void {
  if (!node.close) {
    context.issueManager.addError(
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

  const { source, position } = context;
  position.column = open.range.stop.column + 1;
  position.index = open.range.stop.index + 1;

  const items: Node[] = [];

  while (position.index < source.text.length) {
    // todo remove from here or refactor
    const { syntaxContext: itemContext } = parseSyntaxUntil(
      source,
      position,
      (node) =>
        (is<OperatorNode>(node, $Node.OPERATOR) && node.text === COMMA) ||
        (is<CloseNode>(node, $Node.CLOSE) && node.text.charCodeAt(0) === OPEN_CLOSE_PAIR[open.text.charCodeAt(0)]),
    );

    context.position = itemContext.position;

    if (is<OperatorNode>(itemContext.breakNode, $Node.OPERATOR)) {
      context.hiddenNodes.push(itemContext.breakNode);
      items.push(itemContext.statements[0]?.item ?? nothing);

      continue;
    }

    // todo add hidden nodes for close token
    if (is<CloseNode>(itemContext.breakNode, $Node.CLOSE)) {
      if (itemContext.nodes.length > 0 || items.length > 0) {
        items.push(itemContext.statements[0]?.item ?? nothing);
      }

      return createGroupNode(context, open, itemContext.breakNode, items);
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
