import {TextData, TextReference} from '#common';
import {$LexicalNode, CloseNode, corePackageType, lexicalNode} from '#core';

export type StringCloseNode = CloseNode;

export const $StringCloseNode = corePackageType<StringCloseNode>('StringCloseNode', $LexicalNode);

export function stringCloseNode(reference: TextReference, text: TextData): StringCloseNode {
  return lexicalNode({$: $StringCloseNode, reference, text});
}
