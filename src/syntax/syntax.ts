import { ISSUE_MESSAGE } from '../issue/issue-message';
import { Boolean2, Nothing, String2, nothing } from '../lib/core';
import { Source, createSource } from '../source/source';
import { SourcePosition, zeroPosition } from '../source/source-position';
import { scanCharNode } from './node/char/char-node';
import { scanCloseNode } from './node/close/close-node';
import { scanCommentLineNode } from './node/comment/comment-line-node';
import { scanGroupNode } from './node/group/group-node';
import { scanIdNode } from './node/id/id-node';
import { scanIntegerNode } from './node/integer/integer-node';
import { scanJoiningNode } from './node/joining/joining-node';
import { NlNode, scanNlNode } from './node/nl/nl-node';
import { $Node, Node } from './node/node';
import { scanOperatorNode } from './node/operator/operator-node';
import { scanStringNode } from './node/string/string-node';
import { unknownNode } from './node/unknown/unknown-node';
import { scanWhitespaceNode } from './node/whitespace/whitespace-node';
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
  scanJoiningNode,
  scanWhitespaceNode,
  scanOperatorNode,
  scanIdNode,
];

const HIDDEN_NODES: $Node[] = [$Node.WHITESPACE, $Node.JOINING, $Node.COMMENT_LINE, $Node.COMMENT_BLOCK];

export function parseSyntax(text: String2): SyntaxResult {
  const source = createSource(null, text);
  const context = syntaxContext(source, zeroPosition());

  while (context.position.index < context.source.text.length) {
    const node = nextNode(context);

    if (!node) {
      continue;
    }

    context.nodes.push(node);
  }

  if (context.nodes.length > 0) {
    putStatementNode(context);
  }

  context.issueManager.issues.forEach((x) => context.issueManager.log(x));

  return {
    ...context,
    syntaxContext: context,
  };
}

export function parseSyntaxUntil(
  source: Source,
  startPosition: SourcePosition,
  breakOnNodeFn: ((node: Node) => Boolean2) | null,
): SyntaxResult {
  const context = syntaxContext(source, startPosition);

  while (context.position.index < context.source.text.length) {
    const node = nextNode(context);

    if (!node) {
      continue;
    }

    if (breakOnNodeFn && breakOnNodeFn(node)) {
      context.breakNode = node;

      break;
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

function nextNode(context: SyntaxContext): Node | Nothing {
  const node = scanFunctions.findMap((scan) => scan(context));

  if (node) {
    context.position.index = node.range.stop.index + 1;

    if (is<NlNode>(node, $Node.NL)) {
      context.hiddenNodes.push(node);
      context.position.line += 1;
      context.position.column = 0;

      if (context.nodes.length > 0) {
        putStatementNode(context);
      }

      context.nodes = [];

      return nothing;
    }

    context.position.column = node.range.stop.column + 1;

    if (HIDDEN_NODES.some((x) => is(node, x))) {
      context.hiddenNodes.push(node);

      return nothing;
    }

    return node;
  }

  const text = context.source.text[context.position.index];
  const range = context.getRange(1);
  const unknown = unknownNode(range, text);

  context.position.index = unknown.range.stop.index + 1;
  context.position.column = unknown.range.stop.column + 1;

  context.unknownNodes.push(unknown);
  context.issueManager.addError(unknown, ISSUE_MESSAGE.unexpectedNode());

  return nothing;
}
