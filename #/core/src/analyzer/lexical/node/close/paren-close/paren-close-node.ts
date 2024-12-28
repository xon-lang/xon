import {Text, TextReference} from '#common';
import {$CloseNode, CloseNode, corePackageType, lexicalNode} from '#core';

export type ParenCloseNode = CloseNode & {__branding?: null};

export const $ParenCloseNode = corePackageType<ParenCloseNode>('ParenCloseNode', $CloseNode);

export function parenCloseNode(reference: TextReference, text: Text): ParenCloseNode {
  return lexicalNode({$: $ParenCloseNode, reference, text});
}
