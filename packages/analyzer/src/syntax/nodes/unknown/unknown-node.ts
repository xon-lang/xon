import {$AnalyzerType, $LexicalNode, AnalyzerContext, LexicalNode} from '#analyzer';
import {Brand, Text, TextRange} from '#core';

export type UnknownNode = LexicalNode & Brand<'Analyzer.UnknownNode'>;

export const $UnknownNode = () => $AnalyzerType<UnknownNode>('UnknownNode', $LexicalNode());

export function newUnknownNode(context: AnalyzerContext, text: Text, range: TextRange): UnknownNode {
  return {
    $: $UnknownNode(),
    text,
    range,
  };
}
