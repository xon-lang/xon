import { Boolean2, Integer, String2 } from '~/lib/core';
import { scanCloseNode } from '~/parser/node/close/close-node';
import { scanCommaNode } from '~/parser/node/comma/comma-node';
import { scanGroupNode } from '~/parser/node/group/group-node';
import { scanIdNode } from '~/parser/node/id/id-node';
import { scanIntegerNode } from '~/parser/node/integer/integer-node';
import { JoiningNode, scanJoiningNode } from '~/parser/node/joining/joining-node';
import { scanNlNode } from '~/parser/node/nl/nl-node';
import { Node } from '~/parser/node/node';
import { textPosition, textRange } from '~/parser/node/node-position';
import { scanOperatorNode } from '~/parser/node/operator/operator-node';
import { scanStringNode } from '~/parser/node/string/string-node';
import { scanUnknownNode } from '~/parser/node/unknown/unknown-node';
import { scanWhitespaceNode } from '~/parser/node/whitespace/whitespace-node';
import { putStatementNode } from '~/parser/util/put-body-node';
import { NodeType } from './node/node-type';
import { TokenNode } from './node/token-node';
import { ParserContext, parserContext } from './parser-context';
import { is } from './util/is';

// todo remove partial if possible
type NodeScanFn = (parser: ParserContext) => Partial<TokenNode> | null;
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

export function parse(text: String2): ParserContext {
  return parseUntil(text, 0, null);
}

export function parseUntil(text: String2, index: Integer, breakFn: BreakFn | null): ParserContext {
  const context = parserContext(text, index);

  while (context.index < context.text.length) {
    const node = nextNode(context);

    if (breakFn && breakFn(node)) {
      context.breakNode = node;

      break;
    }

    if (is(node, NodeType.WHITESPACE)) {
      context.hidden.push(node);

      continue;
    }

    if (is<JoiningNode>(node, NodeType.JOINING)) {
      context.hidden.push(node);
      context.line += 1;
      context.column = 0;

      continue;
    }

    if (is(node, NodeType.NL)) {
      context.hidden.push(node);
      context.line += 1;
      context.column = 0;

      context.lastStatementNode = putStatementNode(context);
      context.lastStatementNodes = [];

      continue;
    }

    context.lastStatementNodes.push(node);
  }

  context.lastStatementNode = putStatementNode(context);

  return context;
}

export function nextNode(context: ParserContext): Node {
  for (const nodeScan of nodeScanFunctions) {
    const node = nodeScan(context);

    if (node) {
      setNodeRange(node, context);

      if (node.range) {
        context.index = node.range.stop.index + 1;

        return node as Node;
      }
    }
  }

  throw new Error('Not implemented');
}

export function setNodeRange(node: Partial<TokenNode>, context: ParserContext): void {
  if (node.text) {
    const start = textPosition(context.index, context.line, context.column);

    const stopIndex = context.index + node.text.length - 1;
    const stopColumn = context.column + node.text.length - 1;
    const stop = textPosition(stopIndex, context.line, stopColumn);

    node.range = textRange(start, stop);
    context.column += stopColumn + 1;
  }
}
