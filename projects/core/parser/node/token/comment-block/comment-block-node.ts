import {Nothing, String2, nothing} from '../../../../lib/core';
import {SourceRange} from '../../../../source/source-range';
import {COMMENT_BLOCK} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CommentBlockNode extends TokenNode {
  $: $Node.COMMENT_BLOCK;
}

export function commentBlockNode(range: SourceRange, text: String2): CommentBlockNode {
  return tokenNode($Node.COMMENT_BLOCK, range, text);
}

export function scanCommentBlockNode(context: SyntaxContext): CommentBlockNode | Nothing {
  const {source, position} = context;

  if (source.text.take(COMMENT_BLOCK.length, position.index) === COMMENT_BLOCK) {
    const stopIndex = source.text.indexOf(COMMENT_BLOCK, position.index + COMMENT_BLOCK.length);
    const endSlice = stopIndex < 0 ? source.text.length : stopIndex + COMMENT_BLOCK.length;

    const text = source.text.slice(position.index, endSlice);
    const range = context.getRange(text.length, true);

    return commentBlockNode(range, text);
  }

  return nothing;
}
