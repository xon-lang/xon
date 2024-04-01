import {Array2, Boolean2, Nothing, String2, nothing} from '../lib/core';
import {$Node, Node, is} from '../parser/node/node';
import {StatementNode} from '../parser/node/syntax/statement/statement-node';
import {CommentBlockNode} from '../parser/node/token/comment-block/comment-block-node';
import {CommentLineNode} from '../parser/node/token/comment-line/comment-line-node';
import {NlNode} from '../parser/node/token/nl/nl-node';
import {TokenNode} from '../parser/node/token/token-node';
import {WhitespaceNode} from '../parser/node/token/whitespace/whitespace-node';
import {NL} from '../parser/parser-config';
import {SyntaxContext} from '../parser/syntax-context';
import {
  TextResourceRange,
  cloneRange,
  rangeFromNodes,
  rangeFromPosition,
} from '../util/resource/text/text-resource-range';

export interface Formatter {
  range: TextResourceRange;
  text: String2;
}

export enum FormattingType {
  BEFORE = 'BEFORE',
  BETWEEN = 'BETWEEN',
  AFTER = 'AFTER',
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

export function formatStatement(context: SyntaxContext, node: StatementNode): Nothing {
  if (node.hiddenNodes?.length === 0) {
    return;
  }

  const ifFirstStatement = context.statements.first() === node;
  const beforeIndentHiddenNodes = node.beforeIndentHiddenNodes;

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
      context.formatterManager.addFormatter(formatter);
    }
  }

  const firstIndentHiddenNode = node.indentHiddenNodes.first();

  if (is<WhitespaceNode>(firstIndentHiddenNode, $Node.WHITESPACE)) {
    const range = cloneRange(firstIndentHiddenNode.range);
    const text = '  '.repeat(node.indentLevel);
    const formatter = compareAndCreateFormatter(context, node.indentHiddenNodes, range, text);

    if (formatter) {
      context.formatterManager.addFormatter(formatter);
    }
  }

  const indentHiddenNodes = node.indentHiddenNodes.slice(1);

  if (indentHiddenNodes.length > 0) {
    const range = rangeFromNodes(indentHiddenNodes);
    const formatter = getFormatterForHiddenNodes(context, range, indentHiddenNodes, FormattingType.BEFORE);

    if (formatter) {
      context.formatterManager.addFormatter(formatter);
    }
  }

  const childrenWithoutLast = node.children.slice(0, -1);

  for (const child of childrenWithoutLast) {
    formatBetweenHiddenNodes(context, child, true);
  }

  const lastStatementNode = node.children.last();
  if (lastStatementNode?.hiddenNodes && lastStatementNode.hiddenNodes.length > 0) {
    const range = rangeFromNodes(lastStatementNode.hiddenNodes);
    const formatter = getFormatterForHiddenNodes(context, range, lastStatementNode.hiddenNodes, FormattingType.AFTER);

    if (formatter) {
      context.formatterManager.addFormatter(formatter);
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

  const lastStatementNode = context.nodes.last();
  const lastNode = lastStatementNode?.hiddenNodes?.last() ?? lastStatementNode;

  if (!lastNode) {
    return nothing;
  }

  return {
    range: rangeFromPosition(lastNode.range.stop),
    text: NL,
  };
}

export function getFormatterForHiddenNodes(
  context: SyntaxContext,
  range: TextResourceRange,
  hiddenNodes: Array2<TokenNode>,
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
): Formatter | Nothing {
  const hiddenNodes = node.hiddenNodes ?? [];
  const spaceText = keepSingleSpace ? ' ' : '';

  if (hiddenNodes.length === 0) {
    return compareAndCreateFormatter(context, hiddenNodes, rangeFromPosition(node.range.stop), spaceText);
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
    return node.text;
    // todo should we format comments?
    // return node.text.replace(/^\/\/\s*(.*)/, (x, z: String2) => {
    //   if (z.length === 0) {
    //     return `//`;
    //   }

    //   return `// ${z}`;
    // });
  }

  if (is<CommentBlockNode>(node, $Node.COMMENT_BLOCK)) {
    return node.text;
    // todo should we format comments?
    // return node.text.replace(/^--- *((\S|\s)*?) *(---)?$/, (x, z: String2) => {
    //   if (z.length === 0) {
    //     return `--- ---`;
    //   }

    //   let start = '---';
    //   let end = '---';

    //   if (!z.startsWith(NL)) {
    //     start += ' ';
    //   }

    //   if (!z.endsWith(NL)) {
    //     end = ' ' + end;
    //   }

    //   return `${start}${z}${end}`;
    // });
  }

  return '';
}

function compareAndCreateFormatter(
  context: SyntaxContext,
  nodes: Array2<TokenNode>,
  range: TextResourceRange,
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

function isSameContent(context: SyntaxContext, nodes: Array2<TokenNode>, text: String2): Boolean2 {
  const first = nodes.first();
  const last = nodes.last();

  if (!first || !last) {
    return text === '';
  }

  const sliced = context.resource.data.slice(first.range.start.index, last.range.stop.index);

  return text === sliced;
}
