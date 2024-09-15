import {$, OpenNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type StringOpenNode = OpenNode<$.StringOpenNode>;

export function stringOpenNode(reference: TextResourceRange, text: TextData): StringOpenNode {
  return lexicalNode({$: $.StringOpenNode, reference, text});
}
