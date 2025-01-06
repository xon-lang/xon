import {$OpenNode, OpenNode, analyzerPackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type ParenOpenNode = OpenNode & Brand<'Core.ParenOpenNode'>;

export const $ParenOpenNode = analyzerPackageType<ParenOpenNode>('ParenOpenNode', $OpenNode);

export function parenOpenNode(reference: TextReference, text: Text): ParenOpenNode {
  return lexicalNode({$: $ParenOpenNode, reference, text});
}
