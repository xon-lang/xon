import {$, OpenNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type BracketOpenNode = OpenNode<$.BracketOpenNode>;

export function bracketOpenNode(reference: TextResourceRange, text: TextData): BracketOpenNode {
  return lexicalNode({$: $.BracketOpenNode, reference, text});
}
