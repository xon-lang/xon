import {$, LexicalNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type StringContentNode = LexicalNode<$.StringContentNode>;

export function stringContentNode(reference: TextResourceRange, text: TextData): StringContentNode {
  return lexicalNode({$: $.StringContentNode, reference, text});
}
