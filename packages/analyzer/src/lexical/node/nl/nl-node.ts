import {$LexicalNode, analyzerPackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type NlNode = LexicalNode & Brand<'Core.NlNode'>;

export const $NlNode = analyzerPackageType<NlNode>('NlNode', $LexicalNode);

export function nlNode(reference: TextReference, text: Text): NlNode {
  return lexicalNode({$: $NlNode, reference, text, isHidden: true});
}
