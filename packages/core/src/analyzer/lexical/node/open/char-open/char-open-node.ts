import {$, OpenNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type CharOpenNode = OpenNode<$.CharOpenNode>;

export function charOpenNode(reference: TextResourceRange, text: TextData): CharOpenNode {
  return lexicalNode({$: $.CharOpenNode, reference, text});
}
