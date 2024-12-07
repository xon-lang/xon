import {TextData, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';

export type StringOpenNode = OpenNode;

export const $StringOpenNode = corePackageType<StringOpenNode>('StringOpenNode', $OpenNode);

export function stringOpenNode(reference: TextReference, text: TextData): StringOpenNode {
  return lexicalNode({$: $StringOpenNode, reference, text});
}
