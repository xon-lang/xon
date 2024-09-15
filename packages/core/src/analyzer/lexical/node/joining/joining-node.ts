import {$, LexicalNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type JoiningNode = LexicalNode<$.JoiningNode>;

export function joiningNode(reference: TextResourceRange, text: TextData): JoiningNode {
  return lexicalNode({$: $.JoiningNode, reference, text, isHidden: true});
}
