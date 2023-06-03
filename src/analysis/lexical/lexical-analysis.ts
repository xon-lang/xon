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
import { Boolean2, Integer, String2 } from '~/lib/core';

type NodeScanFunction = (analysis: LexicalAnalysis) => Node | null;

const nodeScanFunctions: NodeScanFunction[] = [
  scanNlNode,
  // scanBodyNode

  scanIntegerNode,
  scanStringNode,
  scanGroupNode,
  // scanOpenNode, this handle group
  scanCloseNode, // this can handle group if possible
  scanCommaNode,
  scanJoiningNode,
  scanWhitespaceNode,
  scanOperatorNode,
  scanIdNode,
  scanUnknownNode,
];

export class LexicalAnalysis {
  public index = 0;

  public constructor(public text: String2) {}

  public body(breakFn: ((node: Node) => Boolean2) | null = null): BodyNode {
    const indentBody: { indent: Integer; body: BodyNode }[] = [];
    let nodes: Node[] = [];

    while (this.index < this.text.length) {
      const node = this.nextNode();
      nodes.push(node);

      if (breakFn && breakFn(node)) {
        if (indentBody.length > 0) {
          return indentBody[0].body;
        }

        return bodyNode([statementNode(nodes)]);
      }

      if (is(node, NodeType.NL)) {
        this.putStatement(indentBody, statementNode(nodes));
        nodes = [];
        continue;
      }
    }

    if (nodes.length > 0) {
      this.putStatement(indentBody, statementNode(nodes));
    }

    if (indentBody.length > 0) {
      return indentBody[0].body;
    }

    return bodyNode([statementNode(nodes)]);
  }

  public nextNode(): Node {
    for (const nodeScan of nodeScanFunctions) {
      const node = nodeScan(this);
      if (node) {
        this.index = node.stop + 1;
        return node;
      }
    }
    throw new Error('Not implemented');
  }

  public putStatement(indentBody: { indent: Integer; body: BodyNode }[], statement: StatementNode) {
    const statementIndent = getStatementIndent(statement);

    // any first statement
    if (indentBody.length === 0) {
      indentBody.push({ indent: statementIndent, body: bodyNode([statement]) });
      return;
    }

    const lastIndentBody = indentBody.last();

    // first statement is NL
    if (
      indentBody.length === 1 &&
      lastIndentBody.body.statements.length === 1 &&
      lastIndentBody.body.statements[0].nodes.length === 1 &&
      is(lastIndentBody.body.statements[0].nodes[0], NodeType.NL)
    ) {
      lastIndentBody.indent = statementIndent;
      lastIndentBody.body.statements.push(statement);
      return;
    }

    // new body
    if (statementIndent > lastIndentBody.indent) {
      const body = bodyNode([statement]);
      indentBody.push({ indent: statementIndent, body });

      // add body as last statement
      lastIndentBody.body.statements.last().nodes.push(body);
      return;
    }

    const foundIndentBodyIndex = indentBody.findLastIndex((x) => x.indent <= statementIndent);

    if (foundIndentBodyIndex < 0) {
      throw new Error('Not implemented');
    }

    indentBody.splice(foundIndentBodyIndex + 1);
    const foundIndentBody = indentBody[foundIndentBodyIndex];
    foundIndentBody.indent = Math.min(foundIndentBody.indent, statementIndent);
    foundIndentBody.body.statements.push(statement);
  }
}

function isEmptyStatement(statement: StatementNode) {
  return statement.nodes.every((x) => is(x, NodeType.NL) || is(x, NodeType.WHITESPACE));
}

function getStatementIndent(statement: StatementNode): Integer {
  if (is(statement.nodes[0], NodeType.WHITESPACE)) {
    const first = statement.nodes[0];
    return first.stop - first.start + 1;
  }

  return 0;
}

function hasStatementIndent(statement: StatementNode): Boolean2 {
  if (statement.nodes.length === 1 && is(statement.nodes[0], NodeType.NL)) {
    return false;
  }
  return true;
}
