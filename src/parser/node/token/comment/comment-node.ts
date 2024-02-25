import { Nothing, String2, nothing } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import { COMMENT_BLOCK, COMMENT_LINE, NL } from '../../../syntax-config';
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
  return scanCommentBlockNode(context) ?? scanCommentLineNode(context);
}

export function scanCommentLineNode(context: SyntaxContext): CommentNode | Nothing {
  const { source, position } = context;

  if (source.text.slice(position.index, position.index + COMMENT_LINE.length) !== COMMENT_LINE) {
    return nothing;
  }

  const text = source.text.takeWhile((x) => x !== NL, position.index);
  const range = context.getRange(text.length);

  return commentNode(range, text);
}

export function scanCommentBlockNode(context: SyntaxContext): CommentNode | Nothing {
  const { source, position } = context;

  if (source.text.take(COMMENT_BLOCK.length, position.index) === COMMENT_BLOCK) {
    const stopIndex = source.text.indexOf(COMMENT_BLOCK, position.index + COMMENT_BLOCK.length);
    const endSlice = stopIndex < 0 ? source.text.length : stopIndex + COMMENT_BLOCK.length;

    const text = source.text.slice(position.index, endSlice);
    const range = context.getRange(text.length);

    return commentNode(range, text);
  }

  return nothing;
}
