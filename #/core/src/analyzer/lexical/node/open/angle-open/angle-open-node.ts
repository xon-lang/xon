import {TextData, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';

export type AngleOpenNode = OpenNode;

export const $AngleOpenNode = corePackageType<AngleOpenNode>('AngleOpenNode', $OpenNode);

export function angleOpenNode(reference: TextReference, text: TextData): AngleOpenNode {
  return lexicalNode({$: $AngleOpenNode, reference, text});
}
