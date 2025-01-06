import {$LexicalNode, analyzerPackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

// todo should be as IdContentNode ???
export type IdNode = LexicalNode & Brand<'Core.IdNode'>;

export const $IdNode = analyzerPackageType<IdNode>('IdNode', $LexicalNode);

export function idNode(reference: TextReference, text: Text): IdNode {
  return lexicalNode({$: $IdNode, reference, text, semantic: null, isExpression: true});
}
