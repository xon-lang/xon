import '~/extensions';
import { BodyNode, bodyNode } from '~/parser/node/body/body-node';
import { CloseNode } from '~/parser/node/close/close-node';
import { CommaNode } from '~/parser/node/comma/comma-node';
import { OpenNode, scanOpenNode } from '~/parser/node/open/open-node';
import { statementNode } from '~/parser/node/statement/statement-node';
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

export function scanGroupNode(analysis: Parser): GroupNode | null {
  const open = scanOpenNode(analysis);

  if (!is<OpenNode>(open, NodeType.OPEN)) {
    return null;
  }

  analysis.index = open.stop + 1;
  const bodies: BodyNode[] = [];

  while (analysis.index < analysis.text.length) {
    const body = analysis.parseUntil((node) => is(node, NodeType.COMMA) || is(node, NodeType.CLOSE));
    const { breakNode } = body;

    if (is<CommaNode>(breakNode, NodeType.COMMA)) {
      body.statements.last()?.hidden.push(breakNode);
      bodies.push(body);

      continue;
    }

    if (is<CloseNode>(breakNode, NodeType.CLOSE)) {
      bodies.push(body);

      return groupNode(open, breakNode, bodies);
    }
  }

  if (bodies.length === 0) {
    bodies.push(bodyNode(null, [statementNode([], null, [])]));
  }

  return groupNode(open, null, bodies);
}
