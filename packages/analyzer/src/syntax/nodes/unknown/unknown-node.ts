import {$AnalyzerType, $LexicalNode, AnalyzerContext, diagnoseUnknownNode, LexicalNode} from '#analyzer';
import {Text, TextRange} from '#common';
import {Brand} from '#typing';

export type UnknownNode = LexicalNode & Brand<'Analyzer.UnknownNode'>;

export const $UnknownNode = () => $AnalyzerType<UnknownNode>('UnknownNode', $LexicalNode());

export function newUnknownNode(context: AnalyzerContext, text: Text, range: TextRange): UnknownNode {
  return {
    $: $UnknownNode(),
    text,
    range,

    diagnose: diagnoseUnknownNode,
  };
}
