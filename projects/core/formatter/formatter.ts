import {Array2, Boolean2, Nothing, String2, nothing} from '../lib/core';
import {$Node, Node, is} from '../parser/node/node';
import {StatementNode} from '../parser/node/statement/statement-node';
import {NlNode} from '../parser/node/token/nl/nl-node';
import {TokenNode} from '../parser/node/token/token-node';
import {WhitespaceNode} from '../parser/node/token/whitespace/whitespace-node';
import {NL} from '../parser/parser-config';
import {SyntaxContext} from '../parser/syntax-context';
import {TextRange, cloneRange, rangeFromNodes, rangeFromPosition} from '../util/resource/text/text-range';
import {TextResource} from '../util/resource/text/text-resource';

export interface Formatter {
  range: TextRange;
  text: String2;
}

export function formatChildNode(context: SyntaxContext, node: Node, keepSingleSpace: Boolean2): Nothing {
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
    return nothing;
  }

  context.formatterManager.addFormatter({
    range: rangeFromNodes(node.hiddenNodes),
    text,
  });
}

export function formatStatementNode(context: SyntaxContext, statement: StatementNode): Nothing {
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
  const nonWhitespaceNodes = afterIndentHiddenNodes.filter((x) => !is(x, $Node.WHITESPACE));
  const text =
    indentText + nonWhitespaceNodes.map((x) => x.text).join(' ') + (nonWhitespaceNodes.length > 0 ? ' ' : '');

  if (isSameContent(context.resource, afterIndentHiddenNodes, text)) {
    return nothing;
  }

  context.formatterManager.addFormatter({
    range: rangeFromNodes(afterIndentHiddenNodes),
    text,
  });
}

export function formatRemainingContextHiddenNodes(context: SyntaxContext): Nothing {
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
    .filter((x) => !is(x, $Node.WHITESPACE))
    .splitBy<NlNode>((x): x is NlNode => is<NlNode>(x, $Node.NL));

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
