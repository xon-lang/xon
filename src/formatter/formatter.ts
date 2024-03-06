import {Boolean2, Nothing, String2, nothing} from '../lib/core';
import {$Node, Node, is} from '../parser/node/node';
import {StatementNode} from '../parser/node/syntax/statement/statement-node';
import {CommentBlockNode} from '../parser/node/token/comment-block/comment-block-node';
import {CommentLineNode} from '../parser/node/token/comment-line/comment-line-node';
import {NlNode} from '../parser/node/token/nl/nl-node';
import {TokenNode} from '../parser/node/token/token-node';
import {WhitespaceNode} from '../parser/node/token/whitespace/whitespace-node';
import {NL} from '../parser/syntax-config';
import {SyntaxContext} from '../parser/syntax-context';
import {SourceRange, cloneRange, rangeFromNodes, rangeFromPosition} from '../source/source-range';

export interface Formatter {
  range: SourceRange;
  text: String2;
}

export enum FormattingType {
  BEFORE = 'BEFORE',
  BETWEEN = 'BETWEEN',
  AFTER = 'AFTER',
}

export function formatBetweenHiddenNodes(context: SyntaxContext, node: Node, keepSingleSpace: Boolean2): Nothing {
  const formatter = getFormatterForHiddenNodesWithSpaceKeeping(
    context,
    node,
    keepSingleSpace,
    FormattingType.BETWEEN,
    false,
    false,
  );

  if (formatter) {
    context.formatters.push(formatter);
  }
}

export function formatStatement(context: SyntaxContext, node: StatementNode): Nothing {
  if (node.hiddenNodes.length === 0) {
    return;
  }

  const ifFirstStatement = context.statements.first() === node;
  const beforeIndentHiddenNodes = node.beforeIndentHiddenNodes;

  if (ifFirstStatement && beforeIndentHiddenNodes.length === 0) {
    return;
  }

  if (beforeIndentHiddenNodes.length > 0) {
    const range = rangeFromNodes(beforeIndentHiddenNodes);
    const nonWhitespaceNodes = beforeIndentHiddenNodes.filter((x) => !is(x, $Node.WHITESPACE));
    const splittedByNl = nonWhitespaceNodes.splitBy((x) => is(x, $Node.NL));

    let text = splittedByNl
      .map((x) => format(context, x.splitter) + x.items.map((z) => format(context, z)).join(' '))
      .join('');

    if (ifFirstStatement) {
      text = text.trimStart();
    }

    const formatter = compareAndCreateFormatter(context, beforeIndentHiddenNodes, range, text);

    if (formatter) {
      context.formatters.push(formatter);
    }
  }

  if (is<WhitespaceNode>(node.indentHiddenNodes.first(), $Node.WHITESPACE)) {
    const range = cloneRange(node.indentHiddenNodes.first().range);
    const text = '  '.repeat(node.indentLevel);
    const formatter = compareAndCreateFormatter(context, node.indentHiddenNodes, range, text);

    if (formatter) {
      context.formatters.push(formatter);
    }
  }

  const afterIntentHiddenNodes = node.indentHiddenNodes.slice(1);

  if (afterIntentHiddenNodes.length > 0) {
    const range = rangeFromNodes(afterIntentHiddenNodes);
    const formatter = getFormatterForHiddenNodes(context, range, afterIntentHiddenNodes, FormattingType.BEFORE);

    if (formatter) {
      context.formatters.push(formatter);
    }
  }
}

export function formatLastContextHiddenNodes(context: SyntaxContext): Formatter | Nothing {
  const {statements, hiddenNodes} = context;

  if (statements.length === 0 && hiddenNodes.length === 0) {
    return nothing;
  }

  if (hiddenNodes.length > 0) {
    const nonWhitespaceNodes = hiddenNodes.filter((x) => !is(x, $Node.WHITESPACE));
    const splittedByNl = nonWhitespaceNodes.splitBy((x) => is(x, $Node.NL));
    const range = rangeFromNodes(hiddenNodes);

    let text = splittedByNl
      .map((x) => format(context, x.splitter) + x.items.map((z) => format(context, z)).join(' '))
      .join('');

    if (statements.length === 0) {
      text = text.trim();
      text = text.length > 0 ? text + NL : '';

      return compareAndCreateFormatter(context, hiddenNodes, range, text);
    }

    return compareAndCreateFormatter(context, hiddenNodes, range, text.trimEnd() + NL);
  }

  const lastStatementChild = context.statements.last().children.last();
  const lastNode = lastStatementChild.hiddenNodes.lastOrNull() ?? lastStatementChild;

  return {
    range: rangeFromPosition(lastNode.range.stop),
    text: NL,
  };
}

