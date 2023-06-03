import { is } from '~/analysis/is';
import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { BodyNode } from '~/analysis/lexical/node/body/body-node';
import { CloseNode } from '~/analysis/lexical/node/close/close-node';
import { CommaNode } from '~/analysis/lexical/node/comma/comma-node';
import { OpenNode, scanOpenNode } from '~/analysis/lexical/node/open/open-node';
import { Node, NodeType } from '~/analysis/node';
import '~/extensions';

export interface GroupNode extends Node {
  $: NodeType.GROUP;
  open: OpenNode;
  close: CloseNode | null;
  items: BodyNode[];
}

export function groupNode(open: OpenNode, close: CloseNode | null, items: BodyNode[]): GroupNode {
  return {
    $: NodeType.GROUP,
    start: open.start,
    stop: close?.stop ?? items.lastOrNull()?.stop ?? open.stop,
    open,
    close,
    items,
  };
}

export function scanGroupNode(analysis: LexicalAnalysis): GroupNode | null {
  const { text, index } = analysis;
  const open = scanOpenNode(analysis);

  if (is<OpenNode>(open, NodeType.OPEN)) {
    analysis.index = open.stop + 1;
    const items: BodyNode[] = [];

    while (index < text.length) {
      const body = analysis.nodes((node) => [NodeType.COMMA, NodeType.CLOSE].some((nodeType) => is(node, nodeType)));
      const lastNode = body.statements.lastOrNull()?.nodes.lastOrNull();

      items.push(body);

      if (!is<CommaNode>(lastNode, NodeType.COMMA)) {
        if (is<CloseNode>(lastNode, NodeType.CLOSE)) {
          return groupNode(open, lastNode, items);
        }
        return groupNode(open, null, items);
      }
    }

    return groupNode(open, null, []);
  }

  return null;
}
