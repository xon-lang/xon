import {Boolean2, Nothing, nothing} from '../../lib/types';
import {formatRemainingContextHiddenNodes} from '../formatter/formatter';
import {FormatterManager} from '../formatter/formatter-manager';
import {IssueManager} from '../issue/issue-manager';
import {ISSUE_MESSAGE} from '../issue/issue-message';
import {TextPosition, zeroPosition} from '../util/resource/text/text-position';
import {TextRange, cloneRange, rangeFromPosition} from '../util/resource/text/text-range';
import {TextResource} from '../util/resource/text/text-resource';
import {codeLexicalAnalyzer} from './lexical/code-lexical-analyzer';
import {LexicalAnalyzer} from './lexical/lexical-analyzer';
import {DocumentationOpenNode} from './lexical/node/documentation-open/documentation-open-node';
import {NlNode} from './lexical/node/nl/nl-node';
import {OpenNode} from './lexical/node/open/open-node';
import {UnknownNode} from './lexical/node/unknown/unknown-node';
import {WhitespaceNode} from './lexical/node/whitespace/whitespace-node';
import {putStatementNode} from './put-statement-node';
import {SyntaxParserConfig} from './syntax-analyzer-config';
import {SyntaxContext, SyntaxResult, syntaxContext} from './syntax-context';
import {documentationNodeParse} from './syntax/documentation/documentation-node-parse';
import {groupNodeParse} from './syntax/group/group-node-parse';
import {$Node, Node, is, isHiddenNode} from './syntax/node';

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
  const lexerInner = lexer ?? codeLexicalAnalyzer(resource, position);
  const context = syntaxContext(resource, lexerInner, issueManager, formatterManager, config);
  let statementIndent: TextRange = rangeFromPosition(position);

  for (const iterableNode of lexerInner) {
    let node: Node = iterableNode;

    if (is<UnknownNode>(node, $Node.UNKNOWN)) {
      context.issueManager.addError(node.range, ISSUE_MESSAGE.unknownSymbol());
    }

    if (is<OpenNode>(node, $Node.OPEN)) {
      node = groupNodeParse(context, node);
      lexerInner.cursor.position = node.range.stop;
    }

    if (is<DocumentationOpenNode>(node, $Node.DOCUMENTATION_OPEN)) {
      node = documentationNodeParse(context, node);
      lexerInner.cursor.position = node.range.stop;
    }

    if (breakOnNodeFn && breakOnNodeFn(node)) {
      context.breakNode = node;

      break;
    }

    if (context.nodes.length === 0) {
      if (is<WhitespaceNode>(node, $Node.WHITESPACE)) {
      }
    }

    if (isHiddenNode(node)) {
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
