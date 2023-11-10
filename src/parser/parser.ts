/* eslint-disable max-lines */
import { Issue } from '~/issue/issue';
import { Boolean2, String2 } from '~/lib/core';
import { BodyNode, bodyNode } from '~/parser/node/body/body-node';
import { scanCloseNode } from '~/parser/node/close/close-node';
import { scanCommaNode } from '~/parser/node/comma/comma-node';
import { scanGroupNode } from '~/parser/node/group/group-node';
import { scanIdNode } from '~/parser/node/id/id-node';
import { scanIntegerNode } from '~/parser/node/integer/integer-node';
import { JoiningNode, scanJoiningNode } from '~/parser/node/joining/joining-node';
import { NlNode, scanNlNode } from '~/parser/node/nl/nl-node';
import { Node } from '~/parser/node/node';
import { scanOperatorNode } from '~/parser/node/operator/operator-node';
import { scanStringNode } from '~/parser/node/string/string-node';
import { scanUnknownNode } from '~/parser/node/unknown/unknown-node';
import { WhitespaceNode, scanWhitespaceNode } from '~/parser/node/whitespace/whitespace-node';
import { NodeType } from './node/node-type';
import { TokenNode } from './node/token-node';
import { is } from './util/is';
import { IndentBody, putStatement } from './util/put-statement';

type NodeScanResult = TokenNode | Node | null;
type NodeScanFn = (parser: Parser) => NodeScanResult;
type BreakFn = (node: Node) => Boolean2;

const nodeScanFunctions: NodeScanFn[] = [
  scanIntegerNode,
  scanStringNode,
  scanNlNode,
  scanGroupNode,
  scanCloseNode,
  scanCommaNode,
  scanJoiningNode,
  scanWhitespaceNode,
  scanOperatorNode,
  scanIdNode,
  scanUnknownNode,
];

export class Parser {
  public hidden: Node[] = [];
  public issues: Issue[] = [];

  public index = 0;
  public row = 0;
  public column = 0;
  public lastStatementNodes: Node[] = [];
  public breakNode: Node | null = null;

  public constructor(public text: String2) {}

  public parse(): BodyNode {
    return this.parseUntil(null);
  }

  public parseUntil(breakFn: BreakFn | null): BodyNode {
    const indentBody: IndentBody[] = [];
    let nodes: Node[] = [];

    this.lastStatementNodes = nodes;
    this.breakNode = null;

    while (this.index < this.text.length) {
      const node = this.nextNode();

      if (breakFn && breakFn(node)) {
        this.breakNode = node;

        break;
      }

      if (is<WhitespaceNode>(node, NodeType.WHITESPACE) || is<JoiningNode>(node, NodeType.JOINING)) {
        this.hidden.push(node);

        continue;
      }

      if (is<NlNode>(node, NodeType.NL)) {
        this.hidden.push(node);
        putStatement(indentBody, nodes);
        nodes = [];

        continue;
      }

      nodes.push(node);
    }

    putStatement(indentBody, nodes);

    return indentBody[0]?.body ?? bodyNode(null, []);
  }

  public nextNode(): Exclude<NodeScanResult, null> {
    for (const nodeScan of nodeScanFunctions) {
      const node = nodeScan(this);

      if (node) {
        this.index = node.stop + 1;

        return node;
      }
    }

    throw new Error('Not implemented');
  }
}
