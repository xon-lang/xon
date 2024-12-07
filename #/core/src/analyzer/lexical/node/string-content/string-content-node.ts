import {TextData, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

// todo should we remove 'StringNode' and use 'StringContentNode' as 'StringNode'
export type StringContentNode = LexicalNode;

export const $StringContentNode = corePackageType<StringContentNode>('StringContentNode', $LexicalNode);

export function stringContentNode(reference: TextReference, text: TextData): StringContentNode {
  return lexicalNode({$: $StringContentNode, reference, text});
}
