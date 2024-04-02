import {Nothing, String2, nothing} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {COMMENT_LINE, NL} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CommentLineNode extends TokenNode {
  $: $Node.COMMENT_LINE;
}

export function commentLineNode(range: TextResourceRange, text: String2): CommentLineNode {
  return tokenNode($Node.COMMENT_LINE, {range, text});
}

export function commentLineTokenParse(context: SyntaxContext): CommentLineNode | Nothing {
  const index = context.position.index;
  const data = context.resource.data;

  if (data.slice(index, index + COMMENT_LINE.length) !== COMMENT_LINE) {
    return nothing;
  }

  const text = data.takeWhile((x) => x !== NL, index);
  const range = context.getRange(text.length, false);

  return commentLineNode(range, text);
}
