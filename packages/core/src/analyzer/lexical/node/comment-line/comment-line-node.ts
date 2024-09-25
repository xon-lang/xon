import {TextData, TextReference} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type CommentLineNode = LexicalNode<$.CommentLineNode>;

export function commentLineNode(reference: TextReference, text: TextData): CommentLineNode {
  return lexicalNode($.CommentLineNode, {reference, text, isHidden: true});
}
