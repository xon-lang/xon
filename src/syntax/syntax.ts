import { ISSUE_MESSAGE } from '../issue/issue-message';
import { Boolean2, Nothing, String2 } from '../lib/core';
import { Source, createSource } from '../source/source';
import { SourcePosition, zeroPosition } from '../source/source-position';
import { scanCharNode } from './node/char/char-node';
import { scanCloseNode } from './node/close/close-node';
import { scanCommaNode } from './node/comma/comma-node';
import { scanCommentLineNode } from './node/comment/comment-line-node';
import { scanGroupNode } from './node/group/group-node';
import { scanIdNode } from './node/id/id-node';
import { scanIntegerNode } from './node/integer/integer-node';
import { scanJoiningNode } from './node/joining/joining-node';
import { scanNlNode } from './node/nl/nl-node';
import { $Node, Node } from './node/node';
import { scanOperatorNode } from './node/operator/operator-node';
import { scanStringNode } from './node/string/string-node';
import { unknownNode } from './node/unknown/unknown-node';
import { scanWhitespaceNode } from './node/whitespace/whitespace-node';
import { SyntaxConfig } from './syntax-config';
import { SyntaxContext, syntaxContext } from './syntax-context';
import { SyntaxResult } from './syntax-result';
import { is } from './util/is';
import { putStatementNode } from './util/put-statement-node';

type SyntaxScanFn = (context: SyntaxContext) => Node | Nothing;

const scanFunctions: SyntaxScanFn[] = [
  scanCommentLineNode,
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
];

const HIDDEN_NODES: $Node[] = [$Node.WHITESPACE, $Node.JOINING, $Node.COMMA, $Node.COMMENT_LINE, $Node.COMMENT_BLOCK];

export function parseSyntax(text: String2, config?: Partial<SyntaxConfig>): SyntaxResult {
  const source = createSource(null, text);

  const result = parseSyntaxUntil(source, zeroPosition(), null, config);
  result.issueManager.issues.forEach((x) => result.issueManager.log(x));

  return result;
}

export function parseSyntaxUntil(
  source: Source,
  startPosition: SourcePosition,
  breakOnNodeFn: ((node: Node) => Boolean2) | null,
  syntaxConfig?: Partial<SyntaxConfig>,
): SyntaxResult {
  const config: SyntaxConfig = {
    throwErrorIssue: syntaxConfig?.throwErrorIssue ?? false,
  };

  const context = syntaxContext(source, startPosition, config);

  while (context.position.index < context.source.text.length) {
    const node = nextNode(context);

    if (breakOnNodeFn && breakOnNodeFn(node)) {
      context.breakNode = node;

      break;
    }

    if (HIDDEN_NODES.some((x) => is(node, x))) {
      context.hiddenNodes.push(node);

      continue;
    }

    if (is(node, $Node.NL)) {
      context.hiddenNodes.push(node);
      context.position.line += 1;
      context.position.column = 0;

      if (context.nodes.length > 0) {
        putStatementNode(context);
      }

      context.nodes = [];

      continue;
    }

    if (is(node, $Node.UNKNOWN)) {
      context.unknownNodes.push(node);
      context.issueManager.addError(node, ISSUE_MESSAGE.unexpectedNode());

      continue;
    }

    context.nodes.push(node);
  }

  if (context.nodes.length > 0) {
    putStatementNode(context);
  }

  return {
    ...context,
    syntaxContext: context,
  };
}

function nextNode(context: SyntaxContext): Node {
  let node = scanFunctions.findMap<Node>((scan) => scan(context));

  if (!node) {
    const text = context.source.text[context.position.index];
    const range = context.getRange(1);

    node = unknownNode(range, text);
  }

  context.position.index = node.range.stop.index + 1;
  context.position.column = node.range.stop.column + 1;

  return node;
}

// 1 + --(2)
