import '~/extensions';
import { CloseNode } from '~/node/lexical/close/close-node';
import { CommaNode } from '~/node/lexical/comma/comma-node';
import { LexicalAnalysis } from '~/node/lexical/lexical-analysis';
import { OpenNode, scanOpenNode } from '~/node/lexical/open/open-node';
import { NodeType } from '~/node/node';
import { BodyNode, bodyNode } from '~/node/syntactic/body/body-node';
import { statementNode } from '~/node/syntactic/statement/statement-node';
import { SyntacticNode } from '~/node/syntactic/syntactic-node';
import { is } from '../../node';

export interface GroupNode extends SyntacticNode {
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
    open,
    close,
    bodies,
  };
}

export function scanGroupNode(analysis: LexicalAnalysis): GroupNode | null {
  const open = scanOpenNode(analysis);

  if (!is<OpenNode>(open, NodeType.OPEN)) {
    return null;
  }

  analysis.index = open.stop + 1;
  const bodies: BodyNode[] = [];

  while (analysis.index < analysis.text.length) {
    const body = analysis.body((node) => is(node, NodeType.COMMA) || is(node, NodeType.CLOSE));
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
    bodies.push(bodyNode(null, [statementNode([])]));
  }

  return groupNode(open, null, bodies);
}
