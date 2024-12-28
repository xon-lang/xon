import {Text, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';
import {Brand} from '#typing';

export type ParenOpenNode = OpenNode & Brand<'Core.ParenOpenNode'>;

export const $ParenOpenNode = corePackageType<ParenOpenNode>('ParenOpenNode', $OpenNode);

export function parenOpenNode(reference: TextReference, text: Text): ParenOpenNode {
  return lexicalNode({$: $OpenNode, reference, text});
}
