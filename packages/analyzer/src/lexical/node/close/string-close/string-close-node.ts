import {$LexicalNode, CloseNode, analyzerPackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type StringCloseNode = CloseNode & Brand<'Analyzer.StringCloseNode'>;

export const $StringCloseNode = analyzerPackageType<StringCloseNode>('StringCloseNode', $LexicalNode);

export function stringCloseNode(reference: TextReference, text: Text): StringCloseNode {
  return lexicalNode({$: $StringCloseNode, reference, text});
}
