/* eslint-disable max-lines */
import { Issue } from '~/issue/issue';
import { Boolean2, String2 } from '~/lib/core';
import { scanCloseNode } from '~/parser/node/close/close-node';
import { scanCommaNode } from '~/parser/node/comma/comma-node';
import { scanGroupNode } from '~/parser/node/group/group-node';
import { scanIdNode } from '~/parser/node/id/id-node';
import { scanIntegerNode } from '~/parser/node/integer/integer-node';
import { JoiningNode, scanJoiningNode } from '~/parser/node/joining/joining-node';
import { scanNlNode } from '~/parser/node/nl/nl-node';
import { Node } from '~/parser/node/node';
import { nodePosition } from '~/parser/node/node-position';
import { scanOperatorNode } from '~/parser/node/operator/operator-node';
import { StatementNode } from '~/parser/node/statement/statement-node';
import { scanStringNode } from '~/parser/node/string/string-node';
import { scanUnknownNode } from '~/parser/node/unknown/unknown-node';
import { scanWhitespaceNode } from '~/parser/node/whitespace/whitespace-node';
import { NodeType } from './node/node-type';
import { TokenNode } from './node/token-node';
import { is } from './util/is';
import { putStatement } from './util/put-statement';

type NodeScanResult = Partial<TokenNode> | null;
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

  public parse(): Node[] {
    return this.parseUntil(null);
  }

  public parseUntil(breakFn: BreakFn | null): Node[] {
    const statements: StatementNode[] = [];
    let lastStatementNode: StatementNode | null = null;
    let nodes: Node[] = [];

    this.lastStatementNodes = nodes;
    this.breakNode = null;

    while (this.index < this.text.length) {
      const node = this.nextNode();

      if (breakFn && breakFn(node)) {
        this.breakNode = node;

        break;
      }

      if (is(node, NodeType.WHITESPACE)) {
        this.hidden.push(node);

        continue;
      }

      if (is<JoiningNode>(node, NodeType.JOINING)) {
        this.hidden.push(node);
        this.row += 1;
        this.column = 0;

        continue;
      }

      if (is(node, NodeType.NL)) {
        this.hidden.push(node);
        this.row += 1;
        this.column = 0;

        lastStatementNode = putStatement(statements, lastStatementNode, nodes);
        nodes = [];

        continue;
      }

      nodes.push(node);
    }

    lastStatementNode = putStatement(statements, lastStatementNode, nodes);

    return statements.flatMap((x) => x.node);
  }

  public nextSymbol(): String2 {
    this.index += 1;

    return this.text[this.index];
  }

  public nextNode(): Node {
    for (const nodeScan of nodeScanFunctions) {
      const node = nodeScan(this);

      if (node) {
        const anyNode = node as Node & { text?: String2 };

        if (anyNode.text) {
          anyNode.start = nodePosition(this.index, this.row, this.column);

          const stopIndex = this.index + anyNode.text.length - 1;
          const stopColumn = this.column + anyNode.text.length - 1;
          anyNode.stop = nodePosition(stopIndex, this.row, stopColumn);

          this.column += stopColumn + 1;
        }

        this.index = anyNode.stop.index + 1;

        return anyNode;
      }
    }

    throw new Error('Not implemented');
  }
}
