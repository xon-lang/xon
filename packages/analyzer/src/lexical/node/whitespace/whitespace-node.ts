import {$LexicalNode, analyzerPackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text} from '#common';
import {Brand} from '#typing';

export type WhitespaceNode = LexicalNode & Brand<'Analyzer.WhitespaceNode'>;

export const $WhitespaceNode = analyzerPackageType<WhitespaceNode>('WhitespaceNode', $LexicalNode);

export function whitespaceNode(range: TextRange, text: Text): WhitespaceNode {
  return lexicalNode({$: $WhitespaceNode, reference, text, isHidden: true});
}
