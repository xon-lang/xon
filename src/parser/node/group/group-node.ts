import '~/extensions';
import { BodyNode, bodyNode } from '~/parser/node/body/body-node';
import { CloseNode, closeNode } from '~/parser/node/close/close-node';
import { CommaNode } from '~/parser/node/comma/comma-node';
import { OpenNode, openNode } from '~/parser/node/open/open-node';
import { statementNode } from '~/parser/node/statement/statement-node';
import { UnknownNode } from '~/parser/node/unknown/unknown-node';
import { Parser } from '~/parser/parser';
import { is } from '~/parser/util/is';
import { Node } from '../node';
import { NodeType } from '../node-type';

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
  '(': ')',
  '[': ']',
  '{': '}',
} as const;
const OPEN = Object.keys(OPEN_CLOSE);

export function scanGroupNode(parser: Parser): GroupNode | null {
  const { index, text } = parser;

  if (!OPEN.includes(text[index])) {
    return null;
  }

  const open = openNode(index, index, text[index]);
  const bodies: BodyNode[] = [];

  parser.index += open.text.length;

  while (parser.index < text.length) {
    const body = parser.parseUntil(
      (node) =>
        is(node, NodeType.COMMA) || (is<UnknownNode>(node, NodeType.UNKNOWN) && node.text === OPEN_CLOSE[open.text]),
    );
    const { breakNode } = body;

    if (is<CommaNode>(breakNode, NodeType.COMMA)) {
      body.statements.last()?.hidden.push(breakNode);
      bodies.push(body);

      continue;
    }

    if (is<UnknownNode>(breakNode, NodeType.UNKNOWN)) {
      const close = closeNode(breakNode.start, breakNode.stop, text[index]);
      bodies.push(body);

      return groupNode(open, close, bodies);
    }
  }

  if (bodies.length === 0) {
    bodies.push(bodyNode(null, [statementNode([], null, [])]));
  }

  return groupNode(open, null, bodies);
}
