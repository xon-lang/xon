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

export enum FormattingType {
  BEFORE = 'BEFORE',
  BETWEEN = 'BETWEEN',
  AFTER = 'AFTER',
}

export function formatBeforeHiddenNodes(context: SyntaxContext, node: Node, keepSingleSpace: Boolean2): Nothing {
  const formatter = getFormatterForHiddenNodesWithSpaceKeeping(context, node, keepSingleSpace, FormattingType.BEFORE);

  if (formatter) {
    context.formatterManager.addFormatter(formatter);
  }
}

export function formatBetweenHiddenNodes(context: SyntaxContext, node: Node, keepSingleSpace: Boolean2): Nothing {
  const formatter = getFormatterForHiddenNodesWithSpaceKeeping(context, node, keepSingleSpace, FormattingType.BETWEEN);

  if (formatter) {
    context.formatterManager.addFormatter(formatter);
  }
}

export function formatAfterHiddenNodes(context: SyntaxContext, node: Node, keepSingleSpace: Boolean2): Nothing {
  const formatter = getFormatterForHiddenNodesWithSpaceKeeping(context, node, keepSingleSpace, FormattingType.AFTER);

  if (formatter) {
    context.formatterManager.addFormatter(formatter);
  }
}

export function formatStatement(context: SyntaxContext, statement: StatementNode): Nothing {
  if (!statement.hiddenNodes || statement.hiddenNodes.length === 0) {
    return;
  }

  const indentNlIndex = statement.hiddenNodes.lastIndex((x) => is<NlNode>(x, $Node.NL));

  if (indentNlIndex < 0) {
    const indentText = '  '.repeat(statement.indentLevel);
    const nonWhitespaceNodes = statement.hiddenNodes.filter((x) => !is(x, $Node.WHITESPACE));
    const text = indentText + nonWhitespaceNodes.map((x) => x.text).join(' ');

    if (isSameContent(context.resource, statement.hiddenNodes, text)) {
      return nothing;
    }

    context.formatterManager.addFormatter({
      range: rangeFromNodes(statement.hiddenNodes),
      text,
    });
  }

  const beforeIndentHiddenNodes = statement.hiddenNodes.slice(0, indentNlIndex + 1);
  const afterIndentHiddenNodes = statement.hiddenNodes.slice(indentNlIndex + 1);
  const ifFirstStatement = context.statements.first() === statement;
  const formattedBefore = formatHiddenNodes(beforeIndentHiddenNodes, nothing, ifFirstStatement ? 0 : 2);

  const indentText = '  '.repeat(statement.indentLevel);
  const nonWhitespaceNodes = afterIndentHiddenNodes.filter((x) => !is(x, $Node.WHITESPACE));
  const text = formattedBefore + indentText + nonWhitespaceNodes.map((x) => x.text).join(' ');

  if (isSameContent(context.resource, statement.hiddenNodes, text)) {
    return nothing;
  }

  context.formatterManager.addFormatter({
    range: rangeFromNodes(statement.hiddenNodes),
    text,
  });
}

export function formatRemainingContextHiddenNodes(context: SyntaxContext): Formatter | Nothing {
  const {statements, hiddenNodes} = context;

  if (hiddenNodes.length === 0) {
    if (!context.lastStatement) {
      return nothing;
    }

    return {
      range: rangeFromPosition(context.lastStatement.range.stop),
      text: NL,
    };
  }

  const formattedHiddenNodesText = formatHiddenNodes(hiddenNodes, nothing).trimEnd();

  const text =
    statements.length > 0 || formattedHiddenNodesText.length > 0
      ? formattedHiddenNodesText + NL
      : formattedHiddenNodesText;

  if (isSameContent(context.resource, hiddenNodes, text)) {
    return nothing;
  }

  return {
    range: rangeFromNodes(hiddenNodes),
    text,
  };
}

function getFormatterForHiddenNodesWithSpaceKeeping(
  context: SyntaxContext,
  node: Node,
  keepSingleSpace: Boolean2,
  formattingType: FormattingType,
): Formatter | Nothing {
  if (!node.hiddenNodes || node.hiddenNodes.length === 0) {
    if (keepSingleSpace) {
      return {
        range: rangeFromPosition(node.range.start),
        text: ' ',
      };
    }

    return nothing;
  }

  if (node.hiddenNodes.length === 1 && is<WhitespaceNode>(node.hiddenNodes[0], $Node.WHITESPACE)) {
    const whitespace = node.hiddenNodes[0];

    if (!keepSingleSpace) {
      return {
        range: cloneRange(whitespace.range),
        text: '',
      };
    }

    if (whitespace.text === ' ') {
      return nothing;
    }

    return {
      range: cloneRange(whitespace.range),
      text: ' ',
    };
  }

  return getFormatterForHiddenNodes(context.resource, node.hiddenNodes, formattingType);
}

export function getFormatterForHiddenNodes(
  resource: TextResource,
  hiddenNodes: Array2<TokenNode>,
  formattingType: FormattingType,
): Formatter | Nothing {
  const text = formatHiddenNodes(hiddenNodes, formattingType);

  if (isSameContent(resource, hiddenNodes, text)) {
    return nothing;
  }

  return {
    range: rangeFromNodes(hiddenNodes),
    text,
  };
}

export function formatHiddenNodes(
  hiddenNodes: Array2<TokenNode>,
  formattingType: FormattingType | Nothing,
  maxNlCount = 2,
): String2 {
  const splittedByNl = hiddenNodes
    .filter((x) => !is(x, $Node.WHITESPACE))
    .splitBy<NlNode>((x): x is NlNode => is<NlNode>(x, $Node.NL));

  const text = splittedByNl
    .map((x) => formatNlNode(x.splitter, maxNlCount) + x.items.map((z) => z.text).join(' '))
    .join('');

  if (text.length > 0 && formattingType) {
    if (formattingType === FormattingType.BEFORE) {
      return `${text} `;
    }
    if (formattingType === FormattingType.BETWEEN) {
      return ` ${text} `;
    }
    // todo remove branch with FormattingType.AFTER
    if (formattingType === FormattingType.AFTER && !text.startsWith(NL)) {
      return ` ${text}`;
    }
  }

  return text;
}

function formatNlNode(node: NlNode | Nothing, maxNlCount): String2 {
  if (!node) {
    return '';
  }

  // todo replace with node.range.stop.line - node.range.start.line
  const nlCount = node.text.count((x) => x === NL);
  const text = NL.repeat(Math.min(nlCount, maxNlCount));

  return text;
}

function isSameContent(resource: TextResource, hiddenNodes: Array2<TokenNode>, text: String2): Boolean2 {
  const first = hiddenNodes.first();
  const last = hiddenNodes.last();

  if (!first || !last) {
    return text === '';
  }

  const sliced = resource.data.slice(first.range.start.index, last.range.stop.index);

  return text === sliced;
}
