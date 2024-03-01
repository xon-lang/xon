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
import {SourceRange, rangeFromNodes, rangeFromPosition} from '../source/source-range';

export interface Formatter {
  range: SourceRange;
  text: String2;
}

export enum FormattingType {
  BEFORE,
  BETWEEN,
  AFTER,
}

export function formatNodes(context: SyntaxContext, nodes: Node[]): Nothing {
  const betweenChildren = nodes.slice(0, -1);
  betweenChildren.forEach((x) => formatNode(context, x, true, FormattingType.BETWEEN));

  formatNode(context, nodes.last(), false, FormattingType.AFTER);
}

export function formatNode(
  context: SyntaxContext,
  node: Node,
  keepSingleSpace: Boolean2,
  formattingType: FormattingType,
): Nothing {
  const formatter = getFormatterForHiddenNodesWithSpaceKeeping(context, node, keepSingleSpace, formattingType);

  if (formatter) {
    context.formatters.push(formatter);
  }
}

export function formatStatement(context: SyntaxContext, node: StatementNode): Nothing {
  const lastHiddenNode = node.hiddenNodes.lastOrNull();
  const lastIsWhitespace = is<WhitespaceNode>(lastHiddenNode, $Node.WHITESPACE);

  const hiddenNodes = node.hiddenNodes.slice(0, lastHiddenNode ? -1 : node.hiddenNodes.length);
  const formatter = getFormatterForHiddenNodes(context, hiddenNodes, FormattingType.BEFORE);

  if (formatter) {
    context.formatters.push(formatter);
  }

  const lastWhitespaceText = lastIsWhitespace ? lastHiddenNode.text : '';
  const indentText = '  '.repeat(node.indentLevel);

  if (indentText !== lastWhitespaceText) {
    const formatter: Formatter = {
      text: indentText,
      range: lastIsWhitespace ? lastHiddenNode.range : rangeFromPosition(node.range.start),
    };

    context.formatters.push(formatter);
  }

  formatNodes(context, node.children);
}

function getFormatterForHiddenNodesWithSpaceKeeping(
  context: SyntaxContext,
  node: Node,
  keepSingleSpace: Boolean2,
  formattingType: FormattingType,
): Formatter | Nothing {
  const {hiddenNodes, range} = node;

  if (hiddenNodes.length === 0) {
    if (keepSingleSpace) {
      return {
        range: rangeFromPosition(range.stop),
        text: ' ',
      };
    }

    return nothing;
  }

  if (hiddenNodes.length === 1 && is<WhitespaceNode>(hiddenNodes[0], $Node.WHITESPACE)) {
    const text = hiddenNodes[0].text;

    if ((keepSingleSpace && text.length === 1 && text[0] === ' ') || (!keepSingleSpace && text.length === 0)) {
      return nothing;
    }

    return {
      range: rangeFromNodes(...hiddenNodes),
      text: keepSingleSpace ? ' ' : '',
    };
  }

  return getFormatterForHiddenNodes(context, hiddenNodes, formattingType);
}

function getFormatterForHiddenNodes(
  context: SyntaxContext,
  hiddenNodes: TokenNode[],
  formattingType: FormattingType,
): Formatter | Nothing {
  const nonWhitespaceNodes = hiddenNodes.filter((x) => !is(x, $Node.WHITESPACE));

  if (nonWhitespaceNodes.length === 0) {
    return nothing;
  }

  let text = nonWhitespaceNodes
    .slice(0, -1)
    .map((x, i) => {
      if (is<NlNode>(x, $Node.NL) || is<NlNode>(nonWhitespaceNodes[i + 1], $Node.NL)) {
        return format(context, x);
      }

      return format(context, x) + ' ';
    })
    .join('');

  text += format(context, nonWhitespaceNodes.last());

  if (text.length > 0) {
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

  if (isSameContent(hiddenNodes, text)) {
    return nothing;
  }

  return {
    range: rangeFromNodes(...hiddenNodes),
    text,
  };
}

function format(context: SyntaxContext, node: TokenNode): String2 {
  if (is<NlNode>(node, $Node.NL)) {
    if (node.range.stop.index === context.source.text.length) {
      return NL;
    }

    const nlCount = node.text.count((x) => x === NL);

    if (nlCount === 1) {
      return NL;
    }

    return NL + NL;
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

function isSameContent(nodes: TokenNode[], text: String2): Boolean2 {
  return nodes.map((x) => x.text).join('') === text;
}
