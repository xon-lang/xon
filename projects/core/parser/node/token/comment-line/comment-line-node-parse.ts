import {Nothing, nothing} from '../../../../lib/core';
import {COMMENT_LINE, NL} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {CommentLineNode, commentLineNode} from './comment-line-node';

export function commentLineNodeParse(context: SyntaxContext): CommentLineNode | Nothing {
  const {resource, position} = context;

  if (resource.data.slice(position.index, position.index + COMMENT_LINE.length) !== COMMENT_LINE) {
    return nothing;
  }

  const text = resource.data.takeWhile((x) => x !== NL, position.index);
  const range = context.getRange(text.length, false);

  return commentLineNode(range, text);
}
