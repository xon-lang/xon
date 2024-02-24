import { Nothing, String2, nothing } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import { COMMENT_LINE, NL } from '../../../syntax-config';
import { SyntaxContext } from '../../../syntax-context';
import { $Node } from '../../node';
import { TokenNode, tokenNode } from '../token-node';

export interface CommentNode extends TokenNode {
  $: $Node.COMMENT;
}

export function commentNode(range: SourceRange, text: String2): CommentNode {
  return tokenNode($Node.COMMENT, range, text);
}

export function scanCommentNode(context: SyntaxContext): CommentNode | Nothing {
  const { source, position } = context;

  if (source.text.slice(position.index, position.index + COMMENT_LINE.length) !== COMMENT_LINE) {
    return nothing;
  }

  const text = source.text.takeWhile((x) => x !== NL, position.index);
  const range = context.getRange(text.length);

  return commentNode(range, text);
}
