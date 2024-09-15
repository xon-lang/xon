import {$, LexicalNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type WhitespaceNode = LexicalNode<$.WhitespaceNode>;

export function whitespaceNode(reference: TextResourceRange, text: TextData): WhitespaceNode {
  return lexicalNode({$: $.WhitespaceNode, reference, text, isHidden: true});
}
