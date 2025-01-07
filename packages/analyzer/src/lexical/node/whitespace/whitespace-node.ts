import {$LexicalNode, analyzerPackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type WhitespaceNode = LexicalNode & Brand<'Analyzer.WhitespaceNode'>;

export const $WhitespaceNode = analyzerPackageType<WhitespaceNode>('WhitespaceNode', $LexicalNode);

export function whitespaceNode(reference: TextReference, text: Text): WhitespaceNode {
  return lexicalNode({$: $WhitespaceNode, reference, text, isHidden: true});
}
