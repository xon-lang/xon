import {Boolean2, Nothing, String2, nothing} from '../../lib/core';
import {SourceRange, rangeFromNodes, sourceRange} from '../../source/source-range';
import {$Node, Node, is} from '../node/node';
import {CommentNode} from '../node/token/comment/comment-node';
import {WhitespaceNode} from '../node/token/whitespace/whitespace-node';
import {SyntaxContext} from '../syntax-context';

export interface Formatter {
  range: SourceRange;
  text: String2;
}

export function formatHiddenNodes(context: SyntaxContext, node: Node, keepSingleSpace: Boolean2): Nothing {
  const formatter = getFormatterForHiddenNodes(node, keepSingleSpace);

  if (formatter) {
    context.formatters.push(formatter);
  }
}

// todo add tab (\t) handling
function getFormatterForHiddenNodes(node: Node, keepSingleSpace: Boolean2): Formatter | Nothing {
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

  const text = hiddenNodes
    .filter((x) => is(x, $Node.COMMENT))
    .map((x) => x.text)
    .join(' ');

  if (isSameContent(hiddenNodes, text)) {
    return nothing;
  }

  return {
    range: rangeFromNodes(...hiddenNodes),
    text,
  };
}

function isSameContent(nodes: (WhitespaceNode | CommentNode)[], text: String2): Boolean2 {
  return nodes.map((x) => x.text).join('') === text;
}

function isWhitespaceOrCommentNodes(nodes: Node[]): nodes is (WhitespaceNode | CommentNode)[] {
  return nodes.every((x) => is(x, $Node.WHITESPACE) || is(x, $Node.COMMENT));
}
