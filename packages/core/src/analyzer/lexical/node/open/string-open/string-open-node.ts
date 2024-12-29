import {Text, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';
import {Brand} from '#typing';

export type StringOpenNode = OpenNode & Brand<'Core.StringOpenNode'>;

export const $StringOpenNode = corePackageType<StringOpenNode>('StringOpenNode', $OpenNode);

export function stringOpenNode(reference: TextReference, text: Text): StringOpenNode {
  return lexicalNode({$: $StringOpenNode, reference, text});
}
