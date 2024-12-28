import {Text, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';

export type StringOpenNode = OpenNode & {__branding?: null};

export const $StringOpenNode = corePackageType<StringOpenNode>('StringOpenNode', $OpenNode);

export function stringOpenNode(reference: TextReference, text: Text): StringOpenNode {
  return lexicalNode({$: $StringOpenNode, reference, text});
}
