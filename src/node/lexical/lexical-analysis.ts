/* eslint-disable max-lines */
import { Boolean2, Integer, String2 } from '~/lib/core';
import { BodyNode, bodyNode } from '~/node/lexical/body/body-node';
import { scanCloseNode } from '~/node/lexical/close/close-node';
import { scanCommaNode } from '~/node/lexical/comma/comma-node';
import { scanGroupNode } from '~/node/lexical/group/group-node';
import { scanIdNode } from '~/node/lexical/id/id-node';
import { scanIntegerNode } from '~/node/lexical/integer/integer-node';
import { JoiningNode, scanJoiningNode } from '~/node/lexical/joining/joining-node';
import { HiddenLexicalNode, LexicalNode, NonHiddenLexicalNode, SyntacticNode } from '~/node/lexical/lexical-node';
import { NlNode, scanNlNode } from '~/node/lexical/nl/nl-node';
import { scanOperatorNode } from '~/node/lexical/operator/operator-node';
import { scanStringNode } from '~/node/lexical/string/string-node';
import { scanUnknownNode } from '~/node/lexical/unknown/unknown-node';
import { WhitespaceNode, scanWhitespaceNode } from '~/node/lexical/whitespace/whitespace-node';
import { Node, NodeType, is } from '~/node/node';
import { putStatement } from './util/put-statement';

type NodeScanResult = LexicalNode | SyntacticNode | null;
type NodeScanFunction = (analysis: LexicalAnalysis) => NodeScanResult;

const nodeScanFunctions: NodeScanFunction[] = [
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

const defaultLiteralScanFunctions: NodeScanFunction[] = [scanIntegerNode, scanStringNode];

export class LexicalAnalysis {
  public index = 0;
  public lastStatementNodes: Node[] = [];

  public constructor(public text: String2, public literalScanners: NodeScanFunction[] = defaultLiteralScanFunctions) {}

  public body(breakFn: ((node: Node) => Boolean2) | null = null): BodyNode & { breakNode?: Node } {
    const indentBody: { indent: Integer | null; body: BodyNode }[] = [];
    let nodes: NonHiddenLexicalNode[] = [];
    let hidden: HiddenLexicalNode[] = [];
    let breakNode: Node | undefined;

    this.lastStatementNodes = nodes;

    while (this.index < this.text.length) {
      const node = this.nextNode();

      if (breakFn && breakFn(node)) {
        breakNode = node;

        break;
      }

      if (is<WhitespaceNode>(node, NodeType.WHITESPACE) || is<JoiningNode>(node, NodeType.JOINING)) {
        hidden.push(node);

        continue;
      }

      if (is<NlNode>(node, NodeType.NL)) {
        hidden.push(node);
        putStatement(indentBody, nodes, hidden);
        nodes = [];
        hidden = [];

        continue;
      }

      (node as NonHiddenLexicalNode).hidden = hidden;
      hidden = [];
      nodes.push(node as NonHiddenLexicalNode);
    }

    putStatement(indentBody, nodes, hidden);

    return {
      breakNode,
      ...(indentBody[0]?.body ?? bodyNode(null, [])),
    };
  }

  public nextNode(): Exclude<NodeScanResult, null> {
    for (const nodeScan of [...this.literalScanners, ...nodeScanFunctions]) {
      const node = nodeScan(this);

      if (node) {
        this.index = node.stop + 1;

        return node;
      }
    }

    throw new Error('Not implemented');
  }
}
