import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { NodeType } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';
import { scanCloseNode } from '~/node/close/close-node';
import { scanCommaNode } from '~/node/comma/comma-node';
import { scanIdNode } from '~/node/id/id-node';
import { scanIntegerNode } from '~/node/integer/integer-node';
import { scanJoiningNode } from '~/node/joining/joining-node';
import { scanNlNode } from '~/node/nl/nl-node';
import { scanOpenNode } from '~/node/open/open-node';
import { scanOperatorNode } from '~/node/operator/operator-node';
import { scanStringNode } from '~/node/string/string-node';
import { unexpectedNode } from '~/node/unknown/unknown-node';
import { scanWhitespaceNode } from '~/node/whitespace/whitespace-node';

type NodeScanFunction = (text: String2, index: Integer) => LexicalNode | null;

const nodeScanFunctions: NodeScanFunction[] = [
  scanNlNode,
  scanOpenNode,
  scanCloseNode,
  scanCommaNode,
  scanStringNode,
  scanJoiningNode,
  scanWhitespaceNode,
  scanOperatorNode,
  scanIdNode,
  scanIntegerNode,
];

export class LexicalAnalysis {
  public constructor(public text: String2) {}

  public nodes(): LexicalNode[] {
    const scannedNodes: LexicalNode[] = [];

    for (let index = 0; index < this.text.length; index++) {
      const node = this.nextNode(index);

      if (node) {
        scannedNodes.push(node);
        index = node.stop;
        continue;
      }

      const last = scannedNodes[scannedNodes.length - 1];
      if (last?.type === NodeType.UNKNOWN) {
        last.text += this.text[index];
        last.stop = index;
        continue;
      }

      const unexpected = unexpectedNode(index, index, this.text[index]);
      scannedNodes.push(unexpected);
    }

    return scannedNodes;
  }

  private nextNode(index: Integer): LexicalNode | null {
    for (const nodeScan of nodeScanFunctions) {
      const node = nodeScan(this.text, index);
      if (node) {
        return node;
      }
    }
    return null;
  }
}
