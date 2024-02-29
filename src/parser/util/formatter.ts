import {Boolean2, Nothing, String2, nothing} from '../../lib/core';
import {SourceRange, rangeFromNodes, sourceRange} from '../../source/source-range';
import {$Node, Node, is} from '../node/node';
import {CommentBlockNode} from '../node/token/comment-block/comment-block-node';
import {CommentLineNode} from '../node/token/comment-line/comment-line-node';
import {NlNode} from '../node/token/nl/nl-node';
import {TokenNode} from '../node/token/token-node';
import {WhitespaceNode} from '../node/token/whitespace/whitespace-node';
import {NL} from '../syntax-config';
import {SyntaxContext} from '../syntax-context';

export interface Formatter {
  range: SourceRange;
  text: String2;
}

export enum FormattingType {
  BEFORE,
  BETWEEN,
  AFTER,
}

export function formatHiddenNodes(
  context: SyntaxContext,
  node: Node,
  keepSingleSpace: Boolean2,
  formattingType: FormattingType,
): Nothing {
  const formatter = getFormatterForHiddenNodes(node, keepSingleSpace, formattingType);

  if (formatter) {
    context.formatters.push(formatter);
  }
}

function getFormatterForHiddenNodes(
  node: Node,
  keepSingleSpace: Boolean2,
  formattingType: FormattingType,
): Formatter | Nothing {
  const {hiddenNodes, range} = node;

  if (!isWhitespaceOrCommentNodes(hiddenNodes)) {
    return nothing;
  }

  if (hiddenNodes.length === 0) {
    if (keepSingleSpace) {
      return {
        range: sourceRange(range.stop, range.stop),
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

  let text = hiddenNodes
    .filter((x) => is(x, $Node.NL) || is(x, $Node.COMMENT_LINE) || is(x, $Node.COMMENT_BLOCK))
    .map(format)
    .join(' ');

  if (text.length > 0) {
    if (formattingType === FormattingType.BEFORE) {
      text = `${text} `;
    }

    if (formattingType === FormattingType.BETWEEN) {
      text = ` ${text} `;
    }

    if (formattingType === FormattingType.AFTER) {
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

function format(node: TokenNode): String2 {
  if (is<NlNode>(node, $Node.NL)) {
    const nlCount = node.text.count((x) => x === NL);

    if (nlCount === 1) {
      return NL;
    }

    return NL + NL;
  }

  if (is<CommentLineNode>(node, $Node.COMMENT_LINE)) {
    return node.text.replace(/^\/\/\s*/, '// ');
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

function isSameContent(nodes: (WhitespaceNode | CommentLineNode)[], text: String2): Boolean2 {
  return nodes.map((x) => x.text).join('') === text;
}

function isWhitespaceOrCommentNodes(nodes: Node[]): nodes is (WhitespaceNode | CommentLineNode)[] {
  return nodes.every((x) => is(x, $Node.WHITESPACE) || is(x, $Node.COMMENT_LINE) || is(x, $Node.COMMENT_BLOCK));
}
