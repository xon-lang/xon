import {Text, TextReference} from '#common';
import {$LexicalNode, CloseNode, corePackageType, lexicalNode} from '#core';

export type StringCloseNode = CloseNode & {__branding?: null};

export const $StringCloseNode = corePackageType<StringCloseNode>('StringCloseNode', $LexicalNode);

export function stringCloseNode(reference: TextReference, text: Text): StringCloseNode {
  return lexicalNode({$: $StringCloseNode, reference, text});
}
