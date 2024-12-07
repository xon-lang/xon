import {TextData, TextReference} from '#common';
import {$CloseNode, CloseNode, corePackageType, lexicalNode} from '#core';

export type AngleCloseNode = CloseNode;

export const $AngleCloseNode = corePackageType<AngleCloseNode>('AngleCloseNode', $CloseNode);

export function angleCloseNode(reference: TextReference, text: TextData): AngleCloseNode {
  return lexicalNode({$: $AngleCloseNode, reference, text});
}
