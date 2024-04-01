import {formatLastContextHiddenNodes} from '../formatter/formatter';
import {ISSUE_MESSAGE} from '../issue/issue-message';
import {Array2, Boolean2, Nothing, nothing} from '../lib/core';
import {TextResource} from '../util/resource/text/text-resource';
import {TextResourcePosition, zeroPosition} from '../util/resource/text/text-resource-position';
import {$Node, Node, is} from './node/node';
import {scanGroupNode} from './node/syntax/group/group-node';
import {charNodeParse} from './node/token/char/char-node';
import {closeNodeParse} from './node/token/close/close-node';
import {commentBlockNodeParse} from './node/token/comment-block/comment-block-node';
import {commentLineNodeParse} from './node/token/comment-line/comment-line-node';
import {idNodeParse} from './node/token/id/id-node';
import {integerNodeParse} from './node/token/integer/integer-node';
import {joiningNodeParse} from './node/token/joining/joining-node';
import {NlNode, nlNodeParse} from './node/token/nl/nl-node';
import {operatorNodeParse} from './node/token/operator/operator-node';
import {stringNodeParse} from './node/token/string/string-node';
import {isHiddenToken} from './node/token/token-node';
import {UnknownNode, unknownNodeParse} from './node/token/unknown/unknown-node';
import {whitespaceNodeParse} from './node/token/whitespace/whitespace-node';
import {SyntaxContext, SyntaxResult, syntaxContext} from './syntax-context';
import {putStatementNode} from './util/put-statement-node';

type TokenParseFn = (context: SyntaxContext) => Node | Nothing;

const tokenParsers: Array2<TokenParseFn> = [
  commentBlockNodeParse,
  commentLineNodeParse,
  integerNodeParse,
  stringNodeParse,
  charNodeParse,
  nlNodeParse,
  closeNodeParse,
  joiningNodeParse,
  whitespaceNodeParse,
  operatorNodeParse,
  idNodeParse,
  // todo should we remove scan group from here ???
  scanGroupNode,
  unknownNodeParse,
];

export function parseSyntax(source: TextResource): SyntaxResult {
  const result = parseSyntaxUntil(source, zeroPosition(), nothing);

  return result;
}

export function parseSyntaxUntil(
  resource: TextResource,
  startPosition: TextResourcePosition,
  breakOnNodeFn: ((node: Node) => Boolean2) | Nothing,
): SyntaxResult {
  const context = syntaxContext(resource, startPosition);

  while (context.position.index < context.resource.data.length) {
    const node = nextNode(context);

    if (!node) {
      continue;
    }

    if (breakOnNodeFn && breakOnNodeFn(node)) {
      context.breakNode = node;

      break;
    }

    const lastNode = context.nodes.last();

    if (is<UnknownNode>(node, $Node.UNKNOWN)) {
      if (is<UnknownNode>(lastNode, $Node.UNKNOWN) && lastNode.hiddenNodes.length === 0) {
        lastNode.range.stop = node.range.stop;
        lastNode.text += node.text;

        continue;
      }

      context.issueManager.addError(node.range, ISSUE_MESSAGE.unknownTokens());
    }

    if (is<NlNode>(node, $Node.NL) && context.nodes.length > 0) {
      putStatementNode(context);

      context.hiddenNodes.push(node);
      context.nodes = [];

      continue;
    }

    if (isHiddenToken(node)) {
      const hiddenNodes = lastNode?.hiddenNodes ?? context.hiddenNodes;
      hiddenNodes.push(node);

      continue;
    }

    context.nodes.push(node);
  }

  if (context.nodes.length > 0) {
    putStatementNode(context);
  }

  const formatter = formatLastContextHiddenNodes(context);

  if (formatter) {
    context.formatterManager.addFormatter(formatter);
  }

  return {
    ...context,
    syntaxContext: context,
  };
}

function nextNode(context: SyntaxContext): Node {
  const node = tokenParsers.findMap((parse) => parse(context));

  if (node) {
    context.position.index = node.range.stop.index;
    context.position.line = node.range.stop.line;
    context.position.column = node.range.stop.column;

    return node;
  }

  throw new Error('Unexpected Node');
}
