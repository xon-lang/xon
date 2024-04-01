import {formatLastContextHiddenNodes} from '../formatter/formatter';
import {ISSUE_MESSAGE} from '../issue/issue-message';
import {Array2, Boolean2, Nothing, nothing} from '../lib/core';
import {TextResource} from '../util/resource/text/text-resource';
import {TextResourcePosition, zeroPosition} from '../util/resource/text/text-resource-position';
import {$Node, Node, is} from './node/node';
import {scanGroupNode} from './node/syntax/group/group-node';
import {charTokenParse} from './node/token/char/char-node';
import {closeTokenParse} from './node/token/close/close-node';
import {commentBlockTokenParse} from './node/token/comment-block/comment-block-node';
import {commentLineTokenParse} from './node/token/comment-line/comment-line-node';
import {idTokenParse} from './node/token/id/id-node';
import {integerTokenParse} from './node/token/integer/integer-node';
import {joiningTokenParse} from './node/token/joining/joining-node';
import {NlNode, nlTokenParse} from './node/token/nl/nl-node';
import {operatorTokenParse} from './node/token/operator/operator-node';
import {stringTokenParse} from './node/token/string/string-node';
import {isHiddenToken} from './node/token/token-node';
import {UnknownNode, unknownTokenParse} from './node/token/unknown/unknown-node';
import {whitespaceTokenParse} from './node/token/whitespace/whitespace-node';
import {SyntaxContext, SyntaxResult, syntaxContext} from './syntax-context';
import {putStatementNode} from './util/put-statement-node';

type TokenParseFn = (context: SyntaxContext) => Node | Nothing;

const tokenParsers: Array2<TokenParseFn> = [
  commentBlockTokenParse,
  commentLineTokenParse,
  integerTokenParse,
  stringTokenParse,
  charTokenParse,
  nlTokenParse,
  closeTokenParse,
  joiningTokenParse,
  whitespaceTokenParse,
  operatorTokenParse,
  idTokenParse,
  // todo should we remove scan group from here ???
  scanGroupNode,
  unknownTokenParse,
];

export function syntaxParse(source: TextResource): SyntaxResult {
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
