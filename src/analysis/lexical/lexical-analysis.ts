import { Analysis } from '~/analysis/analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { scanCloseNode } from '~/analysis/lexical/node/close/close-node';
import { scanCommaNode } from '~/analysis/lexical/node/comma/comma-node';
import { scanIdNode } from '~/analysis/lexical/node/id/id-node';
import { scanIntegerNode } from '~/analysis/lexical/node/integer/integer-node';
import { scanJoiningNode } from '~/analysis/lexical/node/joining/joining-node';
import { scanNlNode } from '~/analysis/lexical/node/nl/nl-node';
import { scanOpenNode } from '~/analysis/lexical/node/open/open-node';
import { scanOperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { scanStringNode } from '~/analysis/lexical/node/string/string-node';
import { unexpectedNode } from '~/analysis/lexical/node/unknown/unknown-node';
import { scanWhitespaceNode } from '~/analysis/lexical/node/whitespace/whitespace-node';
import { NodeType } from '~/analysis/node';
import { String2 } from '~/lib/core';

type NodeScanFunction = (analysis: LexicalAnalysis) => LexicalNode | null;

const nodeScanFunctions: NodeScanFunction[] = [
  scanIntegerNode,
  scanStringNode,
  scanNlNode,
  scanOpenNode,
  scanCloseNode,
  scanCommaNode,
  scanJoiningNode,
  scanWhitespaceNode,
  scanOperatorNode,
  scanIdNode,
];

export class LexicalAnalysis implements Analysis {
  public index = 0;
  public scannedNodes: LexicalNode[] = [];

  public constructor(public text: String2) {}

  public nodes(): LexicalNode[] {
    this.scannedNodes = [];

    for (this.index = 0; this.index < this.text.length; this.index++) {
      const node = this.nextNode();

      if (node) {
        this.scannedNodes.push(node);
        this.index = node.stop;
        continue;
      }

      const last = this.scannedNodes[this.scannedNodes.length - 1];
      if (last?.$ === NodeType.UNKNOWN) {
        last.text += this.text[this.index];
        last.stop = this.index;
        continue;
      }

      const unexpected = unexpectedNode(this.index, this.index, this.text[this.index]);
      this.scannedNodes.push(unexpected);
    }

    return this.scannedNodes;
  }

  private nextNode(): LexicalNode | null {
    for (const nodeScan of nodeScanFunctions) {
      const node = nodeScan(this);
      if (node) {
        return node;
      }
    }
    return null;
  }
}
