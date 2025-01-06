import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type ParenOpenNode = OpenNode & Brand<'Core.ParenOpenNode'>;

export const $ParenOpenNode = corePackageType<ParenOpenNode>('ParenOpenNode', $OpenNode);

export function parenOpenNode(reference: TextReference, text: Text): ParenOpenNode {
  return lexicalNode({$: $ParenOpenNode, reference, text});
}
