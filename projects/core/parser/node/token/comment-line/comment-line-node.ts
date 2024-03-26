import {Nothing, String2, nothing} from '../../../../lib/core';
import {SourceRange} from '../../../../source/source-range';
import {COMMENT_LINE, NL} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CommentLineNode extends TokenNode {
  $: $Node.COMMENT_LINE;
}

export function commentLineNode(range: SourceRange, text: String2): CommentLineNode {
  return tokenNode($Node.COMMENT_LINE, {range, text});
}

export function scanCommentLineNode(context: SyntaxContext): CommentLineNode | Nothing {
  const {resource: source, position} = context;

  if (source.data.slice(position.index, position.index + COMMENT_LINE.length) !== COMMENT_LINE) {
    return nothing;
  }

  const text = source.data.takeWhile((x) => x !== NL, position.index);
  const range = context.getRange(text.length, false);

  return commentLineNode(range, text);
}
