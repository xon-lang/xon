import {Array2, Boolean2, Nothing, String2} from '../../lib/types';
import {NL} from '../analyzer/lexical/lexical-config';
import {SyntaxContext} from '../analyzer/syntax-context';
import {$Node, Node, is} from '../analyzer/syntax/node';
import {StatementNode} from '../analyzer/syntax/statement/statement-node';
import {NlNode} from '../analyzer/syntax/token/nl/nl-node';
import {TokenNode} from '../analyzer/syntax/token/token-node';
import {WhitespaceNode} from '../analyzer/syntax/token/whitespace/whitespace-node';
import {TextRange, cloneRange, rangeFromNodes, rangeFromPosition} from '../util/resource/text/text-range';
import {TextResource} from '../util/resource/text/text-resource';

export interface Formatter {
  range: TextRange;
  text: String2;
}

export function formatChildNode(context: SyntaxContext, node: Node, keepSingleSpace: Boolean2): void {
  if (!node.hiddenNodes || node.hiddenNodes.length === 0) {
    if (keepSingleSpace) {
      context.formatterManager.addFormatter({
        range: rangeFromPosition(node.range.start),
        text: ' ',
      });
    }

    return;
  }

  if (node.hiddenNodes.length === 1 && is<WhitespaceNode>(node.hiddenNodes[0], $Node.WHITESPACE)) {
    const whitespace = node.hiddenNodes[0];

    if (!keepSingleSpace) {
      context.formatterManager.addFormatter({
        range: cloneRange(whitespace.range),
        text: '',
      });

      return;
    }

    if (whitespace.text === ' ') {
      return;
    }

    context.formatterManager.addFormatter({
      range: cloneRange(whitespace.range),
      text: ' ',
    });

    return;
  }

  const text = formatHiddenNodes(context, node.hiddenNodes, true);

  if (isSameContent(context.resource, node.hiddenNodes, text)) {
    return;
  }

  context.formatterManager.addFormatter({
    range: rangeFromNodes(node.hiddenNodes),
    text,
  });
}

export function formatStatementNode(context: SyntaxContext, statement: StatementNode): void {
  if (!statement.hiddenNodes || statement.hiddenNodes.length === 0) {
    return;
  }

  const isFirstStatement = context.statements.first() === statement;
  const lastNlIndex = statement.hiddenNodes.lastIndex((x) => is<NlNode>(x, $Node.NL));

  if (lastNlIndex >= 0) {
    const beforeNlHiddenNodes = statement.hiddenNodes.slice(0, lastNlIndex + 1);
    let text = formatHiddenNodes(context, beforeNlHiddenNodes, false);

    if (text.length > 0) {
      if (isFirstStatement) {
        text = text.trimStart();
      } else if (text[0] !== NL) {
        text = ' ' + text;
      }
    }

    if (!isSameContent(context.resource, beforeNlHiddenNodes, text)) {
      context.formatterManager.addFormatter({
        range: rangeFromNodes(beforeNlHiddenNodes),
        text: text,
      });
    }
  }

  const indentText = ' '.repeat(context.config.formatting.indentSpaceLength * statement.indentLevel);
  const afterIndentHiddenNodes = statement.hiddenNodes.slice(lastNlIndex + 1);
  const nonWhitespaceNodes = afterIndentHiddenNodes.filter((x) => !is<WhitespaceNode>(x, $Node.WHITESPACE));
  const text =
    indentText + nonWhitespaceNodes.map((x) => x.text).join(' ') + (nonWhitespaceNodes.length > 0 ? ' ' : '');

  if (isSameContent(context.resource, afterIndentHiddenNodes, text)) {
    return;
  }

  context.formatterManager.addFormatter({
    range: rangeFromNodes(afterIndentHiddenNodes),
    text,
  });
}

export function formatRemainingContextHiddenNodes(context: SyntaxContext): void {
  const {statements, hiddenNodes} = context;

  if (hiddenNodes.length === 0) {
    if (!context.lastStatement || !context.config.formatting.insertFinalNewline) {
      return;
    }

    context.formatterManager.addFormatter({
      range: rangeFromPosition(context.lastStatement.range.stop),
      text: NL,
    });

    return;
  }

  let text = formatHiddenNodes(context, hiddenNodes, false).trimEnd();

  if (statements.length === 0) {
    text = text.trimStart();
  }

  if (statements.length > 0 || text.length > 0) {
    if (context.config.formatting.insertFinalNewline) {
      text += NL;
    }

    if (text[0] !== NL) {
      text = ' ' + text;
    }
  }

  if (isSameContent(context.resource, hiddenNodes, text)) {
    return;
  }

  context.formatterManager.addFormatter({
    range: rangeFromNodes(hiddenNodes),
    text,
  });
}

export function formatHiddenNodes(
  context: SyntaxContext,
  hiddenNodes: Array2<TokenNode>,
  isNoFirstChildNode: Boolean2,
): String2 {
  const splittedByNl = hiddenNodes
    .filter((x) => !is<WhitespaceNode>(x, $Node.WHITESPACE))
    .splitBy<NlNode>((x) => is<NlNode>(x, $Node.NL));

  const text = splittedByNl
    .map((x) => formatNlNode(context, x.splitter) + x.items.map((z) => z.text).join(' '))
    .join('');

  if (text.length > 0 && isNoFirstChildNode) {
    return ` ${text} `;
  }

  return text;
}

function formatNlNode(context: SyntaxContext, node: NlNode | Nothing): String2 {
  if (!node) {
    return '';
  }

  const nlCount = node.range.stop.line - node.range.start.line;

  return NL.repeat(Math.min(nlCount, context.config.formatting.maxNewLines));
}

function isSameContent(resource: TextResource, hiddenNodes: Array2<TokenNode>, text: String2): Boolean2 {
  if (hiddenNodes.length === 0) {
    return text.length === 0;
  }

  const startIndex = hiddenNodes.first()!.range.start.index;
  const stopIndex = hiddenNodes.last()!.range.stop.index;

  return text === resource.data.slice(startIndex, stopIndex);
}
