import {$AnalyzerType, $LexicalNode, LexicalNode, newLexicalNode} from '#analyzer';
import {Brand, Text, TextRange} from '#core';

export type UnknownNode = LexicalNode & Brand<'Analyzer.UnknownNode'>;

export const $UnknownNode = () => $AnalyzerType<UnknownNode>('UnknownNode', $LexicalNode());

export function newUnknownNode(text: Text, range: TextRange): UnknownNode {
  return newLexicalNode($UnknownNode(), range, text);
}
