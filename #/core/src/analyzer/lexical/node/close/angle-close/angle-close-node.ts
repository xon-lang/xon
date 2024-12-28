import {Text, TextReference} from '#common';
import {$CloseNode, CloseNode, corePackageType, lexicalNode} from '#core';
import {Brand} from '#typing';

export type AngleCloseNode = CloseNode & Brand<'Core.AngleCloseNode'>;

export const $AngleCloseNode = corePackageType<AngleCloseNode>('AngleCloseNode', $CloseNode);

export function angleCloseNode(reference: TextReference, text: Text): AngleCloseNode {
  return lexicalNode({$: $AngleCloseNode, reference, text});
}
