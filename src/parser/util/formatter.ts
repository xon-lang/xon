import { Boolean2, Nothing, String2, nothing } from '../../lib/core';
import { SourceRange, rangeFromNodes } from '../../source/source-range';
import { $Node, Node, is } from '../node/node';
import { CommentNode } from '../node/token/comment/comment-node';
import { WhitespaceNode } from '../node/token/whitespace/whitespace-node';

export interface Formatter {
  range: SourceRange;
  text: String2;
}

// todo add tab (\t) handling
export function formatHiddenNodes(nodes: Node[], keepSingleSpace: Boolean2): Formatter | Nothing {
  if (!isWhitespaceOrCommentNodes(nodes)) {
    return nothing;
  }

  if (nodes.length === 1 && is<WhitespaceNode>(nodes[0], $Node.WHITESPACE)) {
    const text = nodes[0].text;

    if ((text.length === 1 && keepSingleSpace) || text.length === 0) {
      return nothing;
    }

    return {
      range: rangeFromNodes(...nodes),
      text: keepSingleSpace ? ' ' : '',
    };
  }

  const text = nodes
    .filter((x) => is(x, $Node.COMMENT))
    .map((x) => x.text)
    .join(' ');

  if (isSameContent(nodes, text)) {
    return nothing;
  }

  return {
    range: rangeFromNodes(...nodes),
    text,
  };
}

function isSameContent(nodes: (WhitespaceNode | CommentNode)[], text: String2) {
  return nodes.map((x) => x.text).join('') === text;
}

function isWhitespaceOrCommentNodes(nodes: Node[]): nodes is (WhitespaceNode | CommentNode)[] {
  return nodes.every((x) => is(x, $Node.WHITESPACE) && is(x, $Node.COMMENT));
}
