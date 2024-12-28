import {Text, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';

export type AngleOpenNode = OpenNode & {__branding?: null};

export const $AngleOpenNode = corePackageType<AngleOpenNode>('AngleOpenNode', $OpenNode);

export function angleOpenNode(reference: TextReference, text: Text): AngleOpenNode {
  return lexicalNode({$: $AngleOpenNode, reference, text});
}
