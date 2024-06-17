import {Array2, Boolean2, Integer, Nothing, nothing} from '../../lib/types';
import {formatRemainingContextHiddenNodes} from '../formatter/formatter';
import {FormatterManager} from '../formatter/formatter-manager';
import {IssueManager} from '../issue/issue-manager';
import {TextPosition, zeroPosition} from '../util/resource/text/text-position';
import {TextRange, cloneRange, rangeFromPosition} from '../util/resource/text/text-range';
import {TextResource} from '../util/resource/text/text-resource';
import {putStatementNode} from './put-statement-node';
import {SyntaxContext, SyntaxResult, syntaxContext} from './syntax-context';
import {SyntaxParserConfig} from './syntax-parser-config';
import {groupNodeParse} from './syntax/group/group-node-parse';
import {$Node, Node, is} from './syntax/node';
import {charNodeParse} from './syntax/token/char/char-node-parse';
import {closeNodeParse} from './syntax/token/close/close-node-parse';
import {commaNodeParse} from './syntax/token/comma/comma-node-parse';
import {commentBlockNodeParse} from './syntax/token/comment-block/comment-block-node-parse';
import {commentLineNodeParse} from './syntax/token/comment-line/comment-line-node-parse';
import {idNodeParse} from './syntax/token/id/id-node-parse';
import {integerNodeParse} from './syntax/token/integer/integer-node-parse';
import {joiningNodeParse} from './syntax/token/joining/joining-node-parse';
import {NlNode} from './syntax/token/nl/nl-node';
import {nlNodeParse} from './syntax/token/nl/nl-node-parse';
import {operatorNodeParse} from './syntax/token/operator/operator-node-parse';
import {stringNodeParse} from './syntax/token/string/string-node-parse';
import {HiddenNode} from './syntax/token/token-node';
import {unknownNodeParse} from './syntax/token/unknown/unknown-node-parse';
import {WhitespaceNode} from './syntax/token/whitespace/whitespace-node';
import {whitespaceNodeParse} from './syntax/token/whitespace/whitespace-node-parse';

export type TokenParseResult = Node | Nothing;
export type TokenParseFn = (context: SyntaxContext, index: Integer) => TokenParseResult;

const parsers: Array2<TokenParseFn> = [
  groupNodeParse,
  closeNodeParse,
  commaNodeParse,

  commentLineNodeParse,
  commentBlockNodeParse,
  whitespaceNodeParse,
  nlNodeParse,
  joiningNodeParse,

  integerNodeParse,
  charNodeParse,
  stringNodeParse,
  operatorNodeParse,
  idNodeParse,
];

export function syntaxParse(
  resource: TextResource,
  startPosition: TextPosition | Nothing,
  issueManager: IssueManager | Nothing,
  formatterManager: FormatterManager | Nothing,
  breakOnNodeFn: ((node: Node) => Boolean2) | Nothing,
  config: SyntaxParserConfig | Nothing,
): SyntaxResult {
  const position = startPosition ?? zeroPosition();
  const context = syntaxContext(resource, position, issueManager, formatterManager, config);
  let statementIndent: TextRange = rangeFromPosition(position);

  while (context.position.index < context.resource.data.length) {
    const node = nextNode(context);

    if (breakOnNodeFn && breakOnNodeFn(node)) {
      context.breakNode = node;

      break;
    }

    if (context.nodes.length === 0) {
      if (is<WhitespaceNode>(node, $Node.WHITESPACE)) {
      }
    }

    if (is<HiddenNode>(node, $Node.HIDDEN)) {
      if (is<NlNode>(node, $Node.NL)) {
        if (context.nodes.length > 0) {
          putStatementNode(context, statementIndent);
          context.nodes = [];
        }
      }

      context.hiddenNodes.push(node);

      continue;
    }

    statementIndent = getStatementIndent(context) ?? statementIndent;

    node.hiddenNodes = context.hiddenNodes;
    context.hiddenNodes = [];
    context.nodes.push(node);
  }

  if (context.nodes.length > 0) {
    putStatementNode(context, statementIndent);
  }

  formatRemainingContextHiddenNodes(context);

  return {
    ...context,
    syntaxContext: context,
  };
}

function nextNode(context: SyntaxContext): Node {
  const node =
    parsers.findMap((parse) => parse(context, context.position.index)) ??
    unknownNodeParse(context, context.position.index);

  context.position = node.range.stop;

  return node;
}

export function getStatementIndent(context: SyntaxContext): TextRange | Nothing {
  if (context.nodes.length !== 0 || context.hiddenNodes.length === 0) {
    return nothing;
  }

  const lastNlIndex = context.hiddenNodes.lastIndex((x) => is<NlNode>(x, $Node.NL));

  if (lastNlIndex >= 0) {
    const whiteSpaceNode = context.hiddenNodes[lastNlIndex + 1];

    if (is<WhitespaceNode>(whiteSpaceNode, $Node.WHITESPACE)) {
      return cloneRange(whiteSpaceNode.range);
    }

    return rangeFromPosition(context.hiddenNodes[lastNlIndex].range.stop);
  }

  if (is<WhitespaceNode>(context.hiddenNodes[0], $Node.WHITESPACE)) {
    return cloneRange(context.hiddenNodes[0].range);
  }

  return nothing;
}