export function getFormatterForHiddenNodes(
  context: SyntaxContext,
  range: SourceRange,
  hiddenNodes: TokenNode[],
  formattingType: FormattingType | Nothing,
): Formatter | Nothing {
  const nonWhitespaceNodes = hiddenNodes.filter((x) => !is(x, $Node.WHITESPACE));
  const splittedByNl = nonWhitespaceNodes.splitBy((x) => is(x, $Node.NL));

  let text = splittedByNl
    .map((x) => format(context, x.splitter) + x.items.map((z) => format(context, z)).join(' '))
    .join('');

  if (text.length > 0 && formattingType) {
    if (formattingType === FormattingType.BEFORE) {
      text = `${text} `;
    }

    if (formattingType === FormattingType.BETWEEN) {
      text = ` ${text} `;
    }

    if (formattingType === FormattingType.AFTER && !text.startsWith(NL)) {
      text = ` ${text}`;
    }
  }

  if (isSameContent(context, hiddenNodes, text)) {
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
  isSourceStartHiddenNodes: Boolean2,
  isSourceEndHiddenNodes: Boolean2,
): Formatter | Nothing {
  const {hiddenNodes, range} = node;

  const spaceText = keepSingleSpace ? ' ' : '';

  if (hiddenNodes.length === 0) {
    return compareAndCreateFormatter(context, hiddenNodes, rangeFromPosition(range.stop), spaceText);
  }

  if (hiddenNodes.length === 1 && is<WhitespaceNode>(hiddenNodes[0], $Node.WHITESPACE)) {
    return compareAndCreateFormatter(context, hiddenNodes, rangeFromNodes(hiddenNodes), spaceText);
  }

  return getFormatterForHiddenNodes(
    context,
    hiddenNodes.length > 0 ? rangeFromNodes(hiddenNodes) : rangeFromPosition(node.range.stop),
    hiddenNodes,
    formattingType,
  );
}

function format(context: SyntaxContext, node: TokenNode | Nothing): String2 {
  if (is<NlNode>(node, $Node.NL)) {
    const nlCount = node.text.count((x) => x === NL);
    const text = NL.repeat(Math.min(nlCount, 2));

    return text;
  }

  if (is<CommentLineNode>(node, $Node.COMMENT_LINE)) {
    return node.text.replace(/^\/\/\s*(.*)/, (x, z: String2) => {
      if (z.length === 0) {
        return `//`;
      }

      return `// ${z}`;
    });
  }

  if (is<CommentBlockNode>(node, $Node.COMMENT_BLOCK)) {
    return node.text.replace(/^--- *((\S|\s)*?) *(---)?$/, (x, z: String2) => {
      if (z.length === 0) {
        return `--- ---`;
      }

      let start = '---';
      let end = '---';

      if (!z.startsWith(NL)) {
        start += ' ';
      }

      if (!z.endsWith(NL)) {
        end = ' ' + end;
      }

      return `${start}${z}${end}`;
    });
  }

  return '';
}

function compareAndCreateFormatter(
  context: SyntaxContext,
  nodes: TokenNode[],
  range: SourceRange,
  text: String2,
): Formatter | Nothing {
  if (isSameContent(context, nodes, text)) {
    return nothing;
  }

  return {
    range,
    text,
  };
}

function isSameContent(context: SyntaxContext, nodes: TokenNode[], text: String2): Boolean2 {
  const first = nodes.firstOrNull();
  const last = nodes.lastOrNull();

  if (!first || !last) {
    return text === '';
  }

  const sliced = context.source.text.slice(first.range.start.index, last.range.stop.index);

  return text === sliced;
}
