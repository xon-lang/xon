import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {COMMENT_LINE, NL} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {CommentLineNode, commentLineNode} from './comment-line-node';

export function commentLineNodeParse(context: SyntaxContext, index: Integer): CommentLineNode | Nothing {
  if (context.resource.data.slice(index, index + COMMENT_LINE.length) !== COMMENT_LINE) {
    return nothing;
  }

  const text = context.resource.data.takeWhile((x) => x !== NL, index);
  const range = context.getRange(text.length);

  return commentLineNode(range, text);
}
