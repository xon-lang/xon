import { String2 } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import { COMMENT_LINE, NL } from '../../../syntax-config';
import { SyntaxContext } from '../../../syntax-context';
import { $Node } from '../../node';
import { TokenNode } from '../token-node';

export interface CommentLineNode extends TokenNode {
  $: $Node.COMMENT_LINE;
}

export function commentLineNode(range: SourceRange, text: String2): CommentLineNode {
  return {
    $: $Node.COMMENT_LINE,
    range,
    text,
  };
}

export function scanCommentLineNode(context: SyntaxContext): CommentLineNode | null {
  const { source, position } = context;

  if (source.text.slice(position.index, position.index + 2) !== COMMENT_LINE) {
    return null;
  }

  const text = source.text.takeWhile((x) => x !== NL, position.index);
  const range = context.getRange(text.length);

  return commentLineNode(range, text);
}
