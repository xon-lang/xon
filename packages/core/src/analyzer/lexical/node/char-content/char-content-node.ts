import {$, LexicalNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type CharContentNode = LexicalNode<$.CharContentNode>;

export function charContentNode(reference: TextResourceRange, text: TextData): CharContentNode {
  return lexicalNode({$: $.CharContentNode, reference, text});
}
