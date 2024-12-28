import {Text, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';

export type ParenOpenNode = OpenNode & {__branding?: null};

export const $ParenOpenNode = corePackageType<ParenOpenNode>('ParenOpenNode', $OpenNode);

export function parenOpenNode(reference: TextReference, text: Text): ParenOpenNode {
  return lexicalNode({$: $OpenNode, reference, text});
}
