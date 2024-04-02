import {Nothing, String2, nothing} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {COMMENT_BLOCK} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CommentBlockNode extends TokenNode {
  $: $Node.COMMENT_BLOCK;
}

export function commentBlockNode(range: TextResourceRange, text: String2): CommentBlockNode {
  return tokenNode($Node.COMMENT_BLOCK, {range, text});
}

export function commentBlockTokenParse(context: SyntaxContext): CommentBlockNode | Nothing {
  const index = context.position.index;
  const data = context.resource.data;

  if (data.take(COMMENT_BLOCK.length, index) !== COMMENT_BLOCK) {
    return nothing;
  }

  const stopIndex = data.indexOf(COMMENT_BLOCK, index + COMMENT_BLOCK.length);
  const endSlice = stopIndex < 0 ? data.length : stopIndex + COMMENT_BLOCK.length;

  const text = data.slice(index, endSlice);
  const range = context.getRange(text.length, true);

  return commentBlockNode(range, text);
}
