import { createErrorIssue } from '~/issue/issue';
import { issueMessage } from '~/issue/issue-message';
import { Boolean2, Integer, String2 } from '~/lib/core';
import { scanCharNode } from '~/parser/node/char/char-node';
import { scanCloseNode } from '~/parser/node/close/close-node';
import { scanCommaNode } from '~/parser/node/comma/comma-node';
import { scanGroupNode } from '~/parser/node/group/group-node';
import { scanIdNode } from '~/parser/node/id/id-node';
import { scanIntegerNode } from '~/parser/node/integer/integer-node';
import { JoiningNode, scanJoiningNode } from '~/parser/node/joining/joining-node';
import { scanNlNode } from '~/parser/node/nl/nl-node';
import { Node } from '~/parser/node/node';
import { scanOperatorNode } from '~/parser/node/operator/operator-node';
import { scanStringNode } from '~/parser/node/string/string-node';
import { scanUnknownNode } from '~/parser/node/unknown/unknown-node';
import { scanWhitespaceNode } from '~/parser/node/whitespace/whitespace-node';
import { putStatementNode } from '~/parser/util/put-statement-node';
import { Source, createSource } from '~/source/source';
import { NodeType } from './node/node-type';
import { ParserContext, parserContext } from './parser-context';
import { is } from './util/is';

type NodeScanFn = (parser: ParserContext) => Node | null;
type BreakFn = (node: Node) => Boolean2;

const nodeScanFunctions: NodeScanFn[] = [
  scanIntegerNode,
  scanStringNode,
  scanCharNode,
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
  const source = createSource('', text);

  return parseUntil(source, 0, null);
}

export function parseUntil(source: Source, index: Integer, breakFn: BreakFn | null): ParserContext {
  const context = parserContext(source, index);

  while (context.index < context.source.text.length) {
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
      putHiddenNode(context, node);

      continue;
    }

    if (is(node, NodeType.NL)) {
      putHiddenNode(context, node);

      if (context.nodes.length > 0) {
        context.lastStatement = putStatementNode(context);
      }

      context.nodes = [];

      continue;
    }

    if (is(node, NodeType.UNKNOWN)) {
      context.issues.push(createErrorIssue(node, issueMessage.unexpectedNode));

      continue;
    }

    context.nodes.push(node);
  }

  if (context.nodes.length > 0) {
    context.lastStatement = putStatementNode(context);
  }

  return context;
}

export function nextNode(context: ParserContext): Node {
  for (const nodeScan of nodeScanFunctions) {
    const node = nodeScan(context);

    if (!node) {
      continue;
    }

    // todo make it easy
    // eslint-disable-next-line no-restricted-syntax
    if ('text' in node) {
      context.column += node.range.stop.column + 1;
    }

    context.index = node.range.stop.index + 1;

    return node as Node;
  }

  throw new Error('Not implemented');
}

function putHiddenNode(context: ParserContext, node: Node): void {
  context.hidden.push(node);
  context.line += 1;
  context.column = 0;
}
