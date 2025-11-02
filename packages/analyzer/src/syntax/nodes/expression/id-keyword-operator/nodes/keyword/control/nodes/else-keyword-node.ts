import {$AnalyzerType, $ControlKeywordNode, KeywordNode} from '#analyzer';
import {Brand} from '#core';

export type ElseKeywordNode = KeywordNode & Brand<'Analyzer.ElseKeywordNode'>;

export const $ElseKeywordNode = () =>
  $AnalyzerType<ElseKeywordNode>('ElseKeywordNode', $ControlKeywordNode());
