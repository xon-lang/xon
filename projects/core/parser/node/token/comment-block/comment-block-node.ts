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
  const {resource, position} = context;

  if (resource.data.take(COMMENT_BLOCK.length, position.index) !== COMMENT_BLOCK) {
    return nothing;
  }

  const stopIndex = resource.data.indexOf(COMMENT_BLOCK, position.index + COMMENT_BLOCK.length);
  const endSlice = stopIndex < 0 ? resource.data.length : stopIndex + COMMENT_BLOCK.length;

  const text = resource.data.slice(position.index, endSlice);
  const range = context.getRange(text.length, true);

  return commentBlockNode(range, text);
}
