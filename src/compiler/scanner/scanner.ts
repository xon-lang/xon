import { Source } from '~/compiler/source/source';
import { Integer } from '~/lib/core';
import { scanCloseNode } from '~/node/close/close-node';
import { scanCommaNode } from '~/node/comma/comma-node';
import { scanIdNode } from '~/node/id/id-node';
import { scanIntegerNode } from '~/node/integer/integer-node';
import { scanJoiningNode } from '~/node/joining/joining-node';
import { scanNlNode } from '~/node/nl/nl-node';
import { Node, NodeType } from '~/node/node';
import { scanOpenNode } from '~/node/open/open-node';
import { scanOperatorNode } from '~/node/operator/operator-node';
import { scanStringNode } from '~/node/string/string-node';
import { unexpectedNode } from '~/node/unexpected/unexpected-node';
import { scanWhitespaceNode } from '~/node/whitespace/whitespace-node';

type NodeScanFunction = (source: Source, startIndex: Integer, stopIndex: Integer) => Node | null;

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

  public nodes(): Node[] {
    const scannedNodes: Node[] = [];
    if (scannedNodes.length > 0) {
      return scannedNodes;
    }

    for (let index = this.startIndex; index <= this.stopIndex; index++) {
      // const nodes = this.indentDedent(index);
      // if (nodes.length > 0) {
      //   index = nodes[nodes.length - 1].stopIndex;
      //   continue;
      // }

      const node = this.nextNode(index);

      if (node) {
        scannedNodes.push(node);
        index = node.stop;
        continue;
      }

      const last = scannedNodes[scannedNodes.length - 1];
      if (last?.type === NodeType.UNEXPECTED) {
        last.stop = index;
        continue;
      }

      const unexpected = unexpectedNode(index, index);
      scannedNodes.push(unexpected);
    }

    // for (const indent of this.indents) {
    //   scannedNodes.push(dedentNode(this.stopIndex));
    // }

    return scannedNodes;
  }

  private nextNode(index: Integer): Node | null {
    for (const nodeScan of nodeScanFunctions) {
      const node = nodeScan(this.source, index, this.stopIndex);
      if (node) {
        return node;
      }
    }
    return null;
  }

  // private indentDedent(index: Integer): Node | null {
  //   const nlNode = scannedNodes[scannedNodes.length - 1];
  //   if (!nlNode || nlNode.type !== NodeType.NL) {
  //     return null;
  //   }

  //   for (let i = scannedNodes.length - 2; i >= 0; i--) {
  //     const nodeType = scannedNodes[i].type;
  //     if (nodeType === NodeType.WHITESPACE || nodeType === NodeType.NL) {
  //       continue;
  //     }
  //     if (nodeType === NodeType.COMMA || nodeType === NodeType.OPEN) {
  //       return null;
  //     }
  //     break;
  //   }

  //   let indentLength = 0;
  //   for (let i = nlNode.stopIndex; i < nlNode.startIndex; i--) {
  //     if (this.source.text[i] !== WS) {
  //       break;
  //     }
  //     indentLength++;
  //   }

  //   const previousIndentLength = this.indents.length > 0 ? this.indents[this.indents.length - 1] : 0;
  //   if (indentLength === previousIndentLength) {
  //     return null;
  //   }

  //   if (indentLength > previousIndentLength) {
  //     this.indents.push(indentLength);
  //     return indentNode(nlNode.stopIndex, nlNode.stopIndex);
  //   }

  //   return indentNode(nlNode.stopIndex, nlNode.stopIndex);;
  // }
}

// const WS = ' ';
