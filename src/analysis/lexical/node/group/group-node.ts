import { is } from '~/analysis/is';
import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { CloseNode } from '~/analysis/lexical/node/close/close-node';
import { OpenNode, scanOpenNode } from '~/analysis/lexical/node/open/open-node';
import { Node, NodeType } from '~/analysis/node';

export interface GroupNode extends Node {
  $: NodeType.GROUP;
  open: OpenNode;
  close: CloseNode | null;
  items: Node[];
}

export function groupNode(open: OpenNode, close: CloseNode | null, items: Node[]): GroupNode {
  return {
    $: NodeType.GROUP,
    start: open.start,
    stop: close?.stop ?? items[items.length - 1]?.stop ?? open.stop,
    open,
    close,
    items,
  };
}

export function scanGroupNode(analysis: LexicalAnalysis): GroupNode | null {
  const { text, nextNode } = analysis;
  const open = scanOpenNode(analysis);

  if (is<OpenNode>(open, NodeType.OPEN)) {
    analysis.index = open.stop + 1;
    const items: Node[] = [];

    while (analysis.index < text.length) {
      const item = nextNode();

      if (is<CloseNode>(item, NodeType.CLOSE)) {
        return groupNode(open, item, items);
      }

      items.push(item);
    }

    return groupNode(open, null, items);
  }
  return null;
}
