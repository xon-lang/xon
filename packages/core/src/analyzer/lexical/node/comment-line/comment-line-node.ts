import {TextData, TextResourceRange} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type CommentLineNode = LexicalNode<$.CommentLineNode>;

export function commentLineNode(reference: TextResourceRange, text: TextData): CommentLineNode {
  return lexicalNode({$: $.CommentLineNode, reference, text, isHidden: true});
}
