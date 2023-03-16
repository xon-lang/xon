import { Source } from '~/compiler/source/source';
import { Integer } from '~/lib/core';
import { scanCloseNode } from '~/node/close/close-node';
import { scanCommaNode } from '~/node/comma/comma-node';
import { scanIdNode } from '~/node/id/id-node';
import { scanIntegerNode } from '~/node/integer/integer-node';
import { scanJoiningNode } from '~/node/joining/joining-node';
import { scanNlNode } from '~/node/nl/nl-node';
import { NodeType, TokenNode } from '~/node/node';
import { scanOpenNode } from '~/node/open/open-node';
import { scanOperatorNode } from '~/node/operator/operator-node';
import { scanStringNode } from '~/node/string/string-node';
import { unexpectedNode } from '~/node/unexpected/unexpected-node';
import { scanWhitespaceNode } from '~/node/whitespace/whitespace-node';

type NodeScanFunction = (source: Source, startIndex: Integer, stopIndex: Integer) => TokenNode | null;

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

export class Scanner {
  public source: Source;
  public startIndex: Integer;
  public stopIndex: Integer;

  // private indents: Integer[] = [];

  public constructor(source: Source);
  public constructor(source: Source, startIndex: Integer, stopIndex: Integer);
  public constructor(source: Source, startIndex?: Integer, stopIndex?: Integer) {
    this.source = source;
    this.startIndex = startIndex ?? 0;
    this.stopIndex = stopIndex ?? source.text.length - 1;
  }

  public nodes(): TokenNode[] {
    const scannedNodes: TokenNode[] = [];
    if (scannedNodes.length > 0) {
      return scannedNodes;
    }

    for (let index = this.startIndex; index <= this.stopIndex; index++) {
      const node = this.nextNode(index);

      if (node) {
        scannedNodes.push(node);
        index = node.stop;
        continue;
      }

      const last = scannedNodes[scannedNodes.length - 1];
      if (last?.type === NodeType.UNEXPECTED) {
        last.text += this.source.text[index];
        last.stop = index;
        continue;
      }

      const unexpected = unexpectedNode(index, index, this.source.text[index]);
      scannedNodes.push(unexpected);
    }

    return scannedNodes;
  }

  private nextNode(index: Integer): TokenNode | null {
    for (const nodeScan of nodeScanFunctions) {
      const node = nodeScan(this.source, index, this.stopIndex);
      if (node) {
        return node;
      }
    }
    return null;
  }
}
