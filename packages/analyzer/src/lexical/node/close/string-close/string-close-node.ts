import {$LexicalNode, CloseNode, corePackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type StringCloseNode = CloseNode & Brand<'Core.StringCloseNode'>;

export const $StringCloseNode = corePackageType<StringCloseNode>('StringCloseNode', $LexicalNode);

export function stringCloseNode(reference: TextReference, text: Text): StringCloseNode {
  return lexicalNode({$: $StringCloseNode, reference, text});
}
