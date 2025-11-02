import {$AnalyzerType, $KeywordNode, KeywordNode} from '#analyzer';
import {Brand} from '#core';

export type ControlKeywordNode = KeywordNode & Brand<'Analyzer.ControlKeywordNode'>;

export const $ControlKeywordNode = () =>
  $AnalyzerType<ControlKeywordNode>('ControlKeywordNode', $KeywordNode());
