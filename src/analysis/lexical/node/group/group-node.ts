import { is } from '~/analysis/is';
import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { BodyNode } from '~/analysis/lexical/node/body/body-node';
import { CloseNode } from '~/analysis/lexical/node/close/close-node';
import { CommaNode } from '~/analysis/lexical/node/comma/comma-node';
import { OpenNode, scanOpenNode } from '~/analysis/lexical/node/open/open-node';
import { NodeType, Token } from '~/analysis/node';
import '~/extensions';

export interface GroupNode extends Token {
  $: NodeType.GROUP;
  open: OpenNode;
  close: CloseNode | null;
  items: BodyNode[];
}

export function groupNode(open: OpenNode, close: CloseNode | null, items: BodyNode[]): GroupNode {
  const lastStatement = items.lastOrNull()?.statements?.lastOrNull()?.nodes?.lastOrNull();

  return {
    $: NodeType.GROUP,
    start: open.start,
    stop: close?.stop ?? lastStatement?.stop ?? open.stop,
    open,
    close,
    items,
    // eslint-disable-next-line no-warning-comments
    // todo should be fixed
    text: '',
  };
}

export function scanGroupNode(analysis: LexicalAnalysis): GroupNode | null {
  const open = scanOpenNode(analysis);

  if (!is<OpenNode>(open, NodeType.OPEN)) {
    return null;
  }

  analysis.index = open.stop + 1;
  const items: BodyNode[] = [];

  while (analysis.index < analysis.text.length) {
    const body = analysis.body((node) => [NodeType.COMMA, NodeType.CLOSE].some((nodeType) => is(node, nodeType)));
    const lastNode = body.statements.lastOrNull()?.nodes.lastOrNull();

    if (is<CommaNode>(lastNode, NodeType.COMMA)) {
      items.push(body);
      continue;
    }

    if (is<CloseNode>(lastNode, NodeType.CLOSE) && lastNode.text === open.text) {
      body.statements.lastOrNull()?.nodes.removeLast();

      if (body.statements.length > 0 && body.statements[0].nodes.length > 0) {
        items.push(body);
      }

      return groupNode(open, lastNode, items);
    }
  }

  return groupNode(open, null, items);
}
