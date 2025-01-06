import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type AngleOpenNode = OpenNode & Brand<'Core.AngleOpenNode'>;

export const $AngleOpenNode = corePackageType<AngleOpenNode>('AngleOpenNode', $OpenNode);

export function angleOpenNode(reference: TextReference, text: Text): AngleOpenNode {
  return lexicalNode({$: $AngleOpenNode, reference, text});
}
