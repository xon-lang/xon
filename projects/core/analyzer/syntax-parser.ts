import {Array2, Boolean2, Nothing, nothing} from '../../lib/types';
import {formatRemainingContextHiddenNodes} from '../formatter/formatter';
import {FormatterManager} from '../formatter/formatter-manager';
import {IssueManager} from '../issue/issue-manager';
import {ISSUE_MESSAGE} from '../issue/issue-message';
import {TextPosition, zeroPosition} from '../util/resource/text/text-position';
import {TextRange, cloneRange, rangeFromPosition} from '../util/resource/text/text-range';
import {TextResource} from '../util/resource/text/text-resource';
import {TextResourcePosition} from '../util/resource/text/text-resource-position';
import {LexicalAnalyzer, createLexicalAnalyzer} from './lexical/lexical-analyzer';
import {charNodeParse} from './lexical/node/char/char-node-parse';
import {closeNodeParse} from './lexical/node/close/close-node-parse';
import {commaNodeParse} from './lexical/node/comma/comma-node-parse';
import {commentBlockNodeParse} from './lexical/node/comment-block/comment-block-node-parse';
import {commentLineNodeParse} from './lexical/node/comment-line/comment-line-node-parse';
import {idNodeParse} from './lexical/node/id/id-node-parse';
import {integerNodeParse} from './lexical/node/integer/integer-node-parse';
import {joiningNodeParse} from './lexical/node/joining/joining-node-parse';
import {NlNode} from './lexical/node/nl/nl-node';
import {nlNodeParse} from './lexical/node/nl/nl-node-parse';
import {OpenNode} from './lexical/node/open/open-node';
import {openNodeParse} from './lexical/node/open/open-node-parse';
import {operatorNodeParse} from './lexical/node/operator/operator-node-parse';
import {stringNodeParse} from './lexical/node/string/string-node-parse';
import {HiddenNode, TokenNode} from './lexical/node/token-node';
import {UnknownNode} from './lexical/node/unknown/unknown-node';
import {WhitespaceNode} from './lexical/node/whitespace/whitespace-node';
import {whitespaceNodeParse} from './lexical/node/whitespace/whitespace-node-parse';
import {putStatementNode} from './put-statement-node';
import {SyntaxContext, SyntaxResult, syntaxContext} from './syntax-context';
import {SyntaxParserConfig} from './syntax-parser-config';
import {groupNodeParse} from './syntax/group/group-node-parse';
import {$Node, Node, is} from './syntax/node';

export type TokenParseResult = TokenNode | Nothing;
export type TokenParseFn = (cursor: TextResourcePosition) => TokenParseResult;

const tokenParsers: Array2<TokenParseFn> = [
  openNodeParse,
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
  startPosition?: TextPosition | Nothing,
  issueManager?: IssueManager | Nothing,
  formatterManager?: FormatterManager | Nothing,
  breakOnNodeFn?: ((node: Node) => Boolean2) | Nothing,
  config?: SyntaxParserConfig | Nothing,
  lexer?: LexicalAnalyzer | Nothing,
): SyntaxResult {
  const position = startPosition ?? zeroPosition();
  const lexerInner = lexer ?? createLexicalAnalyzer(tokenParsers, resource, position);
  const context = syntaxContext(resource, lexerInner, issueManager, formatterManager, config);
  let statementIndent: TextRange = rangeFromPosition(position);

  while (lexerInner.cursor.position.index < context.resource.data.length) {
    let node: Node = lexerInner.nextNode();

    if (is<UnknownNode>(node, $Node.UNKNOWN)) {
      context.issueManager.addError(node.range, ISSUE_MESSAGE.unknownSymbol());
    }

    if (is<OpenNode>(node, $Node.OPEN)) {
      node = groupNodeParse(context, node);
    }

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
