import { createSyntacticErrorIssue } from '../issue/issue';
import { ISSUE_MESSAGE } from '../issue/issue-message';
import { Boolean2, String2 } from '../lib/core';
import { scanCharNode } from '../parser/node/char/char-node';
import { scanCloseNode } from '../parser/node/close/close-node';
import { scanCommaNode } from '../parser/node/comma/comma-node';
import { scanGroupNode } from '../parser/node/group/group-node';
import { scanIntegerNode } from '../parser/node/integer/integer-node';
import { JoiningNode, scanJoiningNode } from '../parser/node/joining/joining-node';
import { scanNlNode } from '../parser/node/nl/nl-node';
import { Node } from '../parser/node/node';
import { scanOperatorNode } from '../parser/node/operator/operator-node';
import { scanStringNode } from '../parser/node/string/string-node';
import { scanUnknownNode } from '../parser/node/unknown/unknown-node';
import { scanWhitespaceNode } from '../parser/node/whitespace/whitespace-node';
import { putStatementNode } from '../parser/util/put-statement-node';
import { Source, createSource } from '../source/source';
import { SourcePosition, zeroPosition } from '../source/source-position';
import { scanIdNode } from './node/id/id-node';
import { NodeType } from './node/node-type';
import { ParserConfig } from './parser-config';
import { ParserContext, parserContext } from './parser-context';
import { ParserResult } from './parser-result';
import { is } from './util/is';

type NodeScanFn = (parser: ParserContext) => Node | null;

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

export function parse(text: String2, config?: Partial<ParserConfig>): ParserResult {
  const source = createSource(null, text);

  return parseUntil(source, zeroPosition(), null, config);
}

export function parseUntil(
  source: Source,
  startPosition: SourcePosition,
  breakOnNodeFn: ((node: Node) => Boolean2) | null,
  parserConfig?: Partial<ParserConfig>,
): ParserResult {
  const config: ParserConfig = {
    throwErrorIssue: parserConfig?.throwErrorIssue ?? false,
  };

  const context = parserContext(source, startPosition, config);

  while (context.position.index < context.source.text.length) {
    const node = nextNode(context);

    if (breakOnNodeFn && breakOnNodeFn(node)) {
      context.breakNode = node;

      break;
    }

    if (is(node, NodeType.WHITESPACE)) {
      context.hidden.push(node);

      continue;
    }

    if (is<JoiningNode>(node, NodeType.JOINING)) {
      context.hidden.push(node);
      context.position.line += 1;
      context.position.column = 0;

      continue;
    }

    if (is(node, NodeType.NL)) {
      context.hidden.push(node);
      context.position.line += 1;
      context.position.column = 0;

      if (context.nodes.length > 0) {
        putStatementNode(context);
      }

      context.nodes = [];

      continue;
    }

    if (is(node, NodeType.UNKNOWN)) {
      context.issues.push(createSyntacticErrorIssue(node, ISSUE_MESSAGE.unexpectedNode()));

      continue;
    }

    context.nodes.push(node);
  }

  if (context.nodes.length > 0) {
    putStatementNode(context);
  }

  return {
    ...context,
    context,
  };
}

export function nextNode(context: ParserContext): Node {
  for (const nodeScan of nodeScanFunctions) {
    const node = nodeScan(context);

    if (node) {
      context.position.column = node.range.stop.column + 1;
      context.position.index = node.range.stop.index + 1;

      return node as Node;
    }
  }

  throw new Error(ISSUE_MESSAGE.notImplemented().actual);
}
