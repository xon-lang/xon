import {$, OpenNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type ParenOpenNode = OpenNode<$.ParenOpenNode>;

export function parenOpenNode(reference: TextResourceRange, text: TextData): ParenOpenNode {
  return lexicalNode({$: $.ParenOpenNode, reference, text});
}
