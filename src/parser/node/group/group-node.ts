import '~/extensions';
import { ARRAY_NODE_CLOSE, ARRAY_NODE_OPEN, ArrayNode, arrayNode } from '~/parser/node/array/array-node';
import { BodyNode, bodyNode } from '~/parser/node/body/body-node';
import { CloseNode, closeNode } from '~/parser/node/close/close-node';
import { CommaNode } from '~/parser/node/comma/comma-node';
import { OBJECT_NODE_CLOSE, OBJECT_NODE_OPEN, ObjectNode, objectNode } from '~/parser/node/object/object-node';
import { OpenNode, scanOpenNode } from '~/parser/node/open/open-node';
import { statementNode } from '~/parser/node/statement/statement-node';
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
  bodies: BodyNode[];
}

export function groupNode(open: OpenNode, close: CloseNode | null, bodies: BodyNode[]): GroupNode {
  const lastStatement = bodies.lastOrNull()?.statements?.lastOrNull()?.nodes?.lastOrNull();

  return {
    $: NodeType.GROUP,
    start: open.start,
    stop: close?.stop ?? lastStatement?.stop ?? open.stop,
    hidden: [],
    open,
    close,
    bodies,
  };
}

const OPEN_CLOSE = {
  [GROUP_NODE_OPEN]: GROUP_NODE_CLOSE,
  [ARRAY_NODE_OPEN]: ARRAY_NODE_CLOSE,
  [OBJECT_NODE_OPEN]: OBJECT_NODE_CLOSE,
} as const;

export function scanGroupNode(parser: Parser): GroupNode | ObjectNode | ArrayNode | null {
  const { index, text } = parser;
  const open = scanOpenNode(parser);

  if (!is<OpenNode>(open, NodeType.OPEN)) {
    return null;
  }

  const bodies: BodyNode[] = [];

  parser.index += open.text.length;

  while (parser.index < text.length) {
    const body = parser.parseUntil(
      (node) =>
        is<CommaNode>(node, NodeType.COMMA) ||
        (is<CloseNode>(node, NodeType.CLOSE) && node.text === OPEN_CLOSE[open.text]),
    );
    const { breakNode } = parser;

    if (is<CommaNode>(breakNode, NodeType.COMMA)) {
      body.statements.last()?.hidden.push(breakNode);
      bodies.push(body);

      continue;
    }

    if (is<CloseNode>(breakNode, NodeType.CLOSE)) {
      const close = closeNode(breakNode.start, breakNode.stop, text[index]);
      bodies.push(body);

      return createGroupNode(open, close, bodies);
    }
  }

  if (bodies.length === 0) {
    bodies.push(bodyNode(null, [statementNode([], null, [])]));
  }

  return createGroupNode(open, null, bodies);
}

function createGroupNode(
  open: OpenNode,
  close: CloseNode | null,
  bodies: BodyNode[],
): GroupNode | ObjectNode | ArrayNode {
  if (open.text === GROUP_NODE_OPEN) {
    return groupNode(open, close, bodies);
  }

  if (open.text === OBJECT_NODE_OPEN) {
    return objectNode(open, close, bodies);
  }

  if (open.text === ARRAY_NODE_OPEN) {
    return arrayNode(open, close, bodies);
  }

  throw new Error('Not implemented');
}
