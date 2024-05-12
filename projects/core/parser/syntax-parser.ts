import {formatRemainingContextHiddenNodes} from '../formatter/formatter';
import {FormatterManager} from '../formatter/formatter-manager';
import {IssueManager} from '../issue/issue-manager';
import {Array2, Boolean2, Integer, Nothing} from '../lib/core';
import {TextPosition, zeroPosition} from '../util/resource/text/text-position';
import {TextResource} from '../util/resource/text/text-resource';
import {$Node, Node, is} from './node/node';
import {charNodeParse} from './node/token/char/char-node-parse';
import {closeNodeParse} from './node/token/close/close-node-parse';
import {commaNodeParse} from './node/token/comma/comma-node-parse';
import {commentBlockNodeParse} from './node/token/comment-block/comment-block-node-parse';
import {commentLineNodeParse} from './node/token/comment-line/comment-line-node-parse';
import {idNodeParse} from './node/token/id/id-node-parse';
import {integerNodeParse} from './node/token/integer/integer-node-parse';
import {joiningNodeParse} from './node/token/joining/joining-node-parse';
import {NlNode} from './node/token/nl/nl-node';
import {nlNodeParse} from './node/token/nl/nl-node-parse';
import {openNodeParse} from './node/token/open/open-node-parse';
import {operatorNodeParse} from './node/token/operator/operator-node-parse';
import {stringNodeParse} from './node/token/string/string-node-parse';
import {isHiddenToken} from './node/token/token-node';
import {unknownNodeParse} from './node/token/unknown/unknown-node-parse';
import {whitespaceNodeParse} from './node/token/whitespace/whitespace-node-parse';
import {putStatementNode} from './put-statement-node';
import {SyntaxContext, SyntaxResult, syntaxContext} from './syntax-context';
import {SyntaxParserConfig} from './syntax-parser-config';

export type TokenParseResult = Node | Nothing;
export type TokenParseFn = (context: SyntaxContext, index: Integer) => TokenParseResult;

const parsers: Array2<TokenParseFn> = [
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
  startPosition: TextPosition | Nothing,
  issueManager: IssueManager | Nothing,
  formatterManager: FormatterManager | Nothing,
  breakOnNodeFn: ((node: Node) => Boolean2) | Nothing,
  config: SyntaxParserConfig | Nothing,
): SyntaxResult {
  const context = syntaxContext(resource, startPosition ?? zeroPosition(), issueManager, formatterManager, config);
  let statementIndentColumn = -1;

  while (context.position.index < context.resource.data.length) {
    const node = nextNode(context);

    if (breakOnNodeFn && breakOnNodeFn(node)) {
      context.breakNode = node;

      break;
    }

    if (isHiddenToken(node)) {
      if (is<NlNode>(node, $Node.NL)) {
        if (context.nodes.length > 0) {
          putStatementNode(context, statementIndentColumn);
          context.nodes = [];
        }

        statementIndentColumn = node.range.stop.column;
      }

      context.hiddenNodes.push(node);

      continue;
    }

    if (statementIndentColumn < 0) {
      statementIndentColumn = node.range.start.column;
    }

    node.hiddenNodes = context.hiddenNodes;
    context.hiddenNodes = [];
    context.nodes.push(node);
  }

  if (context.nodes.length > 0) {
    putStatementNode(context, statementIndentColumn);
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
