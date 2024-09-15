import {$, LexicalNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type CommentLineNode = LexicalNode<$.CommentLineNode>;

export function commentLineNode(reference: TextResourceRange, text: TextData): CommentLineNode {
  return lexicalNode({$: $.CommentLineNode, reference, text, isHidden: true});
}
