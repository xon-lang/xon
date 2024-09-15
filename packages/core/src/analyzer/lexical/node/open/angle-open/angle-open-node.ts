import {$, OpenNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type AngleOpenNode = OpenNode<$.AngleOpenNode>;

export function angleOpenNode(reference: TextResourceRange, text: TextData): AngleOpenNode {
  return lexicalNode({$: $.AngleOpenNode, reference, text});
}
