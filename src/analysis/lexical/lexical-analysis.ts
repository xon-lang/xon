import { Analysis } from '~/analysis/analysis';
import { is } from '~/analysis/is';
import { BodyNode, bodyNode } from '~/analysis/lexical/node/body/body-node';
import { scanCloseNode } from '~/analysis/lexical/node/close/close-node';
import { scanCommaNode } from '~/analysis/lexical/node/comma/comma-node';
import { scanGroupNode } from '~/analysis/lexical/node/group/group-node';
import { scanIdNode } from '~/analysis/lexical/node/id/id-node';
import { scanIntegerNode } from '~/analysis/lexical/node/integer/integer-node';
import { scanJoiningNode } from '~/analysis/lexical/node/joining/joining-node';
import { scanNlNode } from '~/analysis/lexical/node/nl/nl-node';
import { scanOperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { StatementNode, statementNode } from '~/analysis/lexical/node/statement/statement-node';
import { scanStringNode } from '~/analysis/lexical/node/string/string-node';
import { scanUnknownNode } from '~/analysis/lexical/node/unknown/unknown-node';
import { scanWhitespaceNode } from '~/analysis/lexical/node/whitespace/whitespace-node';
import { Node, NodeType } from '~/analysis/node';
import { ladderNode } from '~/analysis/syntax/node/ladder/ladder-node';
import { String2 } from '~/lib/core';

type NodeScanFunction = (analysis: LexicalAnalysis) => Node | null;

const nodeScanFunctions: NodeScanFunction[] = [
  // scanBodyNode

  scanIntegerNode,
  scanStringNode,
  scanGroupNode,
  scanNlNode,
  // scanOpenNode,
  scanCloseNode,
  scanCommaNode,
  scanJoiningNode,
  scanWhitespaceNode,
  scanOperatorNode,
  scanIdNode,
  scanUnknownNode,
];

export class LexicalAnalysis implements Analysis {
  public index = 0;

  public constructor(public text: String2) {}

  public nodes(): BodyNode {
    this.index = 0;

    const statements: StatementNode[] = [];
    let statementNodes: Node[] = [];
    while (this.index < this.text.length) {
      const node = this.nextNode();
      if (is(node, NodeType.NL)) {
        statementNodes.push(node);
        statements.push(statementNode(statementNodes));
        statementNodes = [];
        continue;
      }
      statementNodes.push(node);
    }
    if (statementNodes.length > 0) {
      statements.push(statementNode(statementNodes));
    }

    return this.bodyNode(statements);
  }

  nextNode = (): Node => {
    for (const nodeScan of nodeScanFunctions) {
      const node = nodeScan(this);
      if (node) {
        this.index = node.stop + 1;
        return node;
      }
    }
    throw new Error('Not implemented');
  };

  bodyNode = (statements: StatementNode[], header: Node | null = null): BodyNode => {
    if (statements.length === 0) {
      return bodyNode(statements);
    }

    const bodyNodes: StatementNode[] = [];
    const bodyIndent =
      statements.find((x) => x.nodes.some((z) => !is(z, NodeType.NL) && !is(z, NodeType.WHITESPACE)))?.indent ?? 0;

    for (let i = 0; i < statements.length; i++) {
      const { indent } = statements[i];
      if (indent === bodyIndent || indent < bodyIndent) {
        bodyNodes.push(statements[i]);
        continue;
      }
      if (indent > bodyIndent) {
        const innerLines = statements.takeWhile((x) => x.indent > bodyIndent, i);

        const header = bodyNodes[bodyNodes.length - 1];
        const body = this.bodyNode(innerLines, header);
        bodyNodes[bodyNodes.length - 1] = statementNode([ladderNode(header, body)]);
        i = i + innerLines.length - 1;
      }
    }
    return bodyNode(bodyNodes);
  };
}
