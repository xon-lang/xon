import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type NlNode = LexicalNode;

export const $NlNode = corePackageType<NlNode>('NlNode', $LexicalNode);

export function nlNode(reference: TextReference, text: Text): NlNode {
  return lexicalNode({$: $NlNode, reference, text, isHidden: true});
}
