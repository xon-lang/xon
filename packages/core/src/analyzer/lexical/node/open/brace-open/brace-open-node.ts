import {$, OpenNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type BraceOpenNode = OpenNode<$.BraceOpenNode>;

export function braceOpenNode(reference: TextResourceRange, text: TextData): BraceOpenNode {
  return lexicalNode({$: $.BraceOpenNode, reference, text});
}
